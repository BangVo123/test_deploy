import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

export default function UnOrderedList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const maxSize30 = generateResponsiveFontSizeClasses(30);

  return (
    <ul
      className={cn(
        'xl:leading-[4.0625rem] lg:leading-[3.52rem] md:leading-[2.98rem] leading-[2.3rem] pl-5 list-disc list-inside lg:marker:text-[1rem] md:marker:text-[0.75rem] marker:text-[0.5rem] ',
        className,
        maxSize30,
      )}
    >
      {items && items.map((el, idx) => <li key={idx}>{el}</li>)}
    </ul>
  );
}
