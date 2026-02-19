import React from 'react';
import imgA from "figma:asset/c41389781dc1ebac76c4dd751c8db21816046336.png";
import imgB from "figma:asset/a4398394d01e998b169e32fe1288a430ff0d921b.png";
import imgC from "figma:asset/2803bce46a5c48eba7a48dc1a585e89e8199c269.png";
import imgD from "figma:asset/8e54ea7d0951993040ce837014eeaf29c49f44b3.png";
import imgE from "figma:asset/8651489fc7d61be5c9b9af58a2fbafb3d9a521fb.png";
import imgF from "figma:asset/cf05fca8cf509cd19864179f6009df3a9f0c4f5b.png";
import imgG from "figma:asset/33265ec9b6efaf42e2380b258539cdc4cce1ae2a.png";
import imgH from "figma:asset/b6bbde269bffa759d755c97a4b2c2d415df4375f.png";
import imgI from "figma:asset/88b86e0812a81221f7c2ab924b408d8efcf48b46.png";
import imgJ from "figma:asset/8bbdb3b32c9e4efc169eb62b73727348d3244329.png";

const galleryImages = [
  { src: imgA, alt: "Modern kitchen renovation", tall: false },
  { src: imgB, alt: "Living room remodel", tall: true },
  { src: imgC, alt: "Bathroom renovation", tall: false },
  { src: imgD, alt: "Bedroom interior", tall: false },
  { src: imgE, alt: "Exterior renovation", tall: true },
  { src: imgF, alt: "Home addition", tall: false },
  { src: imgG, alt: "Deck construction", tall: false },
  { src: imgH, alt: "Basement finishing", tall: false },
  { src: imgI, alt: "Flooring installation", tall: false },
  { src: imgJ, alt: "Full home remodel", tall: true },
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
