import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { ContentSection } from '@/components/templates/ContentSection';
import { Container } from '@/components/atoms/Container';

interface FacilityData {
  id: string;
  number: number;
  name: string;
  image: string;
}

const facilitiesData: FacilityData[] = [
  {
    id: 'computer-lab',
    number: 1,
    name: '컴퓨터실',
    image: '/images/leeseunglab/컴퓨터실.png',
  },
  {
    id: 'steel-structure',
    number: 2,
    name: '강구조실습실',
    image: '/images/leeseunglab/강구조실습실.png',
  },
  {
    id: 'building-materials',
    number: 3,
    name: '건축재료실습실',
    image: '/images/leeseunglab/건축재료실습실.png',
  },
  {
    id: 'light-steel',
    number: 4,
    name: '경량철골실습장',
    image: '/images/leeseunglab/경량철골실습실.png',
  },
  {
    id: 'studio-2nd',
    number: 5,
    name: '건축설계스튜디오(2학년)',
    image: '/images/leeseunglab/건축설계스튜디오(2학년).png',
  },
  {
    id: 'studio-3rd',
    number: 6,
    name: '건축설계스튜디오(3학년)',
    image: '/images/leeseunglab/건축설계스튜디오(3학년).png',
  },
  {
    id: 'interior',
    number: 7,
    name: '의장실',
    image: '/images/leeseunglab/의장실.png',
  },
  {
    id: 'exhibition',
    number: 8,
    name: '전시장',
    image: '/images/leeseunglab/전시장.png',
  },
  {
    id: 'seminar',
    number: 9,
    name: '세미나실',
    image: '/images/leeseunglab/세미나실.png',
  },
];

export function LabStatusPage() {
  const [activeRoom, setActiveRoom] = useState(0);
  const activeData = facilitiesData[activeRoom];

  return (
    <DetailPageLayout
      title="실습실 현황"
      subtitle="최신 시설을 갖춘 실험·실습 환경"
      heroImage="/images/leeseunglab/publications-hero.jpg"
    >
      <ContentSection background="white" padding="xl">
        <Container maxWidth="none" className="max-w-[1000px]">
          {/* Image Viewer */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden mb-4">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeData.id}
                src={activeData.image}
                alt={activeData.name}
                className="w-full object-cover"
                style={{ height: 460 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </AnimatePresence>
          </div>

          {/* Selected Room Name */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeData.id}
              className="text-center text-slate-800 font-bold mb-12"
              style={{ fontSize: '13.5px' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {activeData.name}
            </motion.p>
          </AnimatePresence>

          {/* Navigation Box */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-10">
            {/* Box Header */}
            <div className="flex items-center gap-2.5 mb-4">
              {/* School icon */}
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
                <path d="M2 22V8l10-6 10 6v14" />
                <path d="M6 12v6h4v-6" />
                <path d="M14 12v6h4v-6" />
                <path d="M2 8h20" />
                <path d="M12 2v6" />
              </svg>
              <h3
                className="text-slate-900 font-bold tracking-tight"
                style={{ fontSize: '13.5px' }}
              >
                건축공학전공 실습실
              </h3>
            </div>

            {/* Dashed Divider */}
            <div className="border-t border-dashed border-slate-300 mb-6" />

            {/* Button Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {facilitiesData.map((facility, index) => (
                <button
                  key={facility.id}
                  type="button"
                  onClick={() => setActiveRoom(index)}
                  className={[
                    'flex items-center gap-2.5 px-4 py-3 rounded-lg text-left transition-all duration-200',
                    activeRoom === index
                      ? 'bg-white border-2 border-slate-900 shadow-sm'
                      : 'bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm',
                  ].join(' ')}
                >
                  {/* Number Badge */}
                  <span
                    className={[
                      'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold',
                      activeRoom === index
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-200 text-slate-500',
                    ].join(' ')}
                  >
                    {facility.number}
                  </span>

                  {/* Name */}
                  <span
                    className={[
                      'text-[12px] leading-tight',
                      activeRoom === index
                        ? 'text-slate-900 font-bold'
                        : 'text-slate-600 font-medium',
                    ].join(' ')}
                  >
                    {facility.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </ContentSection>

      <div style={{ height: 60 }} />
    </DetailPageLayout>
  );
}
