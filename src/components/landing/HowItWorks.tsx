import React, { useState } from 'react';
import { FileText, Search, MessageSquare, CheckCircle, UserPlus, Eye, Send, Award, ArrowRight } from 'lucide-react';

const homeownerSteps = [
  {
    number: '01',
    icon: <FileText className="w-7 h-7 text-white" />,
    title: "Post Your Project",
    description: "Share details about your remodeling project with photos, budget, and timeline."
  },
  {
    number: '02',
    icon: <Search className="w-7 h-7 text-white" />,
    title: "Receive Quotes",
    description: "Get competitive bids from verified local contractors within 24 hours."
  },
  {
    number: '03',
    icon: <MessageSquare className="w-7 h-7 text-white" />,
    title: "Compare & Connect",
    description: "Review proposals, check ratings, and chat with contractors directly."
  },
  {
    number: '04',
    icon: <CheckCircle className="w-7 h-7 text-white" />,
    title: "Hire & Transform",
    description: "Choose the best contractor and watch your dream home come to life."
  }
];

const contractorSteps = [
  {
    number: '01',
    icon: <UserPlus className="w-7 h-7 text-white" />,
    title: "Create Profile",
    description: "Build your professional profile with portfolio, certifications, and expertise."
  },
  {
    number: '02',
    icon: <Eye className="w-7 h-7 text-white" />,
    title: "Browse Projects",
    description: "Access a steady stream of local remodeling projects that match your skills."
  },
  {
    number: '03',
    icon: <Send className="w-7 h-7 text-white" />,
    title: "Submit Bids",
    description: "Send detailed proposals with pricing and timeline directly to homeowners."
  },
  {
    number: '04',
    icon: <Award className="w-7 h-7 text-white" />,
    title: "Win & Grow",
    description: "Win projects, earn reviews, and expand your business with every job."
  }
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'homeowners' | 'contractors'>('homeowners');
  const steps = activeTab === 'homeowners' ? homeownerSteps : contractorSteps;

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[#f9a825]/15 text-[#f9a825] px-4 py-1.5 rounded-full text-sm font-medium mb-4 tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How <span className="text-[#f9a825]">Homzz</span> Works
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Simple, transparent, and efficient. Get started in just a few steps.
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex bg-slate-800 rounded-xl p-1.5 gap-1 mt-8 border border-slate-700">
            <button
              onClick={() => setActiveTab('homeowners')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'homeowners'
                  ? 'bg-[#f9a825] text-white shadow-lg shadow-[#f9a825]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Homeowners
            </button>
            <button
              onClick={() => setActiveTab('contractors')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'contractors'
                  ? 'bg-[#f9a825] text-white shadow-lg shadow-[#f9a825]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Contractors
            </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-px bg-gradient-to-r from-[#f9a825]/20 via-[#f9a825]/60 to-[#f9a825]/20 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 group">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 h-full hover:border-[#f9a825]/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f9a825]/10">
                
                {/* Step number + icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    {/* Icon circle */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#f9a825] to-[#e39922] flex items-center justify-center shadow-lg shadow-[#f9a825]/30 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                  {/* Big step number */}
                  <span className="text-5xl font-black text-slate-700 group-hover:text-[#f9a825]/40 transition-colors duration-300 select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#f9a825] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for non-last step */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-14 z-20 items-center justify-center w-6 h-6 rounded-full bg-[#f9a825] shadow-md shadow-[#f9a825]/40">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-slate-400 text-sm mb-4">
            {activeTab === 'homeowners'
              ? 'Ready to find the perfect contractor for your project?'
              : 'Ready to start winning projects and growing your business?'}
          </p>
          <button className="inline-flex items-center gap-2 bg-[#f9a825] hover:bg-[#e39922] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-[#f9a825]/30 hover:-translate-y-0.5">
            {activeTab === 'homeowners' ? 'Post Your Project' : 'Get Started Free'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
