import Table, { type PricingContentType } from '@/components/ui/Table';
import { cn } from '@/utils/Helpers';

import pricingContent from './pricingContent';

export default function PricingTableComponents() {
  return (
    <>
      {pricingContent.map((el: PricingContentType, idx: number) => (
        <Table
          tableColor={el.tableColor}
          key={idx}
          header={el.header}
          decoratorUrl={el.decoratorUrl}
          tableHeader={el.tableHeader}
          tableBody={el.tableBody}
          colsWidth={el.colsWidth}
          notes={el.notes}
          className={cn('mb-[2rem] md:mb-4rem', idx === 1 && 'mb-[0.5rem]')}
        />
      ))}
    </>
  );
}
