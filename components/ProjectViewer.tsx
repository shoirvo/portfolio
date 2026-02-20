import React, { useRef, useEffect } from 'react';
import { Project, ContentType } from '../types';

interface ProjectViewerProps {
  project: Project;
}

const ProjectViewer: React.FC<ProjectViewerProps> = ({ project }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      // If the user is scrolling vertically (e.g. standard mouse wheel), 
      // map it to horizontal scroll to navigate the project strip.
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
      // If the user is scrolling horizontally (e.g. trackpad swipe), 
      // we do nothing and let the browser's native overflow-x-auto handle it 
      // to preserve native inertia/momentum.
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth * 0.6; // Scroll 60% of screen width
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full h-screen bg-braun-bg relative overflow-hidden">
      
      {/* 
        Navigation Zones 
      */}
      <div 
        className="fixed top-0 left-0 w-[30%] h-full z-20 cursor-none"
        data-cursor="left"
        onClick={() => handleScroll('left')}
      />
      <div 
        className="fixed top-0 right-[300px] w-[30%] h-full z-20 cursor-none hidden lg:block"
        data-cursor="right"
        onClick={() => handleScroll('right')}
      />
      <div 
        className="fixed top-0 right-0 w-[30%] h-full z-20 cursor-none lg:hidden"
        data-cursor="right"
        onClick={() => handleScroll('right')}
      />


      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="h-full overflow-x-auto overflow-y-hidden flex items-center px-8 md:px-16 gap-16 md:gap-32 no-scrollbar cursor-none"
      >
        {/* Title Block - Styled like a label plate */}
        <div className="flex-shrink-0 w-[300px] flex flex-col justify-center h-full border-r border-black/5 pr-12 relative z-10">
           <h2 className="text-3xl md:text-4xl font-sans font-light tracking-tight text-braun-text mb-6 lowercase">{project.title}</h2>
           <span className="text-[10px] font-sans lowercase tracking-widest text-braun-text/60 border border-black/10 px-4 py-1.5 rounded-full self-start bg-white/50 backdrop-blur-sm">
             {project.category}
           </span>
        </div>

        {/* Content Stream */}
        {project.blocks.map((block, index) => {
          switch (block.type) {
            case ContentType.HEADER:
              return (
                <div key={index} className="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col justify-center border-l border-black/5 pl-12 h-3/4 relative z-10">
                   <h3 className="font-sans font-medium text-xl md:text-2xl tracking-tight text-braun-text">
                    {block.content}
                  </h3>
                </div>
              );
            
            case ContentType.SUBHEADER:
              return (
                <div key={index} className="flex-shrink-0 w-[200px] md:w-[300px] flex flex-col justify-center relative z-10">
                  <h4 className="font-sans text-xs font-semibold lowercase tracking-wide text-braun-text/50 mb-2">
                    {block.content}
                  </h4>
                  <div className="w-8 h-[1px] bg-braun-orange"></div>
                </div>
              );

            case ContentType.TEXT:
              return (
                <div key={index} className="flex-shrink-0 w-[300px] md:w-[450px] flex flex-col justify-center relative z-10">
                  <p className="text-sm md:text-base leading-relaxed text-braun-text/90 whitespace-normal font-sans">
                    {block.content}
                  </p>
                </div>
              );

            case ContentType.IMAGE:
              return (
                <div key={index} className="flex-shrink-0 h-full flex flex-col justify-center relative group z-0 px-4">
                  <div className="relative max-h-[70vh] md:max-h-[80vh] w-auto transition-transform duration-700 ease-out hover:scale-[1.01]">
                    <img 
                      src={block.src} 
                      alt={block.alt || 'Artwork'} 
                      className="h-full w-auto object-contain max-h-[70vh] md:max-h-[80vh] block bg-white shadow-braun pointer-events-none select-none rounded-[1px]"
                      draggable="false"
                      loading="lazy"
                    />
                  </div>
                  {block.caption && (
                    <div className="mt-6 text-[10px] font-sans text-braun-text/50 lowercase tracking-wide absolute bottom-8 left-4">
                      {block.caption}
                    </div>
                  )}
                </div>
              );

            case ContentType.VIDEO_LINK:
              return (
                <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center relative z-30 gap-4">
                  {/* The Orange Button */}
                  <a 
                    href={block.content} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-16 h-16 rounded-full bg-braun-orange shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-none text-white group"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ml-1">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </a>
                  <span className="text-[10px] lowercase tracking-widest text-braun-text/60">Watch Video</span>
                </div>
              );
            
             case ContentType.SPACER:
              return <div key={index} className="flex-shrink-0 w-12 md:w-32" />;

            default:
              return null;
          }
        })}
        
        {/* End Spacer */}
        <div className="flex-shrink-0 w-[300px]"></div>
      </div>
    </div>
  );
};

export default ProjectViewer;