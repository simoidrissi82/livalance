'use client';

import {ReactNode} from 'react';
import {motion} from 'framer-motion';
import {cva, type VariantProps} from 'class-variance-authority';
import {ArrowRightIcon} from '@heroicons/react/24/outline';

import {Link} from '@/i18n/routing';

const buttonStyles = cva(
  'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-white shadow-medium hover:shadow-strong hover:scale-[1.02]',
        secondary:
          'border-2 border-brand-primary bg-brand-primary-tint text-brand-text shadow-soft hover:bg-brand-primary hover:text-white hover:scale-[1.02]',
        ghost:
          'bg-transparent text-brand-text hover:text-brand-primary hover:bg-brand-primary-tint/60'
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
        'full-mobile': 'w-full sm:w-auto'
      }
    },
    defaultVariants: {
      variant: 'primary',
      width: 'auto'
    }
  }
);

type LinkHref = string | {pathname: string};

type CTAButtonProps = VariantProps<typeof buttonStyles> &
  (
    | {href: LinkHref; children: ReactNode; type?: never; showIcon?: boolean; disabled?: never}
    | {onClick?: () => void; children: ReactNode; type?: 'button' | 'submit'; showIcon?: boolean; disabled?: boolean}
  );

/**
 * Checks if a URL is an internal pathname that can be handled by next-intl Link.
 * Returns false for external URLs, protocol URLs (mailto:, tel:, etc.), and fragments.
 */
const isInternalPath = (href: string): boolean => {
  // External URLs (http://, https://)
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return false;
  }
  // Protocol URLs (mailto:, tel:, etc.)
  if (href.includes(':')) {
    return false;
  }
  // Fragment identifiers (starting with #)
  if (href.startsWith('#')) {
    return false;
  }
  // Internal pathnames (starting with / but not //)
  return href.startsWith('/') && !href.startsWith('//');
};

export function CTAButton(props: CTAButtonProps) {
  const {variant, width, children, showIcon = false} = props;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showIcon && (
        <ArrowRightIcon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 to-transparent opacity-0 group-hover:opacity-100"
        initial={{x: '-100%'}}
        whileHover={{x: '100%'}}
        transition={{duration: 0.6}}
      />
    </>
  );

  if ('href' in props) {
    // Handle string hrefs
    if (typeof props.href === 'string') {
      // For internal paths, use next-intl Link
      if (isInternalPath(props.href)) {
        return (
          <Link href={{pathname: props.href as any}} className={buttonStyles({variant, width})}>
            {content}
          </Link>
        );
      }
      // For external URLs, mailto:, tel:, fragments, etc., use regular anchor tag
      return (
        <a href={props.href} className={buttonStyles({variant, width})}>
          {content}
        </a>
      );
    }
    // Handle object hrefs (pathname objects) - these are always internal
    return (
      <Link href={props.href as any} className={buttonStyles({variant, width})}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      disabled={props.disabled}
      className={buttonStyles({variant, width})}
    >
      {content}
    </button>
  );
}
