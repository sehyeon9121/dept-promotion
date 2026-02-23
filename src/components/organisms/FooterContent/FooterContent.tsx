import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface FooterContentProps {
  className?: string;
}

export function FooterContent({ className }: FooterContentProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        'w-full bg-white text-slate-900 flex items-center justify-center overflow-hidden border-t border-slate-200',
        className
      )}
      style={{ height: 87 }}
    >
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4" style={{ maxWidth: 1200, width: '100%', paddingLeft: 20, paddingRight: 20 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="text-slate-500"
          style={{ fontSize: 14 }}
        >
          © {currentYear} 한국기술교육대학교 건축공학과. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
