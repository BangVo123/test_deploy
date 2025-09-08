/* eslint-disable react-dom/no-unsafe-target-blank */
import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';

export const SponsorLogos = () => (
  <LogoCloud text="Sponsored by">
    <a
      href="https://nextjs.org"
      target="_blank"
      rel="noopener"
    >
      <Image
        src="/assets/images/nextjs-starter-banner.png"
        alt="Next.js logo"
        className="dark:hidden"
        width="128"
        height="37"
      />
      <Image
        src="/assets/images/nextjs-starter-banner.png"
        alt="Next.js logo"
        className="hidden dark:block"
        width="128"
        height="37"
      />
    </a>
  </LogoCloud>
);
