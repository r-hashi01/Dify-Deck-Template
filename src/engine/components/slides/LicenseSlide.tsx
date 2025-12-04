import React from 'react';
import { SlideData } from '../../types';
import { SlideHeader } from '../Shared';
import { Plus } from 'lucide-react';

interface LicenseSlideProps {
  slide: SlideData;
}

export const LicenseSlide: React.FC<LicenseSlideProps> = ({ slide }) => {
  const baseLicense = slide.items?.[0];
  const restrictions = slide.items?.slice(1);

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12">
      <SlideHeader title={slide.title} subtitle={slide.subtitle} variant="vertical-bar" />
      
      <div className="flex-1 flex flex-col items-center justify-center w-full">
         {/* Description Content */}
         {slide.content && (
           <div className="text-lg sm:text-xl md:text-2xl text-center font-bold mb-8 sm:mb-12 w-full max-w-4xl">
             {slide.content.map((line, idx) => (
               <div key={idx} className="mb-2">{line}</div>
             ))}
           </div>
         )}

         <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-6 md:gap-12">
            {/* Left: Base License */}
            {baseLicense && (
              <div className="flex flex-col items-center justify-center w-full md:w-5/12 aspect-[4/3] md:aspect-square border-2 border-blue-600 rounded-xl bg-blue-50/10 p-8 shadow-sm hover:shadow-lg transition-shadow opacity-0 animate-scale-up">
                 <div className="text-dify-blue mb-6 transform scale-150">
                    {baseLicense.icon}
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4">{baseLicense.title}</h3>
                 <p className="text-gray-600 font-medium text-lg">{baseLicense.description}</p>
              </div>
            )}

            {/* Plus Sign */}
            <div className="text-gray-300 shrink-0 my-4 md:my-0 opacity-0 animate-scale-up" style={{ animationDelay: '200ms' }}>
              <Plus size={48} strokeWidth={4} className="md:w-16 md:h-16" />
            </div>

            {/* Right: Restrictions */}
            <div className="flex flex-col gap-6 w-full md:w-7/12">
              {restrictions?.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start p-6 border-2 border-red-400 rounded-xl bg-red-50/10 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${idx * 150 + 400}ms` }}
                >
                   <div className="mr-5 mt-1 bg-red-600 text-white rounded-full p-2.5 shrink-0 shadow-sm">
                      {item.icon} 
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-red-700 mb-2">{item.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{item.description}</p>
                   </div>
                </div>
              ))}
            </div>
         </div>
      </div>
    </div>
  );
};

