import {ReactNode} from 'react';
import {cva, type VariantProps} from 'class-variance-authority';

import {Link} from '@/i18n/routing';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        primary:
          'bg-brand-primary text-white shadow-soft hover:bg-brand-primary-hover',
        secondary:
          'bg-brand-primary-tint text-brand-text hover:bg-brand-primary/80',
        ghost:
          'bg-transparent text-brand-text hover:text-brand-primary hover:bg-brand-primary-tint/60'
      },
      width: {
        auto: 'w-auto',
        full: 'w-full'
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
    | {href: LinkHref; children: ReactNode; type?: never}
    | {onClick?: () => void; children: ReactNode; type?: 'button' | 'submit'}
  );

const isInternalPath = (href: string) =>
  href.startsWith('/') && !href.startsWith('//');

export function CTAButton(props: CTAButtonProps) {
  const {variant, width, children} = props;

  if ('href' in props) {
    const href =
      typeof props.href === 'string' && isInternalPath(props.href)
        ? {pathname: props.href}
        : props.href;

    return (
      <Link href={href} className={buttonStyles({variant, width})}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      className={buttonStyles({variant, width})}
    >
      {children}
    </button>
  );
}
