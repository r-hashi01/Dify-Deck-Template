import React, { useState } from 'react';
import { createPortal } from 'react-dom';

// Helper to parse **bold** text
export const parseText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="text-dify-blue font-extrabold">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

// Background Pattern Component for "Minimalist Engineering" feel
export const BackgroundPattern: React.FC = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
      {/* Subtle dot grid - Technical feel */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#9CA3AF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
  </div>
);

interface SlideHeaderProps {
  title: string;
  subtitle?: string;
  dense?: boolean;
  variant?: 'default' | 'vertical-bar';
}

export const SlideHeader: React.FC<SlideHeaderProps> = ({ title, subtitle, dense = false, variant = 'default' }) => {
  // Directory Effect Logic
  const titleParts = title.split(/[:：]/);
  const hasPrefix = titleParts.length > 1;

  if (variant === 'vertical-bar') {
    return (
      <div className={`flex flex-col w-full relative z-10 ${dense ? 'mb-4' : 'mb-8'} border-b-2 border-gray-100 pb-4`}>
        <div className="flex items-center">
          <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-2 sm:w-3 bg-blue-600 mr-4 sm:mr-6 rounded-sm shrink-0"></div>
          <h1 className={`${dense ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'} font-bold text-dify-blue tracking-tight leading-tight`}>
            {hasPrefix ? (
              <span className="flex items-baseline flex-wrap">
                <span className="text-gray-400 font-light mr-3 opacity-70 text-[0.7em]">{titleParts[0]}</span>
                <span className="text-gray-300 font-thin mr-3 text-[0.7em]">/</span>
                <span>{titleParts[1]}</span>
              </span>
            ) : title}
          </h1>
        </div>
        {subtitle && (
          <div className="mt-4 text-center w-full">
             <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">{subtitle}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-start w-full relative z-10 ${dense ? 'mb-1 sm:mb-2 md:mb-3' : 'mb-2 sm:mb-3 md:mb-4 lg:mb-6'}`}>
      <h1 className={`${dense ? 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'} font-extrabold text-dify-blue mb-0.5 sm:mb-1 md:mb-2 tracking-tight leading-tight transition-all`}>
        {hasPrefix ? (
          <span className="flex items-baseline flex-wrap">
            <span className="text-gray-400 font-light mr-3 sm:mr-4 opacity-70 text-[0.6em] translate-y-[-0.1em]">{titleParts[0]}</span>
            <span className="text-gray-300 font-thin mr-3 sm:mr-4 text-[0.6em] translate-y-[-0.1em]">/</span>
            <span>{titleParts[1]}</span>
          </span>
        ) : title}
      </h1>
      {subtitle && (
        <h2 className={`${dense ? 'text-base sm:text-lg md:text-xl lg:text-2xl' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'} text-gray-600 font-light ${dense ? 'mb-1 sm:mb-2 md:mb-3' : 'mb-2 sm:mb-3 md:mb-4 lg:mb-6'} border-l-2 sm:border-l-4 md:border-l-8 border-dify-blue pl-2 sm:pl-3 md:pl-4 lg:pl-6 py-0.5 sm:py-1 transition-all`}>
          {subtitle}
        </h2>
      )}
      <div className="w-full h-px bg-gray-200"></div>
    </div>
  );
};

// Image Modal Component
export const ImageModal: React.FC<{ src: string; alt: string; isOpen: boolean; onClose: () => void }> = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={onClose}>
      <div className="relative w-full h-full flex items-center justify-center max-w-[95vw] max-h-[95vh]" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt} className="w-full h-full object-contain rounded-md shadow-2xl" />
        <button 
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors bg-black/50 hover:bg-black/70 rounded-full p-3"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );

  if (typeof document === 'undefined') {
    return modalContent;
  }

  return createPortal(modalContent, document.body);
};

// Zoomable Image Component
export const ZoomableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  return (
    <>
      <div className={className}>
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-full object-contain rounded-lg shadow-lg cursor-zoom-in"
          onClick={handleClick}
          onMouseDown={(e) => e.stopPropagation()}
        />
      </div>
      <ImageModal src={src} alt={alt} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

