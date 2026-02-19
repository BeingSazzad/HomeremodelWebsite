import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search, SlidersHorizontal, MapPin, Calendar, DollarSign, Heart } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Slider } from '../ui/slider';

import img1 from "figma:asset/5f0570135bc7b72d5646e12689c066c06bce48b1.png";
import img2 from "figma:asset/937c83fbfdd95e4d187e27127ac2947796d9beb8.png";
import img3 from "figma:asset/387b0bea35a1325a72ced3b5cc77c50f66376488.png";
import img4 from "figma:asset/3d2fe9ddf1199e61125b6450b17b1d8f20b01130.png";
import img5 from "figma:asset/719820b5045b188699b99ea719c0a7b8226d2e64.png";

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
                        <div
                            key={project.id}
                            onClick={() => onNavigate?.('project-details')}
                            className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur px-3 py-1 rounded-full">
                                    <span className="text-xs font-medium text-white">{project.category}</span>
                                </div>
                                <button className="absolute top-3 right-3 size-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors">
                                    <Heart className="size-4 text-slate-600" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#f9a825] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <DollarSign className="size-4 text-[#f9a825]" />
                                        <span className="font-medium">Budget: {project.budget}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <Calendar className="size-4 text-[#f9a825]" />
                                        <span>Timeline: {project.timeline}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-slate-600">
                                        <MapPin className="size-4 text-[#f9a825]" />
                                        <span>{project.address}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}