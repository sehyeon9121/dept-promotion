import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';

const courseGroups = [
  {
    category: '구조 분야',
    color: 'border-blue-500',
    tagColor: 'bg-blue-500',
    courses: [
      { name: '구조역학 I·II', credit: '3학점', semester: '2-1 / 2-2', desc: '힘의 평형, 응력, 변형률 등 구조물의 역학적 거동을 분석하고, 부정정 구조물의 해석법을 학습합니다.' },
      { name: '철근콘크리트공학 I·II', credit: '3학점', semester: '2-2 / 3-1', desc: '철근콘크리트 구조물의 해석과 설계 방법을 학습하며, 보·기둥·슬래브의 설계를 실습합니다.' },
      { name: '강구조설계', credit: '3학점', semester: '3-1', desc: '강재를 사용한 건축 구조물의 설계 원리와 접합부 설계를 다룹니다.' },
      { name: '건축구조실험', credit: '2학점', semester: '4-1', desc: '구조 부재의 하중 재하 시험을 통해 이론적 해석 결과를 실험으로 검증합니다.' },
    ],
  },
  {
    category: '시공·관리 분야',
    color: 'border-emerald-500',
    tagColor: 'bg-emerald-500',
    courses: [
      { name: '건축시공학', credit: '3학점', semester: '2-2', desc: '건축물 시공의 전반적인 과정과 공법, 가설공사부터 마감공사까지 학습합니다.' },
      { name: '건설관리', credit: '3학점', semester: '3-1', desc: '건설 프로젝트의 일정, 비용, 품질 관리 기법과 PERT/CPM 공정 관리를 배웁니다.' },
      { name: 'BIM 설계', credit: '3학점', semester: '3-1', desc: 'Building Information Modeling 기반의 3D 모델링과 통합 설계를 실습합니다.' },
      { name: '건축적산', credit: '3학점', semester: '3-2', desc: '건축 공사비 산정을 위한 물량산출과 원가분석 방법을 학습합니다.' },
    ],
  },
  {
    category: '환경·설비 분야',
    color: 'border-orange-500',
    tagColor: 'bg-orange-500',
    courses: [
      { name: '건축환경공학', credit: '3학점', semester: '2-1', desc: '열, 빛, 음 환경의 원리와 쾌적한 실내 환경 조성 방법을 학습합니다.' },
      { name: '건축설비', credit: '3학점', semester: '3-2', desc: '냉난방, 급배수, 전기 등 건축 설비 시스템의 설계와 시공을 다룹니다.' },
      { name: '건축재료학', credit: '3학점', semester: '2-1', desc: '콘크리트, 강재, 목재, 친환경 재료 등 건축 재료의 물성과 활용법을 배웁니다.' },
      { name: '토질역학', credit: '3학점', semester: '3-2', desc: '흙의 역학적 성질과 지반 공학 기초, 기초 구조물 설계를 학습합니다.' },
    ],
  },
  {
    category: '설계·통합 분야',
    color: 'border-purple-500',
    tagColor: 'bg-purple-500',
    courses: [
      { name: '건축 CAD', credit: '2학점', semester: '1-1', desc: 'AutoCAD를 활용한 건축 도면 작성의 기초를 실습합니다.' },
      { name: '건축법규', credit: '3학점', semester: '3-2', desc: '건축법, 소방법 등 건축 관련 법규의 이해와 실무 적용을 학습합니다.' },
      { name: '졸업설계 I·II', credit: '3학점', semester: '4-1 / 4-2', desc: '4년간 학습한 전공 지식을 종합하여 실제 건축 프로젝트를 설계하고 발표합니다.' },
      { name: '캡스톤디자인', credit: '3학점', semester: '4-2', desc: '산업체 연계 실전 프로젝트를 수행하며, 팀 기반 문제 해결 역량을 기릅니다.' },
    ],
  },
];

export function CourseOverviewPage() {
  return (
    <DetailPageLayout
      title="교과목 개요"
      subtitle="분야별 핵심 교과목 안내"
      heroImage="/images/leeseunglab/publications-hero.jpg"
    >
      {/* 개요 */}
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
              교과목 개요
            </h2>
            <div className="w-14 h-1 bg-orange-500 rounded-full mb-10" />

            <p className="text-black text-lg leading-relaxed mb-12">
              건축공학과의 핵심 교과목을 분야별로 소개합니다. 각 교과목은 이론 수업과 실습을 병행하며,
              졸업 후 실무에 바로 적용할 수 있는 역량을 키우는 데 중점을 둡니다.
            </p>

            {/* 분야별 교과목 */}
            <div className="space-y-10">
              {courseGroups.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.1 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`w-3 h-3 rounded-full ${group.tagColor}`} />
                    <h3 className="text-2xl font-bold text-black">{group.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    {group.courses.map((course, ci) => (
                      <motion.div
                        key={ci}
                        className={`bg-white rounded-xl p-5 border-l-4 ${group.color} border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300`}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: ci * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-[16px] font-bold text-black">{course.name}</h4>
                          <div className="flex gap-2">
                            <span className="text-[11px] px-2 py-0.5 bg-orange-50 text-orange-600 rounded font-semibold">
                              {course.credit}
                            </span>
                            <span className="text-[11px] px-2 py-0.5 bg-slate-100 text-black/50 rounded font-semibold">
                              {course.semester}
                            </span>
                          </div>
                        </div>
                        <p className="text-black text-[14px] leading-relaxed">{course.desc}</p>
                      </motion.div>
                    ))}
                  </div>
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
