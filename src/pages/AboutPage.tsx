import { useState } from 'react';
import { motion } from 'framer-motion';
import { PageLayout } from '@/components/templates/PageLayout';

const getImageSrc = (src: string): string => {
  if (src.startsWith('http') || src.startsWith('data:')) return src;
  const baseUrl = import.meta.env.BASE_URL || '/';
  if (src.startsWith('/') && !src.startsWith(baseUrl)) {
    return `${baseUrl.replace(/\/$/, '')}${src}`;
  }
  return src;
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const tabs = [
  { id: 'greeting', label: '인사말' },
  { id: 'intro', label: '소개' },
  { id: 'members', label: '구성원' },
  { id: 'history', label: '연혁' },
];

export function AboutPage() {
  const [activeTab, setActiveTab] = useState('intro');

  return (
    <PageLayout>
      {/* Navbar 높이만큼 상단 여백 */}
      <div className="pt-[72px]" />

      {/* ========== SUB-NAV TABS ========== */}
      <div className="bg-white border-b border-gray-200 sticky top-[72px] z-30">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative px-6 py-3.5 text-[13px] font-semibold tracking-wide transition-colors duration-300
                  ${activeTab === tab.id
                    ? 'text-orange-500'
                    : 'text-slate-500 hover:text-orange-400'
                  }
                `}
              >
                {tab.label}
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500"
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ========== PAGE CONTENT ========== */}
      <div className="bg-white">

        {/* ====== "건축공학이란?" 섹션 ====== */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              {/* Section Tag */}
              <motion.span
                variants={staggerItem}
                className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase"
              >
                Department Introduction
              </motion.span>

              {/* Title */}
              <motion.h1
                variants={staggerItem}
                className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
              >
                건축공학이란?
              </motion.h1>

              {/* Orange divider */}
              <motion.div variants={staggerItem} className="mt-3 w-14 h-[3px] bg-orange-500 rounded-full" />

              {/* Description */}
              <motion.div variants={staggerItem} className="mt-8 max-w-3xl">
                <p className="text-slate-600 text-[13.5px] leading-[1.9]">
                  건축공학은 단순한 기술이 아니라 예술, 첨단공학, 자연, 사람 등 다양한 요인들의
                  조화를 이끌어 내야 하는 융합의 한 분야이다. 건축공학은 건축물의 안전성, 기능성,
                  경제성, 친환경성을 과학적이고 공학적인 방법론으로 구현하는 학문으로, 구조공학,
                  건설관리, 건축환경 및 설비 등의 세부 전공 영역을 포괄한다.
                </p>
                <p className="mt-5 text-slate-600 text-[13.5px] leading-[1.9]">
                  특히 4차 산업혁명 시대에는 BIM(Building Information Modeling), 스마트 건설,
                  디지털 트윈 등 첨단 기술과 결합하여 건축의 전 생애 주기를 아우르는
                  통합적 관점이 요구되고 있으며, 이에 따라 건축공학 분야의 역할과 중요성은
                  더욱 커지고 있다.
                </p>
              </motion.div>

              {/* 2-Column Image Grid */}
              <motion.div
                variants={staggerItem}
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                {/* Left Image */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={getImageSrc('/images/leeseunglab/hero_section.jpg')}
                    alt="건축 모형 제작"
                    className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-white text-[11px] font-medium tracking-wide">
                    Architecture Model Workshop
                  </span>
                </div>

                {/* Right Image */}
                <div className="relative rounded-xl overflow-hidden group">
                  <img
                    src={getImageSrc('/images/leeseunglab/test-homepage.jpg')}
                    alt="설계 도면 검토"
                    className="w-full h-[240px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  <span className="absolute bottom-4 left-5 text-white text-[11px] font-medium tracking-wide">
                    Blueprint Review & Design
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ====== 구분선 ====== */}
        <div className="max-w-5xl mx-auto px-6">
          <div className="h-px bg-gray-100" />
        </div>

        {/* ====== "교육목표" 섹션 ====== */}
        <section className="py-20 md:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              className="text-center"
            >
              {/* Section Tag */}
              <motion.span
                variants={staggerItem}
                className="text-orange-500 text-[10px] font-bold tracking-[0.3em] uppercase"
              >
                Educational Goals
              </motion.span>

              {/* Title */}
              <motion.h2
                variants={staggerItem}
                className="mt-3 text-3xl md:text-4xl font-bold text-slate-900"
              >
                교육목표
              </motion.h2>

              {/* Orange divider - centered */}
              <motion.div variants={staggerItem} className="mt-3 mx-auto w-14 h-[3px] bg-orange-500 rounded-full" />

              {/* Icon */}
              <motion.div
                variants={staggerItem}
                className="mt-10 mx-auto w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 20h20" />
                  <path d="M5 20V8l7-5 7 5v12" />
                  <path d="M9 20v-6h6v6" />
                  <path d="M9 12h6" />
                </svg>
              </motion.div>

              {/* Description */}
              <motion.div variants={staggerItem} className="mt-8 max-w-2xl mx-auto">
                <p className="text-slate-600 text-[13.5px] leading-[1.9]">
                  건축공학과는 4차 산업혁명 시대를 선도할 수 있는 창의적이고 융합적인 사고를 가진
                  스마트한 미래 인재 양성을 목표로 한다. 구조, 시공, 환경 및 설비 분야의
                  기초 이론부터 최신 디지털 기술까지 체계적으로 교육하며,
                  실무 중심의 프로젝트와 산학협력을 통해
                  현장 적응력을 갖춘 전문 엔지니어를 배출한다.
                </p>
              </motion.div>

              {/* Goal Cards */}
              <motion.div
                variants={staggerItem}
                className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                    ),
                    title: '창의적 문제 해결',
                    desc: '공학적 사고와 창의력을 바탕으로 복합적인 건축 문제를 분석하고 혁신적인 해결 방안을 도출하는 능력을 배양한다.',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M9 9h6v6H9z" />
                        <path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" />
                        <path d="M20 9h3" /><path d="M20 15h3" /><path d="M1 9h3" /><path d="M1 15h3" />
                      </svg>
                    ),
                    title: '스마트 건설 역량',
                    desc: 'BIM, IoT, AI 등 첨단 디지털 기술을 건축 실무에 적용할 수 있는 스마트 건설 전문 역량을 기른다.',
                  },
                  {
                    icon: (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    ),
                    title: '실무 적응력',
                    desc: '산학협력 프로젝트와 현장 실습을 통해 졸업 후 즉시 현업에 투입될 수 있는 실무 중심 역량을 강화한다.',
                  },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="group bg-slate-50 hover:bg-white rounded-xl p-7 text-left border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-orange-50 group-hover:bg-orange-100 flex items-center justify-center transition-colors duration-300">
                      {card.icon}
                    </div>
                    <h3 className="mt-4 text-[14px] font-bold text-slate-900">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-slate-500 text-[12.5px] leading-[1.8]">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 하단 여백 */}
        <div className="h-20" />
      </div>
    </PageLayout>
  );
}
