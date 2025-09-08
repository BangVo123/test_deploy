'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import Button from '@/components/Button';
import { CenteredMenu } from '@/features/landing/CenteredMenu';
import { Section } from '@/features/landing/Section';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

import { Logo } from './Logo';

export const Navbar = () => {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const maxSize20 = generateResponsiveFontSizeClasses(20);

  return (
    <Section className="sticky top-0 z-100 bg-white px-3 py-6 shadow-md">
      <CenteredMenu
        logo={<Logo isTextHidden />}
        rightMenu={(
          <>
            {/* PRO: Dark mode toggle button */}
            {/* <li data-fade>
              <LocaleSwitcher />
            </li> */}
            <li>
              <Button
                handleClick={() => router.push('/trial')}
                className={cn('font-cookie max-h-[50px] min-h-[50px] bg-[#6FC3CF] text-white', maxSize20)}
              >
                {t('trial-uppercase')}
              </Button>
            </li>
          </>
        )}
      >
        <li>
          <Link className="text-3xl" href="/">
            {t('homepage')}
          </Link>
        </li>

        <li>
          <Link className="text-3xl" href="/pricing">
            {t('pricing')}
          </Link>
        </li>

        <li>
          <Link className="text-3xl" href="/">
            {t('trial')}
          </Link>
        </li>

        <li>
          <Link className="text-3xl" href="/contact">
            {t('contact')}
          </Link>
        </li>
      </CenteredMenu>
    </Section>
  );
};
