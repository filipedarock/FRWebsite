import { useState, useMemo, useEffect } from 'react';
import { PROJECTS, CONTACT_INFO, ITEMS_PER_PAGE } from '@/data/constants';
import { Category } from '@/data/types';
import ProjectCard from '@/components/ProjectCard';
import { Sun, Moon, Mail, Linkedin, Instagram, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

const Index = () => {
  const navItems = useMemo(() => {
    const items: Category[] = ['ANIWALL', 'BANNERS', 'OTHERS', 'PHOTOGRAPHY', 'SIGNATURES', 'SOCIAL MEDIA'];
    return items.sort((a, b) => a.localeCompare(b));
  }, []);

  const [activeFilter, setActiveFilter] = useState<Category>(navItems[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
  }, [activeFilter]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const paginatedProjects = useMemo(() => {
    const start = currentPage * ITEMS_PER_PAGE;
    return filteredProjects.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

  const scrollToTop = () => {
    const container = document.querySelector('.portfolio-content');
    container?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:py-10 transition-colors duration-500 bg-background">
      <div className="w-full max-w-[1600px] h-full shadow-2xl">
        <div className="relative min-h-screen md:min-h-[90vh] flex flex-col md:flex-row overflow-hidden transition-colors duration-500 bg-card text-foreground">

          {/* Sidebar */}
          <aside className="w-full md:w-24 lg:w-28 border-b md:border-b-0 md:border-r border-border flex flex-row md:flex-col justify-between items-center py-4 md:py-12 px-6 md:px-4 z-50 shrink-0 transition-colors duration-500 bg-sidebar">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-xl transition-all duration-300 transform hover:scale-125 text-muted-foreground hover:text-foreground"
              title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Logo and Branding */}
            <div className="md:mt-auto flex flex-row md:flex-col items-center gap-4 md:gap-6">
              <div className="flex flex-row md:flex-col items-center gap-3 md:gap-0">
                <div className="w-8 h-8 rounded-full border-2 border-red-500 md:mb-6 flex items-center justify-center p-1 overflow-hidden shrink-0">
                  <div className="w-full h-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full" />
                </div>
                <div className="vertical-text text-[10px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap uppercase">
                  Portfolio <span className="font-light text-muted-foreground">Filipe Rocha</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="portfolio-content flex-1 flex flex-col md:h-[90vh] overflow-y-auto overflow-x-hidden scroll-smooth custom-scrollbar">

            {/* Top Navigation */}
            <header className="py-8 md:py-14 border-b border-border bg-card/95 backdrop-blur-md sticky top-0 z-40 shrink-0 transition-colors duration-500">
              <nav className="flex justify-center items-center px-6">
                <ul className="flex flex-wrap justify-center gap-x-4 md:gap-x-6 gap-y-3 text-[9px] md:text-[11px] font-bold tracking-[0.15em] md:tracking-[0.25em] uppercase text-muted-foreground">
                  {navItems.map((item, idx) => (
                    <li key={item} className="flex items-center gap-4 md:gap-6">
                      <button
                        onClick={() => setActiveFilter(item)}
                        className={`hover:text-foreground transition-all duration-300 relative py-1 ${
                          activeFilter === item ? 'text-foreground' : ''
                        }`}
                      >
                        {item}
                        {activeFilter === item && (
                          <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-foreground animate-in fade-in zoom-in duration-300" />
                        )}
                      </button>
                      {idx < navItems.length - 1 && (
                        <span className="font-thin text-portfolio-nav-separator">|</span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </header>

            {/* Gallery Content */}
            <main className="flex-1 p-6 md:p-12 lg:p-16 flex flex-col">
              <div className="masonry-columns flex-grow min-h-[400px]">
                {paginatedProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {filteredProjects.length === 0 ? (
                <div className="py-32 text-center">
                  <p className="text-[10px] tracking-[0.4em] uppercase font-light text-portfolio-text-subtle">
                    A carregar a criatividade...
                  </p>
                </div>
              ) : totalPages > 1 && (
                <div className="flex justify-center items-center gap-10 mt-12 py-4">
                  <button
                    disabled={currentPage === 0}
                    onClick={() => setCurrentPage(p => p - 1)}
                    className={`text-sm transition-all duration-300 ${
                      currentPage === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-125'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <span className="text-[10px] tracking-[0.5em] font-medium uppercase text-muted-foreground">
                    {currentPage + 1} / {totalPages}
                  </span>

                  <button
                    disabled={currentPage === totalPages - 1}
                    onClick={() => setCurrentPage(p => p + 1)}
                    className={`text-sm transition-all duration-300 ${
                      currentPage === totalPages - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-125'
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </main>

            {/* Footer */}
            <footer className="p-8 md:p-12 border-t border-border mt-auto transition-colors duration-500 bg-secondary/30">
              <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 md:gap-10">
                <div className="flex gap-10 md:gap-12 text-2xl text-portfolio-text-subtle">
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    title="Email"
                    className="transition-all transform hover:scale-125 duration-300 hover:text-foreground"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn"
                    className="transition-all transform hover:scale-125 duration-300 hover:text-foreground"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    title="Instagram"
                    className="transition-all transform hover:scale-125 duration-300 hover:text-foreground"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <p className="text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] text-center uppercase font-medium text-muted-foreground">
                    © {new Date().getFullYear()} Filipe Rocha Studio. All rights reserved.
                  </p>

                  <button
                    onClick={scrollToTop}
                    className="group w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-500 shadow-sm bg-card hover:bg-foreground hover:text-background"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
