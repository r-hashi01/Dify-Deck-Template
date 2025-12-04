import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';
import { Quote } from 'lucide-react';

interface PillarsSlideProps {
  slide: SlideData;
}

const PILLAR_STYLES = [
  { text: 'text-dify-blue', bg: 'bg-dify-blue', border: 'border-blue-200' },
  { text: 'text-indigo-600', bg: 'bg-indigo-500', border: 'border-indigo-200' },
  { text: 'text-emerald-600', bg: 'bg-emerald-500', border: 'border-emerald-200' },
  { text: 'text-amber-600', bg: 'bg-amber-500', border: 'border-amber-200' },
  { text: 'text-rose-600', bg: 'bg-rose-500', border: 'border-rose-200' },
  { text: 'text-violet-600', bg: 'bg-violet-500', border: 'border-violet-200' },
  { text: 'text-cyan-600', bg: 'bg-cyan-500', border: 'border-cyan-200' },
];

export const PillarsSlide: React.FC<PillarsSlideProps> = ({ slide }) => {
  const items = slide.items || [];
  
  // Adaptive sizing based on item count
  const isCompact = items.length > 3;
  
  const containerPadding = isCompact 
    ? 'px-4 sm:px-6 md:px-8 lg:px-12' 
    : 'px-4 sm:px-8 md:px-16 lg:px-24';
    
  const gapSize = isCompact
    ? 'gap-3 sm:gap-4'
    : 'gap-4 sm:gap-6 md:gap-8';

  return (
    <div className="flex flex-col h-full relative overflow-hidden bg-slate-50">
      <BackgroundPattern />
      
      <div className="p-6 sm:p-8 md:p-12 pb-0 flex-shrink-0 relative z-10">
         <SlideHeader title={slide.title} subtitle={slide.subtitle} />
         
         {/* Positioning Hero */}
         {slide.content && slide.content.length > 0 && (
             <div className="mt-6 sm:mt-8 mb-2 relative p-2 sm:p-0 max-w-6xl opacity-0 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                 <Quote className="absolute -top-8 -left-8 text-blue-100/80 w-20 h-20 sm:w-24 sm:h-24 transform -scale-x-100" />
                 <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="flex-shrink-0">
                        <span className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-bold uppercase tracking-widest shadow-sm">
                           {/[\u4e00-\u9fa5]/.test(slide.title) ? 'POSITIONING' : 'POSITIONING'}
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-extrabold text-slate-900 leading-[1.2] tracking-tight drop-shadow-sm">
                       {slide.content[0]}
                    </h2>
                 </div>
             </div>
         )}
      </div>

      <div className={`flex-1 flex items-end justify-center ${containerPadding} pb-8 sm:pb-12 lg:pb-16 ${gapSize} min-h-0`}>
         {items.map((item, idx) => {
            const style = PILLAR_STYLES[idx % PILLAR_STYLES.length];
            
            return (
            <div 
              key={idx} 
              className="flex-1 h-[85%] sm:h-[90%] flex flex-col items-center relative group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
               {/* === Modern Monolith Body (现代巨石) === */}
               <div className="flex-1 w-full bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col items-center p-4 sm:p-6 relative overflow-hidden hover:-translate-y-2 transition-all duration-500 ease-out z-10 group-hover:shadow-lg group-hover:border-gray-300">
                  
                  {/* Tech Texture (Subtle Dot Grid) */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                       style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                  </div>
                  
                  {/* Top Highlight Line (Lip) */}
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${style.bg}`}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center h-full pt-6 sm:pt-8 w-full">
                      {/* Icon Box (Modern Square) */}
                      <div className={`mb-4 sm:mb-6 md:mb-8 p-3 sm:p-4 rounded-sm bg-white border border-gray-100 shadow-sm group-hover:scale-110 group-hover:rotate-0 transition-transform duration-300 ${style.text}`}>
                         {item.icon && React.cloneElement(item.icon as React.ReactElement<any>, { size: isCompact ? 28 : 32 })}
                      </div>

                      {/* Title */}
                      <h3 className={`text-base sm:text-lg lg:text-2xl font-black text-center mb-3 sm:mb-4 leading-tight tracking-tight ${style.text}`}>
                        {item.title}
                      </h3>

                      <div className="w-12 h-1 bg-gray-100 rounded-full mb-4 sm:mb-6"></div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm lg:text-base text-gray-500 text-center leading-relaxed font-medium px-1 sm:px-2">
                        {item.description}
                      </p>
                      
                      {/* Features List (Optional) */}
                      {item.features && item.features.length > 0 && (
                        <div className="mt-auto pt-4 w-full">
                          <ul className="space-y-2">
                            {item.features.map((feature, fIdx) => (
                              <li key={fIdx} className="text-xs sm:text-sm text-gray-600 flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
                                <div className={`w-1.5 h-1.5 rounded-full ${style.bg}`}></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                  
               </div>

               {/* Reflection/Shadow */}
               <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/20 blur-xl rounded-full group-hover:w-[90%] group-hover:bg-black/25 transition-all duration-500"></div>
            </div>
            );
         })}
      </div>
    </div>
  );
};
