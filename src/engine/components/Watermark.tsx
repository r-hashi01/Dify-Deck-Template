import React, { useEffect, useRef, useState, useCallback } from 'react';

interface WatermarkProps {
  text: string;  // User email or ID
  isDark?: boolean;  // Whether background is dark
}

export const Watermark: React.FC<WatermarkProps> = ({ text, isDark = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderKey, setRenderKey] = useState(0);
  
  // Generate random class name once per component mount
  const [randomClass] = useState(() => `wm-${Math.random().toString(36).slice(2, 10)}`);
  
  // Get current timestamp
  const getTimestamp = () => {
    const now = new Date();
    // Use locale string for international format
    return now.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const watermarkText = `${text} · ${getTimestamp()}`;
  
  // Force re-render watermark
  const forceRerender = useCallback(() => {
    setRenderKey(prev => prev + 1);
  }, []);
  
  // MutationObserver - Automatically restore watermark if deleted
  useEffect(() => {
    const checkWatermark = () => {
      if (!document.querySelector(`.${randomClass}`)) {
        forceRerender();
      }
    };
    
    const observer = new MutationObserver((mutations) => {
      // Check if nodes were removed
      for (const mutation of mutations) {
        if (mutation.removedNodes.length > 0) {
          checkWatermark();
          break;
        }
      }
    });
    
    // Observe body subtree changes
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // Double insurance with interval check
    const intervalId = setInterval(checkWatermark, 2000);
    
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [randomClass, forceRerender]);
  
  // Generate watermark grid
  const generateWatermarks = () => {
    const items = [];
    // Generate enough watermarks to cover the area (considering expansion after rotation)
    for (let i = 0; i < 12; i++) {
      items.push(
        <div 
          key={i} 
          className="whitespace-nowrap font-mono tracking-wider"
          style={{
            fontSize: '14px',
            lineHeight: '1',
            display: 'flex',
            gap: '100px',
          }}
        >
          <span>{watermarkText}</span>
          <span>{watermarkText}</span>
          <span>{watermarkText}</span>
        </div>
      );
    }
    return items;
  };

  // Inline styles - reduce risk of being overridden by CSS
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    inset: '-50%',  // Expand range to cover rotated area
    width: '200%',
    height: '200%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '80px',
    transform: 'rotate(-30deg)',
    opacity: 0.045,
    pointerEvents: 'none',
    userSelect: 'none',
    zIndex: 55,
    color: isDark ? '#ffffff' : '#6B7280',
    overflow: 'hidden',
  };

  return (
    <div 
      key={renderKey}
      ref={containerRef}
      className={randomClass}
      style={containerStyle}
      data-watermark="true"
      aria-hidden="true"
    >
      {generateWatermarks()}
    </div>
  );
};

export default Watermark;
