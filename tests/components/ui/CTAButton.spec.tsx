import {render, screen} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';

import {CTAButton} from '@/components/ui/CTAButton';

describe('CTAButton', () => {
  it('renders as a link when href is provided', () => {
    render(<CTAButton href="/test">Click me</CTAButton>);
    const link = screen.getByRole('link', {name: /click me/i});
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href');
  });

  it('renders as a button when onClick is provided', () => {
    const handleClick = vi.fn();
    render(
      <CTAButton onClick={handleClick} type="button">
        Click me
      </CTAButton>
    );
    const button = screen.getByRole('button', {name: /click me/i});
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
  });

  it('applies primary variant styles', () => {
    render(<CTAButton href="/test" variant="primary">Primary</CTAButton>);
    const link = screen.getByRole('link');
    expect(link.className).toContain('bg-brand-primary');
  });

  it('applies secondary variant styles', () => {
    render(<CTAButton href="/test" variant="secondary">Secondary</CTAButton>);
    const link = screen.getByRole('link');
    expect(link.className).toContain('bg-brand-primary-tint');
  });

  it('applies full width when specified', () => {
    render(
      <CTAButton href="/test" width="full">
        Full width
      </CTAButton>
    );
    const link = screen.getByRole('link');
    expect(link.className).toContain('w-full');
  });
});

