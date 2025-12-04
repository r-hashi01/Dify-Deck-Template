import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader, parseText } from '../Shared';
import { Check, Target, Lightbulb, Info } from 'lucide-react';

interface SlideProps {
  slide: SlideData;
}

export const TitleSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-start p-12 sm:p-16 md:p-20 lg:p-24 bg-white relative overflow-hidden">
      {/* Solid Blue Accent Bar Top */}
      <div className="absolute top-0 left-0 w-full h-4 bg-dify-blue"></div>

      <div className="relative z-10 max-w-7xl w-full flex flex-col h-full justify-center">
        <div className="mb-8 sm:mb-12">
            <div className="inline-block px-4 py-1 border border-black text-black font-bold text-sm tracking-[0.2em] uppercase mb-6">
            {slide.footer || "Product Primer"}
            </div>
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-black mb-6 leading-[0.9] tracking-tighter uppercase">
            {slide.title}
            </h1>
            <div className="w-24 h-2 bg-dify-blue mb-8"></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-600 font-medium leading-snug max-w-4xl">
            {slide.subtitle}
            </h2>
        </div>
        
        <div className="mt-auto pt-8 border-t border-gray-200 w-full flex justify-between items-end">
            <div>
                <p className="text-xl font-bold text-dify-blue tracking-tight mb-1">Solutions & Customer Success</p>
                <p className="text-base text-gray-500">Infrastructure for Intuitive LLM App Development</p>
            </div>
            {/* Decorative Element */}
            {slide.visualContent && (
                <div className="hidden md:block w-32 h-32 bg-gray-100 rounded-full overflow-hidden">
                    {slide.visualContent}
                </div>
            )}
        </div>
      </div>
  </div>
);

export const SectionSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-start p-12 sm:p-16 md:p-20 lg:p-24 bg-dify-blue text-white relative overflow-hidden">
    {/* Minimalist Number Indicator */}
    <div className="absolute right-0 bottom-0 text-[30rem] font-bold text-white opacity-10 leading-none select-none font-mono translate-y-[20%] translate-x-[10%]">
      {slide.footer ? slide.footer.replace('Part 0', '') : Math.floor(slide.id / 5)}
    </div>
    
    <div className="relative z-10 w-full max-w-6xl">
      <div className="flex items-center gap-4 mb-8">
         <span className="h-px w-12 bg-white"></span>
         <h2 className="text-xl font-bold tracking-[0.3em] uppercase text-white/90">
            {slide.footer || `Part ${Math.floor(slide.id / 5)}`}
         </h2>
      </div>
      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-none tracking-tight">{slide.title}</h1>
      <h3 className="text-2xl sm:text-3xl md:text-4xl opacity-90 font-light max-w-4xl leading-relaxed border-l-4 border-white pl-6">{slide.subtitle}</h3>
    </div>
  </div>
);

export const CourseOverviewSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full p-12 sm:p-16 md:p-20 lg:p-24 relative bg-white overflow-hidden">
      <BackgroundPattern />
      <SlideHeader title={slide.title} subtitle={slide.subtitle} />
      
      <div className="flex-1 flex flex-col gap-8 relative z-10 mt-12 min-h-0">
          {/* Objective & Value Cards - Strict Grid */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-0">
              {/* Objective Card */}
              <div className="bg-gray-50 border border-gray-200 p-12 flex flex-col justify-start group min-h-0">
                  <div className="mb-6">
                      <h3 className="text-sm font-bold text-dify-blue uppercase tracking-[0.2em] border-b-2 border-dify-blue inline-block pb-2">Course Objective</h3>
                  </div>
                  <p className="text-3xl sm:text-4xl font-light text-gray-900 leading-tight">{parseText(slide.content?.[0] || "")}</p>
              </div>

              {/* Value Card */}
              <div className="bg-dify-blue p-12 flex flex-col justify-start group text-white min-h-0">
                  <div className="mb-6">
                      <h3 className="text-sm font-bold text-white/80 uppercase tracking-[0.2em] border-b-2 border-white inline-block pb-2">Core Value</h3>
                  </div>
                  <p className="text-3xl sm:text-4xl font-light text-white leading-tight">{parseText(slide.content?.[1] || "")}</p>
              </div>
          </div>

          {/* Scope Footer */}
          <div className="h-24 bg-white border-t-4 border-gray-100 flex items-center pt-4 relative flex-shrink-0">
              <div className="absolute left-0 top-0 h-1 w-12 bg-dify-blue"></div>
              <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-8 flex-shrink-0">Scope</span>
              <p className="text-xl text-gray-600 flex-1 font-light">{parseText(slide.content?.[2] || "")}</p>
          </div>
      </div>
  </div>
);

// Reverted to Black for "Summary" slides - Minimalist
export const MacroFocusSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center bg-black text-white relative overflow-hidden p-12 sm:p-16 md:p-24">
      {/* Solid Background - No Texture */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-6xl text-center w-full">
          <div className="mb-8 mx-auto w-24 h-1 bg-dify-blue"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight tracking-tight">{parseText(slide.title)}</h1>
          
          {slide.content && (
              <div className="grid grid-cols-1 gap-6 text-left max-w-4xl mx-auto">
                  {slide.content.map((item, i) => (
                      <div key={i} className="bg-white/5 p-6 sm:p-8 rounded-none border-l-4 border-dify-blue flex items-start">
                          <div className="mr-6 mt-1 text-dify-blue flex-shrink-0">
                              <Check size={24} />
                          </div>
                          <span className="text-xl sm:text-2xl font-light leading-relaxed text-white/90">{parseText(item)}</span>
                      </div>
                  ))}
              </div>
          )}
      </div>
  </div>
);

// Blue Theme for "Chapter Titles" - Solid, No Gradients
export const ChapterTitleSlide: React.FC<SlideProps> = ({ slide }) => (
  <div className="flex flex-col h-full justify-center items-center bg-dify-blue text-white relative overflow-hidden p-12 sm:p-16 md:p-24">
      <div className="relative z-10 max-w-6xl text-center w-full">
          <div className="mb-8 mx-auto w-24 h-1 bg-white"></div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-12 leading-none tracking-tight text-wrap balance break-words max-w-5xl mx-auto">{parseText(slide.title)}</h1>
          
          {slide.content && (
              <div className="grid grid-cols-1 gap-6 text-left max-w-3xl mx-auto">
                  {slide.content.map((item, i) => (
                      <div key={i} className="border-b border-white/30 p-6 flex items-center hover:bg-white/10 transition-colors">
                          <span className="text-2xl sm:text-3xl font-medium text-white">{parseText(item)}</span>
                      </div>
                  ))}
              </div>
          )}
      </div>
  </div>
);

export const EndSlide: React.FC<SlideProps> = ({ slide }) => {
  const footerParts = slide.footer ? slide.footer.split('|').map(s => s.trim()) : ["Email: your.email@dify.ai"];
  const emailPart = footerParts.find(p => p.toLowerCase().includes('email')) || "Email: your.email@dify.ai";
  const githubPart = footerParts.find(p => p.toLowerCase().includes('github')) || "GitHub: YourGitHub";
  
  const email = emailPart.split(':')[1]?.trim() || "your.email@dify.ai";
  const github = githubPart.split(':')[1]?.trim() || "YourGitHub";

  return (
  <div className="flex h-full bg-white relative overflow-hidden">
      {/* Left Side: THANK YOU - Golden Ratio (~61.8%) */}
      <div className="w-[61.8%] h-full bg-white flex flex-col justify-center p-24 border-r border-gray-100">
        <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-extrabold leading-[0.8] tracking-tighter text-black mb-8">
            THANK<br/>YOU
        </h1>
        <div className="w-32 h-4 bg-dify-blue mb-8"></div>
        <p className="text-3xl text-gray-500 font-light">{slide.subtitle}</p>
      </div>

      {/* Right Side: Contact Info + QR - Golden Ratio (~38.2%) */}
      <div className="w-[38.2%] h-full bg-gray-50 flex flex-col justify-center p-16 lg:p-20">
        <div className="flex flex-col gap-10">
            
            <div className="space-y-6">
                <a href="https://dify.ai" className="block group">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 group-hover:text-dify-blue transition-colors">Website</div>
                    <div className="text-3xl font-bold text-black group-hover:text-dify-blue transition-colors">dify.ai</div>
                </a>

                <a href={`mailto:${email}`} className="block group">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 group-hover:text-dify-blue transition-colors">Email</div>
                    <div className="text-3xl font-bold text-black group-hover:text-dify-blue transition-colors">{email}</div>
                </a>
                
                <a href={`https://github.com/${github}`} className="block group">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 group-hover:text-dify-blue transition-colors">GitHub</div>
                    <div className="text-3xl font-bold text-black group-hover:text-dify-blue transition-colors">{github}</div>
                </a>
            </div>

            {/* Placeholder QR Code */}
             <div className="w-40 h-40 bg-white p-2 border border-gray-200 flex items-center justify-center shadow-sm">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-xs text-center">
                  QR Code
                </div>
            </div>
        </div>
      </div>
  </div>
  );
};