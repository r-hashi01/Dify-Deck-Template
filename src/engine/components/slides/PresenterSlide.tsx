import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader, parseText } from '../Shared';
import { SimpleBullets } from './StructureSlides';

interface SlideProps {
  slide: SlideData;
}

export const PresenterSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 relative overflow-hidden bg-white">
      <BackgroundPattern />
      
      <div className="relative z-10 flex flex-col h-full">
        <SlideHeader title={slide.title} subtitle={slide.subtitle} />
        
        <div className="flex-1 flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 items-center justify-center mt-4 min-h-0">
          {/* Left: Presenter Bio */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center min-h-0 overflow-auto">
            {slide.content && slide.content.length > 0 && (
               <div className="animate-fade-in-left">
                   <SimpleBullets items={slide.content} />
               </div>
            )}
          </div>
          
          {/* Right: Contact Card */}
          <div className="w-full lg:w-7/12 h-full max-h-[600px] flex items-center justify-center">
            <div className="w-full h-full bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-10 md:p-12 relative overflow-hidden animate-fade-in-right hover:shadow-3xl transition-shadow duration-500 flex items-center justify-center group">
               {/* Decorative circle */}
               <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000"></div>
               <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-1000 delay-100"></div>
               
               <div className="relative z-10 w-full">
                 {slide.visualContent}
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

