import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { PageLayout } from '@/components/templates/PageLayout';
import { TrackSection } from '@/components/organisms/TrackSection';
import { useLanguage } from '@/contexts/LanguageContext';

// Helper for base URL image paths
const getImageSrc = (src: string): string => {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/') && !src.startsWith(baseUrl)) {
    return `${baseUrl.replace(/\/$/, '')}${src}`;
  }
  return src;
};

// Stagger animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function HomePage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const tracks = [
    {
      title: t('home.tracks.structural.title'),
      titleEn: t('home.tracks.structural.subtitle'),
      description: t('home.tracks.structural.desc'),
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-6h6v6" />
        </svg>
      ),
    },
    {
      title: t('home.tracks.smart.title'),
      titleEn: t('home.tracks.smart.subtitle'),
      description: t('home.tracks.smart.desc'),
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9h6v6H9z" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /><path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" />
        </svg>
      ),
    },
    {
      title: t('home.tracks.green.title'),
      titleEn: t('home.tracks.green.subtitle'),
      description: t('home.tracks.green.desc'),
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22V8" /><path d="M5 12H2a10 10 0 0 0 20 0h-3" /><path d="M8 5.2C9 4.4 10.4 4 12 4s3 .4 4 1.2" />
          <circle cx="12" cy="4" r="2" />
        </svg>
      ),
    },
    {
      title: 'BIM & 디지털 건설',
      titleEn: 'BIM & Digital Construction',
      description: 'BIM과 디지털 기술을 활용해 설계·시공·유지관리 전 과정을 통합적으로 이해하는 스마트 건설 역량을 기릅니다.',
      details: [], // TODO: 세부 항목 추후 추가
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h20v18H2z" /><path d="M8 7v10" /><path d="M12 7v10" /><path d="M16 7v10" /><path d="M2 12h20" />
        </svg>
      ),
    },
    {
      title: '건축 환경 & 설비',
      titleEn: 'Building Environment & MEP',
      description: '건축 환경 성능과 설비 시스템을 분석하여 쾌적하고 에너지 효율적인 건축 환경을 설계합니다.', // TODO: 세부 내용 추후 추가
      details: [], // TODO: 세부 항목 추후 추가
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v8" /><path d="M4.93 10.93l1.41 1.41" /><path d="M2 18h2" /><path d="M20 18h2" /><path d="M17.66 12.34l1.41-1.41" /><path d="M16 18a4 4 0 0 0-8 0" /><path d="M12 18v4" />
        </svg>
      ),
    },
    {
      title: '건축 설계 & 통합 디자인',
      titleEn: 'Architectural Design & Integrated Design',
      description: '구조·시공·환경 요소를 종합적으로 고려하여 실현 가능한 건축 설계와 공학적 디자인 능력을 배양합니다.', // TODO: 세부 내용 추후 추가
      details: [], // TODO: 세부 항목 추후 추가
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
        </svg>
      ),
    },
  ];


  return (
    <PageLayout>
      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        className="hero-section relative min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${getImageSrc('/images/leeseunglab/hero_section.jpg')})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            y: heroY,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/90" />

        {/* Hero Content - Center Aligned */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Orange accent line */}
            <motion.div variants={staggerItem} className="flex justify-center mb-8">
              <div className="w-12 h-1 bg-orange-500 rounded-full" />
            </motion.div>

            {/* Main Title (English - Serif/Elegant) */}
            <motion.h1
              variants={staggerItem}
              className="text-3xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {t('home.hero.main')}
            </motion.h1>

            {/* Sub Title (Korean) */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg md:text-xl text-white/80 font-medium"
            >
              {t('home.hero.sub')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={staggerItem} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/about"
                className="px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
              >
                {t('home.hero.cta1')}
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" opacity="0.5">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </section>

      {/* ========== ABOUT SECTION (Why Architecture?) ========== */}
      <section className="relative py-32 md:py-40 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            {/* Left: Text */}
            <motion.div
              className="flex-1 lg:max-w-xl"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">
                {t('home.about.tag')}
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {t('home.about.title')}
              </h2>
              <div className="mt-2 w-16 h-1 bg-orange-500 rounded-full" />
              <p className="mt-8 text-slate-600 text-lg leading-relaxed">
                {t('home.about.description')}
              </p>
              <p className="mt-6 text-slate-800 font-medium text-base border-l-4 border-orange-500 pl-4">
                {t('home.about.highlight')}
              </p>
            </motion.div>

            {/* Right: Image Grid (2 overlapping images) */}
            <motion.div
              className="flex-1 relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative" style={{ minHeight: '400px' }}>
                {/* Main Image */}
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl" style={{ width: '85%' }}>
                  <img
                    src={getImageSrc('/images/leeseunglab/hero_section.jpg')}
                    alt="건축공학"
                    className="w-full h-[350px] object-cover"
                  />
                </div>
                {/* Overlapping Secondary Image */}
                <div
                  className="absolute z-20 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                  style={{ bottom: '-30px', right: '0', width: '55%' }}
                >
                  <img
                    src={getImageSrc('/images/leeseunglab/test-homepage.jpg')}
                    alt="건축 현장"
                    className="w-full h-[220px] object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div
                  className="absolute top-6 -right-4 w-24 h-24 border-2 border-orange-500/30 rounded-2xl z-0"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SPECIALIZED TRACKS SECTION ========== */}
      <TrackSection
        tag={t('home.tracks.tag')}
        title={t('home.tracks.title')}
        subtitle={t('home.tracks.subtitle')}
        tracks={tracks}
      />

      {/* 하단 흰색 여백 */}
      <div className="bg-white h-64 md:h-96" />

    </PageLayout>
  );
}
