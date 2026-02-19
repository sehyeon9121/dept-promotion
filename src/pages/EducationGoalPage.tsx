import { motion } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';

export function EducationGoalPage() {
  return (
    <DetailPageLayout
      title="교육목표"
      subtitle="건축공학과의 인재상과 교육 방향"
      noHeroImage
    >
      {/* ========== 교육목표 섹션 ========== */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[26px] md:text-[32px] font-bold text-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              교육목표
            </h2>
            <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-5 mb-14" />

            <p className="text-black text-[15px] leading-relaxed tracking-tight max-w-3xl mb-14">
              건축공학과는 안전하고 지속 가능한 건축 환경을 창조할 수 있는 창의적 공학 인재 양성을 목표로 합니다.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: '공학적 전문성',
                  desc: '구조·시공·재료·환경 분야의 체계적 이론과 실무 역량을 갖춘 건축공학 전문가를 양성합니다.',
                },
                {
                  title: '창의적 문제해결',
                  desc: '다양한 공학적 문제를 분석하고 창의적으로 해결할 수 있는 융합적 사고력을 기릅니다.',
                },
                {
                  title: '글로벌 리더십',
                  desc: '국제적 감각과 소통 능력을 갖춘 글로벌 건축공학 리더를 배출합니다.',
                },
                {
                  title: '실무 적용 능력',
                  desc: '산학협력과 현장 실습을 통해 현장 적용 가능한 실무 역량을 강화합니다.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="bg-slate-50 rounded-xl p-8 border border-slate-100"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-orange-500 font-bold text-[12px]">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="text-[15px] font-bold text-black mb-2.5">{item.title}</h3>
                      <p className="text-black text-[13px] leading-relaxed tracking-tight">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== 인재상 섹션 ========== */}
      <section className="bg-slate-50 py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[26px] md:text-[32px] font-bold text-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              인재상
            </h2>
            <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-5 mb-14" />

            <div className="grid md:grid-cols-3 gap-16 lg:gap-20">
              {[
                {
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 20h20" /><path d="M5 20V8l7-5 7 5v12" /><path d="M9 20v-6h6v6" />
                    </svg>
                  ),
                  title: '실천하는 공학인',
                  desc: '이론을 실무에 적용하여 안전하고 기능적인 건축물을 설계·시공할 수 있는 실천적 공학 역량',
                },
                {
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ),
                  title: '소통하는 글로벌 리더',
                  desc: '다양한 문화적 배경을 이해하고, 국제적 협업 프로젝트를 주도할 수 있는 소통 능력과 리더십',
                },
                {
                  icon: (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
                    </svg>
                  ),
                  title: '혁신하는 융합 인재',
                  desc: 'AI, IoT, 친환경 기술을 건축에 융합하여 미래 건설 산업을 선도하는 창의적 혁신 역량',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-7 text-orange-500 shadow-sm border border-slate-100">
                    {item.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-black mb-3.5">{item.title}</h3>
                  <p className="text-black text-[13px] leading-relaxed tracking-tight">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== 핵심 역량 섹션 ========== */}
      <section className="bg-white py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-[26px] md:text-[32px] font-bold text-black tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              핵심 역량
            </h2>
            <div className="w-12 h-[3px] bg-orange-500 rounded-full mt-5 mb-14" />

            <div className="max-w-3xl space-y-8">
              {[
                { label: '구조 해석 및 설계', percent: 95 },
                { label: '건축 시공 관리', percent: 90 },
                { label: '친환경 건축 기술', percent: 85 },
                { label: 'BIM / 디지털 건설', percent: 88 },
                { label: '건축 법규 및 실무', percent: 80 },
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-black font-semibold text-[13px] tracking-tight">{skill.label}</span>
                    <span className="text-orange-500 font-bold text-[12px]">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ height: 80 }} />
    </DetailPageLayout>
  );
}
