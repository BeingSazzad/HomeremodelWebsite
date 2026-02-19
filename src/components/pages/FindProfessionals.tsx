import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Search } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { ContractorCard } from '../shared/ContractorCard';

import imgC1 from "figma:asset/897c7bd0f0159a53e2b6dd5a20c620c7adeb8b67.png";
import imgC2 from "figma:asset/329100cff65a8f7a420cd06bbc44baa04da79791.png";
import imgC3 from "figma:asset/59d922f53cc68584a5b86e2d188dd821b7ff08b3.png";
import imgC4 from "figma:asset/c1bc56103fdce1c645141c72fd55574ec0b55d64.png";

const allContractors = [
    { id: 1, name: "Shanto Hasan", role: "General Contractor", experience: "10+ Years", rating: 4.9, image: imgC1, tags: ["Top Rated"], reviewCount: 124 },
    { id: 2, name: "Sarah Jenkins", role: "Interior Designer", experience: "8 Years", rating: 5.0, image: imgC2, tags: ["Best Value"], reviewCount: 89 },
    { id: 3, name: "Michael Chen", role: "Renovation Specialist", experience: "12 Years", rating: 4.8, image: imgC3, tags: ["Verified"], reviewCount: 56 },
    { id: 4, name: "David Wilson", role: "Architect", experience: "15 Years", rating: 4.9, image: imgC4, tags: ["Top Rated"], reviewCount: 210 },
    { id: 5, name: "Emily Stone", role: "Interior Designer", experience: "5 Years", rating: 4.7, image: imgC2, tags: [], reviewCount: 34 },
    { id: 6, name: "Robert Fox", role: "General Contractor", experience: "20+ Years", rating: 4.6, image: imgC3, tags: ["Verified"], reviewCount: 112 },
];

export function FindProfessionals() {
    return (
        <div className="container mx-auto px-4 py-24">
            <div className="flex flex-col md:flex-row gap-8">
                {/* Sidebar Filters */}
                <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">Search Pros</h3>
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <Input placeholder="Name or specialty..." className="pl-9" />
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Specialty</h3>
                        <div className="space-y-2">
                            {["General Contractor", "Interior Designer", "Architect", "Plumber", "Electrician"].map(role => (
                                <div key={role} className="flex items-center space-x-2">
                                    <Checkbox id={`role-${role}`} />
                                    <label htmlFor={`role-${role}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                        {role}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <Button className="w-full bg-[#f9a825] hover:bg-[#e39922]">Apply Filters</Button>
                </aside>

                {/* Main Content */}
                <div className="flex-grow">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-slate-900">Find Professionals</h1>
                        <div className="flex items-center gap-2 text-slate-500">
                            <span className="text-sm">Sort by:</span>
                            <select className="border-none bg-transparent font-medium text-slate-900 cursor-pointer focus:ring-0">
                                <option>Recommended</option>
                                <option>Highest Rated</option>
                                <option>Most Reviewed</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allContractors.map(contractor => (
                            <ContractorCard 
                                key={contractor.id}
                                name={contractor.name}
                                role={contractor.role}
                                experience={contractor.experience}
                                rating={contractor.rating}
                                image={contractor.image}
                                tags={contractor.tags}
                                reviewCount={contractor.reviewCount}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
