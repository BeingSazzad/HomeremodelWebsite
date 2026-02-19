import React, { useState } from 'react';
import { Search, MapPin, DollarSign, Clock, SlidersHorizontal, ChevronDown, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ProjectCard } from '../shared/ProjectCard';

// Using Unsplash images for projects
const img1 = "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop";
const img2 = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop";
const img3 = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop";
const img4 = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop";
const img5 = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop";

// Generate more dummy data
const allProjects = [
    { id: 1, title: "Modern Kitchen Renovation with Custom Cabinets", address: "Austin, TX", budget: "$35,000 - $45,000", timeline: "2-3 months", image: img1, category: "Kitchen", status: "Active" },
    { id: 2, title: "Living Room Makeover", address: "Dallas, TX", budget: "$25,000 - $35,000", timeline: "1-2 months", image: img2, category: "Living Room", status: "Active" },
    { id: 3, title: "Luxury Bathroom Design", address: "Houston, TX", budget: "$15,000 - $25,000", timeline: "3-4 months", image: img3, category: "Bathroom", status: "Active" },
    { id: 4, title: "Backyard Patio Setup", address: "San Antonio, TX", budget: "$8,000 - $15,000", timeline: "1-2 months", image: img4, category: "Outdoor", status: "Active" },
    { id: 5, title: "Whole Home Paint", address: "Austin, TX", budget: "$5,000 - $10,000", timeline: "2-3 months", image: img5, category: "Paint", status: "Active" },
    { id: 6, title: "Master Bedroom Update", address: "Fort Worth, TX", budget: "$20,000 - $30,000", timeline: "2-3 months", image: img2, category: "Bedroom", status: "Active" },
    { id: 7, title: "Kitchen Island Install", address: "Plano, TX", budget: "$12,000 - $18,000", timeline: "1-2 months", image: img1, category: "Kitchen", status: "Active" },
    { id: 8, title: "Garage Conversion", address: "Arlington, TX", budget: "$30,000 - $40,000", timeline: "3-4 months", image: img4, category: "Renovation", status: "Active" },
    { id: 9, title: "Modern Kitchen Renovation with Custom Cabinets", address: "Austin, TX", budget: "$35,000 - $45,000", timeline: "2-3 months", image: img1, category: "Kitchen", status: "Active" },
    { id: 10, title: "Modern Kitchen Renovation with Custom Cabinets", address: "Austin, TX", budget: "$35,000 - $45,000", timeline: "2-3 months", image: img3, category: "Kitchen", status: "Active" },
    { id: 11, title: "Modern Kitchen Renovation with Custom Cabinets", address: "Austin, TX", budget: "$35,000 - $45,000", timeline: "2-3 months", image: img2, category: "Bathroom", status: "Active" },
    { id: 12, title: "Modern Kitchen Renovation with Custom Cabinets", address: "Austin, TX", budget: "$35,000 - $45,000", timeline: "2-3 months", image: img5, category: "Kitchen", status: "Active" },
];

interface FindProjectsProps {
    onNavigate?: (page: string) => void;
}

export function FindProjects({ onNavigate }: FindProjectsProps) {
    const [priceRange, setPriceRange] = useState([0, 50000]);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const categories = ["All", "Kitchen", "Bathroom", "Living Room", "Outdoor", "Paint", "Bedroom", "Renovation"];

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            {/* Header Section */}
            <div className="bg-gradient-to-br from-[#fffbf0] to-white border-b border-slate-200 pb-12">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold text-slate-900 mb-3">Find Projects</h1>
                        <p className="text-slate-600 text-lg">Browse available renovation projects and submit your quotes</p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex gap-4 items-center">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
                            <Input
                                placeholder="Search projects by title, description, or location..."
                                className="h-14 pl-12 pr-4 text-base border-slate-300 rounded-xl"
                            />
                        </div>
                        <Button
                            variant="outline"
                            className="h-14 px-6 gap-2 border-slate-300 rounded-xl"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <SlidersHorizontal className="size-5" />
                            Filters
                        </Button>
                    </div>
                </div>
            </div>

            {/* Category Tabs */}
            <div className="border-b border-slate-200 bg-white sticky top-0 z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategories([cat])}
                                className={`px-6 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                                    selectedCategories.includes(cat) || (cat === "All" && selectedCategories.length === 0)
                                        ? 'bg-[#f9a825] text-white'
                                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 py-8">
                {/* Results Header */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-slate-600">
                        <span className="font-bold text-slate-900">{allProjects.length}</span> projects found
                    </p>
                    <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-900 cursor-pointer focus:ring-2 focus:ring-[#f9a825] focus:border-transparent outline-none">
                        <option>Newest First</option>
                        <option>Budget: Low to High</option>
                        <option>Budget: High to Low</option>
                        <option>Timeline: Shortest First</option>
                    </select>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            onClick={() => onNavigate?.('project-details')}
                            image={project.image}
                            title={project.title}
                            address={project.address}
                            budget={project.budget}
                            timeline={project.timeline}
                            category={project.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}