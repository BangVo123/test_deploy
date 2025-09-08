import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

import Title from '../Title';

export type PricingContentType = {
  decoratorUrl?: string;
  header?: string;
  tableColor: string;
  tableHeader: string[];
  tableBody: string[][];
  colsWidth: string[];
  notes?: string[];
  className?: string;
};

export default function Table({
  decoratorUrl,
  header,
  tableColor,
  tableHeader,
  tableBody,
  colsWidth,
  notes,
  className,
}: PricingContentType) {
  const textColor = `text-[${tableColor}]`;
  const maxSize50 = generateResponsiveFontSizeClasses(50);
  const maxSize25 = generateResponsiveFontSizeClasses(25);

  return (
    <div className={cn('w-full', maxSize25, className)}>
      <div className="flex items-center gap-2 md:gap-6">
        {decoratorUrl && header && (
          <>
            <img
              src={decoratorUrl}
              alt="decorator"
              width="150px"
              height="150px"
              className="w-[100px] md:w-[150px]"
            />
            <Title
              mainTitle={header ?? ''}
              mainTitleClassName={cn(
                'font-cookie',
                textColor,
                maxSize50,
              )}
            />
          </>
        )}
      </div>
      <div
        className={cn('rounded-[20px] overflow-hidden mt-4 border-8')}
        style={{ borderColor: tableColor, backgroundColor: tableColor }}
      >
        <div className="flex w-full" style={{ backgroundColor: tableColor }}>
          {tableHeader.map((el, idx) => (
            <div
              className={cn(
                'text-left text-white py-2 px-1 md:py-4 md:px-2 w-full',
                colsWidth[idx],
              )}
              key={idx}
            >
              {el}
            </div>
          ))}
        </div>
        <div className="bg-white">
          {tableBody.map((outEl, outIdx) => (
            <div
              className={cn(
                ' flex',
                outIdx !== 0 && 'border-t-2 border-dashed',
              )}
              style={{ borderColor: tableColor }}
              key={outIdx}
            >
              {outEl.map((inEl, inIdx) => (
                <div
                  key={inIdx}
                  className={cn('py-2 px-1 md:py-4 md:px-2', colsWidth[inIdx])}
                >
                  {inEl}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div>
        {notes
        && notes.map((el, idx) => (
          <p
            className={cn(idx === 0 && 'mt-2 md:mt-4')}
            key={idx}
          >
            {el}
          </p>
        ))}
      </div>
    </div>
  );
}
