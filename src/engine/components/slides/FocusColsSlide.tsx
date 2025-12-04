import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';
import { Quote } from 'lucide-react';

interface FocusColsSlideProps {
  slide: SlideData;
}

export const FocusColsSlide: React.FC<FocusColsSlideProps> = ({ slide }) => {
  const items = slide.items || [];
  const heroItem = items[0]; // POSITIONING/Hero
  const listItems = items.slice(1); // 实现细节列表

  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <BackgroundPattern />
      
      <div className="p-6 sm:p-8 md:p-12 pb-0 flex-shrink-0">
         <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      </div>

      <div className="flex-1 flex flex-col lg:flex-row min-h-0 p-6 sm:p-8 md:p-12 pt-10 sm:pt-16 gap-8 lg:gap-20">
         
         {/* LEFT: Focus Area (Hero Slogan) */}
         <div className="w-full lg:w-5/12 flex flex-col relative opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            {heroItem && (
              <div className="relative p-2 sm:p-0">
                 <Quote className="absolute -top-10 -left-10 text-blue-100/80 w-24 h-24 sm:w-32 sm:h-32 transform -scale-x-100" />
                 <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-600 text-white rounded-lg shadow-md">
                           {heroItem.icon && React.cloneElement(heroItem.icon as React.ReactElement<any>, { size: 20 })}
                        </div>
                        <span className="text-dify-blue font-bold uppercase tracking-widest text-sm sm:text-base">
                           {heroItem.tags?.[0] || 'POSITIONING'}
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight drop-shadow-sm mb-6">
                       {heroItem.title}
                    </h2>
                    {heroItem.description && (
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                           {heroItem.description}
                        </p>
                    )}
                 </div>
              </div>
            )}
         </div>

         {/* RIGHT: Detail Area (Card List) */}
         <div className={`w-full lg:w-7/12 flex flex-col opacity-0 animate-fade-in-up ${
             listItems.length >= 4 ? 'py-4' : 'gap-4 sm:gap-5'
         }`} style={{ animationDelay: '300ms' }}>
            {listItems.map((item, idx) => {
               const isCompact = listItems.length >= 4;
               return (
               <div 
                 key={idx} 
                 className={`
                    bg-white/90 backdrop-blur-md border rounded-xl transition-all duration-300 flex flex-col sm:flex-row items-start gap-4 group
                    ${isCompact 
                        ? '-mt-2 first:mt-0 p-4 sm:p-5 border-gray-300 shadow-md hover:z-50 hover:scale-105 hover:shadow-2xl hover:border-dify-blue hover:-translate-y-3 cursor-default bg-white' 
                        : 'p-5 sm:p-6 border-gray-200 shadow-sm hover:shadow-lg hover:border-dify-blue hover:-translate-y-1 sm:gap-6'
                    }
                 `}
                 style={{ marginLeft: isCompact ? `${idx * 16}px` : '0px' }}
               >
                  <div className={`rounded-xl text-gray-500 group-hover:bg-blue-50 group-hover:text-dify-blue transition-colors flex-shrink-0 ${isCompact ? 'p-2.5 bg-gray-50' : 'mt-1 p-3 bg-gray-50'}`}>
                     {item.icon && React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                  </div>
                  <div>
                     <h4 className={`${isCompact ? 'text-lg' : 'text-lg sm:text-xl'} font-bold text-gray-900 mb-1 group-hover:text-dify-blue transition-colors`}>{item.title}</h4>
                     <p className={`${isCompact ? 'text-sm' : 'text-sm sm:text-base'} text-gray-600 leading-relaxed`}>{item.description}</p>
                  </div>
               </div>
               );
            })}
         </div>

      </div>
    </div>
  );
};
