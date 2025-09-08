import Image from 'next/image';
import { useTranslations } from 'next-intl';

import FooterColumn from '@/components/ui/footerCol';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  const scale = 0.6;
  const maxSize25 = generateResponsiveFontSizeClasses(25);

  return (
    <div className="relative flex flex-col items-center justify-between bg-[#434552]">
      <div className="flex w-full justify-between">
        {[
          'bg-[#EC6277]',
          'bg-[#6FC3CF]',
          'bg-[#F9AC80]',
          'bg-[#567FC0]',
          'bg-[#45A97F]',
          'bg-[#FFCC74]',
          'bg-[#BF9AEE]',
        ].map((bg, i) => (
          <div key={i} className={`${bg} h-[11px] flex-1`} />
        ))}
      </div>
      <div className="3xl:gap-[120px] mt-[60px] flex w-full flex-col items-start justify-between border-b-1 px-10 pb-6 lg:mt-[72px] lg:w-2/3 lg:flex-row lg:gap-[40px] lg:px-0 lg:pb-[67px] xl:gap-[60px] 2xl:gap-[80px]">
        <FooterColumn className="flex-3" logo={<Logo isTextHidden />} subTitle={t('description')} />
        <div className="3xl:gap-[120px] mt-6 flex flex-2 flex-row gap-[80px] lg:mt-0 lg:gap-10 xl:gap-[60px] 2xl:gap-[80px]">
          <FooterColumn
            className="flex-2"
            title="Menu"
            rows={[{
              key: t('home'),
              value: '',
            }, {
              key: t('pricing'),
              value: '/pricing',
            }, {
              key: t('freeTrial'),
              value: '',
            }, {
              key: t('contact'),
              value: '/contact',
            }]}
          />
          <FooterColumn
            className="flex-1"
            title={t('policy')}
            rows={[{
              key: t('privacy'),
              value: '/privacy-policy',
            }, {
              key: t('users'),
              value: '/terms-of-use',
            }, {
              key: t('payment'),
              value: '/refund-policy',
            }]}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3">
        <p className={cn('mt-4 mb-8 text-[25px] text-white pl-10', maxSize25)}>Copyright 2025 SmartLearn. All rights reserved</p>
      </div>

      <Image className="absolute right-1 bottom-1 w-[120px] md:w-[160px] lg:w-[240px] xl:w-[360px]" src="/assets/images/boy-reading-book.png" width={600 * scale} height={420 * scale} alt="" />
    </div>
  );
};
