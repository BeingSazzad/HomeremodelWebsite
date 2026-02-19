import React from 'react';
import { Bath, ChefHat, Home, Sofa, Trees, Paintbrush, Hammer, Sparkles } from 'lucide-react';

const categories = [
  {
    icon: <ChefHat className="w-8 h-8" />,
    title: "Kitchen",
    count: "2,340 Projects",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: <Bath className="w-8 h-8" />,
    title: "Bathroom",
    count: "1,856 Projects",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: <Sofa className="w-8 h-8" />,
    title: "Living Room",
    count: "1,532 Projects",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Whole Home",
    count: "892 Projects",
    color: "from-green-500 to-green-600"
  },
  {
    icon: <Trees className="w-8 h-8" />,
    title: "Outdoor",
    count: "1,245 Projects",
    color: "from-teal-500 to-teal-600"
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Painting",
    count: "3,124 Projects",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: <Hammer className="w-8 h-8" />,
    title: "Basement",
    count: "734 Projects",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Custom",
    count: "1,567 Projects",
    color: "from-indigo-500 to-indigo-600"
  }
];

interface CategoriesProps {
  onViewCategory?: (category: string) => void;
}

export function Categories({ onViewCategory }: CategoriesProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Browse by <span className="text-[#f9a825]">Category</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Find contractors specialized in your specific remodeling needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => onViewCategory?.(category.title)}
              className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-[#f9a825]/30"
            >
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-slate-900 mb-1">{category.title}</h4>
                  <p className="text-sm text-slate-500">{category.count}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#f9a825]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
