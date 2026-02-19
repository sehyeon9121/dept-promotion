import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';

const labs = [
  {
    name: '구조 실험실',
    location: '공학관 B1층',
    desc: '하중 재하 시험, 구조물 내력 실험 등 구조 성능 평가 실습이 가능합니다. 대형 구조물의 실물 크기 실험까지 수행할 수 있는 규모를 갖추고 있습니다.',
    equipment: ['만능재료시험기 (UTM)', '구조물 하중재하장치', '데이터 수집장치 (DAQ)', '변위 센서', '하중 셀'],
    capacity: '최대 30명',
    area: '250m²',
  },
  {
    name: '건축 재료 실험실',
    location: '공학관 1층',
    desc: '콘크리트, 강재 등 건축 재료의 물리·역학적 성질을 시험합니다. 콘크리트 배합 설계부터 양생, 강도 시험까지 전 과정을 실습합니다.',
    equipment: ['콘크리트 압축시험기', '인장시험기', '양생실', '슬럼프 시험기', '공기량 측정기'],
    capacity: '최대 25명',
    area: '180m²',
  },
  {
    name: 'BIM·CAD 실습실',
    location: '공학관 3층',
    desc: 'BIM 소프트웨어와 CAD 도구를 활용한 설계 실습을 진행합니다. 고사양 워크스테이션과 대형 모니터를 갖춘 최신 환경에서 수업이 이루어집니다.',
    equipment: ['고사양 워크스테이션 40대', 'Revit / ArchiCAD', 'AutoCAD', '대형 플로터', '3D 프린터'],
    capacity: '최대 40명',
    area: '200m²',
  },
  {
    name: '건축 환경 실험실',
    location: '공학관 2층',
    desc: '열환경, 음환경, 빛환경 측정 및 분석 실습을 수행합니다. 실제 건축물의 에너지 성능 평가와 실내 환경 진단을 학습합니다.',
    equipment: ['열화상카메라', '소음측정기', '조도계', '풍속계', '에너지 시뮬레이션 SW'],
    capacity: '최대 20명',
    area: '150m²',
  },
  {
    name: '스마트 건설 연구실',
    location: '공학관 4층',
    desc: 'IoT 센서, 드론, 로봇 등 스마트 건설 기술을 연구하고 실습합니다. 디지털 트윈 기술을 활용한 건설 현장 모니터링 시스템을 운영합니다.',
    equipment: ['건설용 드론', 'IoT 센서 키트', '3D 스캐너', 'VR/AR 장비', '디지털 트윈 플랫폼'],
    capacity: '최대 15명',
    area: '120m²',
  },
  {
    name: '목구조 실험실',
    location: '공학별관 1층',
    desc: '목재 부재의 역학적 성능 시험과 접합부 실험을 수행합니다. 대단면 집성재 및 CLT 구조 연구를 위한 전용 시험 장비를 보유하고 있습니다.',
    equipment: ['목재 압축시험기', '접합부 시험장치', '함수율 측정기', '목재 등급기', '비파괴 시험기'],
    capacity: '최대 20명',
    area: '200m²',
  },
];

export function LabStatusPage() {
  return (
    <DetailPageLayout
      title="실습실 현황"
      subtitle="최신 시설을 갖춘 실험·실습 환경"
      heroImage="/images/leeseunglab/publications-hero.jpg"
    >
      {/* 소개 */}
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
              실습실 현황
            </h2>
            <div className="w-14 h-1 bg-orange-500 rounded-full mb-10" />

            <p className="text-black text-lg leading-relaxed mb-12">
              최신 시설을 갖춘 실습실에서 이론과 실무를 연결하는 실험·실습 교육을 진행합니다.
              총 6개의 전문 실습실을 운영하며, 학생들이 현장 감각을 기를 수 있는 최적의 환경을 제공합니다.
            </p>

            {/* 실습실 카드 */}
            <div className="space-y-8">
              {labs.map((lab, i) => (
                <motion.div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                      <h3 className="text-xl font-bold text-black">{lab.name}</h3>
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-[12px] text-black/50 font-medium bg-slate-100 px-3 py-1 rounded-full">
                          {lab.location}
                        </span>
                        <span className="text-[12px] text-black/50 font-medium bg-slate-100 px-3 py-1 rounded-full">
                          {lab.area}
                        </span>
                        <span className="text-[12px] text-black/50 font-medium bg-slate-100 px-3 py-1 rounded-full">
                          {lab.capacity}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-black text-[15px] leading-relaxed mb-5">{lab.desc}</p>

                    {/* Equipment */}
                    <div>
                      <span className="text-[12px] font-bold text-black/40 uppercase tracking-wider mb-3 block">
                        주요 장비
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {lab.equipment.map((eq) => (
                          <span
                            key={eq}
                            className="text-[12px] px-3 py-1.5 bg-orange-50 text-orange-600 rounded-lg font-medium"
                          >
                            {eq}
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

      <div style={{ height: 60 }} />
    </DetailPageLayout>
  );
}
