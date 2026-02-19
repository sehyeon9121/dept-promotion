import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';
import { cn } from '@/utils/cn';

const yearData = [
  {
    year: '1학년',
    tag: '기초',
    color: 'bg-blue-500',
    borderColor: 'border-blue-500',
    semester1: ['건축공학개론', '일반물리학', '공학수학 I', '건축 CAD'],
    semester2: ['일반화학', '공학수학 II', '건축제도', '건축학개론'],
  },
  {
    year: '2학년',
    tag: '심화',
    color: 'bg-emerald-500',
    borderColor: 'border-emerald-500',
    semester1: ['구조역학 I', '건축재료학', '건축환경공학', '유체역학'],
    semester2: ['구조역학 II', '건축시공학', '철근콘크리트 I', '건축설비개론'],
  },
  {
    year: '3학년',
    tag: '전공',
    color: 'bg-orange-500',
    borderColor: 'border-orange-500',
    semester1: ['철근콘크리트 II', '강구조설계', '건설관리', 'BIM 설계'],
    semester2: ['토질역학', '건축설비', '건축법규', '건축적산'],
  },
  {
    year: '4학년',
    tag: '응용',
    color: 'bg-purple-500',
    borderColor: 'border-purple-500',
    semester1: ['졸업설계 I', '프로젝트관리', '현장실습', '건축구조실험'],
    semester2: ['졸업설계 II', '캡스톤디자인', '건축공학세미나', '특수구조'],
  },
];

export function CourseMapPage() {
  return (
    <DetailPageLayout
      title="이수체계도"
      subtitle="학년별 교육과정 로드맵"
      heroImage="/images/leeseunglab/publications-hero.jpg"
    >
      {/* 이수체계도 소개 */}
      <ContentSection background="white" padding="xl">
        <Container maxWidth="none" className="max-w-[1000px]">
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
              이수체계도
            </h2>
            <div className="w-14 h-1 bg-orange-500 rounded-full mb-10" />

            <p className="text-black text-lg leading-relaxed mb-12">
              학년별 체계적인 교과목 이수를 통해 건축공학 전문 역량을 단계적으로 키워갑니다.
              1학년 기초과학부터 4학년 졸업설계까지, 이론과 실무를 균형 있게 학습합니다.
            </p>

            {/* 학년별 로드맵 */}
            <div className="space-y-10">
              {yearData.map((yr, i) => (
                <motion.div
                  key={i}
                  className={cn('rounded-xl border-l-4 bg-white shadow-sm overflow-hidden', yr.borderColor)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border-b border-slate-100">
                    <span className="text-2xl font-bold text-black">{yr.year}</span>
                    <span className={cn('text-[11px] font-bold text-white px-2.5 py-1 rounded-full', yr.color)}>
                      {yr.tag}
                    </span>
                  </div>

                  {/* Semesters */}
                  <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <div className="p-6">
                      <h4 className="text-sm font-bold text-black/50 uppercase tracking-wider mb-4">1학기</h4>
                      <div className="flex flex-wrap gap-2">
                        {yr.semester1.map((subj) => (
                          <span
                            key={subj}
                            className="px-3.5 py-2 bg-slate-50 rounded-lg text-[14px] text-black font-medium border border-slate-200"
                          >
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-sm font-bold text-black/50 uppercase tracking-wider mb-4">2학기</h4>
                      <div className="flex flex-wrap gap-2">
                        {yr.semester2.map((subj) => (
                          <span
                            key={subj}
                            className="px-3.5 py-2 bg-slate-50 rounded-lg text-[14px] text-black font-medium border border-slate-200"
                          >
                            {subj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </ContentSection>

      {/* 졸업 요건 */}
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
              졸업 요건
            </h2>
            <div className="w-14 h-1 bg-orange-500 rounded-full mb-10" />

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: '총 이수학점', value: '130학점', desc: '교양 + 전공 + 자유선택' },
                { label: '전공 필수', value: '60학점', desc: '전공기초 18 + 전공필수 42' },
                { label: '캡스톤디자인', value: '필수 이수', desc: '졸업설계 I, II 포함' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-200 text-center shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <span className="text-sm font-bold text-black/50 uppercase tracking-wider">{item.label}</span>
                  <div className="text-3xl font-bold text-orange-500 my-3">{item.value}</div>
                  <p className="text-black text-[14px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </ContentSection>

      <div style={{ height: 60 }} />
    </DetailPageLayout>
  );
}
