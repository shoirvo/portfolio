import React from 'react';
import { Project, AboutData } from '../types';

interface SidebarProps {
  projects: Project[];
  aboutData: AboutData;
  activeId: string;
  onNavigate: (id: string) => void;
  isMobileOpen: boolean;
  toggleMobile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ projects, aboutData, activeId, onNavigate, isMobileOpen, toggleMobile }) => {
  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-braun-bg border-b border-black/10 z-50 px-4 py-3 flex justify-between items-center cursor-none">
        <h1 className="text-sm font-sans lowercase tracking-wide text-braun-text">{aboutData.name}</h1>
        <button onClick={toggleMobile} className="text-braun-text font-sans lowercase text-xs border border-braun-text/20 px-3 py-1 rounded-full cursor-none">
          {isMobileOpen ? 'close' : 'menu'}
        </button>
      </div>

      {/* Floating Sidebar (Desktop) */}
      <div className={`
        fixed top-12 left-12 z-40 transition-transform duration-300 ease-in-out mix-blend-difference text-white
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Floating "Projects" Menu */}
        <div className="flex flex-col">
          <section className="mb-16">
            <h2 className="font-sans text-[10px] lowercase tracking-widest mb-6 opacity-60">projects</h2>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.id} className="group">
                  <button
                    onClick={() => {
                      onNavigate(project.id);
                      toggleMobile();
                    }}
                    className="flex items-center gap-3 cursor-none group"
                  >
                    {/* Active/Hover Indicator (Orange Dot) */}
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${activeId === project.id ? 'bg-[#FF4400] scale-100' : 'bg-white scale-0 group-hover:scale-50 opacity-0 group-hover:opacity-100'}`}></div>
                    
                    <span className={`font-sans text-sm lowercase tracking-wide transition-all ${
                      activeId === project.id ? 'font-medium translate-x-1' : 'opacity-80 group-hover:opacity-100'
                    }`}>
                      {project.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default Sidebar;