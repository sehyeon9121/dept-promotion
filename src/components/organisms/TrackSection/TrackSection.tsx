import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { TrackCard } from '@/components/organisms/TrackCard';
import { cn } from '@/utils/cn';

export interface TrackItem {
  icon: ReactNode;
  title: string;
  titleEn: string;
  description: string;
  details?: string[];
}

export interface TrackSectionProps {
  tag: string;
  title: string;
  subtitle: string;
  tracks: TrackItem[];
  className?: string;
}

export function TrackSection({
  tag,
  title,
  subtitle,
  tracks,
  className,
}: TrackSectionProps) {
  return (
    <section className={cn('relative py-32 md:py-40 bg-white overflow-hidden', className)}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase">
            {tag}
          </span>
          <h2 className="mt-3 text-[26px] md:text-[32px] font-bold text-slate-900 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="mt-2 text-slate-400 text-[12px] tracking-tight">{subtitle}</p>
          <div className="mt-5 w-12 h-[3px] bg-orange-500 rounded-full mx-auto" />
        </motion.div>

        {/* Track Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {tracks.map((track, index) => (
            <TrackCard
              key={track.title}
              icon={track.icon}
              title={track.title}
              titleEn={track.titleEn}
              description={track.description}
              details={track.details}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
