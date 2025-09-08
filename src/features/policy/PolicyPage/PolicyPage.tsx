'use client';

import { usePathname } from 'next/navigation';

import Box from '@/components/Box';
import Title from '@/components/Title';
import PolicyContent from '@/features/policy/PolicyContent/PolicyContent';
import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

import privacyPolicyContent, {
  type PolicyContentType,
} from '../PolicyContent/config/privacyPolicyCotent';
import refundPolicyContent from '../PolicyContent/config/refundPolicyContent';
import termsOfUseContent from '../PolicyContent/config/termsOfUseContent';

type ContentType = {
  path: string;
  header: string;
  content: PolicyContentType[];
};

const policiesContent: ContentType[] = [
  {
    path: 'privacy-policy',
    header: 'CHÍNH SÁCH BẢO MẬT',
    content: privacyPolicyContent,
  },
  {
    path: 'terms-of-use',
    header: 'ĐIỀU KHOẢN SỬ DỤNG',
    content: termsOfUseContent,
  },
  {
    path: 'refund-policy',
    header: 'CHÍNH SÁCH HOÀN TIỀN',
    content: refundPolicyContent,
  },
];

export default function PolicyPage({
  bgColor,
  decoratorUrl,
}: {
  bgColor: string;
  decoratorUrl: string;
}) {
  const path = usePathname();
  const content: ContentType | undefined = policiesContent.find(el => path.endsWith(el.path));
  if (!content) {
    return <></>;
  }

  const maxSize60 = generateResponsiveFontSizeClasses(60);

  return (
    <div>
      <div className={cn('w-full lg:pt-15 lg:pb-20 md:pt-12 md:pb-16 pt-10 pb-12', bgColor)}>
        <Title
          mainTitle={content.header}
          mainTitleClassName={`text-center font-cookie ${maxSize60}`}
        />
      </div>
      <div
        className="relative flex flex-col items-center justify-center"
        style={{ backgroundImage: 'url(\'/assets/images/policy/bg.png\')' }}
      >
        <div
          className={cn(
            'absolute top-0 right-0 left-0 z-10 h-[200px]',
            bgColor,
          )}
        />
        <div className="relative z-20 flex items-center justify-center pb-[160px] max-xl:w-full xl:max-w-5/6">
          <Box>
            <PolicyContent policyContent={content.content} />
          </Box>
          <img
            src={decoratorUrl}
            alt="decorator"
            width="360px"
            height="360px"
            className="absolute -right-[40px] bottom-4 z-30 max-lg:-right-[30px] max-lg:bottom-[80px] max-lg:max-w-[260px]"
          />
        </div>
      </div>
    </div>
  );
}
