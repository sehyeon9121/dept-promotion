import { createContext, useContext, useCallback, type ReactNode } from 'react';

export type Language = 'KO';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 한국어 전용 번역 데이터
const translations: Record<string, string> = {
  // Navigation
  'nav.department': 'DEPARTMENT',
  'nav.department.sub': '소개',
  'nav.academics': 'ACADEMICS',
  'nav.academics.sub': '교육',
  'nav.people': 'PEOPLE',
  'nav.people.sub': '구성원',
  'nav.community': 'COMMUNITY',
  'nav.community.sub': '광장',

  // Home Page - Hero
  'home.hero.main': 'Global Leader in Architectural Engineering',
  'home.hero.sub': '미래를 짓는 창의적 리더, 한국기술교육대학교 건축공학과',
  'home.hero.cta1': '학과 소개',

  // Home Page - About (Why Architecture?)
  'home.about.tag': 'ABOUT DEPARTMENT',
  'home.about.title': 'Why Architecture?',
  'home.about.description': '건축공학은 예술과 공학의 융합입니다. 인간의 삶을 담는 공간을 설계하고, 안전하고 아름다운 구조물을 현실로 만드는 학문입니다. 4차 산업혁명 시대, 건축공학은 AI, IoT, 친환경 기술과 결합하여 스마트 건축, 디지털 트윈, 탄소중립 건설 등 미래 산업의 핵심으로 자리잡고 있습니다.',
  'home.about.highlight': '우리 학과는 구조 해석, 스마트 시공, 친환경 설계 분야에서 국내 최고 수준의 교육과 연구 역량을 보유하고 있습니다.',

  // Home Page - Tracks (Specialized Tracks)
  'home.tracks.tag': 'CURRICULUM',
  'home.tracks.title': 'Specialized Tracks',
  'home.tracks.subtitle': '전공 심화 과정',
  'home.tracks.structural.title': '구조 공학',
  'home.tracks.structural.subtitle': 'Structural Engineering',
  'home.tracks.structural.desc': '초고층 빌딩부터 대공간 구조물까지, 하중 분석과 구조 설계를 통해 안전하고 효율적인 건축 구조 시스템을 연구합니다.',
  'home.tracks.smart.title': '건설 시공 & 관리',
  'home.tracks.smart.subtitle': 'Smart Construction',
  'home.tracks.smart.desc': '건축 시공 과정 전반을 이해하고, 공정·품질·안전 관리를 통해 효율적인 건설 생산 시스템을 학습합니다.',
  'home.tracks.green.title': '건축 재료',
  'home.tracks.green.subtitle': 'Green Architecture',
  'home.tracks.green.desc': '콘크리트, 강재, 친환경 재료 등 건축 재료의 물성과 성능을 분석하여 지속 가능하고 안전한 건축 기술을 탐구합니다.',

  // Home Page - Career Facts
  'home.career.tag': 'CAREER & VISION',
  'home.career.title': 'After Graduation',
  'home.career.subtitle': '졸업 후 진로',
  'home.career.stat1.number': '90%+',
  'home.career.stat1.label': '취업률',
  'home.career.stat1.desc': '졸업생 취업률 전국 상위권',
  'home.career.stat2.number': '1위',
  'home.career.stat2.label': '건축기사',
  'home.career.stat2.desc': '건축기사 합격률 전국 최상위',
  'home.career.stat3.number': '3,000+',
  'home.career.stat3.label': '동문 네트워크',
  'home.career.stat3.desc': '건설·설계 업계 활약 동문',
  'home.career.stat4.number': '50+',
  'home.career.stat4.label': '협력 기업',
  'home.career.stat4.desc': '산학협력 파트너 기업',


  // Research Themes
  'research.terrestrialCarbon.title': 'AI 기반 대공간 목구조 설계',
  'research.terrestrialCarbon.description': 'AI와 데이터 기반 설계를 통해 대공간 목구조의 구조적 한계를 확장합니다.',
  'research.naturalClimate.title': '탄소중립 건축 실현 기술',
  'research.naturalClimate.description': '목재 건축의 탄소 저감 효과를 정량적으로 분석하고, 설계·시공·운영 전 과정에서 탄소중립 성능을 검증합니다.',

  // Research Page
  'research.title': '연구',
  'research.subtitle': '건축공학 분야 최신 연구를 수행합니다',
  'research.intro': '구조 해석, 스마트 건설, 친환경 건축 기술 분야의 혁신적 연구를 진행하고 있습니다.',
  'research.themesTitle': '연구 주제',
  'research.bigQuestionsTitle': '핵심 연구',
  'research.bigQuestionsSubtitle': '우리 연구를 이끄는 근본적인 질문들',

  // Big Questions Page
  'home.bigQuestions.title': '핵심 연구 구성',
  'home.bigQuestions.subtitle': '연구 과제',
  'home.bigQuestions.q1': '탄소제로 목조 대공간 건축물 기술 개발',
  'home.bigQuestions.q2': '[1세부] 고성능 하이브리드 대단면 목조 구조 기술 개발',
  'home.bigQuestions.q3': '[2세부] OSC 기반 목조 대공간 모듈화·탄소중립 설계 기술 개발',
  'home.bigQuestions.q4': '[3세부] 목조 대공간 건축물 친환경·에너지 성능 평가 기술 개발',
  'home.bigQuestions.q5': '[4세부] 목조 대공간 건축물 스마트 시공 및 유지관리 기술 개발',
  'home.bigQuestions.q6': '학술 공동 연구 기관',
  'home.bigQuestions.q7': '연구·시험·실증 협력 기관',
  'home.bigQuestions.q8': '산업 연계 및 기술 확산 파트너',
  'bigQuestions.title': '연구 과제',
  'bigQuestions.subtitle': '국책 연구과제에서의 연구 과제 구성.',
  'bigQuestions.intro': '우리의 연구는 200m급 목조 대공간 건축물의 실현 가능성과 탄소중립 건설 기술의 미래라는 근본적인 질문에 의해 이끌립니다.',
  'bigQuestions.backTo': '돌아가기',

  // Publications Page
  'publications.title': '교육과정',
  'publications.subtitle': '전공 교육과정을 확인하세요',

  // People Page
  'people.title': '구성원',
  'people.subtitle': '교수진과 연구원을 소개합니다',
  'people.principalInvestigator': '교수',
  'people.phdStudents': '박사과정',
  'people.masterStudents': '석사과정',
  'people.researchAssistants': '연구 조교',

  // Team Page
  'team.title': '교수진 소개',
  'team.team': '교수진',
  'team.alumni': '기술연구원',


  // Contact Page
  'contact.title': '연락처',
  'contact.subtitle': '건축공학과에 문의하세요.',
  'contact.address': '주소',
  'contact.email': '이메일',
  'contact.phone': '전화',
  'contact.followUs': '팔로우하기',
  'contact.ourLocation': '위치',

  // News Page
  'news.title': '연구실',
  'news.subtitle': '건축공학과 최신 소식',
  'news.latestNews': '최신 공지',

  // Climate Snacks Page
  'climateSnacks.title': '세미나',
  'climateSnacks.subtitle': '건축공학 세미나 및 특강 안내',
  'climateSnacks.description': '다양한 건축공학 관련 세미나와 특강을 진행합니다.',

  // Common
  'common.readMore': '더 보기',
  'common.viewAll': '전체 보기',
  'common.backToTop': '맨 위로',

  // Footer
  'footer.copyright': '© 2024 OO대학교 건축공학과. All rights reserved.',
  'footer.contact': '연락처',
  'footer.location': '위치',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const t = useCallback((key: string): string => {
    return translations[key] || key;
  }, []);

  return (
    <LanguageContext.Provider value={{ language: 'KO', setLanguage: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
