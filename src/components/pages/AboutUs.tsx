import { Check, Heart, Shield, Star, Users, Award, TrendingUp } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#fffbf0] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Connecting Homeowners with Trusted Contractors
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're on a mission to make home remodeling simple, transparent, and stress-free. 
              Our platform brings together quality contractors and homeowners looking to transform their spaces.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="size-16 bg-[#fffbf0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="size-8 text-[#f9a825]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">10,000+</div>
            <div className="text-slate-600">Active Contractors</div>
          </div>
          <div className="text-center">
            <div className="size-16 bg-[#fffbf0] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="size-8 text-[#f9a825]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">50,000+</div>
            <div className="text-slate-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="size-16 bg-[#fffbf0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="size-8 text-[#f9a825]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">4.8/5</div>
            <div className="text-slate-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="size-16 bg-[#fffbf0] rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="size-8 text-[#f9a825]" />
            </div>
            <div className="text-4xl font-bold text-slate-900 mb-2">98%</div>
            <div className="text-slate-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Founded in 2020, our platform was born from a simple observation: finding a reliable 
                  contractor shouldn't be this hard. After experiencing countless frustrations with the 
                  traditional remodeling process, we set out to create a better way.
                </p>
                <p>
                  We built a marketplace where transparency meets quality. Where homeowners can easily 
                  find vetted professionals, compare bids, and track their projects—all in one place. 
                  And where contractors can grow their business by connecting with motivated clients.
                </p>
                <p>
                  Today, we're proud to have helped thousands of homeowners transform their spaces and 
                  enabled countless contractors to build thriving businesses. But we're just getting started.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop"
                alt="Modern home renovation"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            These principles guide everything we do, from product development to customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="size-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Shield className="size-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Safety</h3>
            <p className="text-slate-600 leading-relaxed">
              Every contractor is thoroughly vetted with background checks, license verification, 
              and insurance confirmation before joining our platform.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="size-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Heart className="size-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Customer First</h3>
            <p className="text-slate-600 leading-relaxed">
              Your satisfaction is our priority. We provide 24/7 support, project protection, 
              and ensure fair resolution of any disputes.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <div className="size-14 bg-[#fffbf0] rounded-lg flex items-center justify-center mb-6">
              <Check className="size-7 text-[#f9a825]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Quality Work</h3>
            <p className="text-slate-600 leading-relaxed">
              We maintain high standards through our rating system, quality checks, and 
              contractor education programs to ensure excellent results.
            </p>
          </div>
        </div>
      </div>

      {/* Team/Culture Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Growing Community</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Whether you're a homeowner looking to renovate or a contractor ready to grow your business, 
            we're here to help you succeed.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-[#f9a825] hover:bg-[#e69b20] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started as Homeowner
            </button>
            <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-medium transition-colors">
              Join as Contractor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
