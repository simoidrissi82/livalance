import {render, screen} from '@testing-library/react';
import {describe, expect, it} from 'vitest';

import {Hero} from '@/components/content/Hero';

describe('Hero', () => {
  it('renders title and subtitle', () => {
    render(
      <Hero
        title="Test Title"
        subtitleSuffix="Test subtitle"
        primaryCta={{label: 'Primary', href: '/primary'}}
        secondaryCta={{label: 'Secondary', href: '/secondary'}}
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test subtitle')).toBeInTheDocument();
  });

  it('renders inline pillars when provided', () => {
    render(
      <Hero
        title="Test Title"
        subtitleSuffix="suffix"
        inlinePillars={['Sleep', 'Nutrition']}
        primaryCta={{label: 'Primary', href: '/primary'}}
        secondaryCta={{label: 'Secondary', href: '/secondary'}}
      />
    );

    expect(screen.getByText('Sleep')).toBeInTheDocument();
    expect(screen.getByText('Nutrition')).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(
      <Hero
        title="Test Title"
        subtitleSuffix="Test subtitle"
        primaryCta={{label: 'Primary CTA', href: '/primary'}}
        secondaryCta={{label: 'Secondary CTA', href: '/secondary'}}
      />
    );

    expect(screen.getByRole('link', {name: /primary cta/i})).toBeInTheDocument();
    expect(screen.getByRole('link', {name: /secondary cta/i})).toBeInTheDocument();
  });
});

