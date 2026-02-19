import React, { useState } from 'react';
import { Button } from '../../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Separator } from '../../ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../ui/dialog';
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  Download,
  FileText,
  MapPin,
  MessageSquare,
  MoreVertical,
  Star,
  ThumbsUp,
  User,
  X,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Briefcase,
  Shield,
  Award,
  AlertCircle
} from 'lucide-react';

interface ContractorBid {
  id: string;
  contractorName: string;
  contractorAvatar: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  bidAmount: string;
  estimatedDuration: string;
  coverLetter: string;
  submittedDate: string;
  status: 'pending' | 'accepted' | 'rejected' | 'withdrawn';
  verified: boolean;
}

interface ProjectDocument {
  id: string;
  name: string;
  size: string;
  type: string;
}

interface ProjectDetailsViewProps {
  onBack: () => void;
  onMessageContractor: (contractorId: string) => void;
}

export function ProjectDetailsView({ onBack, onMessageContractor }: ProjectDetailsViewProps) {
  const [activeTab, setActiveTab] = useState('bids');
  const [selectedBid, setSelectedBid] = useState<ContractorBid | null>(null);
  const [showAcceptDialog, setShowAcceptDialog] = useState(false);
  const [showCancelDialog, setShowCancelDialog] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Mock Project Data
  const project = {
    id: 'PRJ-2025-00647',
    title: 'Complete Kitchen Remodel',
    status: 'bidding', // or 'in_progress', 'completed'
    datePosted: 'Jan 16, 2025',
    location: 'Austin, TX 78701',
    budget: '$25,000 - $35,000',
    category: 'Kitchen',
    estimatedDuration: '6-8 weeks',
    description: `We are looking to completely remodel our outdated kitchen into a modern, functional space. This is a comprehensive renovation that will transform the heart of our home.

**Project Scope:**
• Removal of existing cabinets and countertops
• Installation of new custom cabinets with soft-close hardware
• New quartz countertops with waterfall edge on island
• Installation of new stainless steel appliances (range, refrigerator, dishwasher)
• New stainless steel appliances
• Backsplash installation with subway tiles
• Refinished hardwood floors
• Updated recessed lighting and under-cabinet LED lighting

**Our Vision:**
We're aiming for a contemporary design with clean lines and a neutral color palette. We want the space to be both beautiful and highly functional for a family that loves to cook. Quality craftsmanship is essential, and we're looking for a contractor who can bring creative solutions while staying on budget.

**Important Notes:**
• We are flexible with start dates but would prefer work to begin in February
• We're willing to work with the contractor on the material selection to find cost-effective but high-quality options
• We're flexible on start date but would like to complete before summer`,
    photos: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    ],
    documents: [
      { id: '1', name: 'Floor Plan.pdf', size: '2.4 MB', type: 'pdf' },
      { id: '2', name: 'Design References.pdf', size: '1.8 MB', type: 'pdf' },
      { id: '3', name: 'Appliance Specs.docx', size: '856 KB', type: 'docx' }
    ]
  };

  // Mock Bids Data
  const bids: ContractorBid[] = [
    {
      id: '1',
      contractorName: 'Elite Renovations Co.',
      contractorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 4.9,
      reviewCount: 127,
      completedJobs: 145,
      bidAmount: '$28,500',
      estimatedDuration: '6 weeks',
      coverLetter: 'I have over 15 years of experience in kitchen remodeling and would love to help bring your vision to life. My team specializes in high-quality finishes and attention to detail. I\'ve reviewed your project requirements and believe we can deliver exceptional results within your budget and timeline.',
      submittedDate: '2 hours ago',
      status: 'pending',
      verified: true
    },
    {
      id: '2',
      contractorName: 'Modern Home Solutions',
      contractorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 4.7,
      reviewCount: 89,
      completedJobs: 98,
      bidAmount: '$32,000',
      estimatedDuration: '7 weeks',
      coverLetter: 'We\'re a family-owned business with a passion for creating beautiful kitchens. Our team includes licensed electricians and plumbers, so we can handle all aspects of your remodel in-house. We pride ourselves on transparent communication and staying on schedule.',
      submittedDate: '1 day ago',
      status: 'pending',
      verified: true
    },
    {
      id: '3',
      contractorName: 'BuildRight Contractors',
      contractorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 4.5,
      reviewCount: 64,
      completedJobs: 72,
      bidAmount: '$26,800',
      estimatedDuration: '8 weeks',
      coverLetter: 'Your project aligns perfectly with our expertise. We\'ve completed over 70 kitchen remodels in the Austin area. We offer a 5-year workmanship warranty and can provide references from recent clients. Let\'s schedule a walkthrough to discuss your vision in detail.',
      submittedDate: '2 days ago',
      status: 'pending',
      verified: false
    },
    {
      id: '4',
      contractorName: 'Premier Kitchen Designs',
      contractorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop',
      rating: 4.8,
      reviewCount: 156,
      completedJobs: 178,
      bidAmount: '$34,500',
      estimatedDuration: '6 weeks',
      coverLetter: 'We specialize in luxury kitchen remodels and have won multiple design awards. While our bid is at the higher end, we use only premium materials and provide a comprehensive 10-year warranty. Our portfolio includes some of Austin\'s most stunning kitchens.',
      submittedDate: '3 days ago',
      status: 'pending',
      verified: true
    }
  ];

  const timeline = [
    { date: 'Jan 16, 2025', event: 'Project Posted', status: 'completed' },
    { date: 'Jan 18, 2025', event: 'First bid received', status: 'completed' },
    { date: 'Pending', event: 'Accept contractor bid', status: 'pending' },
    { date: 'TBD', event: 'Project start date', status: 'upcoming' },
    { date: 'TBD', event: 'Estimated completion', status: 'upcoming' }
  ];

  const handleAcceptBid = (bid: ContractorBid) => {
    setSelectedBid(bid);
    setShowAcceptDialog(true);
  };

  const confirmAcceptBid = () => {
    // Handle accepting bid
    console.log('Accepting bid:', selectedBid);
    setShowAcceptDialog(false);
    setSelectedBid(null);
  };

  const handleRejectBid = (bidId: string) => {
    console.log('Rejecting bid:', bidId);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % project.photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + project.photos.length) % project.photos.length);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack} className="hover:bg-slate-100">
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold text-slate-900">{project.title}</h1>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-amber-200">
                    {bids.filter(b => b.status === 'pending').length} Active Bids
                  </Badge>
                </div>
                <p className="text-sm text-slate-500">Project ID: {project.id}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
              <Button variant="ghost" size="icon">
                <MoreVertical className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Overview Card */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Project Details</CardTitle>
                    <CardDescription>Posted {project.datePosted}</CardDescription>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Key Info */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Location</p>
                      <p className="text-sm font-medium text-slate-900">{project.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Budget Range</p>
                      <p className="text-sm font-medium text-slate-900">{project.budget}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Timeline</p>
                      <p className="text-sm font-medium text-slate-900">{project.estimatedDuration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-slate-400" />
                    <div>
                      <p className="text-xs text-slate-500">Category</p>
                      <p className="text-sm font-medium text-slate-900">{project.category}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Project Description</h3>
                  <div className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
                    {project.description}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Project Photos</h3>
                  <div className="relative">
                    <div className="aspect-video rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={project.photos[currentPhotoIndex]}
                        alt={`Project photo ${currentPhotoIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {project.photos.length > 1 && (
                      <>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                          onClick={prevPhoto}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </Button>
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
                          onClick={nextPhoto}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </Button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                          {project.photos.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentPhotoIndex(idx)}
                              className={`w-2 h-2 rounded-full transition-all ${
                                idx === currentPhotoIndex
                                  ? 'bg-white w-6'
                                  : 'bg-white/60 hover:bg-white/80'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Documents */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">Project Documents</h3>
                  <div className="space-y-2">
                    {project.documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-[#f9a825]" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900">{doc.name}</p>
                            <p className="text-xs text-slate-500">{doc.size}</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bids Section */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">Contractor Bids</CardTitle>
                    <CardDescription>
                      {bids.filter(b => b.status === 'pending').length} contractors have submitted bids
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {bids.map((bid, index) => (
                    <div key={bid.id}>
                      {index > 0 && <Separator className="my-4" />}
                      <div className="space-y-4">
                        {/* Contractor Header */}
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Avatar className="w-12 h-12 border-2 border-slate-200">
                              <AvatarImage src={bid.contractorAvatar} />
                              <AvatarFallback>{bid.contractorName[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold text-slate-900">{bid.contractorName}</h4>
                                {bid.verified && (
                                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                                    <Shield className="w-3 h-3 mr-1" />
                                    Verified
                                  </Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-3 mt-1 text-sm text-slate-600">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                  <span className="font-medium">{bid.rating}</span>
                                  <span className="text-slate-400">({bid.reviewCount})</span>
                                </div>
                                <span className="text-slate-300">•</span>
                                <div className="flex items-center gap-1">
                                  <Award className="w-4 h-4 text-slate-400" />
                                  {bid.completedJobs} jobs
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-slate-900">{bid.bidAmount}</div>
                            <p className="text-xs text-slate-500">Est. {bid.estimatedDuration}</p>
                          </div>
                        </div>

                        {/* Bid Details */}
                        <div className="pl-15">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <p className="text-sm text-slate-700 leading-relaxed">{bid.coverLetter}</p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-between pl-15">
                          <p className="text-xs text-slate-500">Submitted {bid.submittedDate}</p>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onMessageContractor(bid.id)}
                            >
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Message
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              onClick={() => handleRejectBid(bid.id)}
                            >
                              <X className="w-4 h-4 mr-2" />
                              Decline
                            </Button>
                            <Button
                              size="sm"
                              className="bg-[#f9a825] hover:bg-[#e39922] text-white"
                              onClick={() => handleAcceptBid(bid)}
                            >
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Accept Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Project Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-[#f9a825]" />
                    <span className="text-sm font-medium text-slate-900">Bids Received</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">{bids.length}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-slate-400" />
                    <span className="text-sm font-medium text-slate-900">Days Active</span>
                  </div>
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
              </CardContent>
            </Card>

            {/* Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Project Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            item.status === 'completed'
                              ? 'bg-emerald-100 text-emerald-600'
                              : item.status === 'pending'
                              ? 'bg-amber-100 text-amber-600'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {item.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <Clock className="w-4 h-4" />
                          )}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-12 bg-slate-200 my-1" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <p className="text-sm font-medium text-slate-900">{item.event}</p>
                        <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Edit Project Details
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message All Bidders
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                  size="sm"
                  onClick={() => setShowCancelDialog(true)}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel Project
                </Button>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-blue-900 text-sm mb-1">Need Help?</h4>
                    <p className="text-xs text-blue-700 mb-3">
                      Our support team is here to help you choose the right contractor for your project.
                    </p>
                    <Button variant="outline" size="sm" className="bg-white hover:bg-blue-50 text-blue-700 border-blue-300">
                      Contact Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Accept Bid Dialog */}
      <Dialog open={showAcceptDialog} onOpenChange={setShowAcceptDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Accept Bid from {selectedBid?.contractorName}?</DialogTitle>
            <DialogDescription>
              By accepting this bid, you'll be moving forward with this contractor. Other contractors will be notified that you've chosen someone else.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">What happens next:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>The contractor will be notified of your acceptance</li>
                    <li>You'll be connected to finalize project details</li>
                    <li>Payment terms and schedule will be established</li>
                    <li>Other bids will be automatically declined</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowAcceptDialog(false)}>
              Cancel
            </Button>
            <Button className="bg-[#f9a825] hover:bg-[#e39922]" onClick={confirmAcceptBid}>
              Confirm & Accept
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Cancel Project Dialog */}
      <Dialog open={showCancelDialog} onOpenChange={setShowCancelDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Project?</DialogTitle>
            <DialogDescription>
              Are you sure you want to cancel this project? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-red-800">
                  <p className="font-medium mb-1">This will:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Close the project to new bids</li>
                    <li>Notify all contractors who submitted bids</li>
                    <li>Move the project to your history</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowCancelDialog(false)}>
              Keep Project
            </Button>
            <Button variant="destructive" onClick={() => setShowCancelDialog(false)}>
              Cancel Project
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
