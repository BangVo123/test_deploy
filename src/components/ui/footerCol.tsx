import Link from 'next/link';
import type React from 'react';

import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

type FooterColumnProps = {
  logo?: React.ReactNode;
  title?: string;
  subTitle?: string;
  rows?: {
    key: string;
    value: string;
  }[];
  className?: string;
};

const FooterColumn = ({ logo, title, subTitle, rows, className, ...props }: FooterColumnProps) => {
  const maxSize25 = generateResponsiveFontSizeClasses(25);
  const maxSize35 = generateResponsiveFontSizeClasses(35);
  return (
    <div className={`footer-column ${className || ''}`} {...props}>
      {logo && <div className="footer-logo">{logo}</div>}
      {title && <h2 className={cn('font-normal text-[#6FC3CF]', maxSize35)}>{title}</h2>}
      {subTitle && <h3 className={cn('mt-2 font-normal text-white', maxSize25)}>{subTitle}</h3>}

      {rows && (
        <div className="mt-2.5 flex flex-col">
          <ul>
            {rows.map(row => (
              <li key={row.key} className="w-fit">
                <Link className={cn('font-normal text-white', maxSize25)} href={row.value}>{row.key}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FooterColumn;
