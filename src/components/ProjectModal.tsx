import { useState, useRef } from 'react';
import { Project } from '@/data/types';
import { X, MoveHorizontal, MousePointer, Download, XCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const relativeX = x - rect.left;
    const position = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSliderPos(position);
  };

  const hasBeforeAfter = project.category === 'PHOTOGRAPHY' && project.beforeImageUrl;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md bg-background/95 animate-modal-in">
      <div className="max-w-5xl w-full max-h-[95vh] overflow-y-auto relative shadow-2xl bg-card border border-border">
        <button
          onClick={onClose}
          className="fixed top-8 right-8 transition-all hover:scale-125 z-[110] text-muted-foreground hover:text-foreground"
        >
          <X className="w-6 h-6" strokeWidth={1} />
        </button>

        <div className="flex flex-col lg:flex-row p-6 md:p-10 lg:p-16 gap-8 lg:gap-16">
          {/* Image Section */}
          <div className="w-full lg:w-3/5">
            {hasBeforeAfter ? (
              <div
                ref={sliderRef}
                className="relative overflow-hidden cursor-col-resize select-none"
                onMouseMove={handleMouseMove}
                onTouchMove={handleMouseMove}
              >
                <img src={project.imageUrl} alt={`${project.title} - Editado`} className="w-full h-auto" />
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPos}%` }}
                >
                  <img
                    src={project.beforeImageUrl}
                    alt={`${project.title} - Original`}
                    className="w-full h-auto"
                    style={{ width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none' }}
                  />
                </div>
                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-primary-foreground/80 z-10 pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary-foreground text-foreground flex items-center justify-center shadow-lg">
                    <MoveHorizontal className="w-3 h-3" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.2em] font-bold text-primary-foreground bg-foreground/40 px-2 py-1 uppercase">
                  Original
                </div>
                <div className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] font-bold text-primary-foreground bg-foreground/40 px-2 py-1 uppercase">
                  Edição
                </div>
              </div>
            ) : (
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto shadow-xl" />
            )}
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-muted-foreground">
                {project.category}
              </span>
              {project.price && (
                <span className="text-sm md:text-base font-bold tracking-widest uppercase text-foreground">
                  {project.price}
                </span>
              )}
            </div>

            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6 text-foreground">
              {project.title}
            </h2>
            <p className="mb-8 leading-relaxed font-light text-base md:text-lg text-muted-foreground">
              {project.description}
            </p>

            {project.category === 'ANIWALL' && project.buyUrl && (
              <a
                href={project.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-10 w-full py-4 text-center text-[11px] font-bold tracking-[0.3em] uppercase transition-all duration-300 flex items-center justify-center gap-3 bg-foreground text-background hover:opacity-80"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.68-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.308-.724-5.993-1.953a.5.5 0 00-.395-.077l-3.296.866.649-2.372a.5.5 0 00-.069-.432A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                {t('project.ask_quote')}
              </a>
            )}

            {/* Download section for photography */}
            {project.category === 'PHOTOGRAPHY' && (
              <div className="mb-8">
                {project.downloadable ? (
                  <a
                    href={project.imageUrl}
                    download={`${project.title.replace(/\s+/g, '-').toLowerCase()}-wallpaper`}
                    className="w-full py-3 text-center text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border border-foreground text-foreground hover:bg-foreground hover:text-background"
                  >
                    <Download className="w-4 h-4" />
                    {t('project.download')}
                  </a>
                ) : (
                  <div className="w-full py-3 text-center text-[10px] tracking-[0.2em] uppercase flex items-center justify-center gap-2 border border-border text-muted-foreground/50">
                    <XCircle className="w-4 h-4" />
                    {t('project.download_unavailable')}
                  </div>
                )}
              </div>
            )}

            <div className="pt-8 border-t border-border italic">
              <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-portfolio-text-subtle">
                Insight
              </h4>
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                Um design que fala por si só, onde cada detalhe é uma intenção transformada em forma.
              </p>
            </div>

            {hasBeforeAfter && (
              <p className="mt-8 text-[9px] tracking-[0.1em] uppercase text-muted-foreground flex items-center gap-2">
                <MousePointer className="w-3 h-3" />
                {t('project.compare_hint')}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
