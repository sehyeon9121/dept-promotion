import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface CTABannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  backgroundImage?: string;
  className?: string;
}

export function CTABanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
  secondaryText,
  secondaryHref,
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        'relative py-20 md:py-28 overflow-hidden',
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50" />

      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-8 left-8 w-2 h-2 bg-orange-500 rounded-full" />
        <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-orange-500 rounded-full" />
        <div className="absolute bottom-12 left-1/3 w-1 h-1 bg-orange-500 rounded-full" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-orange-500 rounded-full" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h2>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
            >
              {ctaText}
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            {secondaryText && secondaryHref && (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300"
              >
                {secondaryText}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
