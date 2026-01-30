import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader, parseText } from '../Shared';
import { Check, X } from 'lucide-react';

interface SlideProps {
  slide: SlideData;
}

// Enhanced bullet renderer to support "Title: Desc" format with emphasis
export const SimpleBullets = ({ items }: { items?: string[] }) => {
    if (!items) return null;

    // Calculate density for auto-sizing
    const validItemCount = items.filter(i => i.trim().length > 0).length;
    const isDense = validItemCount > 5;
    const isVeryDense = validItemCount > 8;

    // Dynamic Layout Classes
    const containerSpacing = isVeryDense ? "space-y-2" : isDense ? "space-y-4" : "space-y-6";
    const titleMarginBottom = isVeryDense ? "mb-1" : "mb-2";
    const titleItemMarginBottom = isVeryDense ? "mb-3" : "mb-6";
    
    // Dynamic Text Size Classes
    const getTitleClass = (isBigTitle: boolean) => {
        if (isVeryDense) {
            return isBigTitle ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl";
        }
        if (isDense) {
            return isBigTitle ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl";
        }
        return isBigTitle ? "text-4xl sm:text-5xl md:text-6xl tracking-tight" : "text-2xl sm:text-3xl";
    };

    const getDescClass = (isSubtitle: boolean) => {
         if (isVeryDense) {
            return isSubtitle ? "text-xl sm:text-2xl mt-0.5" : "text-sm sm:text-base leading-relaxed pl-1";
         }
         if (isDense) {
            return isSubtitle ? "text-2xl sm:text-3xl mt-1" : "text-base sm:text-lg leading-relaxed pl-1";
         }
         return isSubtitle ? "text-3xl sm:text-4xl mt-1" : "text-lg sm:text-xl leading-relaxed pl-1";
    };

    const getBulletClass = (isSub: boolean) => {
        if (isVeryDense) {
             return isSub ? "text-sm sm:text-base mt-1" : "text-base sm:text-lg";
        }
        if (isDense) {
             return isSub ? "text-base sm:text-lg mt-1.5" : "text-lg sm:text-xl";
        }
        return isSub ? "text-base sm:text-lg mt-2" : "text-lg sm:text-xl md:text-2xl";
    };

    return (
        <ul className={`${containerSpacing} w-full`}>
            {items.map((item, idx) => {
                const isSub = item.startsWith('  ');
                
                // Check for "**Title**: Description" pattern
                // Regex matches: **(Group 1)** followed by optional : or ：, then (Group 2)
                const titleDescMatch = item.trim().match(/^\*\*(.+?)\*\*[:：]?(.*)$/);

                if (titleDescMatch && !isSub) {
                    const title = titleDescMatch[1];
                    let desc = titleDescMatch[2].trim();
                    
                    // Check for special subtitle marker '^'
                    const isSubtitle = desc.startsWith('^');
                    if (isSubtitle) {
                        desc = desc.substring(1).trim();
                    }
                    
                    const isBigTitle = !desc || isSubtitle;
                    const titleClass = getTitleClass(isBigTitle);
                    const descClass = getDescClass(isSubtitle);

                    return (
                        <li key={idx} className={`flex flex-col items-start opacity-0 animate-fade-in-up ${titleItemMarginBottom}`} style={{ animationDelay: `${idx * 100}ms` }}>
                            <h3 className={`${titleClass} font-extrabold text-gray-900 ${titleMarginBottom} leading-tight`}>
                                {title}
                            </h3>
                            {desc && (
                                <p className={`${descClass} ${isSubtitle ? 'text-gray-600 font-light' : 'text-gray-500 font-medium'}`}>
                                    {parseText(desc)}
                                </p>
                            )}
                        </li>
                    );
                }

                // Standard Bullet Style (Fallback)
                const bulletTextClass = getBulletClass(isSub);
                const isEmpty = item.trim() === '';

                return (
                    <li key={idx} className={`flex items-start leading-snug opacity-0 animate-fade-in-up ${isSub ? `ml-8 text-gray-600 ${bulletTextClass}` : `text-gray-800 font-medium ${bulletTextClass}`}`} style={{ animationDelay: `${idx * 100}ms` }}>
                        <span className={`mr-4 flex-shrink-0 flex items-center justify-center ${isVeryDense ? 'mt-1.5' : 'mt-2.5'} ${isSub ? 'text-gray-400' : 'text-dify-blue'}`}>
                            {!isEmpty && (isSub ? <div className="w-1.5 h-1.5 rounded-full bg-gray-400" /> : <div className="w-2 h-2 rounded-sm bg-dify-blue" />)}
                        </span>
                        <span>{isEmpty ? <span className="invisible">.</span> : parseText(item.trim())}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export const SplitSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 relative overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 flex-1 items-center justify-center relative z-10 min-h-0">
          <div className={`w-full ${slide.visualContent ? 'lg:w-1/2' : 'lg:w-3/4 mx-auto'} flex flex-col justify-center pt-2 min-h-0 overflow-auto h-full`}>
             <SimpleBullets items={slide.content} />
          </div>
          {slide.visualContent && (
          <div className="w-full lg:w-1/2 h-full min-h-0 bg-white border border-gray-200 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden opacity-0 animate-scale-up" style={{ animationDelay: '300ms' }}>
             <div className="relative z-10 w-full h-full flex items-center justify-center">
               {slide.visualContent}
             </div>
          </div>
          )}
      </div>
    </div>
  );
};

export const DiagramSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-2 sm:p-3 md:p-4 lg:p-6 xl:p-8 2xl:p-12 relative overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      <div className="flex-grow min-h-0 relative z-10 overflow-visible mb-2 sm:mb-4 md:mb-6 opacity-0 animate-scale-up" style={{ animationDelay: '200ms' }}>
          <div className="h-full w-full min-h-0 flex flex-col justify-center items-center">
            {slide.visualContent}
          </div>
      </div>
    </div>
  );
};

export const AdaptiveContentSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      <div className="flex-grow min-h-0 relative z-10 w-full flex flex-col justify-center items-center opacity-0 animate-scale-up" style={{ animationDelay: '200ms' }}>
         <div className="w-full h-full flex items-center justify-center">
            {slide.visualContent}
         </div>
      </div>
    </div>
  );
};

export const MatrixSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 relative overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      <div className="flex-grow min-h-0 overflow-auto bg-white shadow-sm border border-gray-200 relative z-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b-2 border-dify-blue">
              {slide.tableData?.headers.map((h, i) => (
                <th key={i} className="p-4 sm:p-6 font-bold text-sm sm:text-base uppercase tracking-wider text-dify-blue">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {slide.tableData?.rows.map((row, rIdx) => (
              <tr key={rIdx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="p-4 sm:p-6 text-base sm:text-lg text-gray-800 font-light">
                    {cell === '✅' ? <div className="text-dify-blue font-bold flex items-center"><Check size={20} className="mr-2"/> Yes</div> : 
                     cell === '✖️' ? <div className="text-gray-400 flex items-center"><X size={20} className="mr-2"/> -</div> : 
                     parseText(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
);
