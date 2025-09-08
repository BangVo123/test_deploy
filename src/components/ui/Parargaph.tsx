import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

export default function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const maxSize30 = generateResponsiveFontSizeClasses(30);

  return (
    <p
      className={cn(
        'xl:leading-[4.0625rem] lg:leading-[3.52rem] md:leading-[2.98rem] leading-[2.3rem]',
        maxSize30,
        className,
      )}
    >
      {children}
    </p>
  );
}
