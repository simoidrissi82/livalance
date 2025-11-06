import {Inter, Outfit} from 'next/font/google';

export const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const outfit = Outfit({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
});
