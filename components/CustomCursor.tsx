import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'left' | 'right' | 'pointer'>('default');

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check for hover targets
      const target = e.target as HTMLElement;
      
      // Check for data-cursor attributes (used in ProjectViewer)
      if (target.dataset.cursor === 'left') {
        setCursorType('left');
      } else if (target.dataset.cursor === 'right') {
        setCursorType('right');
      } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div 
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{ 
        left: position.x, 
        top: position.y,
        transform: 'translate(-50%, -50%)' 
      }}
    >
      {/* Default: Orange Dot / Technical Marker */}
      {cursorType === 'default' && (
        <div className="relative flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#FF4400] rounded-full shadow-sm"></div>
          <div className="absolute w-8 h-[1px] bg-black/30 rotate-90"></div>
          <div className="absolute w-8 h-[1px] bg-black/30"></div>
        </div>
      )}

      {/* Pointer/Link: Larger Circle */}
      {cursorType === 'pointer' && (
        <div className="w-8 h-8 rounded-full border border-[#FF4400] bg-[#FF4400]/20 flex items-center justify-center">
          <div className="w-1 h-1 bg-[#FF4400] rounded-full"></div>
        </div>
      )}

      {/* Left Arrow: Minimalist Chevron */}
      {cursorType === 'left' && (
        <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      )}

      {/* Right Arrow: Minimalist Chevron */}
      {cursorType === 'right' && (
        <div className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-black">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
           </svg>
        </div>
      )}
    </div>
  );
};

export default CustomCursor;