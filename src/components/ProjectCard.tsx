import { useState, useRef } from 'react';
import { Project } from '@/data/types';
import { X, MoveHorizontal, MousePointer, MessageSquare } from 'lucide-react';
import ProjectModal from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="masonry-item cursor-pointer overflow-hidden group relative"
      >
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-auto transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 grayscale group-hover:grayscale-0"
        />

        {project.category === 'ANIWALL' && project.price && (
          <div className="absolute top-4 right-4 bg-foreground/80 text-primary-foreground text-[9px] md:text-[10px] font-bold px-3 py-1 tracking-widest uppercase backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {project.price}
          </div>
        )}

        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {showModal && (
        <ProjectModal project={project} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;
