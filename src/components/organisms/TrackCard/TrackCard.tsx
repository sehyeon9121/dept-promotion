import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface TrackCardProps {
  icon: ReactNode;
  title: string;
  titleEn: string;
  description: string;
  details?: string[];
  className?: string;
  index?: number;
}

export function TrackCard({
  icon,
  title,
  titleEn,
  description,
  details,
  className,
  index = 0,
}: TrackCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 32px -8px rgba(0, 0, 0, 0.08)',
        transition: { type: 'spring', stiffness: 300, damping: 22 },
      }}
      className={cn(
        'group relative bg-slate-50 border border-slate-100 rounded-2xl p-10',
        'shadow-sm transition-all duration-400',
        'hover:border-orange-300/60 hover:shadow-md',
        className
      )}
    >
      {/* Icon */}
      <div className="text-orange-500 mb-7 group-hover:text-orange-600 transition-colors duration-300 [&>svg]:w-[48px] [&>svg]:h-[48px]">
        {icon}
      </div>

      {/* Korean Title */}
      <h3 className="text-[18px] font-bold text-slate-900 leading-snug tracking-tight">
        {title}
      </h3>

      {/* English Subtitle */}
      <p className="text-slate-400 text-[10px] font-medium tracking-wider mt-2 mb-6 uppercase">
        {titleEn}
      </p>

      {/* Description */}
      <p className="text-slate-700 text-[13px] leading-relaxed tracking-tight">
        {description}
      </p>

      {/* Detail items */}
      {details && details.length > 0 && (
        <ul className="mt-6 space-y-3">
          {details.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-slate-600 text-[12px] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-orange-400/0 to-transparent group-hover:via-orange-400/50 transition-all duration-600" />
    </motion.article>
  );
}
