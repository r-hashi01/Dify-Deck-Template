import React from 'react';
import { SlideData } from '../../types';
import { SlideHeader } from '../Shared';

interface FAQSlideProps {
  slide: SlideData;
}

export const FAQSlide: React.FC<FAQSlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12">
      <SlideHeader title={slide.title} subtitle={slide.subtitle} variant="vertical-bar" />
      
      <div className="flex-1 overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16">
          {slide.items?.map((item, idx) => (
            <div key={idx} className="flex items-start">
               <div className="w-1.5 sm:w-2 bg-blue-600 rounded-sm mr-4 sm:mr-6 shrink-0 h-full min-h-[4rem]"></div>
               <div className="flex-1">
                 <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-3">{item.title}</h3>
                 <div className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-wrap">
                    {item.description}
                 </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

