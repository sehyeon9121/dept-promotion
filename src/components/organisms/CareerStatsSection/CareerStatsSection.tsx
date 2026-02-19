import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { StatCard } from '@/components/organisms/StatCard';
import { cn } from '@/utils/cn';

export interface StatItem {
  icon: ReactNode;
  number: string;
  label: string;
  description: string;
}

export interface CareerStatsSectionProps {
  tag: string;
  title: string;
  subtitle: string;
  stats: StatItem[];
  className?: string;
}

export function CareerStatsSection({
  tag,
  title,
  subtitle,
  stats,
  className,
}: CareerStatsSectionProps) {
  return (
    <section className={cn('relative py-20 md:py-28 bg-white overflow-hidden', className)}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
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
          <p className="mt-2 text-slate-500 text-sm">{subtitle}</p>
          <div className="mt-4 w-12 h-[3px] bg-orange-500 rounded-full mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              number={stat.number}
              label={stat.label}
              description={stat.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
