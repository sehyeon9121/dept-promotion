import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { ResearchThemeCard } from '@/components/organisms/ResearchThemeCard';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { researchThemes } from '@/data/researchThemes';
import { bigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function ResearchPage() {
  const { t } = useLanguage();

  // 번역된 연구 주제 데이터
  const translatedResearchThemes = researchThemes.map((theme) => ({
    ...theme,
    title: t(`research.${theme.id === 'terrestrial-carbon' ? 'terrestrialCarbon' : 'naturalClimate'}.title`),
    description: t(`research.${theme.id === 'terrestrial-carbon' ? 'terrestrialCarbon' : 'naturalClimate'}.description`),
  }));

  // 번역된 Big Questions 데이터
  const translatedQuestions = bigQuestions.map((q, index) => ({
    ...q,
    question: t(`home.bigQuestions.q${index + 1}`),
  }));

  return (
    <DetailPageLayout
      title={t('research.title')}
      subtitle={t('research.subtitle')}
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            {t('research.intro')}
          </Paragraph>
        </div>
      </ContentSection>

      {/* Research Themes */}
      <GridSection
        title={t('research.themesTitle')}
        columns={2}
        gap="lg"
        background="light"
        padding="lg"
      >
        {translatedResearchThemes.map((theme, index) => (
          <ResearchThemeCard
            key={theme.id}
            {...theme}
            index={index}
          />
        ))}
      </GridSection>

      {/* Big Questions */}
      <GridSection
        title={t('research.bigQuestionsTitle')}
        subtitle={t('research.bigQuestionsSubtitle')}
        columns={2}
        gap="md"
        background="white"
        padding="lg"
      >
        {translatedQuestions.map((question, index) => (
          <BigQuestionCard
            key={question.id}
            {...question}
            index={index}
          />
        ))}
      </GridSection>
    </DetailPageLayout>
  );
}
