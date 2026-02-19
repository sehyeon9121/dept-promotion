import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { useLanguage } from '@/contexts/LanguageContext';

const curriculumPages = [
  {
    title: '교육목표',
    desc: '건축공학과의 인재상과 교육 방향, 핵심 역량을 소개합니다.',
    href: '/curriculum/education-goal',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: '이수체계도',
    desc: '학년별·학기별 교과목 로드맵과 졸업 요건을 확인하세요.',
    href: '/curriculum/course-map',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: '교과목 개요',
    desc: '구조·시공·환경·설계 분야별 핵심 교과목을 상세히 안내합니다.',
    href: '/curriculum/course-overview',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    title: '실습실 현황',
    desc: '최신 장비를 갖춘 6개 전문 실험·실습실을 소개합니다.',
    href: '/curriculum/lab-status',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v11l-3 3-3-3V3z" /><path d="M6 21h12" /><path d="M12 17v4" />
      </svg>
    ),
  },
];

export function PublicationsPage() {
  const { t } = useLanguage();

  return (
    <DetailPageLayout
      title={t('publications.title')}
      subtitle={t('publications.subtitle')}
      heroImage="/images/leeseunglab/publications-hero.jpg"
    >
      <ContentSection background="white" padding="xl">
        <Container maxWidth="none" className="max-w-[920px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-black mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              교육과정
            </h2>
            <div className="w-14 h-1 bg-orange-500 rounded-full mb-10" />

            <p className="text-black text-lg leading-relaxed mb-12">
              건축공학과의 교육과정을 한눈에 살펴보세요. 아래 항목을 클릭하면 상세 페이지로 이동합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {curriculumPages.map((page, i) => (
                <motion.a
                  key={i}
                  href={page.href}
                  className="group bg-white rounded-xl p-7 border border-slate-200 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      {page.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-orange-500 transition-colors duration-300">
                        {page.title}
                      </h3>
                      <p className="text-black text-[15px] leading-relaxed">{page.desc}</p>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-300 group-hover:text-orange-500 transition-all duration-300 group-hover:translate-x-1 flex-shrink-0 mt-1"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </Container>
      </ContentSection>

      <div style={{ height: 60 }} />
    </DetailPageLayout>
  );
}
