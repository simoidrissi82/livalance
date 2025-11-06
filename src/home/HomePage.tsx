import {getTranslations} from 'next-intl/server';

import {ArticleList} from '@/components/ArticleList';
import {FAQ} from '@/components/FAQ';
import {FinalCTA} from '@/components/FinalCTA';
import {Hero} from '@/components/Hero';
import {LeadMagnet} from '@/components/LeadMagnet';
import {PillarsGrid} from '@/components/PillarsGrid';
import {ProgramOverview} from '@/components/ProgramOverview';
import {SocialProof} from '@/components/SocialProof';
import {VisionSection} from '@/components/VisionSection';
import {WorkshopHighlight} from '@/components/WorkshopHighlight';
import {getArticles} from '@/lib/content';
import type {AppLocale} from '@/i18n/routing';

type HomePageProps = {
  locale: AppLocale;
};

export async function HomePage({locale}: HomePageProps) {
  const [
    hero,
    pillars,
    workshopsSection,
    programSection,
    socialProof,
    leadMagnet,
    faq,
    finalCta,
    articlesLabels,
    visionSection,
    articlesPage
  ] = await Promise.all([
    getTranslations({locale, namespace: 'hero'}),
    getTranslations({locale, namespace: 'pillars'}),
    getTranslations({locale, namespace: 'workshopsSection'}),
    getTranslations({locale, namespace: 'programSection'}),
    getTranslations({locale, namespace: 'socialProof'}),
    getTranslations({locale, namespace: 'leadMagnet'}),
    getTranslations({locale, namespace: 'faq'}),
    getTranslations({locale, namespace: 'finalCta'}),
    getTranslations({locale, namespace: 'articles'}),
    getTranslations({locale, namespace: 'visionSection'}),
    getTranslations({locale, namespace: 'articlesPage'})
  ]);

  const articles = await getArticles(locale);

  return (
    <>
      <Hero
        title={hero('title')}
        subtitle={hero('subtitle')}
        primaryCta={{label: hero('primaryCta'), href: '/contact'}}
        secondaryCta={{label: hero('secondaryCta'), href: '/workshops'}}
      />

      <PillarsGrid
        title={pillars('title')}
        description={pillars('description')}
        items={[
          {
            id: 'sleep',
            title: pillars('items.sleep.title'),
            description: pillars('items.sleep.body')
          },
          {
            id: 'nutrition',
            title: pillars('items.nutrition.title'),
            description: pillars('items.nutrition.body')
          },
          {
            id: 'activity',
            title: pillars('items.activity.title'),
            description: pillars('items.activity.body')
          },
          {
            id: 'mindfulness',
            title: pillars('items.mindfulness.title'),
            description: pillars('items.mindfulness.body')
          }
        ]}
      />

      <WorkshopHighlight
        badge={workshopsSection('badge')}
        title={workshopsSection('title')}
        description={workshopsSection('description')}
        agenda={[
          workshopsSection('agenda.0'),
          workshopsSection('agenda.1'),
          workshopsSection('agenda.2'),
          workshopsSection('agenda.3')
        ]}
        ctaLabel={workshopsSection('cta')}
        disclaimer={workshopsSection('disclaimer')}
      />

      <ProgramOverview
        title={programSection('title')}
        description={programSection('description')}
        bundles={[
          {
            name: programSection('bundles.0.name'),
            description: programSection('bundles.0.description')
          },
          {
            name: programSection('bundles.1.name'),
            description: programSection('bundles.1.description')
          },
          {
            name: programSection('bundles.2.name'),
            description: programSection('bundles.2.description')
          }
        ]}
        ctaLabel={programSection('cta')}
        ctaHref="/contact"
      />

      <SocialProof
        title={socialProof('title')}
        items={[
          socialProof('logos.0'),
          socialProof('logos.1'),
          socialProof('logos.2')
        ]}
      />

      <ArticleList
        articles={articles}
        labels={{
          title: articlesLabels('title'),
          intro: articlesLabels('intro'),
          category: articlesLabels('filters.category'),
          readingTime: articlesLabels('filters.readingTime'),
          all: articlesLabels('filters.all'),
          under5: articlesLabels('filters.under5'),
          under10: articlesLabels('filters.under10'),
          empty: articlesLabels('empty'),
          readMore: articlesPage('readMore')
        }}
      />

      <VisionSection
        title={visionSection('title')}
        visionLabel={visionSection('visionLabel')}
        missionLabel={visionSection('missionLabel')}
        outcomeLabel={visionSection('outcomeLabel')}
        vision={visionSection('vision')}
        mission={visionSection('mission')}
        outcome={visionSection('outcome')}
      />

      <LeadMagnet
        title={leadMagnet('title')}
        description={leadMagnet('description')}
        ctaLabel={leadMagnet('cta')}
      />

      <FAQ
        title={faq('title')}
        items={[
          {
            question: faq('items.0.question'),
            answer: faq('items.0.answer')
          },
          {
            question: faq('items.1.question'),
            answer: faq('items.1.answer')
          },
          {
            question: faq('items.2.question'),
            answer: faq('items.2.answer')
          }
        ]}
      />

      <FinalCTA
        title={finalCta('title')}
        subtitle={finalCta('subtitle')}
        ctaLabel={finalCta('primary')}
      />
    </>
  );
}
