import React from 'react';
import { AboutData } from '../types';

interface RightSidebarProps {
  data: AboutData;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ data }) => {
  return (
    <div className="hidden lg:flex flex-col w-[300px] h-screen fixed right-0 top-0 bg-braun-bg border-l border-black/5 overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-30">
      
      {/* Top Section: Speaker Mesh Aesthetic */}
      <div className="h-32 w-full speaker-mesh border-b border-black/5 flex-shrink-0 relative">
        {/* Optional: Add a subtle logo or badge here if desired, or keep it clean mesh */}
      </div>

      {/* Content Area - "Control Panel" */}
      <div className="flex-1 overflow-y-auto no-scrollbar p-8">
        
        {/* Professional Experience Section */}
        <section className="mb-12">
          <h3 className="font-sans text-[10px] lowercase text-braun-text/60 tracking-wider mb-6">professional experience</h3>
          <div className="space-y-6">
            {data.professionalRoles.map((role, idx) => (
              <div key={idx} className="pb-4 border-b border-black/5 last:border-0 last:pb-0">
                <p className="text-braun-text text-xs leading-relaxed opacity-90">{role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Exhibitions Section */}
        <section className="mb-12">
          <h3 className="font-sans text-[10px] lowercase text-braun-text/60 tracking-wider mb-6">exhibitions</h3>
          <div className="space-y-8">
            {data.exhibitions.map((ex, idx) => (
              <div key={idx} className="flex flex-col gap-1 group">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full border border-braun-text/30 group-hover:bg-braun-orange group-hover:border-braun-orange transition-colors"></div>
                  <h4 className="font-medium text-xs text-braun-text leading-tight">{ex.title}</h4>
                </div>
                <div className="flex flex-col pl-3.5 text-[10px] text-braun-text/50 font-sans mt-1">
                   <span>{ex.location}</span>
                   <span>{ex.year}</span>
                </div>
                {ex.description && <p className="text-braun-text/70 text-[10px] pl-3.5 mt-1 leading-relaxed">{ex.description}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom decorative knob/element */}
        <div className="mt-12 flex justify-center opacity-80">
          <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transform rotate-45 shadow-sm bg-[#F8F8F6]">
            <div className="w-full h-[1px] bg-black/20"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RightSidebar;