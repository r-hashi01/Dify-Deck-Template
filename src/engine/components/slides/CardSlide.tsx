import React from 'react';
import { SlideData } from '../../types';
import { BackgroundPattern, SlideHeader } from '../Shared';

interface CardSlideProps {
  slide: SlideData;
}

// Helper to parse pseudo-markdown
const renderDescription = (text: string, tagColorClass: string) => {
  if (!text) return null;
  
  // STRICT COLOR ENFORCEMENT:
  // Only allow theme colors (blue), black, or white/gray scales.
  // We interpret "Theme Blue" as Dify Blue (#155EEF / blue-600).
  // Green/Purple/Orange are NOT allowed for text.
  // Icons and Tags are EXEMPT from this rule (per previous instruction).
  
  const strictHighlightColor = 'text-dify-blue';

  return text.split('\n').map((line, idx) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={idx} className="h-2"></div>; // Spacer for empty lines

    const isBullet = trimmed.startsWith('- ');
    const content = isBullet ? trimmed.substring(2) : trimmed;

    // Parse **bold**
    const parts = content.split(/(\*\*.*?\*\*)/g);
    const parsedContent = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            const text = part.slice(2, -2);
            // Highlight style for Who/What headers
            if (text === 'Who' || text === 'What') {
                 // HEADER: Enforce Blue
                 return <span key={pIdx} className={`font-extrabold ${strictHighlightColor} text-lg block mb-1 uppercase tracking-wider`}>{text}</span>;
            }
            // BODY BOLD: Enforce Blue
            return <strong key={pIdx} className={`font-bold ${strictHighlightColor}`}>{text}</strong>;
        }
        // Enforce all text parts to follow the rule if not strictHighlight (which is blue)
        // Regular text is Gray-600 (Neutral)
        return <span key={pIdx} className="text-gray-600">{part}</span>;
    });

    if (isBullet) {
        return (
            <div key={idx} className="flex items-start gap-2 mb-1">
                {/* Bullet: Enforce Blue */}
                <span className={`mt-2 w-1.5 h-1.5 rounded-full opacity-60 flex-shrink-0 bg-blue-600`}></span>
                {/* Content: Enforce Gray/Black (gray-600 is a soft black) */}
                <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{parsedContent}</span>
            </div>
        );
    }

    // Standard line (non-bullet): Enforce Gray/Black
    return (
        <div key={idx} className="mb-1 text-sm sm:text-base text-gray-600 leading-relaxed">
            {parsedContent}
        </div>
    );
  });
};

const CardItem: React.FC<{ item: any, widthClass?: string, style?: React.CSSProperties }> = ({ item, widthClass = "", style }) => {
  const [imgError, setImgError] = React.useState(false);

  const tag = item.tags?.[0];
  
  // Icons and Tags use their original semantic colors (EXEMPT from strict text rule)
  // Define available styles
  const TAG_STYLES = [
    'bg-blue-50 text-blue-700 border-blue-100',   // 0: Blue
    'bg-green-50 text-green-700 border-green-100', // 1: Green
    'bg-purple-50 text-purple-700 border-purple-100', // 2: Purple
    'bg-orange-50 text-orange-700 border-orange-100', // 3: Orange
    'bg-indigo-50 text-indigo-700 border-indigo-100', // 4: Indigo
    'bg-cyan-50 text-cyan-700 border-cyan-100',     // 5: Cyan
  ];

  let tagColor = 'bg-gray-50 text-gray-600 border-gray-200';

  if (tag) {
     // Dynamic color assignment based on string hash
     let hash = 0;
     for (let i = 0; i < tag.length; i++) {
       hash = tag.charCodeAt(i) + ((hash << 5) - hash);
     }
     const index = Math.abs(hash) % TAG_STYLES.length;
     tagColor = TAG_STYLES[index];
     
     // Specific overrides for semantic consistency if needed (optional)
     // Currently purely dynamic to support internationalization
  }
  
  // Check for Logo (Image) vs Icon (Component)
  const hasLogo = !!item.logo && !imgError;

  // Custom styling for specific card types
  let cardStyle = "bg-white border-gray-200";
  let iconBg = "bg-gray-50 group-hover:bg-white border-gray-100";
  
  // TEXT COLOR ENFORCEMENT:
  // Titles must be Black (gray-900).
  // Descriptions must be Gray (gray-500/600).
  // No other text colors allowed.
  
  let titleColor = "text-gray-900"; 
  let descStyle = "text-gray-500 text-xs sm:text-sm md:text-base"; 
  
  // ICON FIX: Allow icon dimension customization
  let iconDim = "w-10 h-10 sm:w-12 sm:h-12"; 

  // Special Cards override
  if (item.title === "CORE POSITIONING" || item.title === "核心定位") {
      cardStyle = "bg-blue-600 border-blue-600 shadow-blue-200"; // Blue Background
      iconBg = "bg-white/20 text-white border-white/20 backdrop-blur-sm"; // White Icon on Blue
      titleColor = "text-white"; // White Text
      descStyle = "text-blue-50 text-lg sm:text-xl md:text-2xl font-extrabold leading-tight"; 
  } else if (item.title === "VALUE" || item.title === "核心价值") {
      // Let's make it Neutral Gray with Blue accent
      cardStyle = "bg-gray-50 border-gray-200 shadow-gray-100";
      iconBg = "bg-white border-gray-200 text-dify-blue"; 
      titleColor = "text-gray-900";
      descStyle = "text-gray-600 text-base sm:text-lg md:text-xl font-bold leading-snug";
  } else {
      // For standard cards, enforce borders/shadows but keep text strictly Black
      // We check tag to apply hover border color
      if (tag) {
           // Extract base color name from tagColor class for hover effect logic is tricky with dynamic classes
           // So we use a generic blue hover for all standard cards to match "Dify Theme"
           cardStyle = "bg-white border-gray-200 hover:border-blue-300 hover:shadow-blue-100/50";
           
           // But if we really want to match the tag color...
           if (tagColor.includes('blue')) {
               cardStyle = "bg-white border-blue-100 hover:border-blue-300 hover:shadow-blue-100/50";
               iconBg = "bg-blue-50 group-hover:bg-blue-100 border-blue-100 text-dify-blue";
           } else if (tagColor.includes('green')) {
               cardStyle = "bg-white border-green-100 hover:border-green-300 hover:shadow-green-100/50";
               iconBg = "bg-green-50 group-hover:bg-green-100 border-green-100 text-green-600";
           } else if (tagColor.includes('purple')) {
               cardStyle = "bg-white border-purple-100 hover:border-purple-300 hover:shadow-purple-100/50";
               iconBg = "bg-purple-50 group-hover:bg-purple-100 border-purple-100 text-purple-600";
           } else if (tagColor.includes('orange')) {
               cardStyle = "bg-white border-orange-100 hover:border-orange-300 hover:shadow-orange-100/50";
               iconBg = "bg-orange-50 group-hover:bg-orange-100 border-orange-100 text-orange-600";
           } else if (tagColor.includes('indigo')) {
               cardStyle = "bg-white border-indigo-100 hover:border-indigo-300 hover:shadow-indigo-100/50";
               iconBg = "bg-indigo-50 group-hover:bg-indigo-100 border-indigo-100 text-indigo-600";
           }
      }
  }

  return (
       <div className={`${cardStyle} rounded-sm border p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start h-full relative overflow-hidden group ${widthClass} opacity-0 animate-fade-in-up`} style={style}>
           {/* Tags - Moved to Top Right */}
           {item.tags && (
             <div className="absolute top-4 right-4 flex flex-col items-end gap-1 z-20">
               {item.tags.map((tag: string, tIdx: number) => (
                 <span key={tIdx} className={`px-1.5 sm:px-2 py-0.5 rounded-sm text-[9px] sm:text-[10px] uppercase font-bold tracking-wider border ${tagColor}`}>
                   {tag}
                 </span>
               ))}
             </div>
           )}

           {/* Icon/Logo Box */}
           <div className={`${iconDim} rounded-sm flex items-center justify-center mb-3 sm:mb-4 border transition-colors flex-shrink-0 ${iconBg}`}>
               {hasLogo ? (
                  <img 
                      src={item.logo} 
                      alt={item.title} 
                      className="max-w-[70%] max-h-[70%] object-contain" 
                      onError={() => setImgError(true)}
                  />
               ) : (
                  // ICON FIX: Preserve original color classes for Icons (EXEMPT)
                  React.isValidElement(item.icon) ? React.cloneElement(item.icon as React.ReactElement<any>, { 
                    size: undefined, 
                    className: `w-3/4 h-3/4 p-0.5 ${(item.icon as React.ReactElement<any>).props.className || ''}`
                  }) : null
               )}
           </div>
           
           {/* Title - Enforce Black/Gray-900 */}
           <div className={`text-base sm:text-lg md:text-xl font-bold ${titleColor} mb-2 leading-tight pr-16 whitespace-pre-line`}>
              {item.title}
           </div>
           
           {/* Desc with Markdown Parsing - Enforce Blue/Black */}
           <div className={`flex-grow w-full min-h-0`}>
              {renderDescription(item.description, tagColor)}
           </div>
        </div>
  );
};

export const CardSlide: React.FC<CardSlideProps> = ({ slide }) => {
  const renderCards = () => {
    const items = slide.items;
    const simpleItems = slide.content;

    if (!items && !simpleItems) return null;
    
    const count = items ? items.length : (simpleItems ? simpleItems.length : 0);
    
    // FIX: Include count === 7 for proper centering layout logic
    const useFlexForCentering = count === 5 || count === 3 || count === 7; 
    
    let gridCols = 'grid-cols-3'; 
    if (count === 8) gridCols = 'grid-cols-4';
    else if (count === 4) gridCols = 'grid-cols-2';
    
    if (items) {
      if (useFlexForCentering) {
          return (
              // FIX: Removed 'h-full' and 'content-start' to prevent stretching cards vertically to full container height
              // This allows cards to wrap naturally based on content size and container width
              <div className={`flex flex-wrap justify-center content-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-full min-h-full p-4`}>
                  {items.map((item, idx) => (
                      <CardItem 
                        key={idx} 
                        item={item} 
                        // FIX: Adjusted width for different breakpoints to ensure 3 per row (roughly 30%) or 2 per row on smaller screens
                        widthClass="w-full sm:w-[calc(50%-0.75rem)] md:w-[calc(33.333%-1rem)] lg:w-[30%] min-w-[280px]" 
                        style={{ animationDelay: `${idx * 100}ms` }}
                      />
                  ))}
              </div>
          );
      }

      return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 ${count === 8 ? 'md:grid-cols-3 lg:grid-cols-4' : count === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full`}>
          {items.map((item, idx) => (
             <div key={idx} className="min-h-0">
                <CardItem 
                  item={item} 
                  style={{ animationDelay: `${idx * 100}ms` }}
                />
             </div>
          ))}
        </div>
      );
    }
    
    // Fallback for simple string[] content
    return (
      <div className={`grid ${simpleItems!.length > 6 ? 'grid-cols-3' : 'grid-cols-2'} gap-6 w-full`}>
        {simpleItems!.map((item, idx) => {
          const [title, ...descParts] = item.split(':');
          const description = descParts.join(':');
          
          return (
            <div 
              key={idx} 
              className={`bg-white p-8 rounded-sm border border-gray-200 shadow-sm hover:border-dify-blue hover:shadow-md hover:-translate-y-1 transition-all duration-300 group opacity-0 animate-fade-in-up`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-dify-blue transition-colors">{title}</h3>
              {description && <p className="text-gray-600 text-xl leading-relaxed">{description}</p>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 2xl:p-20 relative overflow-hidden">
       <BackgroundPattern />
       <SlideHeader title={slide.title} subtitle={slide.subtitle} />
       <div className="flex-grow min-h-0 relative z-10 overflow-y-auto">
         {renderCards()}
       </div>
    </div>
  );
};
