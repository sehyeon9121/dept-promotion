import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

export interface NavigationBarProps {
  className?: string;
}

const curriculumSubItems = [
  { label: '교육목표', href: '/curriculum/education-goal' },
  { label: '이수체계도', href: '/curriculum/course-map' },
  { label: '교과목 개요', href: '/curriculum/course-overview' },
  { label: '실습실 현황', href: '/curriculum/lab-status' },
];

export function NavigationBar({ className }: NavigationBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCurriculumOpen, setIsCurriculumOpen] = useState(false);
  const [mobileCurriculumOpen, setMobileCurriculumOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navItems = [
    { label: '학과소개', href: '/about' },
    { label: '교육과정', href: '/curriculum', hasDropdown: true },
    { label: '교수진', href: '/faculty' },
    { label: '학생광장', href: '/community' },
    { label: '연구실', href: '/lab' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
        setMobileCurriculumOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside as EventListener);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside as EventListener);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    setMobileCurriculumOpen(false);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setIsCurriculumOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsCurriculumOpen(false);
    }, 150);
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' as const },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: 'easeInOut' as const },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' as const },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.15 },
    },
  };

  const accordionVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.25, ease: 'easeInOut' as const },
    },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.25, ease: 'easeInOut' as const },
    },
  };

  return (
    <header
      ref={mobileMenuRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'bg-white border-b border-slate-200 shadow-sm',
        className
      )}
    >
      <div
        className="flex items-center justify-between nav-container"
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          height: '72px',
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-slate-900 font-semibold text-lg tracking-tight">
              한국기술교육대학교 건축공학과
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <a
                  href={item.href}
                  className="group relative py-3 cursor-pointer inline-block"
                >
                  <span className="text-slate-900 text-[14.4px] font-medium tracking-wide group-hover:text-orange-500 transition-colors duration-300 flex items-center gap-1">
                    {item.label}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className={cn(
                        'transition-transform duration-200',
                        isCurriculumOpen && 'rotate-180'
                      )}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-orange-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {isCurriculumOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm z-50"
                      style={{ minWidth: '220px', marginTop: 0 }}
                    >
                      {curriculumSubItems.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="flex items-center h-[56px] border-b border-gray-100 last:border-b-0 transition-colors duration-200 hover:bg-orange-50/60"
                          style={{ paddingLeft: '24px', paddingRight: '24px' }}
                        >
                          <span className="text-slate-900 text-[12px] font-semibold tracking-wide hover:text-orange-500 transition-colors duration-200">
                            {sub.label}
                          </span>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="group relative py-3 cursor-pointer"
              >
                <span className="text-slate-900 text-[14.4px] font-medium tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-orange-500 rounded-full transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isMobileMenuOpen) setMobileCurriculumOpen(false);
            }}
            className="p-2 text-slate-900"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleNavClick}
            style={{ top: '72px' }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-50 overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="py-4">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.href}>
                    {/* Accordion Header */}
                    <button
                      type="button"
                      className="group flex items-center justify-between w-full h-14 hover:bg-slate-50 transition-all duration-300 px-6 border-l-2 border-transparent hover:border-orange-500"
                      onClick={() => setMobileCurriculumOpen(!mobileCurriculumOpen)}
                    >
                      <span className="text-slate-900 text-[14.4px] font-medium tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                        {item.label}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={cn(
                          'text-slate-400 transition-transform duration-200',
                          mobileCurriculumOpen && 'rotate-180'
                        )}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence>
                      {mobileCurriculumOpen && (
                        <motion.div
                          variants={accordionVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                          className="overflow-hidden bg-slate-50"
                        >
                          {curriculumSubItems.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              className="group flex items-center h-14 pl-12 pr-6 hover:bg-slate-100 transition-all duration-300 border-l-2 border-transparent hover:border-orange-500"
                              onClick={handleNavClick}
                            >
                              <span className="text-slate-700 text-[13px] font-bold group-hover:text-orange-500 transition-colors duration-300">
                                {sub.label}
                              </span>
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center justify-between h-14 hover:bg-slate-50 transition-all duration-300 px-6 border-l-2 border-transparent hover:border-orange-500"
                    onClick={handleNavClick}
                  >
                    <span className="text-slate-900 text-[14.4px] font-medium tracking-wide group-hover:text-orange-500 transition-colors duration-300">
                      {item.label}
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-slate-400"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
