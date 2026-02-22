import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/contexts/LanguageContext';
import {
  HomePage,
  AboutPage,
  TeamPage,
  PublicationsPage,
  EducationGoalPage,
  CourseMapPage,
  CourseOverviewPage,
  LabStatusPage,
  LabPage,
  BigQuestionsPage,
  BigQuestionDetailPage,
  ContactPage,
  ClimateSnacksPage,
} from '@/pages';

function App() {
  const location = useLocation();

  // Handle scroll to section after navigation
  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      // Wait for page to render, then scroll
      const scrollToElement = () => {
        const element = document.getElementById(state.scrollTo!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Update URL with hash
          window.history.replaceState(null, '', `${location.pathname}#${state.scrollTo}`);
          // Clear the state to prevent re-scrolling on re-render
          window.history.replaceState(null, '', `${location.pathname}#${state.scrollTo}`);
        } else {
          // Element not found yet, retry
          requestAnimationFrame(scrollToElement);
        }
      };
      requestAnimationFrame(scrollToElement);
    }
  }, [location]);

  return (
    <LanguageProvider>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faculty" element={<TeamPage />} />
        <Route path="/curriculum" element={<PublicationsPage />} />
        <Route path="/curriculum/education-goal" element={<EducationGoalPage />} />
        <Route path="/curriculum/course-map" element={<CourseMapPage />} />
        <Route path="/curriculum/course-overview" element={<CourseOverviewPage />} />
        <Route path="/curriculum/lab-status" element={<LabStatusPage />} />
        <Route path="/lab" element={<LabPage />} />
        <Route path="/career" element={<BigQuestionsPage />} />
        <Route path="/career/:id" element={<BigQuestionDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/climate-snacks" element={<ClimateSnacksPage />} />
        </Routes>
      </AnimatePresence>
    </LanguageProvider>
  );
}

export default App;
