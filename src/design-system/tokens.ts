export const tokens = {
  animation: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      elastic: 'cubic-bezier(0.68, -0.6, 0.32, 1.6)'
    }
  },
  shadow: {
    soft: '0 4px 16px rgba(11, 18, 32, 0.08)',
    medium: '0 8px 24px rgba(11, 18, 32, 0.12)',
    strong: '0 16px 48px rgba(11, 18, 32, 0.16)',
    glow: '0 0 24px rgba(54, 168, 162, 0.3)'
  },
  spacing: {
    section: {
      xs: '3rem',
      sm: '4rem',
      md: '5rem',
      lg: '6rem',
      xl: '8rem'
    },
    component: {
      xs: '0.5rem',
      sm: '1rem',
      md: '1.5rem',
      lg: '2rem',
      xl: '3rem'
    }
  },
  borderRadius: {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.75rem',
    '3xl': '2rem',
    full: '9999px'
  }
};

export const motionVariants = {
  fadeIn: {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.5, ease: [0.4, 0, 0.2, 1]}
  },
  fadeInUp: {
    initial: {opacity: 0, y: 40},
    animate: {opacity: 1, y: 0},
    transition: {duration: 0.6, ease: [0.4, 0, 0.2, 1]}
  },
  scaleIn: {
    initial: {opacity: 0, scale: 0.9},
    animate: {opacity: 1, scale: 1},
    transition: {duration: 0.4, ease: [0.4, 0, 0.2, 1]}
  },
  slideInFromLeft: {
    initial: {opacity: 0, x: -40},
    animate: {opacity: 1, x: 0},
    transition: {duration: 0.5, ease: [0.4, 0, 0.2, 1]}
  },
  slideInFromRight: {
    initial: {opacity: 0, x: 40},
    animate: {opacity: 1, x: 0},
    transition: {duration: 0.5, ease: [0.4, 0, 0.2, 1]}
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const hoverEffects = {
  lift: {
    scale: 1.02,
    y: -4,
    transition: {duration: 0.2, ease: 'easeOut'}
  },
  glow: {
    boxShadow: tokens.shadow.glow,
    transition: {duration: 0.3}
  },
  subtle: {
    scale: 1.01,
    transition: {duration: 0.2}
  }
};
