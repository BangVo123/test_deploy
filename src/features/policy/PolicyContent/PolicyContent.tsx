import { Fragment } from 'react';

import Paragraph from '@/components/ui/Parargaph';
import UnOrderedList from '@/components/ui/UnOrderedList';

import type { PolicyContentType } from './config/privacyPolicyCotent';

export default function PolicyContent({ policyContent }: { policyContent: PolicyContentType[] }) {
  return (
    <div className="rounded-[20px] border-3 border-[#434552] px-3 text-[#434552] max-md:py-4 md:px-8 md:py-6 lg:px-[60px] lg:py-10">
      {policyContent
      && policyContent.map((el, idx) => {
        switch (el.tag) {
          case 'p':
            return (
              <Paragraph key={idx} className={el.textColor}>
                {el.value}
              </Paragraph>
            );
          case 'ul':
            return <UnOrderedList key={idx} items={el.value} />;
          default:
            console.error('Tag does not match');
            return <Fragment key={idx} />;
        }
      })}
    </div>
  );
}
