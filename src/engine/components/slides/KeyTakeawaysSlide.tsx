import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface SlideProps {
  slide: SlideData;
}

export const KeyTakeawaysSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-6 sm:p-8 md:p-12 lg:p-16 relative overflow-hidden bg-white">
      <BackgroundPattern />
      
      {/* Header Section */}
      <div className="relative z-10 mb-8 sm:mb-12">
        <SlideHeader title={slide.title} subtitle={slide.subtitle} />
        {slide.content && slide.content.length > 0 && (
          <div className="mt-4 text-xl sm:text-2xl text-gray-600 max-w-4xl font-light leading-relaxed border-l-4 border-dify-blue pl-6 animate-fade-in-up">
            {slide.content.map((text, idx) => (
              <p key={idx} className="mb-2 last:mb-0">
                {text.replace(/\*\*(.*?)\*\*/g, (_, match) => match)} {/* Simple strip bold for this intro style */}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Grid Section */}
      <div className="flex-1 min-h-0 relative z-10 overflow-y-auto pr-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pb-8">
          {slide.items?.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100 + 200}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-blue-50 text-dify-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon || <CheckCircle2 size={24} />}
                </div>
                <span className="text-4xl font-black text-gray-100 group-hover:text-blue-50 transition-colors duration-300 select-none">
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-dify-blue transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-dify-blue text-sm font-bold">
                <span>Learn more</span>
                <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Banner (if any) */}
      {slide.bottomBanner && (
        <div className={`absolute bottom-0 left-0 right-0 p-4 text-center text-white font-bold text-lg ${slide.bottomBanner.type === 'info' ? 'bg-blue-600' : 'bg-orange-500'} animate-slide-in-up`}>
          {slide.bottomBanner.text}
        </div>
      )}
    </div>
  );
};

