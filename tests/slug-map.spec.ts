import {describe, expect, it} from 'vitest';

import {getAlternateSlug} from '@/lib/slug-map';

describe('getAlternateSlug', () => {
  it('returns mapped slug for articles', () => {
    const slug = getAlternateSlug('articles', 'de', 'en', 'glukose-verstehen-5-hebel');
    expect(slug).toBe('understanding-glucose-5-levers');
  });

  it('falls back to original when mapping missing', () => {
    const slug = getAlternateSlug('articles', 'de', 'en', 'unknown');
    expect(slug).toBe('unknown');
  });
});
