import React, { useEffect, useRef, useState, useCallback } from 'react';

interface WatermarkProps {
  text: string;  // 用户邮箱或 ID
  isDark?: boolean;  // 是否深色背景
}

export const Watermark: React.FC<WatermarkProps> = ({ text, isDark = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [renderKey, setRenderKey] = useState(0);
  
  // 生成随机类名，每次组件挂载时生成一次
  const [randomClass] = useState(() => `wm-${Math.random().toString(36).slice(2, 10)}`);
  
  // 获取当前时间戳
  const getTimestamp = () => {
    const now = new Date();
    return now.toLocaleDateString('zh-CN', { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  const watermarkText = `${text} · ${getTimestamp()}`;
  
  // 强制重新渲染水印
  const forceRerender = useCallback(() => {
    setRenderKey(prev => prev + 1);
  }, []);
  
  // MutationObserver - 检测水印被删除时自动恢复
  useEffect(() => {
    const checkWatermark = () => {
      if (!document.querySelector(`.${randomClass}`)) {
        forceRerender();
      }
    };
    
    const observer = new MutationObserver((mutations) => {
      // 检查是否有节点被移除
      for (const mutation of mutations) {
        if (mutation.removedNodes.length > 0) {
          checkWatermark();
          break;
        }
      }
    });
    
    // 观察整个 body 的子树变化
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });
    
    // 定时检查作为双重保险
    const intervalId = setInterval(checkWatermark, 2000);
    
    return () => {
      observer.disconnect();
      clearInterval(intervalId);
    };
  }, [randomClass, forceRerender]);
  
  // 生成水印网格
  const generateWatermarks = () => {
    const items = [];
    // 生成足够多的水印覆盖整个区域（考虑旋转后的扩展）
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

  // 内联样式 - 降低被 CSS 覆盖的风险
  const containerStyle: React.CSSProperties = {
    position: 'absolute',
    inset: '-50%',  // 扩大范围以覆盖旋转后的区域
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

