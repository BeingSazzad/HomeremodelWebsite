import { MapPin, Phone, Mail, MessageSquare, Send, Clock } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#fffbf0] to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards + Form Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="size-12 bg-[#fffbf0] rounded-lg flex items-center justify-center mb-4">
              <Mail className="size-6 text-[#f9a825]" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm mb-3">Our team will respond within 24 hours</p>
            <a href="mailto:support@remodelingmarketplace.com" className="text-[#f9a825] hover:underline font-medium">
              support@remodelingmarketplace.com
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="size-12 bg-[#fffbf0] rounded-lg flex items-center justify-center mb-4">
              <Phone className="size-6 text-[#f9a825]" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm mb-3">Mon-Fri from 8am to 6pm PST</p>
            <a href="tel:+15551234567" className="text-[#f9a825] hover:underline font-medium">
              +1 (555) 123-4567
            </a>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
            <div className="size-12 bg-[#fffbf0] rounded-lg flex items-center justify-center mb-4">
              <MapPin className="size-6 text-[#f9a825]" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600 text-sm mb-3">Come say hello at our office</p>
            <p className="text-slate-700 font-medium">
              123 Main Street<br />
              Los Angeles, CA 90001
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-12 bg-[#fffbf0] rounded-lg flex items-center justify-center">
                <MessageSquare className="size-6 text-[#f9a825]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Send us a Message</h2>
                <p className="text-slate-600">Fill out the form below and we'll get back to you shortly.</p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    First Name
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Last Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number (Optional)
                </label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  I am a...
                </label>
                <select className="w-full h-12 px-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none">
                  <option value="">Select your role</option>
                  <option value="homeowner">Homeowner</option>
                  <option value="contractor">Contractor</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="How can we help?"
                  className="h-12"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  className="w-full p-4 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none resize-none"
                />
              </div>

              <Button className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white h-12 text-base">
                <Send className="size-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Quick Links */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How do I post a project?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Simply sign up as a homeowner, click "Post Project," and fill out the details. 
                You'll start receiving bids from qualified contractors within hours.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">How are contractors verified?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                All contractors go through background checks, license verification, and insurance 
                confirmation before being approved on our platform.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">What are the fees?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For homeowners, posting projects is free. Contractors pay a small subscription 
                fee to access and bid on projects.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-6">
              <h3 className="font-semibold text-slate-900 mb-2">Is there customer support?</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes! We offer 24/7 customer support via email and phone. Our team is always 
                ready to help resolve any issues.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-r from-[#f9a825] to-[#e69b20] rounded-2xl p-8 text-white">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-14 bg-white/20 rounded-lg flex items-center justify-center">
              <Clock className="size-7" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-1">Business Hours</h3>
              <p className="text-white/90">We're here when you need us</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span className="font-medium">Monday - Friday</span>
              <span>8:00 AM - 6:00 PM PST</span>
            </div>
            <div className="flex justify-between border-b border-white/20 pb-2">
              <span className="font-medium">Saturday</span>
              <span>10:00 AM - 4:00 PM PST</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Sunday</span>
              <span>Closed</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Email Support</span>
              <span>24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
