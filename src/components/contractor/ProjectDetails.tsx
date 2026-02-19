import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock, 
  User, 
  Home,
  CheckCircle2,
  MessageSquare,
  Share2,
  Bookmark
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { SubmitQuoteModal, QuoteFormData } from './SubmitQuoteModal';

interface ProjectDetailsProps {
  onBack: () => void;
  onSubmitQuote?: () => void;
  isAuthenticated?: boolean;
  onLoginRequired?: () => void;
  onMessageUser?: () => void;
}

export function ProjectDetails({ onBack, onSubmitQuote, isAuthenticated = true, onLoginRequired, onMessageUser }: ProjectDetailsProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Mock project data
  const project = {
    id: 1,
    title: 'Complete Kitchen Remodel',
    category: 'Kitchen',
    status: 'Open',
    postedDate: '2 days ago',
    budget: '$25,000 - $35,000',
    timeline: '2-3 months',
    preferredStart: 'March 2025',
    location: 'Austin, TX 78701',
    description: `We're looking to completely remodel our outdated kitchen into a modern, functional space. The project includes:

• Removal of existing cabinets and countertops
• Installation of new custom cabinets with soft-close hardware
• Quartz countertops throughout
• New stainless steel appliances (range, refrigerator, dishwasher)
• Backsplash installation with subway tiles
• Updated lighting fixtures and under-cabinet lighting
• Refinished hardwood floors
• Potential minor plumbing and electrical updates

We have a clear vision for the design and are looking for an experienced contractor who can bring it to life. We value quality workmanship and clear communication throughout the project.`,
    specifications: [
      'Approximately 200 sq ft kitchen space',
      'Premium materials preferred',
      'All work must be up to code',
      'Proper permits and inspections required',
      'Clean-up and debris removal included'
    ],
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80',
      'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80'
    ],
    homeowner: {
      name: 'Sarah M.',
      memberSince: 'January 2024',
      projectsPosted: 3,
      verified: true
    },
    quotesReceived: 7,
    viewCount: 142
  };

  const handleQuoteSubmit = (data: QuoteFormData) => {
    console.log('Quote submitted:', data);
    onSubmitQuote && onSubmitQuote();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft className="size-4" />
              Back to Projects
            </Button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsBookmarked(!isBookmarked)}
              >
                <Bookmark className={`size-4 ${isBookmarked ? 'fill-[#f9a825] text-[#f9a825]' : ''}`} />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Status */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl mb-2">{project.title}</h1>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      <CheckCircle2 className="size-3 mr-1" />
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                    <span className="text-sm text-slate-600">Posted {project.postedDate}</span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-[#f9a825]/10 rounded-lg">
                    <DollarSign className="size-5 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Budget Range</p>
                    <p className="font-semibold">{project.budget}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-[#f9a825]/10 rounded-lg">
                    <Clock className="size-5 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Timeline</p>
                    <p className="font-semibold">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-[#f9a825]/10 rounded-lg">
                    <Calendar className="size-5 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Preferred Start</p>
                    <p className="font-semibold">{project.preferredStart}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="p-2 bg-[#f9a825]/10 rounded-lg">
                    <MapPin className="size-5 text-[#f9a825]" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Location</p>
                    <p className="font-semibold">{project.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl mb-4">Project Photos</h2>
              <div className="grid grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-lg overflow-hidden bg-slate-100 group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`Project photo ${index + 1}`}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl mb-4">Project Description</h2>
              <div className="prose prose-slate max-w-none">
                <p className="whitespace-pre-line text-slate-700">{project.description}</p>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h2 className="text-xl mb-4">Project Specifications</h2>
              <ul className="space-y-2">
                {project.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 text-[#f9a825] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 sticky top-24">
              <h3 className="text-lg mb-4">Interested in this project?</h3>
              
              <Button
                onClick={() => isAuthenticated ? setIsQuoteModalOpen(true) : onLoginRequired && onLoginRequired()}
                className="w-full mb-3 bg-[#f9a825] hover:bg-[#e69b20] text-white"
                size="lg"
              >
                Submit a Quote
              </Button>

              <Button 
                variant="outline" 
                className="w-full gap-2" 
                onClick={() => isAuthenticated ? onMessageUser && onMessageUser() : onLoginRequired && onLoginRequired()}
              >
                <MessageSquare className="size-4" />
                Message Homeowner
              </Button>

              <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Quotes received</span>
                  <span className="font-semibold">{project.quotesReceived}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Project views</span>
                  <span className="font-semibold">{project.viewCount}</span>
                </div>
              </div>
            </div>

            {/* Homeowner Info */}
            <div className="bg-white rounded-lg border border-slate-200 p-6">
              <h3 className="text-lg mb-4">Homeowner Information</h3>
              
              <div className="flex items-start gap-3 mb-4">
                <div className="p-3 bg-slate-100 rounded-full">
                  <User className="size-6 text-slate-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold">{project.homeowner.name}</p>
                    {project.homeowner.verified && (
                      <CheckCircle2 className="size-4 text-blue-600" />
                    )}
                  </div>
                  <p className="text-sm text-slate-600">
                    Member since {project.homeowner.memberSince}
                  </p>
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Projects posted</span>
                  <span className="font-semibold">{project.homeowner.projectsPosted}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-600">Response rate</span>
                  <span className="font-semibold text-green-600">95%</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-[#f9a825]/10 to-[#f9a825]/5 rounded-lg border border-[#f9a825]/20 p-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="p-2 bg-[#f9a825]/20 rounded-lg">
                  <Home className="size-5 text-[#f9a825]" />
                </div>
                <h3 className="text-lg">Success Tips</h3>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="text-[#f9a825] flex-shrink-0">•</span>
                  <span>Submit detailed, professional quotes</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f9a825] flex-shrink-0">•</span>
                  <span>Respond to messages within 24 hours</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f9a825] flex-shrink-0">•</span>
                  <span>Include photos of similar past work</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f9a825] flex-shrink-0">•</span>
                  <span>Be transparent about timeline and pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <SubmitQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        onSubmit={handleQuoteSubmit}
        projectBudget={project.budget}
      />
    </div>
  );
}