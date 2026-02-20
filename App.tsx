import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import ProjectViewer from './components/ProjectViewer';
import AboutViewer from './components/AboutViewer';
import RightSidebar from './components/RightSidebar';
import CustomCursor from './components/CustomCursor';
import { projects, aboutData } from './data';

const App: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Simple scroll-to-top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeId]);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const renderContent = () => {
    if (activeId === 'home') {
      return <ProjectViewer project={projects[0]} />;
    }
    if (activeId === 'about') {
      return <AboutViewer data={aboutData} />;
    }
    const project = projects.find(p => p.id === activeId);
    if (project) {
      return <ProjectViewer project={project} />;
    }
    return <div className="p-12 font-sans text-braun-text">project not found</div>;
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-braun-text relative bg-braun-bg cursor-none overflow-hidden">

      <CustomCursor />

      {/* Floating Left Menu (Navigation) */}
      <Sidebar
        projects={projects}
        aboutData={aboutData}
        activeId={activeId}
        onNavigate={setActiveId}
        isMobileOpen={isMobileOpen}
        toggleMobile={toggleMobile}
      />

      {/* Main Content Area */}
      {/* Expanded to left edge (ml-0), Right margin kept for sidebar (lg:mr-[300px]) */}
      <main className="flex-1 min-w-0 bg-braun-bg lg:mr-[300px] min-h-screen overflow-hidden">
        {renderContent()}
      </main>

      {/* Right Sidebar (Experience & Exhibitions) */}
      <RightSidebar data={aboutData} />

      {/* Floating Brand Header (Bottom Left) + Instagram */}
      <div className="fixed bottom-8 left-12 z-[60] flex flex-col items-start gap-2 pointer-events-none mix-blend-difference text-white">
        <a
          href="https://www.instagram.com/shavonneshoirvo/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-[10px] lowercase tracking-widest hover:opacity-70 transition-opacity mb-1 pointer-events-auto cursor-none flex items-center gap-2"
        >
          <div className="w-1.5 h-1.5 bg-[#FF4400] rounded-full animate-pulse"></div>
          instagram
        </a>
        <h1
          onClick={() => setActiveId('about')}
          className="pointer-events-auto font-sans font-medium text-4xl tracking-tight hover:text-[#FF4400] transition-colors duration-300 cursor-none select-none leading-none lowercase"
        >
          shavonne<br />yang
        </h1>
      </div>

    </div>
  );
};

export default App;