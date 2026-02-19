import { DetailPageLayout } from '@/components/templates/DetailPageLayout';
import { GridSection } from '@/components/templates/GridSection';
import { ContentSection } from '@/components/templates/ContentSection';
import { BigQuestionCard } from '@/components/organisms/BigQuestionCard';
import { Paragraph } from '@/components/atoms/Paragraph';
import { bigQuestions } from '@/data/bigQuestions';
import { useLanguage } from '@/contexts/LanguageContext';

export function BigQuestionsPage() {
  const { t } = useLanguage();

  // 번역된 Big Questions 데이터
  const translatedQuestions = bigQuestions.map((q, index) => ({
    ...q,
    question: t(`home.bigQuestions.q${index + 1}`),
  }));

  return (
    <DetailPageLayout
      title={t('bigQuestions.title')}
      subtitle={t('bigQuestions.subtitle')}
    >
      {/* Introduction */}
      <ContentSection background="white" padding="md">
        <div className="max-w-3xl">
          <Paragraph color="light" size="lg" className="leading-relaxed">
            {t('bigQuestions.intro')}
          </Paragraph>
        </div>
      </ContentSection>

      {/* Questions Grid */}
      <GridSection
        columns={2}
        gap="lg"
        background="light"
        padding="xl"
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
