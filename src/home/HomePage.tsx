import {getTranslations} from 'next-intl/server';

import {FAQ} from '@/components/FAQ';
import {FinalCTA} from '@/components/FinalCTA';
import {Hero} from '@/components/Hero';
import {SocialProof} from '@/components/SocialProof';
import {Testimonials} from '@/components/Testimonials';
import {CgmKickstart} from '@/components/CgmKickstart';
import {ProgramOverview} from '@/components/ProgramOverview';
import {ToolkitSection} from '@/components/ToolkitSection';
import {ValuePropsSection} from '@/components/ValueProps';
import {PillarsGrid} from '@/components/PillarsGrid';
import type {AppLocale} from '@/i18n/routing';

type HomePageProps = {
  locale: AppLocale;
};

export async function HomePage({locale}: HomePageProps) {
  const [
    hero,
    pillars,
    valueProps,
    toolkit,
    cgmKickstart,
    offersTeaser,
    socialProof,
    testimonials,
    faq,
    finalCta
  ] = await Promise.all([
    getTranslations({locale, namespace: 'hero'}),
    getTranslations({locale, namespace: 'pillars'}),
    getTranslations({locale, namespace: 'valueProps'}),
    getTranslations({locale, namespace: 'toolkit'}),
    getTranslations({locale, namespace: 'cgmKickstart'}),
    getTranslations({locale, namespace: 'offersTeaser'}),
    getTranslations({locale, namespace: 'socialProof'}),
    getTranslations({locale, namespace: 'testimonials'}),
    getTranslations({locale, namespace: 'faq'}),
    getTranslations({locale, namespace: 'finalCta'})
  ]);

  return (
    <>
      <Hero
        title={hero('title')}
        inlinePillars={hero.raw('pillarsInline') as string[]}
        subtitleSuffix={hero('subtitleSuffix')}
        primaryCta={{label: hero('primaryCta'), href: '/contact'}}
        secondaryCta={{label: hero('secondaryCta'), href: '/workshops'}}
      />

      <ValuePropsSection
        title={valueProps('title')}
        items={[
          {title: valueProps('items.0.title'), body: valueProps('items.0.body')},
          {title: valueProps('items.1.title'), body: valueProps('items.1.body')},
          {title: valueProps('items.2.title'), body: valueProps('items.2.body')}
        ]}
        ctaLabel={valueProps('ctaLabel')}
        ctaHref="/contact"
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

      <ToolkitSection
        title={toolkit('title')}
        bullets={[
          toolkit('bullets.0'),
          toolkit('bullets.1'),
          toolkit('bullets.2'),
          toolkit('bullets.3'),
          toolkit('bullets.4'),
          toolkit('bullets.5')
        ]}
      />

      <CgmKickstart
        title={cgmKickstart('title')}
        bullets={[
          cgmKickstart('bullets.0'),
          cgmKickstart('bullets.1'),
          cgmKickstart('bullets.2')
        ]}
        disclaimer={cgmKickstart('disclaimer')}
        ctaLabel={cgmKickstart('cta')}
      />

      <ProgramOverview
        title={offersTeaser('title')}
        description={offersTeaser('description')}
        supporting={offersTeaser('supporting')}
        bundles={[
          {
            name: offersTeaser('bundles.0.name'),
            description: offersTeaser('bundles.0.description'),
            duration: offersTeaser('bundles.0.duration'),
            deliverables: [
              offersTeaser('bundles.0.deliverables.0'),
              offersTeaser('bundles.0.deliverables.1'),
              offersTeaser('bundles.0.deliverables.2')
            ]
          },
          {
            name: offersTeaser('bundles.1.name'),
            description: offersTeaser('bundles.1.description'),
            duration: offersTeaser('bundles.1.duration'),
            deliverables: [
              offersTeaser('bundles.1.deliverables.0'),
              offersTeaser('bundles.1.deliverables.1'),
              offersTeaser('bundles.1.deliverables.2')
            ]
          },
          {
            name: offersTeaser('bundles.2.name'),
            description: offersTeaser('bundles.2.description'),
            duration: offersTeaser('bundles.2.duration'),
            deliverables: [
              offersTeaser('bundles.2.deliverables.0'),
              offersTeaser('bundles.2.deliverables.1'),
              offersTeaser('bundles.2.deliverables.2')
            ]
          }
        ]}
        note={offersTeaser('note')}
        ctaLabel={offersTeaser('cta')}
        ctaHref="/offers"
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

      <Testimonials
        title={testimonials('title')}
        items={[
          {
            quote: testimonials('items.0.quote'),
            author: testimonials('items.0.author')
          },
          {
            quote: testimonials('items.1.quote'),
            author: testimonials('items.1.author')
          },
          {
            quote: testimonials('items.2.quote'),
            author: testimonials('items.2.author')
          }
        ]}
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
