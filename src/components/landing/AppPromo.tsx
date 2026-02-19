import React from 'react';
import imgApp from "figma:asset/60e007a893d93069982f874e3ef59fc106bdfcae.png";
import svgPaths from "../../imports/svg-9yizay6lrh";

// SVG Components for Store Badges
const GooglePlayBadge = () => (
  <div className="h-[50px] w-auto cursor-pointer hover:opacity-90 transition-opacity">
      <svg className="h-full w-auto" viewBox="0 0 173 51" fill="none">
        <rect x="0.6375" y="0.6375" width="170.85" height="49.725" rx="5.7375" fill="black" stroke="#A6A6A6" strokeWidth="1.275" />
        <path d={svgPaths.p1d13a800} fill="white" />
        <path d={svgPaths.p28f61e00} fill="white" />
        <g>
            <path d={svgPaths.p398bbc00} fill="#EA4335" />
            <path d={svgPaths.p2f5e65ef} fill="#FBBC04" />
            <path d={svgPaths.pa936d00} fill="#4285F4" />
            <path d={svgPaths.p31215480} fill="#34A853" />
        </g>
      </svg>
  </div>
);

const AppStoreBadge = () => (
  <div className="h-[50px] w-auto cursor-pointer hover:opacity-90 transition-opacity">
      <svg className="h-full w-auto" viewBox="0 0 153 51" fill="none">
        <rect x="0.6375" y="0.6375" width="151.725" height="49.725" rx="8.2875" fill="#0C0D10" stroke="#A6A6A6" strokeWidth="1.275" />
         <g>
            <path d={svgPaths.p156bac00} fill="white" />
            <path d={svgPaths.p2e68ae80} fill="white" />
            <path d={svgPaths.p14e65500} fill="white" />
            <path d={svgPaths.pc6f9e80} fill="white" />
            <path d={svgPaths.p18fb7e00} fill="white" />
            <path d={svgPaths.p140d1d80} fill="white" />
            <path d={svgPaths.p23fe4e00} fill="white" />
            <path d={svgPaths.p306f3c00} fill="white" />
          </g>
          <g>
            <path d={svgPaths.p1566ffc0} fill="white" />
            <path d={svgPaths.pb647480} fill="white" />
            <path d={svgPaths.p23385d80} fill="white" />
            <path d={svgPaths.p3eb4b800} fill="white" />
            <path d={svgPaths.p2ddeae80} fill="white" />
            <path d={svgPaths.p1a9a4500} fill="white" />
            <path d={svgPaths.p479b700} fill="white" />
            <path d={svgPaths.p2d9f7e00} fill="white" />
            <path d={svgPaths.p31d2f900} fill="white" />
            <path d={svgPaths.p269c8b00} fill="white" />
            <path d={svgPaths.p1b307780} fill="white" />
            <path d={svgPaths.p3342b00} fill="white" />
            <path d={svgPaths.p2c0ad200} fill="white" />
          </g>
          <g>
            <path d={svgPaths.p11948480} fill="white" />
            <path d={svgPaths.p38c6f280} fill="white" />
          </g>
      </svg>
  </div>
);

export function AppPromo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
           
           <div className="w-full lg:w-1/2">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
               It’s Now Easier to <span className="text-[#f9a825]">Remodel</span> your home with Our Mobile App
             </h2>
             <p className="text-slate-500 text-lg mb-10 leading-relaxed">
               Transform your home effortlessly with our innovative remodeling app, connecting you with top contractors and designers. From planning to project tracking, get quotes and manage everything in one place.
             </p>
             
             <div className="flex flex-wrap gap-4">
                <GooglePlayBadge />
                <AppStoreBadge />
             </div>
           </div>

           <div className="w-full lg:w-1/2 flex justify-center">
             <div className="relative w-full max-w-[500px]">
                <img src={imgApp} alt="Mobile App Interface" className="w-full h-auto drop-shadow-2xl" />
             </div>
           </div>

        </div>
      </div>
    </section>
  );
}
