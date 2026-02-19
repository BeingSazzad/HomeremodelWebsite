import { useState } from 'react';
import { 
  CreditCard, 
  Plus, 
  Download, 
  ArrowUpRight,
  ArrowDownLeft,
  Search,
  Filter,
  Building2,
  Wallet,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  name: string;
  last4: string;
  isDefault: boolean;
  icon?: string;
}

interface Transaction {
  id: string;
  type: 'earning' | 'withdrawal';
  projectName: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'processing';
}

const mockPaymentMethods: PaymentMethod[] = [
  {
    id: '1',
    type: 'bank',
    name: 'Chase Bank',
    last4: '4892',
    isDefault: true
  },
  {
    id: '2',
    type: 'card',
    name: 'Visa',
    last4: '3456',
    isDefault: false
  }
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'earning',
    projectName: 'Kitchen Renovation - Martinez Residence',
    amount: 12500,
    date: '2026-02-15',
    status: 'completed'
  },
  {
    id: '2',
    type: 'withdrawal',
    projectName: 'Withdrawal to Chase Bank ****4892',
    amount: -8000,
    date: '2026-02-14',
    status: 'completed'
  },
  {
    id: '3',
    type: 'earning',
    projectName: 'Bathroom Remodel - Chen Family',
    amount: 8500,
    date: '2026-02-10',
    status: 'completed'
  },
  {
    id: '4',
    type: 'earning',
    projectName: 'Basement Finishing - Thompson Home',
    amount: 15000,
    date: '2026-02-08',
    status: 'processing'
  },
  {
    id: '5',
    type: 'withdrawal',
    projectName: 'Withdrawal to Chase Bank ****4892',
    amount: -5000,
    date: '2026-02-05',
    status: 'completed'
  },
  {
    id: '6',
    type: 'earning',
    projectName: 'Deck Construction - Rodriguez Property',
    amount: 9200,
    date: '2026-02-01',
    status: 'completed'
  }
];

export function ContractorEarnings() {
  const [showAddPaymentModal, setShowAddPaymentModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending' | 'processing'>('all');

  const availableBalance = 24200;
  const pendingAmount = 15000;
  const totalWithdrawn = 13000;

  const filteredTransactions = mockTransactions.filter(t => {
    const matchesSearch = t.projectName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'all' || t.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Earnings & Payments</h1>
        <p className="text-slate-500">Manage your earnings, payment methods, and withdrawals</p>
      </div>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Available Balance */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
              <Wallet className="size-6" />
            </div>
            <Button
              onClick={() => setShowWithdrawModal(true)}
              size="sm"
              className="bg-white text-green-600 hover:bg-green-50"
            >
              Withdraw
            </Button>
          </div>
          <p className="text-sm text-green-100 mb-1">Available Balance</p>
          <p className="text-3xl font-bold">${availableBalance.toLocaleString()}</p>
          <p className="text-xs text-green-100 mt-2">Ready for withdrawal</p>
        </div>

        {/* Pending */}
        <div className="bg-gradient-to-br from-[#f9a825] to-[#e69b20] text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="size-6" />
            </div>
          </div>
          <p className="text-sm text-[#fffbf0] mb-1">Pending</p>
          <p className="text-3xl font-bold">${pendingAmount.toLocaleString()}</p>
          <p className="text-xs text-[#fffbf0] mt-2">Processing payment</p>
        </div>

        {/* Total Withdrawn */}
        <div className="bg-gradient-to-br from-slate-700 to-slate-800 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div className="size-12 bg-white/20 rounded-lg flex items-center justify-center">
              <ArrowDownLeft className="size-6" />
            </div>
          </div>
          <p className="text-sm text-slate-300 mb-1">Total Withdrawn (This Month)</p>
          <p className="text-3xl font-bold">${totalWithdrawn.toLocaleString()}</p>
          <p className="text-xs text-slate-300 mt-2">2 withdrawals</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Payment Methods</h2>
          <Button
            onClick={() => setShowAddPaymentModal(true)}
            variant="outline"
            className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10"
          >
            <Plus className="size-4 mr-2" />
            Add Payment Method
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockPaymentMethods.map((method) => (
            <div
              key={method.id}
              className={`border-2 rounded-xl p-5 transition-all cursor-pointer ${
                method.isDefault
                  ? 'border-[#f9a825] bg-[#fffbf0]'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    {method.type === 'bank' ? (
                      <Building2 className="size-6 text-slate-600" />
                    ) : (
                      <CreditCard className="size-6 text-slate-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{method.name}</p>
                    <p className="text-sm text-slate-500">
                      {method.type === 'bank' ? 'Account' : 'Card'} ending in {method.last4}
                    </p>
                  </div>
                </div>
                {method.isDefault && (
                  <span className="bg-[#f9a825] text-white text-xs px-2 py-1 rounded-full font-medium">
                    Default
                  </span>
                )}
              </div>
              <div className="flex gap-2">
                {!method.isDefault && (
                  <button className="text-sm text-[#f9a825] font-medium hover:underline">
                    Set as Default
                  </button>
                )}
                <button className="text-sm text-slate-500 font-medium hover:underline ml-auto">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Transaction History</h2>
          <Button variant="outline" size="sm">
            <Download className="size-4 mr-2" />
            Export CSV
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search transactions..."
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            {(['all', 'completed', 'pending', 'processing'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                  filterStatus === status
                    ? 'bg-[#f9a825] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Transactions Table */}
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`size-12 rounded-lg flex items-center justify-center ${
                    transaction.type === 'earning'
                      ? 'bg-green-100'
                      : 'bg-red-100'
                  }`}
                >
                  {transaction.type === 'earning' ? (
                    <ArrowUpRight className={`size-5 text-green-600`} />
                  ) : (
                    <ArrowDownLeft className={`size-5 text-red-600`} />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{transaction.projectName}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <p className="text-sm text-slate-500">
                      {new Date(transaction.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : transaction.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-lg font-bold ${
                    transaction.type === 'earning' ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'earning' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                </p>
                <button className="text-sm text-slate-500 hover:text-[#f9a825] mt-1">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <div className="text-center py-16">
            <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="size-10 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No transactions found</h3>
            <p className="text-slate-500">Try adjusting your search or filters</p>
          </div>
        )}
      </div>

      {/* Withdraw Modal */}
      {showWithdrawModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Withdraw Funds</h2>
            <p className="text-slate-600 mb-6">
              Available balance: <span className="font-bold text-green-600">${availableBalance.toLocaleString()}</span>
            </p>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Withdrawal Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">$</span>
                  <Input
                    type="number"
                    placeholder="0.00"
                    className="pl-8 text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Withdraw to
                </label>
                <select className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none">
                  {mockPaymentMethods.map((method) => (
                    <option key={method.id} value={method.id}>
                      {method.name} - {method.type === 'bank' ? 'Account' : 'Card'} ending in {method.last4}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-900">
                  <strong>Note:</strong> Withdrawals typically take 1-3 business days to process.
                  A 2.5% processing fee will be applied.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowWithdrawModal(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-[#f9a825] hover:bg-[#e69b20] text-white"
              >
                Confirm Withdrawal
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Add Payment Method Modal */}
      {showAddPaymentModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Add Payment Method</h2>

            <div className="space-y-4 mb-6">
              <div className="grid grid-cols-2 gap-3">
                <button className="border-2 border-[#f9a825] bg-[#fffbf0] rounded-lg p-4 hover:bg-[#fef6e9] transition-colors">
                  <Building2 className="size-8 mx-auto mb-2 text-[#f9a825]" />
                  <p className="font-semibold text-slate-900">Bank Account</p>
                </button>
                <button className="border-2 border-slate-200 rounded-lg p-4 hover:border-slate-300 transition-colors">
                  <CreditCard className="size-8 mx-auto mb-2 text-slate-600" />
                  <p className="font-semibold text-slate-900">Debit Card</p>
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Bank Name
                </label>
                <Input placeholder="Enter bank name" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Account Number
                </label>
                <Input placeholder="Enter account number" type="password" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Routing Number
                </label>
                <Input placeholder="Enter routing number" />
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="setDefault" className="size-4" />
                <label htmlFor="setDefault" className="text-sm text-slate-700">
                  Set as default payment method
                </label>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={() => setShowAddPaymentModal(false)}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                className="flex-1 bg-[#f9a825] hover:bg-[#e69b20] text-white"
              >
                Add Payment Method
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
