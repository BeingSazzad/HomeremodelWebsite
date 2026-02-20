import { useState } from 'react';
import { Star, ThumbsUp, Filter, ChevronDown } from 'lucide-react';
import { Button } from '../ui/button';

interface Review {
  id: string;
  homeownerName: string;
  homeownerAvatar: string;
  rating: number;
  date: string;
  projectType: string;
  reviewText: string;
  photos?: string[];
  contractorResponse?: string;
}

const mockReviews: Review[] = [
  {
    id: '1',
    homeownerName: 'Sarah Martinez',
    homeownerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    date: 'Feb 10, 2026',
    projectType: 'Kitchen Renovation',
    reviewText: 'John and his team did an absolutely fantastic job on our kitchen remodel! They were professional, punctual, and delivered exceptional quality work. The attention to detail was impressive, and they stayed within our budget. Highly recommend!',
    photos: [
      'https://images.unsplash.com/photo-1762811003338-aef30274513b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwcmVub3ZhdGlvbiUyMGludGVyaW9yJTIwd2hpdGUlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzNTF8MA&ixlib=rb-4.1.0&q=80&w=300',
      'https://images.unsplash.com/photo-1758548157243-f4ef3e614684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBraXRjaGVuJTIwaW50ZXJpb3IlMjB3aGl0ZSUyMHdvb2QlMjBjYWJpbmV0c3xlbnwxfHx8fDE3NzE0NjkzODl8MA&ixlib=rb-4.1.0&q=80&w=300',
    ],
    contractorResponse: 'Thank you so much, Sarah! It was a pleasure working with you and your family. We\'re thrilled you love the new kitchen!'
  },
  {
    id: '2',
    homeownerName: 'Michael Chen',
    homeownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    date: 'Jan 28, 2026',
    projectType: 'Bathroom Remodel',
    reviewText: 'Outstanding work! John transformed our outdated bathroom into a modern spa-like retreat. Communication was excellent throughout the project, and the craftsmanship is top-notch.',
  },
  {
    id: '3',
    homeownerName: 'Emily Rodriguez',
    homeownerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 4,
    date: 'Jan 15, 2026',
    projectType: 'Basement Finishing',
    reviewText: 'Great experience overall. The project was completed on time and looks fantastic. Minor communication hiccups at the beginning, but everything was resolved quickly.',
  },
  {
    id: '4',
    homeownerName: 'David Thompson',
    homeownerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    date: 'Dec 20, 2025',
    projectType: 'Home Addition',
    reviewText: 'John exceeded all our expectations! The addition blends perfectly with our existing home. His team was respectful, clean, and incredibly skilled. Worth every penny!',
    photos: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300&h=200&fit=crop'
    ],
  },
  {
    id: '5',
    homeownerName: 'Jennifer Lee',
    homeownerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    date: 'Dec 5, 2025',
    projectType: 'Kitchen Renovation',
    reviewText: 'Absolutely love our new kitchen! John provided excellent guidance on design choices and material selection. The project stayed on schedule and within budget.',
  }
];

export function ContractorReviews() {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rating'>('recent');
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Calculate rating breakdown
  const totalReviews = mockReviews.length;
  const averageRating = mockReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;
  const ratingBreakdown = [5, 4, 3, 2, 1].map(rating => ({
    stars: rating,
    count: mockReviews.filter(r => r.rating === rating).length,
    percentage: (mockReviews.filter(r => r.rating === rating).length / totalReviews) * 100
  }));

  // Filter and sort reviews
  let filteredReviews = filterRating === 'all' 
    ? mockReviews 
    : mockReviews.filter(r => r.rating === filterRating);

  filteredReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') return new Date(b.date).getTime() - new Date(a.date).getTime();
    if (sortBy === 'rating') return b.rating - a.rating;
    return 0;
  });

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6'
    };

    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'fill-[#f9a825] text-[#f9a825]' : 'fill-slate-200 text-slate-200'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex-1 bg-white rounded-xl p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Reviews & Ratings</h1>
        <p className="text-slate-500">See what homeowners are saying about your work</p>
      </div>

      {/* Rating Overview */}
      <div className="bg-gradient-to-br from-[#fffbf0] to-white border border-[#f9a825]/30 rounded-xl p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Overall Rating */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl font-bold text-slate-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            {renderStars(Math.round(averageRating), 'lg')}
            <p className="text-slate-600 mt-3">
              Based on <span className="font-semibold">{totalReviews} reviews</span>
            </p>
          </div>

          {/* Right: Rating Breakdown */}
          <div className="space-y-2">
            {ratingBreakdown.map(({ stars, count, percentage }) => (
              <button
                key={stars}
                onClick={() => setFilterRating(stars)}
                className="w-full flex items-center gap-3 hover:bg-white/50 p-2 rounded-lg transition-colors group"
              >
                <div className="flex items-center gap-1 w-16">
                  <span className="font-medium text-slate-700">{stars}</span>
                  <Star className="size-4 fill-[#f9a825] text-[#f9a825]" />
                </div>
                <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#f9a825] transition-all group-hover:bg-[#e69b20]"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-slate-600 w-12 text-right">{count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setFilterRating('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filterRating === 'all'
                ? 'bg-[#f9a825] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All ({totalReviews})
          </button>
          {[5, 4, 3].map(rating => {
            const count = mockReviews.filter(r => r.rating === rating).length;
            if (count === 0) return null;
            return (
              <button
                key={rating}
                onClick={() => setFilterRating(rating)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filterRating === rating
                    ? 'bg-[#f9a825] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {rating} ⭐ ({count})
              </button>
            );
          })}
        </div>

        <div className="relative">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <Filter className="size-4" />
            <span className="font-medium text-slate-700">
              Sort: {sortBy === 'recent' ? 'Most Recent' : 'Highest Rating'}
            </span>
            <ChevronDown className="size-4" />
          </button>

          {showFilterDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
              {[
                { value: 'recent', label: 'Most Recent' },
                { value: 'rating', label: 'Highest Rating' }
              ].map(option => (
                <button
                  key={option.value}
                  onClick={() => {
                    setSortBy(option.value as any);
                    setShowFilterDropdown(false);
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-slate-50 transition-colors ${
                    sortBy === option.value ? 'bg-slate-50 font-medium' : ''
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow"
          >
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-4">
                <img
                  src={review.homeownerAvatar}
                  alt={review.homeownerName}
                  className="size-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-slate-900">{review.homeownerName}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    {renderStars(review.rating, 'sm')}
                    <span className="text-sm text-slate-500">• {review.date}</span>
                  </div>
                  <span className="inline-block mt-1 text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full">
                    {review.projectType}
                  </span>
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-slate-700 leading-relaxed mb-4">
              {review.reviewText}
            </p>

            {/* Review Photos */}
            {review.photos && review.photos.length > 0 && (
              <div className="flex gap-3 mb-4">
                {review.photos.map((photo, index) => (
                  <div key={index} className="w-32 h-24 rounded-lg overflow-hidden">
                    <img
                      src={photo}
                      alt={`Review photo ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Contractor Response */}
            {review.contractorResponse && (
              <div className="bg-[#fffbf0] border border-[#f9a825]/20 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-900 mb-1">Your Response:</p>
                <p className="text-sm text-slate-700">{review.contractorResponse}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredReviews.length === 0 && (
        <div className="text-center py-16">
          <div className="size-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="size-10 text-slate-400" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No reviews found</h3>
          <p className="text-slate-500">
            {filterRating !== 'all'
              ? `No ${filterRating}-star reviews yet.`
              : 'Complete projects to start receiving reviews!'}
          </p>
        </div>
      )}
    </div>
  );
}