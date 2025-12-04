import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader, parseText } from '../Shared';

interface ContentSlideProps {
  slide: SlideData;
}

export const ContentSlide: React.FC<ContentSlideProps> = ({ slide }) => {
  const items = slide.content;
  if (!items) return null;

  // === INTELLIGENT DENSITY SCALING ===
  const count = items.length;
  const isDense = count > 6; 
  const isVeryDense = count > 10;

  // Adjust sizes based on density
  let containerSpace = "space-y-6";
  let mainFontSize = "text-3xl";
  let subFontSize = "text-xl";
  let subIndent = "ml-12";
  let bulletSize = "w-3 h-3";
  let subBulletSize = "w-2 h-2";
  let subMarginTop = "mt-2";

  if (isVeryDense) {
      containerSpace = "space-y-2";
      mainFontSize = "text-xl"; 
      subFontSize = "text-base";
      subIndent = "ml-6";
      bulletSize = "w-2 h-2";
      subBulletSize = "w-1.5 h-1.5";
      subMarginTop = "mt-0.5";
  } else if (isDense) {
      containerSpace = "space-y-3";
      mainFontSize = "text-2xl";
      subFontSize = "text-lg";
      subIndent = "ml-8";
      subMarginTop = "mt-1";
  }

  const renderBullets = () => (
    <ul className={`${containerSpace} w-full`}>
      {items.map((item, idx) => {
        const isSub = item.startsWith('  ');
        const isEmpty = item.trim() === '';
        return (
          <li 
            key={idx} 
            className={`flex items-start leading-snug transition-all duration-300 opacity-0 animate-fade-in-up ${isSub ? `${subIndent} ${subFontSize} text-gray-600 ${subMarginTop}` : `${mainFontSize} text-gray-800 font-medium`}`}
            style={{ animationDelay: `${idx * 50 + 100}ms` }}
          >
            <span className={`mr-4 ${isDense ? 'mt-2' : 'mt-2.5'} flex-shrink-0 flex items-center justify-center ${isSub ? 'text-gray-400' : 'text-dify-blue'}`}>
              {!isEmpty && (isSub ? <div className={`${subBulletSize} rounded-full bg-gray-400`} /> : <div className={`${bulletSize} rounded-sm bg-dify-blue`} />)}
            </span>
            <span>{isEmpty ? <span className="invisible">.</span> : parseText(item.trim())}</span>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 relative overflow-hidden">
       <BackgroundPattern />
       <SlideHeader title={slide.title} subtitle={slide.subtitle} dense={isDense} />
       <div className="flex-grow min-h-0 pr-2 sm:pr-4 md:pr-6 lg:pr-8 relative z-10 overflow-y-auto">
         {renderBullets()}
       </div>
    </div>
  );
};
