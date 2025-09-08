import Link from 'next/link';

import { StickyBanner } from '@/features/landing/StickyBanner';

export const DemoBanner = () => (
  <StickyBanner>
    Live Demo of B-Learning -
    {' '}
    <Link href="/">Explore the Landing Page</Link>
  </StickyBanner>
);
