import React from 'react';
import { SlideData } from '../../types';
import { parseText } from '../Shared';

interface SlideProps {
  slide: SlideData;
}

export const StorySlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex h-full w-full bg-white relative overflow-hidden">
      {/* Left: Visual / Image Area (50%) */}
      <div className="w-1/2 h-full relative bg-gray-100 overflow-hidden border-r border-gray-200">
        {/* Noise Overlay for "Retro" feel */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-20" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        
        {/* Grayscale Filter Container */}
        <div className="w-full h-full filter grayscale contrast-125 brightness-95 scale-90 transition-all duration-1000 hover:grayscale-0 hover:scale-100 origin-center">
            {slide.visualContent}
        </div>
        
        {/* Caption / Tagline (Removed) */}
      </div>

      {/* Right: Text Area (50%) */}
      <div className="w-1/2 h-full p-12 lg:p-16 flex flex-col justify-center relative">
        
        {/* Main Manifesto */}
        <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black tracking-tighter text-dify-blue mb-2 leading-none animate-fade-in-up">
                {slide.title}
            </h1>

            {slide.subtitle && (
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight tracking-tight animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                    {slide.subtitle}
                </h2>
            )}
            
            <div className="w-24 h-2 bg-black animate-fade-in-up" style={{ animationDelay: '200ms' }}></div>

            {slide.content && (
                <div className="text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                    {slide.content.map((paragraph, idx) => (
                        <p key={idx} className="mb-6 last:mb-0">
                            {parseText(paragraph)}
                        </p>
                    ))}
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

