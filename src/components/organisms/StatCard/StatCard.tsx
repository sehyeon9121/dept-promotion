import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface StatCardProps {
  icon: ReactNode;
  number: string;
  label: string;
  description: string;
  className?: string;
  index?: number;
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix (e.g., "90%" -> 90, "%")
    const match = value.match(/^([\d,]+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1].replace(/,/g, ''), 10);
    const suffix = match[2];
    const duration = 1500;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      // Format with comma separators
      const formatted = current.toLocaleString();
      setDisplay(`${formatted}${suffix}`);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{display}</span>;
}

export function StatCard({
  icon,
  number,
  label,
  description,
  className,
  index = 0,
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        'relative text-center px-6 py-8',
        className
      )}
    >
      {/* Icon */}
      <div className="flex justify-center mb-4 text-orange-400">
        {icon}
      </div>

      {/* Animated Number */}
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <AnimatedNumber value={number} />
      </div>

      {/* Label */}
      <div className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-2">
        {label}
      </div>

      {/* Description */}
      <p className="text-slate-500 text-xs leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
