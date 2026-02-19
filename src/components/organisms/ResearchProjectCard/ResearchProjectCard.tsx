import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface ResearchProjectCardProps {
  icon: ReactNode;
  title: string;
  className?: string;
  index?: number;
  href?: string;
}

export function ResearchProjectCard({
  icon,
  title,
  className,
  index = 0,
  href,
}: ResearchProjectCardProps) {
  const content = (
    <>
      {/* Icon */}
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="flex-1 text-sm font-semibold text-slate-800 leading-snug group-hover:text-orange-600 transition-colors duration-300">
        {title}
      </h3>

      {/* Arrow */}
      <svg
        className="flex-shrink-0 w-4 h-4 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </>
  );

  const baseClasses = cn(
    'group flex items-center gap-4 p-5 bg-white border border-slate-200/80 rounded-xl',
    'shadow-sm hover:shadow-md hover:border-orange-200/60',
    'transition-all duration-300 cursor-pointer',
    className
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {href ? (
        <a href={href} className={baseClasses}>
          {content}
        </a>
      ) : (
        <div className={baseClasses}>
          {content}
        </div>
      )}
    </motion.div>
  );
}
