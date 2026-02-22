import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageLayout } from '@/components/templates/PageLayout';
import { HeroSection } from '@/components/templates/HeroSection';

interface ProfessorData {
  name: string;
  title: string;
  phone: string;
  email: string;
  link: string;
}

interface LabData {
  id: string;
  name: string;
  image: string;
  description: string;
  professor: ProfessorData;
}

const labData: LabData[] = [
  {
    id: 'management',
    name: '건설경영기술연구실',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=500&fit=crop',
    description:
      '건설사업의 성공적인 수행을 위해 요구되는 다양한 경영기술에 대해 연구합니다. 건설사업은 사업기획, 계획, 설계, 구매조달, 시공, 시운전, 유지관리의 생애주기에 걸쳐 계약, 예산, 공정, 정보, 생산성, 자원, 의사소통, 품질, 안전 등에 대한 전문적 경영기술을 요구합니다. 발주자, 사용자, 설계자, 시공자, 건설사업관리자 등 다양한 이해관계자 조율 또한 중요합니다. 최근 디지털 정보화, 지식기반 산업의 융복합화, 인공지능의 활용에 따라 건설 경영기술도 첨단화 되고 있으며, 그 변화에 선제적으로 대응할 수 있는 경영기술 개발과 글로벌 환경에서 건설경영 전문인으로 활동할 수 있는 인재 양성을 위해 매진하고 있습니다.',
    professor: { name: '최재현', title: '교수', phone: '041-560-1331', email: 'jay.choi@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'smart-construction',
    name: '스마트건설연구실',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&h=500&fit=crop',
    description:
      '건설 프로젝트의 기획, 설계, 시공, 유지관리에 걸친 정보를 활용/관리/분석하는데 있어 IT기술을 활용하여 프로젝트의 가치 향상을 도모하는 연구를 수행합니다. BIM(Building Information Modeling), AI(Artificial Intelligence), XR(eXtended Reality) 등을 중심으로 다양한 기술을 활용함으로써, 스마트 건설, 스마트 시티와 같은 산업의 변화에 필요한 지식과 연구 능력을 학습합니다.',
    professor: { name: '이진강', title: '교수', phone: '041-560-1605', email: 'jglee@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'seismic',
    name: '내진구조연구실',
    image: 'https://images.unsplash.com/photo-1587582423116-ec07293f0395?w=900&h=500&fit=crop',
    description:
      '한국기술교육대학교 디자인·건축공학부 내진구조연구실(ERS Lab.)은 2003년부터 이승재 교수 지도 아래 개소하였다. 모듈러 시스템 및 주름 강판의 내진성능, 공간 트러스의 비선형 해석, 트러스 구조물의 최적 설계 등 건축 구조 관련 연구뿐만 아니라 미세먼지 측정이 가능한 드론, 양자 전산 기반 최적화 알고리즘 개발 등 4차 산업혁명에 발맞추어 건축에 적용할 수 있는 연구도 진행하고 있다. 내진구조연구실에는 지진파를 이용하여 진동을 발생시키는 가진기, 철근콘크리트 구조물의 철근 탐사를 위한 철근 탐사기, 철근 부식 측정을 위한 철근부식도 측정기 등 구조실험을 위한 다양한 실험장비를 보유하고 있으며, 열화상카메라, 3D 프린터, 산업용 드론 등 4차 산업혁명에 적용할 수 있는 장비도 보유하고 있다. 건축 구조는 사람의 안전을 책임지는 필수적인 분야이다. 사람의 안전을 책임진다는 사명감을 가지고 내진구조연구실 소속 연구원들은 각자의 자리에서 최선을 다하고 있다. 앞으로도 내진성능 확보가 가능한 다양한 공법과 공간 구조물 해석 등에 관한 연구를 진행하여 건축 구조의 글로벌 인재로 성장할 수 있도록 노력하고 있다. 본 연구실 소개자료를 통하여 많은 미래 인재들이 사람의 안전을 책임지는 건축 구조 분야에 관한 관심이 조금이나마 증대되길 기대한다.',
    professor: { name: '이승재', title: '교수', phone: '041-560-1334', email: 'leeseung@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'materials',
    name: '건설재료연구실',
    image: '/images/leeseunglab/건설재료연구실.jpg',
    description:
      '건설재료연구실은 각종 건설재료의 재료의 개발 및 관련 시공기술을 연구를 위한 각종 실습·분석장비를 운영하고 있다. 건설구조재로서의 각종 석재복합재료, 보수보강용 폴 리머 및 섬유복합재료를 대상으로 실험을 통하여 거동특성을 파악하고, 향상된 성능의 재료개발 연구를 수행해 오고 있다. 각종 콘크리트 및 아스팔트 콘크리트를 제작하고 분 석할 수 있는 유압피로시험기 및 점탄성분석기를 포함한 일체의 장비를 보유하고, 이들 을 이용한 실습교육으로 최고수준의 학부 건설재료 실습교육을 실시하고 있으며, 이를 통하여 건설신기술, 다수의 특허 및 기술이전 등으로 국내 건설기술 개발에 이바지하고 있으며 다수의 논문발표를 통하여 학술발전에 기여하고 있다.',
    professor: { name: '김남호', title: '교수', phone: '041-560-1332', email: 'nhkim@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'design',
    name: '건축디자인연구실',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&h=500&fit=crop',
    description:
      '건축 디자인에 관련된 다양한 분야를 폭넓게 연구하는 한편 학부과정에서 건축설계 스튜디오 및 건축의장과 근현대 건축사를 담당하여 건축설계와 이론을 강의하며 관련된 랩실을 운영하고 있고 대학원에서 목가구 디자인 및 실습 과목을 강의하고 있다. 능력개발교육원과 온라인 평생교육원에서 주관하는 건축 목공 및 스케치 프로그램 연수과정을 진행하고 있다. 또한 외부 건축설계 사무소와의 교류 및 협업을 통해 재학생들의 현장실습 및 취업지도에도 힘쓰고 있습니다.',
    professor: { name: '김혁기', title: '교수', phone: '041-560-1335', email: 'khk21034@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'smart-environment',
    name: '스마트건축환경연구실',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&h=500&fit=crop',
    description:
      '스마트건축환경연구실은 자연과 사람 중심의 지속가능한 건축환경 구현을 목표로, 첨단 기술을 활용한 건축환경 시스템 연구를 수행합니다. 본 연구실은 전통적인 건축환경 기술을 비롯하여 IoT 및 AI 등과 같은 스마트 기술을 활용한 스마트 건물 에너지 관리, 주거서비스 기술과 로봇 친화형 건축환경 기술, 그리고 BIPV와 같은 건물과 신재생에너지의 연계 활용 기술 등에 대한 분야를 연구합니다. 이를 통해 건물의 에너지 성능과 생활 편의성, 안전성, 쾌적성 등을 동시에 높이는 스마트 건축 모델을 개발하고, 학계·산업계·공공기관과의 협력을 통해 실제 현장 적용 가능성을 확장하고자 합니다.',
    professor: { name: '곽병창', title: '교수', phone: '041-560-1333', email: 'bckwag@koreatech.ac.kr', link: '/faculty' },
  },
  {
    id: 'history',
    name: '건축역사연구실',
    image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=900&h=500&fit=crop',
    description:
      '우리나라의 문화재을 중심으로 한 보존과 건축 및 도시공간에 관한 역사를 연구하고 분석하는 연구를 하고 있습니다. 연구, 분석함에 있어, 3차원 스캐닝 기술과 토탈스테이션, 드론 등 비파괴 첨단기술 장비를 활용하여 문화유산의 보존과학적 조사를 통해 문화유산이 가지는 본래의 가치와 원형을 되찾고자 합니다. 또한 연구소, 건축 및 문화재 실무 업체 등과의 협업을 통해 전공 이론과 함께 실무 현장에서의 필요한 지식과 능력을 갖출 수 있도록 노력하고 있습니다.',
    professor: { name: '김기주', title: '교수', phone: '041-560-1337', email: 'kikjoo@koreatech.ac.kr', link: '/faculty' },
  },
];

export function LabPage() {
  const [activeTab, setActiveTab] = useState(0);
  const activeLab = labData[activeTab];

  return (
    <PageLayout>
      <HeroSection
        variant="subpage"
        title="연구실"
        subtitle="건축공학과 연구실 소개"
        backgroundImage="/images/leeseunglab/hero-background.jpg"
      />

      {/* 1. 가장 바깥쪽 Wrapper */}
      <section className="w-full py-20 bg-white">
        {/* 2. 중앙 정렬 컨테이너 */}
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Tab Menu */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {labData.map((lab, index) => (
              <button
                key={lab.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={[
                  'px-6 py-3 text-[15px] rounded-full transition-all duration-200',
                  activeTab === index
                    ? 'bg-slate-900 !text-black font-bold shadow-md'
                    : 'bg-white !text-slate-600 font-medium border border-slate-200 hover:bg-slate-50',
                ].join(' ')}
              >
                {lab.name}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              {/* 3. 컨텐츠 영역 (사진 + 설명 박스) */}
              <div className="relative max-w-5xl mx-auto mt-12">
                {/* Image */}
                <img
                  src={activeLab.image}
                  alt={activeLab.name}
                  className="w-full h-[500px] object-cover rounded-xl"
                />

                {/* Text Box - 사진 우측 하단에 겹치는 오버랩 */}
                <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-0 md:translate-x-12 w-[90%] md:w-[65%] bg-white shadow-lg rounded-xl p-8">
                  {/* Header with icon */}
                  <div className="flex items-center gap-2.5 mb-4">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-slate-800 flex-shrink-0"
                    >
                      <path d="M9 3h6" />
                      <path d="M10 3v7.4a2 2 0 0 1-.5 1.3L4 18.6a1 1 0 0 0 .7 1.7h14.6a1 1 0 0 0 .7-1.7l-5.5-6.9a2 2 0 0 1-.5-1.3V3" />
                      <path d="M8.5 14h7" />
                    </svg>
                    <h3 className="text-slate-900 font-bold tracking-tight text-[14.5px]">
                      {activeLab.name} 소개
                    </h3>
                  </div>

                  {/* Dashed divider */}
                  <div className="border-t border-dashed border-slate-300 mb-4" />

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-[12.5px]">
                    {activeLab.description}
                  </p>

                  {/* Professor Section */}
                  <div className="border-t border-dashed border-slate-200 mt-6 pt-6">
                    <div className="bg-slate-50 rounded-lg p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-slate-800 flex-shrink-0"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="text-slate-900 font-bold text-xs">
                          지도 교수
                        </span>
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <div>
                          <div className="flex items-baseline gap-2 mb-1.5">
                            <span className="text-slate-900 font-bold text-sm">
                              {activeLab.professor.name}
                            </span>
                            <span className="text-slate-400 text-[11px]">
                              {activeLab.professor.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                            <span>{activeLab.professor.phone}</span>
                            <span className="text-slate-300">|</span>
                            <span>{activeLab.professor.email}</span>
                          </div>
                        </div>

                        <a
                          href={activeLab.professor.link}
                          className="text-slate-500 hover:text-slate-700 transition-colors text-[11px]"
                        >
                          교수진 상세 보기 &gt;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 오버랩 박스가 아래로 삐져나오는 만큼 여백 확보 */}
              <div className="h-40 md:h-48" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </PageLayout>
  );
}
