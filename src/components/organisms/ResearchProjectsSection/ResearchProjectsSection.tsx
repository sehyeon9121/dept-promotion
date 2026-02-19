import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ResearchProjectCard } from '@/components/organisms/ResearchProjectCard';
import { cn } from '@/utils/cn';

export interface ResearchProject {
  icon: ReactNode;
  title: string;
  href?: string;
}

export interface ResearchProjectsSectionProps {
  tag: string;
  title: string;
  subtitle: string;
  intro: string;
  projects: ResearchProject[];
  className?: string;
}

export function ResearchProjectsSection({
  tag,
  title,
  subtitle,
  intro,
  projects,
  className,
}: ResearchProjectsSectionProps) {
  return (
    <section className={cn('relative py-20 md:py-28 bg-slate-50 overflow-hidden', className)}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange-500 text-[11px] font-bold tracking-[0.3em] uppercase">
            {tag}
          </span>
          <h2
            className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p className="mt-2 text-slate-400 text-sm">{subtitle}</p>
          <div className="mt-4 w-12 h-[3px] bg-orange-500 rounded-full mx-auto" />
        </motion.div>

        {/* Intro text */}
        <motion.p
          className="text-center text-slate-600 text-sm leading-relaxed max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {intro}
        </motion.p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <ResearchProjectCard
              key={project.title}
              icon={project.icon}
              title={project.title}
              href={project.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
