import React, { useState } from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';
import { ChevronDown } from 'lucide-react';

interface AccordionSlideProps {
  slide: SlideData;
}

export const AccordionSlide: React.FC<AccordionSlideProps> = ({ slide }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  if (!slide.items) return null;

  return (
    <div className="flex flex-col h-full p-16 lg:p-20 relative">
        <BackgroundPattern />
        <SlideHeader title={slide.title} subtitle={slide.subtitle} />
        <div className="flex-grow relative z-10 overflow-hidden">
            <div className="flex flex-col gap-4 w-full h-full overflow-y-auto pr-2 pb-10 scrollbar-hide">
                {slide.items.map((item, idx) => {
                    const isOpen = expandedIndex === idx;
                    return (
                        <div 
                            key={idx} 
                            className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden cursor-pointer shadow-sm group
                            ${isOpen ? 'border-dify-blue shadow-lg scale-[1.01] ring-1 ring-blue-100' : 'border-gray-100 hover:border-blue-200'}
                            `}
                            onClick={() => setExpandedIndex(isOpen ? null : idx)}
                        >
                            <div className="flex items-center p-4 lg:p-5">
                                {/* Logo */}
                                <div className="w-14 h-14 flex items-center justify-center bg-gray-50 rounded-xl p-2 mr-5 border border-gray-100 flex-shrink-0 transition-colors group-hover:bg-white">
                                    {item.logo ? (
                                        <img src={item.logo} alt={item.title} className="max-w-full max-h-full object-contain" onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                                        }}/>
                                    ) : null}
                                    <span className={`text-xl font-bold text-gray-400 ${item.logo ? 'hidden' : ''}`}>{item.title.charAt(0)}</span>
                                </div>
                                
                                {/* Title Area */}
                                <div className="flex-grow">
                                    <h3 className={`text-xl font-bold transition-colors ${isOpen ? 'text-dify-blue' : 'text-gray-800'}`}>
                                        {item.title}
                                    </h3>
                                    {/* Show truncated description when closed */}
                                    <div className={`overflow-hidden transition-[max-height,opacity] duration-300 ${isOpen ? 'max-h-0 opacity-0' : 'max-h-6 opacity-100'}`}>
                                         <p className="text-gray-400 text-sm truncate">{item.description}</p>
                                    </div>
                                </div>
                                
                                {/* Arrow */}
                                <div className={`transition-transform duration-300 p-2 rounded-full ${isOpen ? 'rotate-180 text-dify-blue bg-blue-50' : 'text-gray-300 group-hover:text-gray-500'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </div>
                            
                            {/* Expanded Content */}
                            <div className={`transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-6 pt-0 pl-24">
                                    <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-dify-blue pl-4 py-1">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </div>
  );
};
