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
        announcement={hero('announcement')}
        trustSignal={hero('trustSignal')}
        metrics={[
          {value: hero('metrics.0.value'), label: hero('metrics.0.label')},
          {value: hero('metrics.1.value'), label: hero('metrics.1.label')},
          {value: hero('metrics.2.value'), label: hero('metrics.2.label')}
        ]}
        highlights={[
          {title: hero('highlights.0.title'), description: hero('highlights.0.body')},
          {title: hero('highlights.1.title'), description: hero('highlights.1.body')},
          {title: hero('highlights.2.title'), description: hero('highlights.2.body')}
        ]}
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
            description: pillars('items.sleep.body'),
            focusPoints: [
              pillars('items.sleep.focus.0'),
              pillars('items.sleep.focus.1'),
              pillars('items.sleep.focus.2')
            ]
          },
          {
            id: 'nutrition',
            title: pillars('items.nutrition.title'),
            description: pillars('items.nutrition.body'),
            focusPoints: [
              pillars('items.nutrition.focus.0'),
              pillars('items.nutrition.focus.1'),
              pillars('items.nutrition.focus.2')
            ]
          },
          {
            id: 'activity',
            title: pillars('items.activity.title'),
            description: pillars('items.activity.body'),
            focusPoints: [
              pillars('items.activity.focus.0'),
              pillars('items.activity.focus.1'),
              pillars('items.activity.focus.2')
            ]
          },
          {
            id: 'mindfulness',
            title: pillars('items.mindfulness.title'),
            description: pillars('items.mindfulness.body'),
            focusPoints: [
              pillars('items.mindfulness.focus.0'),
              pillars('items.mindfulness.focus.1'),
              pillars('items.mindfulness.focus.2')
            ]
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
        ctaSupporting={workshopsSection('ctaSupporting')}
        outcomesTitle={workshopsSection('outcomesTitle')}
        outcomes={[
          workshopsSection('outcomes.0'),
          workshopsSection('outcomes.1'),
          workshopsSection('outcomes.2')
        ]}
        disclaimer={workshopsSection('disclaimer')}
      />

      <ProgramOverview
        title={programSection('title')}
        description={programSection('description')}
        supporting={programSection('supporting')}
        bundles={[
          {
            name: programSection('bundles.0.name'),
            description: programSection('bundles.0.description'),
            duration: programSection('bundles.0.duration'),
            deliverables: [
              programSection('bundles.0.deliverables.0'),
              programSection('bundles.0.deliverables.1'),
              programSection('bundles.0.deliverables.2')
            ]
          },
          {
            name: programSection('bundles.1.name'),
            description: programSection('bundles.1.description'),
            duration: programSection('bundles.1.duration'),
            deliverables: [
              programSection('bundles.1.deliverables.0'),
              programSection('bundles.1.deliverables.1'),
              programSection('bundles.1.deliverables.2')
            ]
          },
          {
            name: programSection('bundles.2.name'),
            description: programSection('bundles.2.description'),
            duration: programSection('bundles.2.duration'),
            deliverables: [
              programSection('bundles.2.deliverables.0'),
              programSection('bundles.2.deliverables.1'),
              programSection('bundles.2.deliverables.2')
            ]
          }
        ]}
        note={programSection('note')}
        ctaLabel={programSection('cta')}
        ctaHref="/contact"
      />

      <SocialProof
        title={socialProof('title')}
        description={socialProof('description')}
        items={[
          socialProof('logos.0'),
          socialProof('logos.1'),
          socialProof('logos.2')
        ]}
        metrics={[
          {value: socialProof('metrics.0.value'), label: socialProof('metrics.0.label')},
          {value: socialProof('metrics.1.value'), label: socialProof('metrics.1.label')},
          {value: socialProof('metrics.2.value'), label: socialProof('metrics.2.label')}
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
          readMore: articlesPage('readMore'),
          cta: articlesLabels('cta')
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
        valuesTitle={visionSection('valuesTitle')}
        values={[
          visionSection('values.0'),
          visionSection('values.1'),
          visionSection('values.2')
        ]}
      />

      <LeadMagnet
        title={leadMagnet('title')}
        description={leadMagnet('description')}
        benefits={[
          leadMagnet('benefits.0'),
          leadMagnet('benefits.1'),
          leadMagnet('benefits.2')
        ]}
        note={leadMagnet('note')}
        privacy={leadMagnet('privacy')}
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
        tagline={finalCta('tagline')}
      />
    </>
  );
}
