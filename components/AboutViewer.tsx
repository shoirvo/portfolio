import React, { useState } from 'react';
import { AboutData } from '../types';

interface AboutViewerProps {
  data: AboutData;
}

const AboutViewer: React.FC<AboutViewerProps> = ({ data }) => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="w-full h-screen overflow-y-auto bg-braun-bg px-6 py-12 md:px-16 transition-all duration-300 no-scrollbar">
      
      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center" onClick={() => setShowContact(false)}>
          <div className="bg-white p-8 rounded-[2px] shadow-braun max-w-sm w-full mx-4" onClick={e => e.stopPropagation()}>
            <h3 className="font-sans text-[10px] lowercase tracking-widest mb-4 text-braun-text/50">contact</h3>
            <p className="font-sans text-lg text-braun-text mb-6">{data.email}</p>
            <button
              onClick={() => {navigator.clipboard.writeText(data.email); }}
              className="px-6 py-2 border border-black/10 rounded-full text-xs font-sans lowercase tracking-wider hover:bg-[#FF4400] hover:text-white hover:border-[#FF4400] transition-colors w-full"
            >
              copy email
            </button>
            <button onClick={() => setShowContact(false)} className="mt-3 w-full text-center text-xs text-braun-text/40 lowercase">close</button>
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto pt-12">
        
        {/* Profile Section */}
        <section className="mb-20">
          <div className="bg-white p-8 md:p-12 shadow-braun rounded-[2px] border border-black/5">
            <h1 className="text-3xl md:text-4xl font-sans font-light lowercase tracking-tight mb-8 text-braun-text">{data.name}</h1>
            <div className="space-y-6 text-base md:text-lg leading-relaxed font-sans text-braun-text/80 font-light">
              {data.overview.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
            
            <div className="mt-12 flex gap-4">
              <button onClick={() => setShowContact(true)} className="inline-block px-6 py-2 border border-black/10 rounded-full text-xs font-sans lowercase tracking-wider hover:bg-[#FF4400] hover:text-white hover:border-[#FF4400] transition-colors cursor-none">
                contact
              </button>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32 pl-4 md:pl-0">
            <h3 className="font-sans text-[10px] lowercase tracking-widest mb-10 text-braun-text/50 flex items-center gap-4">
              education
              <span className="h-[1px] flex-1 bg-black/5"></span>
            </h3>
            <div className="space-y-12">
            {data.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 group">
                <div className="md:max-w-[70%]">
                  <h4 className="font-medium text-xl text-braun-text lowercase tracking-tight">{edu.degree}</h4>
                  <p className="text-braun-text/60 font-sans text-sm mt-1">{edu.school}</p>
                </div>
                <div className="text-xs font-mono text-braun-text/40 whitespace-nowrap bg-black/5 px-2 py-1 rounded">
                  {edu.years}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutViewer;
