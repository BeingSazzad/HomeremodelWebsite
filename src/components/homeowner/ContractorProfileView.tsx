import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Star, MessageSquare, Flag, Shield, Clock, DollarSign, Award, Briefcase, Users, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface ContractorProfileViewProps {
  onBack: () => void;
  onMessage?: () => void;
  contractorId?: string;
}

export function ContractorProfileView({ onBack, onMessage, contractorId = 'elite-kitchen' }: ContractorProfileViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'portfolio' | 'reviews'>('overview');

  // Mock contractor data
  const contractor = {
    id: 'elite-kitchen',
    name: 'Elite Kitchen Designs',
    initials: 'EK',
    avatar: null,
    memberSince: 'March 2023',
    location: 'Austin, TX',
    verified: true,
    phoneVerified: true,
    emailVerified: true,
    licenseVerified: true,
    insuranceVerified: true,
    rating: 4.9,
    totalReviews: 47,
    projectsCompleted: 52,
    projectsActive: 3,
    responseRate: '98%',
    responseTime: '< 1 hour',
    hireProbability: '95%',
    badges: ['Top Rated', 'Quick Responder', 'Licensed & Insured', 'Quality Pro'],
    bio: 'Professional kitchen remodeling contractor with over 15 years of experience. We specialize in modern kitchen designs, custom cabinetry, and high-end finishes. Our team is dedicated to delivering exceptional results on time and within budget.',
    specialties: ['Kitchen Remodeling', 'Custom Cabinets', 'Countertop Installation', 'Tile Work', 'Plumbing'],
    yearsExperience: 15,
    teamSize: '8-12 employees',
    averageProjectCost: '$35,000',
    completionRate: '98%',
    subscriptionPlan: 'Professional - $399/mo',
    isPro: true,
  };

  // Mock portfolio projects
  const portfolioProjects = [
    {
      id: 1,
      title: 'Modern White Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&h=400&q=80',
      budget: '$42,000',
      completedDate: 'Dec 2024',
      description: 'Complete kitchen renovation with custom white cabinets, quartz countertops, and stainless appliances.',
    },
    {
      id: 2,
      title: 'Luxury Chef Kitchen',
      image: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?auto=format&fit=crop&w=600&h=400&q=80',
      budget: '$68,000',
      completedDate: 'Oct 2024',
      description: 'High-end kitchen with professional-grade appliances, custom island, and premium finishes.',
    },
    {
      id: 3,
      title: 'Contemporary Kitchen Remodel',
      image: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?auto=format&fit=crop&w=600&h=400&q=80',
      budget: '$38,000',
      completedDate: 'Aug 2024',
      description: 'Modern kitchen update with sleek cabinets, LED lighting, and smart storage solutions.',
    },
  ];

  // Mock reviews from homeowners
  const homeownerReviews = [
    {
      id: 1,
      homeownerName: 'Sarah Martinez',
      homeownerAvatar: 'SM',
      rating: 5,
      date: 'Jan 15, 2025',
      project: 'Modern Kitchen Renovation',
      review: 'Elite Kitchen Designs exceeded all expectations! The team was professional, punctual, and incredibly skilled. They transformed our outdated kitchen into a stunning modern space. Communication was excellent throughout, and they stayed on budget. Highly recommend!',
      verified: true,
    },
    {
      id: 2,
      homeownerName: 'John Davis',
      homeownerAvatar: 'JD',
      rating: 5,
      date: 'Dec 10, 2024',
      project: 'Luxury Chef Kitchen',
      review: 'Outstanding work from start to finish. The attention to detail was remarkable, and the craftsmanship is top-notch. They handled every aspect of the project professionally and the final result is exactly what we envisioned.',
      verified: true,
    },
    {
      id: 3,
      homeownerName: 'Emily Chen',
      homeownerAvatar: 'EC',
      rating: 5,
      date: 'Nov 5, 2024',
      project: 'Contemporary Kitchen Remodel',
      review: 'Very impressed with Elite Kitchen Designs. They were responsive, professional, and delivered exceptional quality. The project was completed on time and the cleanup was thorough. Would definitely hire again!',
      verified: true,
    },
    {
      id: 4,
      homeownerName: 'Michael Brown',
      homeownerAvatar: 'MB',
      rating: 4,
      date: 'Oct 20, 2024',
      project: 'Kitchen Island Installation',
      review: 'Great experience overall. The team did excellent work and the island looks fantastic. Only minor issue was a small delay due to material availability, but they kept us informed throughout.',
      verified: true,
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'reviews', label: `Reviews (${contractor.totalReviews})` },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="gap-2"
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>
          </div>

          {/* Profile Header */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
            <div className="size-24 bg-gradient-to-br from-[#f9a825] to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
              {contractor.initials}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">{contractor.name}</h1>
                    {contractor.verified && (
                      <CheckCircle2 className="size-6 text-blue-500" title="Verified Contractor" />
                    )}
                    {contractor.isPro && (
                      <Award className="size-6 text-[#f9a825]" title="Pro Contractor" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {contractor.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Member since {contractor.memberSince}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="size-5 fill-[#f9a825] text-[#f9a825]" />
                      <span className="font-bold text-lg text-slate-900">{contractor.rating}</span>
                    </div>
                    <span className="text-sm text-slate-600">({contractor.totalReviews} reviews)</span>
                    <span className="text-sm text-slate-400">•</span>
                    <span className="text-sm font-medium text-green-600">{contractor.hireProbability} hire rate</span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {contractor.badges.map((badge, index) => (
                      <span
                        key={index}
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                          badge === 'Top Rated'
                            ? 'bg-[#f9a825] text-white'
                            : badge === 'Licensed & Insured'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {badge === 'Top Rated' && <Award className="size-3" />}
                        {badge === 'Licensed & Insured' && <Shield className="size-3" />}
                        {badge === 'Quick Responder' && <Clock className="size-3" />}
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  {onMessage && (
                    <Button
                      onClick={onMessage}
                      className="bg-[#f9a825] hover:bg-[#f9a825]/90 text-white gap-2"
                    >
                      <MessageSquare className="size-4" />
                      Message
                    </Button>
                  )}
                  <Button variant="outline" className="gap-2">
                    <Flag className="size-4" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[#f9a825]'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f9a825]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle2 className="size-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{contractor.projectsCompleted}</p>
                  <p className="text-sm text-slate-600">Projects Done</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Star className="size-5 text-[#f9a825]" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{contractor.rating}</p>
                  <p className="text-sm text-slate-600">Rating</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="size-5 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{contractor.responseTime}</p>
                  <p className="text-sm text-slate-600">Response Time</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="size-5 text-purple-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{contractor.hireProbability}</p>
                  <p className="text-sm text-slate-600">Hire Rate</p>
                </CardContent>
              </Card>
            </div>

            {/* About */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">About</h3>
                <p className="text-slate-700 leading-relaxed mb-4">{contractor.bio}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-center gap-3">
                    <Briefcase className="size-5 text-[#f9a825]" />
                    <div>
                      <p className="text-sm text-slate-600">Experience</p>
                      <p className="font-medium text-slate-900">{contractor.yearsExperience} years</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="size-5 text-blue-500" />
                    <div>
                      <p className="text-sm text-slate-600">Team Size</p>
                      <p className="font-medium text-slate-900">{contractor.teamSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="size-5 text-green-500" />
                    <div>
                      <p className="text-sm text-slate-600">Avg Project</p>
                      <p className="font-medium text-slate-900">{contractor.averageProjectCost}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialties */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {contractor.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Verification & Credentials</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-green-600" />
                      <span className="font-medium text-slate-900">Business License</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-green-600" />
                      <span className="font-medium text-slate-900">Insurance</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-green-600" />
                      <span className="font-medium text-slate-900">Phone Number</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="size-5 text-green-600" />
                      <span className="font-medium text-slate-900">Email Address</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">Verified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{contractor.completionRate}</p>
                    <p className="text-sm text-slate-600">Completion Rate</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{contractor.responseRate}</p>
                    <p className="text-sm text-slate-600">Response Rate</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">{contractor.projectsActive}</p>
                    <p className="text-sm text-slate-600">Active Projects</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">{contractor.projectsCompleted}</p>
                    <p className="text-sm text-slate-600">Total Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Portfolio Tab */}
        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            <h3 className="font-bold text-lg text-slate-900">Recent Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h4 className="font-bold text-slate-900 mb-2">{project.title}</h4>
                    <p className="text-sm text-slate-600 mb-3">{project.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">Budget: <span className="font-medium text-slate-900">{project.budget}</span></span>
                      <span className="text-slate-500">{project.completedDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900">
                Reviews from Homeowners ({contractor.totalReviews})
              </h3>
              <div className="flex items-center gap-2">
                <Star className="size-5 fill-[#f9a825] text-[#f9a825]" />
                <span className="font-bold text-lg text-slate-900">{contractor.rating}</span>
                <span className="text-slate-600">/ 5.0</span>
              </div>
            </div>

            {homeownerReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {review.homeownerAvatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-bold text-slate-900">{review.homeownerName}</p>
                            {review.verified && (
                              <CheckCircle2 className="size-4 text-blue-500" title="Verified Review" />
                            )}
                          </div>
                          <p className="text-xs text-slate-500">Project: {review.project}</p>
                        </div>
                        <span className="text-sm text-slate-500">{review.date}</span>
                      </div>

                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`size-4 ${
                              i < review.rating
                                ? 'fill-[#f9a825] text-[#f9a825]'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-slate-700 leading-relaxed">{review.review}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
