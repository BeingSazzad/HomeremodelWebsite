import React, { useState } from 'react';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Star, MessageSquare, Flag, Shield, Clock, DollarSign, TrendingUp, Award } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

interface HomeownerProfileViewProps {
  onBack: () => void;
  onMessage?: () => void;
  homeownerId?: string;
}

export function HomeownerProfileView({ onBack, onMessage, homeownerId = 'sarah-martinez' }: HomeownerProfileViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews'>('overview');

  // Mock homeowner data
  const homeowner = {
    id: 'sarah-martinez',
    name: 'Sarah Martinez',
    initials: 'SM',
    avatar: null,
    memberSince: 'June 2024',
    location: 'Austin, TX',
    verified: true,
    phoneVerified: true,
    emailVerified: true,
    rating: 4.8,
    totalReviews: 12,
    projectsPosted: 8,
    projectsCompleted: 5,
    projectsActive: 2,
    projectsPending: 1,
    responseRate: '95%',
    responseTime: '< 2 hours',
    badges: ['Verified Phone', 'Email Verified', 'Quick Responder', 'Fair Payer'],
    bio: 'Homeowner in Austin looking to renovate my home. I value quality work, clear communication, and professionalism. I always pay on time and provide detailed project requirements.',
    spendingRange: '$50,000 - $75,000',
    avgProjectBudget: '$12,500',
  };

  // Mock projects posted by this homeowner
  const postedProjects = [
    { 
      id: 1, 
      title: 'Modern Kitchen Renovation', 
      status: 'Completed', 
      budget: '$35,000 - $45,000', 
      completedDate: 'Jan 2025',
      contractorRating: 5,
      contractorReview: 'Excellent communication and paid promptly. Very satisfied with the final result!',
    },
    { 
      id: 2, 
      title: 'Bathroom Remodel', 
      status: 'In Progress', 
      budget: '$15,000 - $20,000', 
      startedDate: 'Feb 2025',
    },
    { 
      id: 3, 
      title: 'Backyard Deck Installation', 
      status: 'Completed', 
      budget: '$8,000 - $12,000', 
      completedDate: 'Dec 2024',
      contractorRating: 5,
      contractorReview: 'Great client! Clear expectations and timely payments.',
    },
  ];

  // Mock reviews from contractors
  const contractorReviews = [
    {
      id: 1,
      contractorName: 'Elite Kitchen Designs',
      contractorAvatar: 'EK',
      rating: 5,
      date: 'Jan 15, 2025',
      project: 'Modern Kitchen Renovation',
      review: 'Sarah was an absolute pleasure to work with. She had a clear vision, provided all necessary details upfront, and made timely decisions. Payment was prompt and she was very understanding when we encountered a minor delay. Highly recommend!',
    },
    {
      id: 2,
      contractorName: 'Premier Outdoor Solutions',
      contractorAvatar: 'PO',
      rating: 5,
      date: 'Dec 20, 2024',
      project: 'Backyard Deck Installation',
      review: 'Fantastic homeowner! Communication was excellent throughout the project. She provided detailed requirements and was very responsive to our questions. Would definitely work with her again.',
    },
    {
      id: 3,
      contractorName: 'Austin Bathroom Pros',
      contractorAvatar: 'AB',
      rating: 4,
      date: 'Nov 10, 2024',
      project: 'Guest Bathroom Update',
      review: 'Good experience overall. Sarah knew what she wanted and was decisive. Only minor issue was some last-minute changes, but she was fair about it.',
    },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'reviews', label: `Reviews (${homeowner.totalReviews})` },
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
            <div className="size-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg">
              {homeowner.initials}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h1 className="text-2xl font-bold text-slate-900">{homeowner.name}</h1>
                    {homeowner.verified && (
                      <CheckCircle2 className="size-6 text-blue-500" title="Verified Account" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-4" />
                      {homeowner.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-4" />
                      Member since {homeowner.memberSince}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="size-5 fill-[#f9a825] text-[#f9a825]" />
                      <span className="font-bold text-lg text-slate-900">{homeowner.rating}</span>
                    </div>
                    <span className="text-sm text-slate-600">({homeowner.totalReviews} reviews from contractors)</span>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {homeowner.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {badge === 'Verified Phone' && <Shield className="size-3" />}
                        {badge === 'Quick Responder' && <Clock className="size-3" />}
                        {badge === 'Fair Payer' && <DollarSign className="size-3" />}
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
                    <TrendingUp className="size-5 text-[#f9a825]" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{homeowner.projectsPosted}</p>
                  <p className="text-sm text-slate-600">Projects Posted</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle2 className="size-5 text-green-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{homeowner.projectsCompleted}</p>
                  <p className="text-sm text-slate-600">Completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="size-5 text-blue-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{homeowner.responseTime}</p>
                  <p className="text-sm text-slate-600">Response Time</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <MessageSquare className="size-5 text-purple-500" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{homeowner.responseRate}</p>
                  <p className="text-sm text-slate-600">Response Rate</p>
                </CardContent>
              </Card>
            </div>

            {/* About */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-3">About</h3>
                <p className="text-slate-700 leading-relaxed">{homeowner.bio}</p>
              </CardContent>
            </Card>

            {/* Project Activity */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Project Activity</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <p className="text-2xl font-bold text-green-600">{homeowner.projectsCompleted}</p>
                    <p className="text-sm text-slate-600">Completed</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <p className="text-2xl font-bold text-blue-600">{homeowner.projectsActive}</p>
                    <p className="text-sm text-slate-600">Active</p>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <p className="text-2xl font-bold text-yellow-600">{homeowner.projectsPending}</p>
                    <p className="text-sm text-slate-600">Pending</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <p className="text-2xl font-bold text-purple-600">{homeowner.avgProjectBudget}</p>
                    <p className="text-sm text-slate-600">Avg Budget</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Verification Status */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Verification Status</h3>
                <div className="space-y-3">
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

            {/* Project History */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Project History</h3>
                <div className="space-y-4">
                  {postedProjects.map((project) => (
                    <div key={project.id} className="p-4 border border-slate-200 rounded-lg hover:border-[#f9a825]/30 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{project.title}</h4>
                          <p className="text-sm text-slate-600">Budget: {project.budget}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Completed'
                              ? 'bg-green-100 text-green-700'
                              : project.status === 'In Progress'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {project.contractorReview && (
                        <div className="mt-3 p-3 bg-slate-50 rounded-lg">
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`size-4 ${
                                  i < (project.contractorRating || 0)
                                    ? 'fill-[#f9a825] text-[#f9a825]'
                                    : 'text-slate-300'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-slate-600 ml-2">
                              {project.completedDate}
                            </span>
                          </div>
                          <p className="text-sm text-slate-700 italic">"{project.contractorReview}"</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg text-slate-900">
                Reviews from Contractors ({homeowner.totalReviews})
              </h3>
              <div className="flex items-center gap-2">
                <Star className="size-5 fill-[#f9a825] text-[#f9a825]" />
                <span className="font-bold text-lg text-slate-900">{homeowner.rating}</span>
                <span className="text-slate-600">/ 5.0</span>
              </div>
            </div>

            {contractorReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="size-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                      {review.contractorAvatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-bold text-slate-900">{review.contractorName}</p>
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