import { HelpCircle, Search, MessageCircle, Mail, Phone, Book } from 'lucide-react';
import { useState } from 'react';

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Getting Started',
      icon: Book,
      color: 'bg-blue-500',
      articles: [
        'How to create an account',
        'Setting up your profile',
        'Navigating the platform',
        'Account verification process'
      ]
    },
    {
      title: 'For Homeowners',
      icon: HelpCircle,
      color: 'bg-green-500',
      articles: [
        'How to post a project',
        'Reviewing contractor bids',
        'Accepting a bid and starting work',
        'Approving completed work and releasing payment'
      ]
    },
    {
      title: 'For Contractors',
      icon: HelpCircle,
      color: 'bg-purple-500',
      articles: [
        'Finding available projects',
        'Submitting a competitive bid',
        'Managing active projects',
        'Marking work as complete'
      ]
    },
    {
      title: 'Payments & Billing',
      icon: HelpCircle,
      color: 'bg-[#f9a825]',
      articles: [
        'How payments work on Homzz',
        'Understanding platform fees',
        'Payment methods accepted',
        'Requesting a refund'
      ]
    }
  ];

  const popularQuestions = [
    {
      question: 'How does the bidding process work?',
      answer: 'Homeowners post a project with details and budget. Contractors browse projects and submit bids. Homeowners review bids and select the best contractor. Once accepted, work begins!'
    },
    {
      question: 'When is payment released?',
      answer: 'Payment is held in escrow until the contractor marks work as complete and the homeowner approves. There are no milestone payments - full payment is released upon approval.'
    },
    {
      question: 'What if I\'m not satisfied with the work?',
      answer: 'Use the "Request Changes" button to communicate issues. If unresolved, open a dispute within 7 days. Our support team will mediate and determine if a refund is warranted.'
    },
    {
      question: 'How do I verify a contractor?',
      answer: 'All contractors must provide licensing, insurance, and credentials. Check their profile for verification badges, reviews, and completed project history.'
    },
    {
      question: 'Can I cancel a project after accepting a bid?',
      answer: 'Yes, but refund eligibility depends on project status. Before work starts: full refund (minus fees). After work begins: subject to dispute resolution.'
    },
    {
      question: 'What are the platform fees?',
      answer: 'Homzz charges a service fee on completed transactions. Fee structure varies by account type. Check our Pricing page for detailed information.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="size-20 bg-[#f9a825] rounded-2xl flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="size-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">How can we help you?</h1>
          <p className="text-xl text-slate-600">Search our knowledge base or browse categories below</p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-[#f9a825] focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`size-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="size-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.articles.map((article, idx) => (
                      <li key={idx}>
                        <a href="#" className="text-slate-600 hover:text-[#f9a825] transition-colors flex items-start gap-2">
                          <span className="text-[#f9a825] mt-1">→</span>
                          <span>{article}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Questions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Popular Questions</h2>
          <div className="space-y-4">
            {popularQuestions.map((item, index) => (
              <details key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors flex items-center justify-between">
                  <span className="font-semibold text-slate-900">{item.question}</span>
                  <span className="text-[#f9a825] text-xl">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-slate-100 bg-slate-50">
                  <p className="text-slate-700 leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-gradient-to-br from-[#f9a825] to-[#f9a825]/80 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3">Still need help?</h2>
            <p className="text-lg opacity-90">Our support team is here to assist you</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Live Chat */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="size-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="size-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-sm opacity-90 mb-4">Get instant answers from our support team</p>
              <button className="bg-white text-[#f9a825] px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Start Chat
              </button>
            </div>

            {/* Email Support */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="size-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="size-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-sm opacity-90 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:support@homzz.com" className="inline-block bg-white text-[#f9a825] px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Send Email
              </a>
            </div>

            {/* Phone Support */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center hover:bg-white/20 transition-colors">
              <div className="size-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="size-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-sm opacity-90 mb-4">Mon-Fri, 9 AM - 6 PM EST</p>
              <a href="tel:+12015550124" className="inline-block bg-white text-[#f9a825] px-6 py-2 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
