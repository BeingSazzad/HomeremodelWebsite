/**
 * Budget Converter Utility
 * 
 * Converts exact budget amounts to privacy-protected budget ranges
 * as per requirements document (line 58-65)
 * 
 * REQUIREMENT: Contractors must NOT see exact budget numbers
 */

// Official budget ranges from requirements
export const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $20,000',
  '$20,000 – $40,000',
  '$40,000 – $75,000',
  '$75,000+'
] as const;

export type BudgetRange = typeof BUDGET_RANGES[number];

/**
 * Converts exact budget amount(s) to a privacy-protected budget range category
 * 
 * @param budgetString - Budget as string (e.g., "$35,000 - $45,000" or "$25,000")
 * @returns Budget range category (e.g., "$20,000 – $40,000")
 * 
 * @example
 * convertToBudgetRange("$35,000 - $45,000") // Returns "$20,000 – $40,000"
 * convertToBudgetRange("$8,500") // Returns "$5,000 – $10,000"
 * convertToBudgetRange("$85,000") // Returns "$75,000+"
 */
export function convertToBudgetRange(budgetString: string): BudgetRange {
  // Extract numbers from budget string
  const numbers = budgetString.match(/[\d,]+/g);
  
  if (!numbers || numbers.length === 0) {
    return 'Under $5,000'; // Default fallback
  }
  
  // Parse the first number (if range, use low end; if single, use that)
  const amountStr = numbers[0].replace(/,/g, '');
  const amount = parseInt(amountStr, 10);
  
  if (isNaN(amount)) {
    return 'Under $5,000'; // Default fallback
  }
  
  // If range provided (e.g., "$35,000 - $45,000"), use the midpoint for better categorization
  let targetAmount = amount;
  if (numbers.length > 1) {
    const highAmountStr = numbers[1].replace(/,/g, '');
    const highAmount = parseInt(highAmountStr, 10);
    if (!isNaN(highAmount)) {
      targetAmount = Math.floor((amount + highAmount) / 2);
    }
  }
  
  // Map to budget range categories
  if (targetAmount < 5000) {
    return 'Under $5,000';
  } else if (targetAmount < 10000) {
    return '$5,000 – $10,000';
  } else if (targetAmount < 20000) {
    return '$10,000 – $20,000';
  } else if (targetAmount < 40000) {
    return '$20,000 – $40,000';
  } else if (targetAmount < 75000) {
    return '$40,000 – $75,000';
  } else {
    return '$75,000+';
  }
}

/**
 * Converts exact budget to protected display based on user role
 * 
 * @param budgetString - Original budget string
 * @param userRole - User role ('contractor' | 'homeowner' | 'admin')
 * @returns Protected or exact budget based on role
 */
export function getProtectedBudget(budgetString: string, userRole: 'contractor' | 'homeowner' | 'admin' | null): string {
  // Contractors should NEVER see exact budget
  if (userRole === 'contractor') {
    return convertToBudgetRange(budgetString);
  }
  
  // Homeowners and admins can see exact budget
  return budgetString;
}

/**
 * Maps exact dollar amounts to budget range dropdown value
 * For use in forms where homeowner selects budget range
 * 
 * @param amount - Dollar amount as number
 * @returns Budget range category
 */
export function mapAmountToRange(amount: number): BudgetRange {
  if (amount < 5000) {
    return 'Under $5,000';
  } else if (amount < 10000) {
    return '$5,000 – $10,000';
  } else if (amount < 20000) {
    return '$10,000 – $20,000';
  } else if (amount < 40000) {
    return '$20,000 – $40,000';
  } else if (amount < 75000) {
    return '$40,000 – $75,000';
  } else {
    return '$75,000+';
  }
}

// Example usage:
// convertToBudgetRange("$35,000 - $45,000") → "$20,000 – $40,000"
// convertToBudgetRange("$8,500") → "$5,000 – $10,000"
// convertToBudgetRange("$125,000") → "$75,000+"
// getProtectedBudget("$35,000 - $45,000", "contractor") → "$20,000 – $40,000"
// getProtectedBudget("$35,000 - $45,000", "homeowner") → "$35,000 - $45,000"
