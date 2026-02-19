import React from 'react';

// Using Unsplash images for gallery
const imgA = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop";
const imgB = "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop";
const imgC = "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop";
const imgD = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop";
const imgE = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop";
const imgF = "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop";
const imgG = "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=400&h=300&fit=crop";
const imgH = "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400&h=300&fit=crop";

const galleryImages = [
  { src: imgA, alt: "Modern kitchen renovation", tall: false },
  { src: imgB, alt: "Living room remodel", tall: true },
  { src: imgC, alt: "Bathroom renovation", tall: false },
  { src: imgD, alt: "Bedroom interior", tall: false },
  { src: imgE, alt: "Exterior renovation", tall: true },
  { src: imgF, alt: "Home addition", tall: false },
  { src: imgG, alt: "Deck construction", tall: false },
  { src: imgH, alt: "Basement finishing", tall: false },
];

export function MarketplaceGallery() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Built Through Our <span className="text-[#f9a825]">Marketplace</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real transformations from homeowners who trusted Homzz to connect them with the right professionals.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-0">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ height: img.tall ? '320px' : '200px' }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">{img.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Join thousands of homeowners who've transformed their spaces</p>
          <button className="bg-[#f9a825] hover:bg-[#e39922] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-[#f9a825]/30 hover:-translate-y-0.5">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}