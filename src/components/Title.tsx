import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

export default function Title({
  mainTitle,
  subTitle,
  mainTitleClassName,
  subTitleClassName,
  className,
}: {
  mainTitle: string;
  subTitle?: string;
  mainTitleClassName?: string;
  subTitleClassName?: string;
  className?: string;
}) {
  const maxSize80 = generateResponsiveFontSizeClasses(80);
  const maxSize65 = generateResponsiveFontSizeClasses(65);

  return (
    <div className={cn('w-full text-white', className)}>
      <p
        className={cn(
          'lg:leading-[80px] md:leading-[60px] max-md:leading-[40px]',
          maxSize80,
          mainTitleClassName,
        )}
      >
        {mainTitle}
      </p>
      {subTitle && (
        <p
          className={cn(
            'lg:leading-[70px] md:leading-[50px] max-md:leading-[30px] max-lg:mt-0 lg:mt-6',
            maxSize65,
            subTitleClassName,
          )}
        >
          {subTitle}
        </p>
      )}
    </div>
  );
}
