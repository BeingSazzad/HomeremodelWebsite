import { useEffect, useState } from 'react';
import { Bell, CheckCircle, XCircle, MapPin, Wrench, DollarSign, Calendar, Lock } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  projectType: string;
  zipCode: string;
  budgetRange: string;
  startTimeframe: string;
  description: string;
  photos: string[];
  postedAt: Date;
  homeownerId: string;
  homeownerName: string;
  homeownerCity: string;
  status: 'active' | 'closed';
  quotesReceived: number;
  maxQuotes: number;
}

interface Contractor {
  id: string;
  name: string;
  trades: string[];
  serviceZipCodes: string[];
  isApproved: boolean; // compliance docs approved
  hasActiveSubscription: boolean; // $399/month or $4,389/year
  subscriptionType: 'monthly' | 'yearly' | null;
}

interface JobRoutingSystemProps {
  currentContractorId?: string;
  mockJobs?: Job[];
  mockContractor?: Contractor;
}

export function JobRoutingSystem({ 
  currentContractorId = 'contractor-123',
  mockJobs,
  mockContractor
}: JobRoutingSystemProps) {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [contractor, setContractor] = useState<Contractor | null>(null);
  const [matchedJobs, setMatchedJobs] = useState<Job[]>([]);
  const [notifications, setNotifications] = useState<string[]>([]);

  // Mock contractor data
  useEffect(() => {
    const defaultContractor: Contractor = mockContractor || {
      id: currentContractorId,
      name: 'John Smith',
      trades: ['bathroom', 'kitchen', 'painting_interior'],
      serviceZipCodes: ['10001', '10002', '10003', '10004', '10005'],
      isApproved: true,
      hasActiveSubscription: true,
      subscriptionType: 'monthly'
    };
    setContractor(defaultContractor);
  }, [currentContractorId, mockContractor]);

  // Mock jobs data
  useEffect(() => {
    const defaultJobs: Job[] = mockJobs || [
      {
        id: 'job-1',
        title: 'Bathroom Remodel - Master Suite',
        projectType: 'bathroom',
        zipCode: '10001',
        budgetRange: '$20,000 – $40,000',
        startTimeframe: 'ASAP (0–30 days)',
        description: 'Looking to completely renovate master bathroom. Remove tub, install walk-in shower with glass doors, new tile throughout, double vanity, new fixtures. Approximately 120 sq ft.',
        photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
        postedAt: new Date(Date.now() - 30 * 60 * 1000),
        homeownerId: 'homeowner-1',
        homeownerName: 'Sarah Johnson',
        homeownerCity: 'New York, NY',
        status: 'active',
        quotesReceived: 2,
        maxQuotes: 5
      },
      {
        id: 'job-2',
        title: 'Interior Painting - 3 Bedrooms',
        projectType: 'painting_interior',
        zipCode: '10002',
        budgetRange: '$5,000 – $10,000',
        startTimeframe: '1–2 months',
        description: 'Need professional painting for 3 bedrooms, hallway, and living room. Walls and ceilings. Some minor wall repairs needed. Approximately 2000 sq ft total.',
        photos: ['photo1.jpg', 'photo2.jpg'],
        postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        homeownerId: 'homeowner-2',
        homeownerName: 'Michael Chen',
        homeownerCity: 'New York, NY',
        status: 'active',
        quotesReceived: 1,
        maxQuotes: 5
      },
      {
        id: 'job-3',
        title: 'Kitchen Remodel - Full Renovation',
        projectType: 'kitchen',
        zipCode: '10003',
        budgetRange: '$40,000 – $75,000',
        startTimeframe: '2–3 months',
        description: 'Complete kitchen gut and remodel. New cabinets, countertops, appliances, flooring, lighting. Open up wall to dining room. 250 sq ft kitchen.',
        photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
        postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
        homeownerId: 'homeowner-3',
        homeownerName: 'Emily Rodriguez',
        homeownerCity: 'New York, NY',
        status: 'active',
        quotesReceived: 4,
        maxQuotes: 5
      },
      {
        id: 'job-4',
        title: 'Electrical Panel Upgrade',
        projectType: 'electrical',
        zipCode: '10001',
        budgetRange: '$5,000 – $10,000',
        startTimeframe: 'ASAP (0–30 days)',
        description: 'Need to upgrade 100amp panel to 200amp. House built in 1960s, current panel insufficient for modern needs.',
        photos: ['photo1.jpg'],
        postedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
        homeownerId: 'homeowner-4',
        homeownerName: 'David Kim',
        homeownerCity: 'New York, NY',
        status: 'active',
        quotesReceived: 5,
        maxQuotes: 5
      }
    ];
    setJobs(defaultJobs);
  }, [mockJobs]);

  // Job Routing Algorithm
  useEffect(() => {
    if (!contractor || !jobs.length) return;

    const matched = jobs.filter(job => {
      // 1. Check if job is active
      if (job.status !== 'active') return false;

      // 2. Check if job still has available slots
      if (job.quotesReceived >= job.maxQuotes) return false;

      // 3. Check if contractor's trade matches job type
      const tradeMatches = contractor.trades.includes(job.projectType);
      if (!tradeMatches) return false;

      // 4. Check if contractor serves that ZIP code
      const zipMatches = contractor.serviceZipCodes.includes(job.zipCode);
      if (!zipMatches) return false;

      // 5. Check if contractor is approved (compliance docs)
      if (!contractor.isApproved) return false;

      // 6. Check if contractor has active subscription
      if (!contractor.hasActiveSubscription) return false;

      return true;
    });

    setMatchedJobs(matched);

    // Create notifications for new jobs
    const newNotifications = matched.map(job => 
      `New job match: ${job.title} in ${job.zipCode}`
    );
    setNotifications(newNotifications);
  }, [contractor, jobs]);

  if (!contractor) {
    return (
      <div className="bg-white rounded-xl p-8 text-center">
        <p className="text-slate-600">Loading contractor information...</p>
      </div>
    );
  }

  // Warning if not eligible for jobs
  if (!contractor.isApproved || !contractor.hasActiveSubscription) {
    return (
      <div className="bg-white rounded-xl border-2 border-amber-500 p-8">
        <div className="flex items-start gap-4">
          <XCircle className="size-12 text-amber-600 flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              You're Not Receiving Jobs
            </h3>
            {!contractor.isApproved && (
              <p className="text-slate-700 mb-2">
                ❌ <strong>Compliance Documents:</strong> Your documents are pending approval or not submitted.
              </p>
            )}
            {!contractor.hasActiveSubscription && (
              <p className="text-slate-700 mb-2">
                ❌ <strong>Subscription:</strong> You need an active subscription ($399/month or $4,389/year).
              </p>
            )}
            <p className="text-sm text-slate-600 mt-4">
              Complete the requirements above to start receiving job notifications automatically.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Status Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-16 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="size-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Job Routing Active</h3>
              <p className="text-slate-700">
                You're receiving jobs for: <strong>{contractor.trades.join(', ')}</strong>
              </p>
              <p className="text-sm text-slate-600">
                Service areas: {contractor.serviceZipCodes.join(', ')}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white border-2 border-green-500 rounded-lg px-4 py-2">
              <p className="text-3xl font-bold text-green-600">{matchedJobs.length}</p>
              <p className="text-sm text-slate-600">Available Jobs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Bell className="size-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-semibold text-blue-900 mb-2">Recent Notifications</p>
              <ul className="space-y-1">
                {notifications.slice(0, 5).map((notif, i) => (
                  <li key={i} className="text-sm text-blue-800">• {notif}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Matched Jobs Feed */}
      <div>
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Jobs Matching Your Profile ({matchedJobs.length})
        </h3>

        {/* Privacy Protection Notice */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="size-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="size-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-blue-900 mb-1">🔒 Privacy Protected</h4>
              <p className="text-sm text-blue-800 leading-relaxed">
                Homeowner contact information (full name, phone, email, exact address) is <strong>hidden until they accept your quote</strong>. 
                You can see city, ZIP code, and project details to submit competitive quotes.
              </p>
            </div>
          </div>
        </div>
        
        {matchedJobs.length === 0 ? (
          <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8 text-center">
            <p className="text-slate-600">No jobs available at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {matchedJobs.map(job => (
              <div
                key={job.id}
                className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-[#f9a825] hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{job.title}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="size-4 text-[#f9a825]" />
                        <span>{job.homeownerCity} • ZIP: {job.zipCode}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wrench className="size-4 text-[#f9a825]" />
                        <span className="capitalize">{job.projectType.replace('_', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="size-4 text-[#f9a825]" />
                        <span>{job.budgetRange}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="size-4 text-[#f9a825]" />
                        <span>{job.startTimeframe}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
                      {job.maxQuotes - job.quotesReceived} / {job.maxQuotes} Slots Open
                    </div>
                    <p className="text-xs text-slate-500">
                      Posted {Math.floor((Date.now() - job.postedAt.getTime()) / (1000 * 60))} min ago
                    </p>
                  </div>
                </div>

                <p className="text-slate-700 mb-4 line-clamp-2">{job.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex -space-x-2">
                    {job.photos.slice(0, 3).map((_, i) => (
                      <div
                        key={i}
                        className="size-12 bg-slate-200 border-2 border-white rounded-lg"
                      />
                    ))}
                    {job.photos.length > 3 && (
                      <div className="size-12 bg-slate-700 border-2 border-white rounded-lg flex items-center justify-center text-xs text-white font-bold">
                        +{job.photos.length - 3}
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{job.photos.length} photos</p>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-[#f9a825] text-white py-3 rounded-lg font-bold hover:bg-[#e69b20] transition-colors">
                    View Details & Submit Quote
                  </button>
                  <button className="px-6 py-3 border-2 border-slate-300 text-slate-700 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                    Save for Later
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-sm text-blue-800">
          <strong>How it works:</strong> Jobs are automatically sent to you when they match your selected trades and service ZIP codes. 
          You have 24 hours to submit a quote, or until all 5 quote slots are filled (whichever comes first).
        </p>
      </div>
    </div>
  );
}