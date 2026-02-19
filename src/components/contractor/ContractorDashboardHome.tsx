import { useState } from 'react';
import { 
  TrendingUp, 
  Briefcase, 
  Star, 
  DollarSign, 
  Clock, 
  CheckCircle,
  MessageSquare,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { Button } from '../ui/button';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
}

function StatCard({ title, value, change, icon, bgColor, iconColor }: StatCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className={`size-12 ${bgColor} rounded-lg flex items-center justify-center`}>
          <div className={iconColor}>
            {icon}
          </div>
        </div>
        {change && (
          <div className={`flex items-center gap-1 text-sm font-medium ${
            change.type === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {change.type === 'increase' ? (
              <ArrowUpRight className="size-4" />
            ) : (
              <ArrowDownRight className="size-4" />
            )}
            <span>{change.value}%</span>
          </div>
        )}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-1">{value}</h3>
      <p className="text-sm text-slate-500">{title}</p>
    </div>
  );
}

interface RecentReview {
  id: string;
  homeownerName: string;
  homeownerAvatar: string;
  rating: number;
  date: string;
  reviewText: string;
  replied: boolean;
}

const mockRecentReviews: RecentReview[] = [
  {
    id: '1',
    homeownerName: 'Sarah Martinez',
    homeownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    date: '2 days ago',
    reviewText: 'Exceptional work on our kitchen renovation! Highly professional and delivered on time.',
    replied: false
  },
  {
    id: '2',
    homeownerName: 'Michael Chen',
    homeownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    date: '5 days ago',
    reviewText: 'Amazing transformation of our bathroom. The attention to detail was impressive!',
    replied: true
  }
];

export function ContractorDashboardHome({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedYear, setSelectedYear] = useState<number>(2026);
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Mock earnings data by year
  const earningsDataByYear: Record<number, number[]> = {
    2024: [28000, 26000, 31000, 35000, 33000, 38000, 40000, 42000, 39000, 41000, 38000, 45000],
    2025: [32000, 28000, 35000, 42000, 38000, 45000, 48000, 52000, 49000, 51000, 47000, 55000],
    2026: [48000, 52000, 51000, 49000, 54000, 58000, 62000, 59000, 61000, 63000, 60000, 65000]
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentYearData = earningsDataByYear[selectedYear];
  const maxValue = Math.max(...currentYearData);
  const minValue = Math.min(...currentYearData);

  // Calculate SVG path for line chart
  const chartWidth = 100; // percentage
  const chartHeight = 120; // pixels
  const points = currentYearData.map((value, index) => {
    const x = (index / (currentYearData.length - 1)) * chartWidth;
    const y = chartHeight - ((value - minValue) / (maxValue - minValue)) * chartHeight;
    return `${x},${y}`;
  }).join(' ');

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`size-4 ${
              star <= rating ? 'fill-[#f9a825] text-[#f9a825]' : 'fill-slate-200 text-slate-200'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleReplySubmit = (reviewId: string) => {
    console.log('Reply submitted:', replyText);
    setReplyingTo(null);
    setReplyText('');
  };

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back, John! Here's what's happening with your business.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Projects Completed"
          value="127"
          change={{ value: 12, type: 'increase' }}
          icon={<CheckCircle className="size-6" />}
          bgColor="bg-green-100"
          iconColor="text-green-600"
        />
        <StatCard
          title="Active Projects"
          value="8"
          change={{ value: 3, type: 'increase' }}
          icon={<Briefcase className="size-6" />}
          bgColor="bg-blue-100"
          iconColor="text-blue-600"
        />
        <StatCard
          title="Total Earnings"
          value="$542K"
          change={{ value: 18, type: 'increase' }}
          icon={<DollarSign className="size-6" />}
          bgColor="bg-[#fffbf0]"
          iconColor="text-[#f9a825]"
        />
        <StatCard
          title="Average Rating"
          value="4.9"
          icon={<Star className="size-6" />}
          bgColor="bg-purple-100"
          iconColor="text-purple-600"
        />
      </div>

      {/* Secondary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Response Rate</p>
              <p className="text-2xl font-bold text-slate-900">98%</p>
            </div>
            <div className="size-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <MessageSquare className="size-6 text-slate-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Pending Bids</p>
              <p className="text-2xl font-bold text-slate-900">5</p>
            </div>
            <div className="size-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <Clock className="size-6 text-slate-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-slate-900">$41.8K</p>
            </div>
            <div className="size-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
              <TrendingUp className="size-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Earnings Chart */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Earnings Overview</h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-slate-600">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(Number(e.target.value))}
                className="h-10 px-4 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-900 focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none cursor-pointer hover:border-slate-300 transition-colors"
              >
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
              </select>
            </div>
          </div>

          {/* Chart Container */}
          <div className="relative">
            {/* SVG Chart */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-64 mb-4"
            >
              {/* Grid lines */}
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="0"
                  y1={y}
                  x2="100"
                  y2={y}
                  stroke="#e2e8f0"
                  strokeWidth="0.2"
                />
              ))}

              {/* Gradient definition */}
              <defs>
                <linearGradient id="earningsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f9a825" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#f9a825" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              {/* Area under the line */}
              <path
                d={`M 0,100 L ${points} L 100,100 Z`}
                fill="url(#earningsGradient)"
              />

              {/* Line */}
              <polyline
                points={points}
                fill="none"
                stroke="#f9a825"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {currentYearData.map((value, index) => {
                const x = (index / (currentYearData.length - 1)) * 100;
                const y = 100 - ((value - minValue) / (maxValue - minValue)) * 100;
                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="1"
                    fill="#f9a825"
                    className="hover:r-2 transition-all cursor-pointer"
                  >
                    <title>{months[index]}: ${value.toLocaleString()}</title>
                  </circle>
                );
              })}
            </svg>

            {/* Month Labels */}
            <div className="grid grid-cols-12 gap-1 text-xs text-slate-500 text-center mb-4">
              {months.map((month, index) => (
                <div key={index} className="font-medium">
                  {month}
                </div>
              ))}
            </div>

            {/* Value Labels on Y-axis */}
            <div className="absolute left-0 top-0 -ml-16 h-64 flex flex-col justify-between text-xs text-slate-500">
              <span className="font-medium">${(maxValue / 1000).toFixed(0)}K</span>
              <span className="font-medium">${((maxValue + minValue) / 2 / 1000).toFixed(0)}K</span>
              <span className="font-medium">${(minValue / 1000).toFixed(0)}K</span>
            </div>
          </div>

          {/* Total Summary */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-sm text-slate-600 mb-1">Total Earnings</p>
                <p className="text-2xl font-bold text-[#f9a825]">
                  ${currentYearData.reduce((a, b) => a + b, 0).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Average/Month</p>
                <p className="text-2xl font-bold text-slate-900">
                  ${Math.round(currentYearData.reduce((a, b) => a + b, 0) / 12).toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Highest Month</p>
                <p className="text-2xl font-bold text-green-600">
                  ${maxValue.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border border-slate-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-5">Quick Actions</h2>
          <div className="space-y-3">
            <Button
              onClick={() => onNavigate('my-bids')}
              className="w-full bg-[#f9a825] hover:bg-[#e69b20] text-white justify-start"
            >
              <Briefcase className="size-4 mr-2" />
              View My Bids
            </Button>
            <Button
              onClick={() => onNavigate('my-projects')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <CheckCircle className="size-4 mr-2" />
              Manage Projects
            </Button>
            <Button
              onClick={() => onNavigate('available-projects')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <Star className="size-4 mr-2" />
              Browse Projects
            </Button>
            <Button
              onClick={() => onNavigate('profile')}
              variant="outline"
              className="w-full justify-start border-slate-200"
            >
              <Calendar className="size-4 mr-2" />
              Edit Profile
            </Button>
          </div>

          {/* Upcoming Deadlines */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Clock className="size-4 text-[#f9a825]" />
              Upcoming Deadlines
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="size-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Kitchen Renovation</p>
                  <p className="text-xs text-slate-500">Due in 3 days</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 bg-[#f9a825] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Bathroom Remodel</p>
                  <p className="text-xs text-slate-500">Due in 1 week</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="size-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-slate-900">Deck Installation</p>
                  <p className="text-xs text-slate-500">Due in 2 weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews Section */}
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-slate-900">Recent Reviews</h2>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('reviews')}
          >
            View All Reviews
          </Button>
        </div>

        <div className="space-y-4">
          {mockRecentReviews.map((review) => (
            <div
              key={review.id}
              className="border border-slate-200 rounded-lg p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-3">
                <img
                  src={review.homeownerAvatar}
                  alt={review.homeownerName}
                  className="size-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-slate-900">{review.homeownerName}</h3>
                      <p className="text-xs text-slate-500">{review.date}</p>
                    </div>
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-3">
                    {review.reviewText}
                  </p>

                  {/* Reply Section */}
                  {review.replied ? (
                    <div className="bg-[#fffbf0] border border-[#f9a825]/20 rounded-lg p-3 mt-3">
                      <p className="text-xs font-semibold text-slate-900 mb-1">Your Response:</p>
                      <p className="text-sm text-slate-700">
                        Thank you so much for your kind words! It was a pleasure working with you.
                      </p>
                    </div>
                  ) : replyingTo === review.id ? (
                    <div className="mt-3 space-y-2">
                      <textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder="Write your response..."
                        className="w-full min-h-[80px] p-3 bg-white border border-slate-200 rounded-lg text-sm resize-none focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none"
                      />
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleReplySubmit(review.id)}
                          className="bg-[#f9a825] hover:bg-[#e69b20] text-white text-sm"
                        >
                          Submit Reply
                        </Button>
                        <Button
                          onClick={() => setReplyingTo(null)}
                          variant="outline"
                          className="text-sm"
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      onClick={() => setReplyingTo(review.id)}
                      variant="outline"
                      size="sm"
                      className="border-[#f9a825] text-[#f9a825] hover:bg-[#f9a825]/10"
                    >
                      <MessageSquare className="size-3 mr-2" />
                      Reply to Review
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}