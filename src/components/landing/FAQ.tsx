import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

const faqs = [
  {
    question: "How does Homzz work for homeowners??",
    answer: "Simply post your remodeling project with details and photos. Within 24 hours, you'll receive competitive quotes from verified contractors. Review their profiles, ratings, and past work, then choose the best fit for your project. Our platform handles all communication and keeps everything organized in one place."
  },
  {
    question: "Are contractors verified?",
    answer: "Yes! All contractors go through a verification process including license checks, insurance verification, and background screening. We also collect and display real customer reviews to help you make informed decisions."
  },
  {
    question: "What types of projects can I post?",
    answer: "You can post any home remodeling project including kitchen renovations, bathroom updates, whole home remodels, outdoor projects, painting, flooring, and more. From small updates to major renovations, we connect you with the right professionals."
  },
  {
    question: "How much does it cost for homeowners?",
    answer: "Posting projects and receiving quotes is completely free for homeowners. You only pay the contractor you choose for the actual work. There are no hidden fees or platform charges for homeowners."
  },
  {
    question: "How do contractor subscriptions work?",
    answer: "Contractors can choose from three subscription tiers: Basic ($29/month), Professional ($79/month), or Enterprise ($199/month). Each tier offers different benefits including the number of quotes you can submit, profile features, and support levels. All plans include a 14-day free trial."
  },
  {
    question: "Can I communicate with contractors before hiring?",
    answer: "Absolutely! Our built-in messaging system allows you to communicate directly with contractors, ask questions, request additional information, and clarify project details before making your decision."
  },
  {
    question: "What if I'm not satisfied with the quotes I receive?",
    answer: "You're never obligated to accept any quote. If you're not satisfied, you can request additional information from contractors, modify your project details, or repost your project. We want to ensure you find the perfect match for your needs."
  },
  {
    question: "How long does it take to receive quotes?",
    answer: "Most homeowners receive their first quotes within a few hours of posting. Typically, you'll have 3-5 detailed quotes within 24 hours, giving you plenty of options to choose from."
  }
];

const contractorFaqs = [
  {
    question: "How do I get started as a contractor?",
    answer: "Create your professional profile, upload your portfolio and certifications, and choose a subscription plan. After verification (usually within 24 hours), you can start browsing projects and submitting quotes immediately."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. You'll continue to have access to your current plan until the end of your billing cycle. No long-term contracts or cancellation fees."
  }
];

export function FAQ() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked <span className="text-[#f9a825]">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Homeowners</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-xl border border-slate-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#f9a825] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">For Contractors</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {contractorFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`contractor-${index}`}
                  className="bg-white rounded-xl border border-slate-200 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#f9a825] hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
