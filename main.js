import { projects, aboutData, ContentType } from './data.js';

let activeId = 'home';
let isMobileOpen = false;

// DOM Elements
const root = document.getElementById('root');

function init() {
  root.className = 'flex flex-col min-h-[100dvh] font-sans text-braun-text relative bg-braun-bg cursor-none overflow-hidden';

  root.innerHTML = `
    <div id="custom-cursor" class="fixed pointer-events-none z-[9999] mix-blend-difference" style="left: -100px; top: -100px; transform: translate(-50%, -50%);">
      <!-- Cursor content populated dynamically -->
    </div>

    <!-- Mobile Header -->
    <div class="md:hidden fixed top-0 left-0 w-full bg-braun-bg border-b border-black/10 z-[100] px-4 py-3 flex justify-between items-center" style="padding-top: env(safe-area-inset-top, 0.75rem);">
      <h1 class="text-sm font-sans lowercase tracking-wide text-braun-text">${aboutData.name}</h1>
      <button id="mobile-menu-btn" class="text-braun-text font-sans lowercase text-xs border border-braun-text/20 px-3 py-1 rounded-full pointer-events-auto">
        menu
      </button>
    </div>

    <!-- Floating Sidebar (Desktop & Mobile) -->
    <div id="sidebar" class="fixed top-0 left-0 h-[100dvh] w-64 bg-[#F4F1EA] md:bg-transparent p-8 pt-24 md:p-0 md:top-12 md:left-12 z-[110] transition-transform duration-300 ease-in-out text-braun-text md:text-white md:mix-blend-difference -translate-x-full md:translate-x-0 border-r border-black/10 md:border-transparent cursor-auto md:cursor-none">
      <div class="flex flex-col h-full overflow-y-auto w-full">
        <section class="mb-16">
          <h2 class="font-sans text-[10px] lowercase tracking-widest mb-6 opacity-60">projects</h2>
          <ul id="project-nav-list" class="space-y-4 pointer-events-auto">
            <!-- Project links populated dynamically -->
          </ul>
        </section>
      </div>
    </div>

    <!-- Main Content Area -->
    <main id="main-content" class="flex-1 min-w-0 bg-braun-bg lg:mr-[300px] min-h-[100dvh] overflow-hidden pt-12 md:pt-0">
    </main>

    <!-- Right Sidebar (Experience & Exhibitions) -->
    <div class="hidden lg:flex flex-col w-[300px] h-[100dvh] fixed right-0 top-0 bg-braun-bg border-l border-black/5 overflow-hidden shadow-[-10px_0_30px_rgba(0,0,0,0.02)] z-30">
      <div class="h-32 w-full speaker-mesh border-b border-black/5 flex-shrink-0 relative"></div>
      <div class="flex-1 overflow-y-auto no-scrollbar p-8">
        
        <section class="mb-12">
          <h3 class="font-sans text-[10px] lowercase text-braun-text/60 tracking-wider mb-6">professional experience</h3>
          <div class="space-y-6">
            ${aboutData.professionalRoles.map(role => `
              <div class="pb-4 border-b border-black/5 last:border-0 last:pb-0">
                <p class="text-braun-text text-xs leading-relaxed opacity-90">${role}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <section class="mb-12">
          <h3 class="font-sans text-[10px] lowercase text-braun-text/60 tracking-wider mb-6">exhibitions</h3>
          <div class="space-y-8">
            ${aboutData.exhibitions.map(ex => `
              <div class="flex flex-col gap-1 group">
                <div class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 rounded-full border border-braun-text/30 group-hover:bg-braun-orange group-hover:border-braun-orange transition-colors"></div>
                  <h4 class="font-medium text-xs text-braun-text leading-tight">${ex.title}</h4>
                </div>
                <div class="flex flex-col pl-3.5 text-[10px] text-braun-text/50 font-sans mt-1">
                   <span>${ex.location}</span>
                   <span>${ex.year}</span>
                </div>
                ${ex.description ? `<p class="text-braun-text/70 text-[10px] pl-3.5 mt-1 leading-relaxed">${ex.description}</p>` : ''}
              </div>
            `).join('')}
          </div>
        </section>

        <div class="mt-12 flex justify-center opacity-80">
          <div class="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transform rotate-45 shadow-sm bg-[#F8F8F6]">
            <div class="w-full h-[1px] bg-black/20"></div>
          </div>
        </div>

      </div>
    </div>

    <!-- Floating Brand Header + Instagram -->
    <div class="fixed bottom-8 left-12 z-[60] flex flex-col items-start gap-2 pointer-events-none mix-blend-difference text-white">
      <a href="https://www.instagram.com/shavonneshoirvo/" target="_blank" rel="noopener noreferrer" class="font-sans text-[10px] lowercase tracking-widest hover:opacity-70 transition-opacity mb-1 pointer-events-auto cursor-none flex items-center gap-2">
        <div class="w-1.5 h-1.5 bg-[#FF4400] rounded-full animate-pulse"></div>
        instagram
      </a>
      <h1 id="brand-header-btn" class="pointer-events-auto font-sans font-medium text-4xl tracking-tight hover:text-[#FF4400] transition-colors duration-300 cursor-none select-none leading-none lowercase">
        shavonne<br />yang
      </h1>
    </div>
  `;

  document.getElementById('mobile-menu-btn').addEventListener('click', toggleMobile);
  document.getElementById('brand-header-btn').addEventListener('click', () => navigate('about'));

  setupCursor();
  renderNav();
  navigate('home');
}

function toggleMobile() {
  isMobileOpen = !isMobileOpen;
  const sidebar = document.getElementById('sidebar');
  const btn = document.getElementById('mobile-menu-btn');
  if (isMobileOpen) {
    sidebar.classList.remove('-translate-x-full');
    btn.textContent = 'close';
  } else {
    sidebar.classList.add('-translate-x-full');
    btn.textContent = 'menu';
  }
}

function renderNav() {
  const navList = document.getElementById('project-nav-list');
  navList.innerHTML = projects.map(project => {
    const isActive = activeId === project.id;
    return `
      <li class="group">
        <button data-id="${project.id}" class="nav-btn flex items-center gap-3 cursor-none group">
          <div class="w-2 h-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#FF4400] scale-100' : 'bg-white scale-0 group-hover:scale-50 opacity-0 group-hover:opacity-100'}"></div>
          <span class="font-sans text-sm lowercase tracking-wide transition-all ${isActive ? 'font-medium translate-x-1' : 'opacity-80 group-hover:opacity-100'}">
            ${project.title}
          </span>
        </button>
      </li>
    `;
  }).join('');

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      navigate(e.currentTarget.getAttribute('data-id'));
      if (isMobileOpen) toggleMobile();
    });
  });
}

// Cleanup variable for handling scroll event unbinding
let currentScrollHandler = null;
let currentScrollContainer = null;

function navigate(id) {
  activeId = id;
  window.scrollTo(0, 0);
  renderNav(); // update active state in nav

  const mainContent = document.getElementById('main-content');

  // Cleanup previous scroll listener
  if (currentScrollContainer && currentScrollHandler) {
    currentScrollContainer.removeEventListener('wheel', currentScrollHandler);
    currentScrollContainer = null;
    currentScrollHandler = null;
  }

  if (activeId === 'home' || projects.find(p => p.id === activeId)) {
    const project = activeId === 'home' ? projects[0] : projects.find(p => p.id === activeId);

    mainContent.innerHTML = `
      <div class="w-full h-[100dvh] bg-braun-bg relative overflow-hidden">
        <div class="fixed top-0 left-0 w-[30%] h-full z-20 cursor-none project-scroll-btn pointer-events-none" data-cursor="left" data-dir="left"></div>
        <div class="fixed top-0 right-[300px] w-[30%] h-full z-20 cursor-none hidden lg:block project-scroll-btn pointer-events-none" data-cursor="right" data-dir="right"></div>
        <div class="fixed top-0 right-0 w-[30%] h-full z-20 cursor-none lg:hidden project-scroll-btn pointer-events-none" data-cursor="right" data-dir="right"></div>

        <div id="project-container" class="h-full overflow-x-auto overflow-y-hidden flex items-center px-8 md:px-16 gap-16 md:gap-32 no-scrollbar cursor-none" style="-webkit-overflow-scrolling: touch; scroll-behavior: smooth; touch-action: pan-x; overscroll-behavior-y: none;">
          <div class="flex-shrink-0 w-[300px] flex flex-col justify-center h-full border-r border-black/5 pr-12 relative z-10">
             <h2 class="text-3xl md:text-4xl font-sans font-light tracking-tight text-braun-text mb-6 lowercase">${project.title}</h2>
             <span class="text-[10px] font-sans lowercase tracking-widest text-braun-text/60 border border-black/10 px-4 py-1.5 rounded-full self-start bg-white/50 backdrop-blur-sm">
               ${project.category}
             </span>
          </div>

          ${project.blocks.map(block => {
      switch (block.type) {
        case ContentType.HEADER:
          return `
                  <div class="flex-shrink-0 w-[300px] md:w-[400px] flex flex-col justify-center border-l border-black/5 pl-12 h-3/4 relative z-10 pointer-events-none">
                     <h3 class="font-sans font-medium text-xl md:text-2xl tracking-tight text-braun-text">${block.content}</h3>
                  </div>`;
        case ContentType.SUBHEADER:
          return `
                  <div class="flex-shrink-0 w-[200px] md:w-[300px] flex flex-col justify-center relative z-10 pointer-events-none">
                    <h4 class="font-sans text-xs font-semibold lowercase tracking-wide text-braun-text/50 mb-2">${block.content}</h4>
                    <div class="w-8 h-[1px] bg-braun-orange"></div>
                  </div>`;
        case ContentType.TEXT:
          return `
                  <div class="flex-shrink-0 w-[300px] md:w-[450px] flex flex-col justify-center relative z-10 pointer-events-none">
                    <p class="text-sm md:text-base leading-relaxed text-braun-text/90 whitespace-normal font-sans">${block.content}</p>
                  </div>`;
        case ContentType.IMAGE:
          return `
                  <div class="flex-shrink-0 h-full flex flex-col justify-center relative group z-0 px-4 pointer-events-none">
                    <div class="relative max-h-[70vh] md:max-h-[80vh] w-auto transition-transform duration-700 ease-out hover:scale-[1.01]">
                      <img src="${block.src}" alt="${block.alt || 'Artwork'}" class="h-full w-auto object-contain max-h-[70vh] md:max-h-[80vh] block bg-white shadow-braun pointer-events-none select-none rounded-[1px]" draggable="false" loading="lazy">
                    </div>
                    ${block.caption ? `<div class="mt-6 text-[10px] font-sans text-braun-text/50 lowercase tracking-wide absolute bottom-8 left-4">${block.caption}</div>` : ''}
                  </div>`;
        case ContentType.VIDEO_LINK:
          return `
                  <div class="flex-shrink-0 flex flex-col items-center justify-center relative z-30 gap-4 pointer-events-auto">
                    <a href="${block.content}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center w-16 h-16 rounded-full bg-braun-orange shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-none text-white group">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="ml-1">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </a>
                    <span class="text-[10px] lowercase tracking-widest text-braun-text/60">Watch Video</span>
                  </div>`;
        case ContentType.SPACER:
          return `<div class="flex-shrink-0 w-12 md:w-32 pointer-events-none"></div>`;
        default: return '';
      }
    }).join('')}
          <div class="flex-shrink-0 w-[300px] pointer-events-none"></div>
        </div>
      </div>
    `;

    // Horizontal Scroll Logic
    const container = document.getElementById('project-container');
    currentScrollContainer = container;

    // Convert vertical mouse wheel to horizontal scroll, but allow native horizontal trackpad swipes
    currentScrollHandler = (e) => {
      // If the scroll is strictly vertical (like a regular mouse wheel), convert to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
      // If it has a horizontal component (like a trackpad swipe), let the browser handle it natively
    };
    container.addEventListener('wheel', currentScrollHandler, { passive: false });

    // Handle clicks directly on the container for left/right navigation,
    // ignoring clicks that happen during a scroll/drag
    let isDragging = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      container.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
      container.style.scrollBehavior = 'smooth';
    });

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.style.scrollBehavior = 'smooth';
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2; // Scroll-fast multiplier
      container.scrollLeft = scrollLeft - walk;
    });

    // Click navigation
    container.addEventListener('click', (e) => {
      // Don't trigger click navigation if we were just dragging
      if (isDragging) return;

      // Ignore clicks on video links
      if (e.target.closest('a') || e.target.closest('button')) return;

      const clickX = e.clientX;
      const screenWidth = window.innerWidth;
      const scrollAmount = screenWidth * 0.6;

      // Check if click is in the right 30% area (considering Right Sidebar on desktop)
      let isRightClick = false;
      if (window.innerWidth >= 1024) { // lg breakpoint
        if (clickX > (screenWidth - 300) * 0.7) isRightClick = true;
      } else {
        if (clickX > screenWidth * 0.7) isRightClick = true;
      }

      // Check if click is in the left 30% area
      let isLeftClick = false;
      if (clickX < screenWidth * 0.3) isLeftClick = true;

      if (isRightClick) {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      } else if (isLeftClick) {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    });

  } else if (activeId === 'about') {
    mainContent.innerHTML = `
      <div class="w-full h-[100dvh] overflow-y-auto bg-braun-bg px-6 py-12 md:px-16 transition-all duration-300 no-scrollbar">
        
        <div id="contact-modal" class="hidden fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div class="bg-white p-8 rounded-[2px] shadow-braun max-w-sm w-full mx-4" onclick="event.stopPropagation()">
            <h3 class="font-sans text-[10px] lowercase tracking-widest mb-4 text-braun-text/50">contact</h3>
            <p class="font-sans text-lg text-braun-text mb-6">${aboutData.email}</p>
            <button id="copy-email-btn" class="px-6 py-2 border border-black/10 rounded-full text-xs font-sans lowercase tracking-wider hover:bg-[#FF4400] hover:text-white hover:border-[#FF4400] transition-colors w-full">
              copy email
            </button>
            <button id="close-modal-btn" class="mt-3 w-full text-center text-xs text-braun-text/40 lowercase">close</button>
          </div>
        </div>

        <div class="max-w-3xl mx-auto pt-12 text-braun-text">
          <section class="mb-20">
            <div class="bg-white p-8 md:p-12 shadow-braun rounded-[2px] border border-black/5">
              <h1 class="text-3xl md:text-4xl font-sans font-light lowercase tracking-tight mb-8">${aboutData.name}</h1>
              <div class="space-y-6 text-base md:text-lg leading-relaxed font-sans opacity-80 font-light">
                ${aboutData.overview.map(para => `<p>${para}</p>`).join('')}
              </div>
              
              <div class="mt-12 flex gap-4">
                <button id="open-contact-btn" class="inline-block px-6 py-2 border border-black/10 rounded-full text-xs font-sans lowercase tracking-wider hover:bg-[#FF4400] hover:text-white hover:border-[#FF4400] transition-colors cursor-none pointer-events-auto">
                  contact
                </button>
              </div>
            </div>
          </section>

          <section class="mb-24 pl-4 md:pl-0">
              <h3 class="font-sans text-[10px] lowercase tracking-widest mb-10 opacity-50 flex items-center gap-4">
                education
                <span class="h-[1px] flex-1 bg-black/5"></span>
              </h3>
              <div class="space-y-12">
              ${aboutData.education.map(edu => `
                <div class="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 group">
                  <div class="md:max-w-[70%]">
                    <h4 class="font-medium text-xl lowercase tracking-tight">${edu.degree}</h4>
                    <p class="opacity-60 font-sans text-sm mt-1">${edu.school}</p>
                  </div>
                  <div class="text-xs font-mono opacity-40 whitespace-nowrap bg-black/5 px-2 py-1 rounded">
                    ${edu.years}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>

          <!-- Mobile Only: Experience & Exhibitions -->
          <div class="lg:hidden">
            <section class="mb-24 pl-4 md:pl-0">
              <h3 class="font-sans text-[10px] lowercase tracking-widest mb-10 opacity-50 flex items-center gap-4">
                professional experience
                <span class="h-[1px] flex-1 bg-black/5"></span>
              </h3>
              <div class="space-y-6">
                ${aboutData.professionalRoles.map(role => `
                  <div class="pb-4 border-b border-black/5 last:border-0 last:pb-0">
                    <p class="text-sm leading-relaxed opacity-90 font-sans">${role}</p>
                  </div>
                `).join('')}
              </div>
            </section>

            <section class="mb-32 pl-4 md:pl-0">
              <h3 class="font-sans text-[10px] lowercase tracking-widest mb-10 opacity-50 flex items-center gap-4">
                exhibitions
                <span class="h-[1px] flex-1 bg-black/5"></span>
              </h3>
              <div class="space-y-8">
                ${aboutData.exhibitions.map(ex => `
                  <div class="flex flex-col gap-1 group">
                    <div class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 rounded-full border border-current opacity-30"></div>
                      <h4 class="font-medium text-sm leading-tight">${ex.title}</h4>
                    </div>
                    <div class="flex flex-col pl-3.5 text-xs opacity-50 font-sans mt-1">
                       <span>${ex.location}</span>
                       <span>${ex.year}</span>
                    </div>
                    ${ex.description ? `<p class="opacity-70 text-xs pl-3.5 mt-1 leading-relaxed">${ex.description}</p>` : ''}
                  </div>
                `).join('')}
              </div>
            </section>
          </div>

        </div>
      </div>
    `;

    // Contact modal listeners
    const modal = document.getElementById('contact-modal');
    document.getElementById('open-contact-btn').addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
    document.getElementById('close-modal-btn').addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    modal.addEventListener('click', () => {
      modal.classList.add('hidden');
    });
    document.getElementById('copy-email-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(aboutData.email);
    });

  } else {
    mainContent.innerHTML = `<div class="p-12 font-sans text-braun-text">project not found</div>`;
  }
}

function setupCursor() {
  const cursor = document.getElementById('custom-cursor');

  const renderCursor = (type) => {
    if (type === 'default') {
      cursor.innerHTML = `
        <div class="relative flex items-center justify-center">
          <div class="w-2.5 h-2.5 bg-[#FF4400] rounded-full shadow-sm"></div>
          <div class="absolute w-8 h-[1px] bg-black/30 rotate-90"></div>
          <div class="absolute w-8 h-[1px] bg-black/30"></div>
        </div>
      `;
    } else if (type === 'pointer') {
      cursor.innerHTML = `
        <div class="w-8 h-8 rounded-full border border-[#FF4400] bg-[#FF4400]/20 flex items-center justify-center">
          <div class="w-1 h-1 bg-[#FF4400] rounded-full"></div>
        </div>
      `;
    } else if (type === 'left') {
      cursor.innerHTML = `
        <div class="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </div>
      `;
    } else if (type === 'right') {
      cursor.innerHTML = `
        <div class="relative flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-black">
              <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
        </div>
      `;
    }
  };

  // Initial render
  renderCursor('default');
  let currentType = 'default';

  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Check for hover targets
    const target = e.target;

    let newType = 'default';
    if (target.dataset && target.dataset.cursor === 'left') {
      newType = 'left';
    } else if (target.dataset && target.dataset.cursor === 'right') {
      newType = 'right';
    } else if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
      newType = 'pointer';
    }

    if (newType !== currentType) {
      renderCursor(newType);
      currentType = newType;
    }
  });
}

// Start app
window.addEventListener('DOMContentLoaded', init);
