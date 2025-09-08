import generateResponsiveFontSizeClasses from '@/utils/fontsizeResponsiveGenerator';
import { cn } from '@/utils/Helpers';

export default function BorderBox({
  children,
  className,
  headerTitle,
  decoratorUrl,
  bottomRightDecoratorUrl,
}: {
  children: React.ReactNode;
  className?: string;
  headerTitle?: string;
  decoratorUrl?: string;
  bottomRightDecoratorUrl?: string;
}) {
  const maxSize60 = generateResponsiveFontSizeClasses(60);

  return (
    <div
      className={cn(
        'md:w-4/5 max-md:w-5/6 p-[100px] lg:pl-[100px] md:pl-[60px] max-md:pl-[40px] max-md:pr-[60px] relative bg-[length:100%_100%] bg-center bg-no-repeat',
        className,
      )}
      style={{
        backgroundImage: 'url(\'/assets/images/homepage/border_style.png\')',
      }}
    >
      <div className="">
        {headerTitle && (
          <div
            className="absolute left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-2 bg-[length:100%_100%] bg-center bg-no-repeat  max-md:-top-[30px] max-md:h-[100px] max-md:min-w-[620px] max-md:px-[40px] md:-top-[40px] md:h-[120px] md:min-w-[750px] md:px-[60px] lg:-top-[50px] lg:h-[140px] lg:min-w-[900px] lg:px-[80px]"
            style={{
              backgroundImage:
                'url(\'/assets/images/homepage/border_box_header_decorator.png\')',
            }}
          >
            <img
              src={decoratorUrl}
              alt="decorator"
              width="200"
              height="140"
              className="max-md:w-[120px] md:w-[160px] lg:w-[200px]"
            />
            <span className={`font-cookie ${maxSize60}`}>
              {headerTitle}
            </span>
          </div>
        )}
        <div className="z-10">{children}</div>
        {bottomRightDecoratorUrl && (
          <img
            src={bottomRightDecoratorUrl}
            alt="decorator"
            width="400px"
            height="400px"
            className="absolute -bottom-[40px] max-md:-right-[60px] max-md:max-w-[200px] md:-right-[110px] md:max-w-[300px] lg:-right-[160px] lg:max-w-[400px]"
          />
        )}
      </div>
    </div>
  );
}
