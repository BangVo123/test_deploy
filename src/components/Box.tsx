import { cn } from '@/utils/Helpers';

export default function Box({
  children,
  className,
  decoratorUrl,
  order,
  orderBorder,
  orderColor,
  panelColor,
}: {
  children: React.ReactNode;
  className?: string;
  decoratorUrl?: string;
  order?: number;
  orderBorder?: string;
  orderColor?: string;
  panelColor?: string;
}) {
  return (
    <div
      className={cn(
        'relative flex items-center md:w-4/5 max-md:w-5/6 mb-10',
        className,
      )}
    >
      <div className={cn('absolute top-10 -right-6 -bottom-6 left-10 z-0 rounded-[20px] bg-[#6fc3cf]', panelColor)}></div>
      {decoratorUrl && (
        <img
          src={decoratorUrl}
          alt="decorator"
          width="500"
          height="300"
          className="absolute left-1/2 z-20 -translate-x-1/2 max-md:-top-[160px] max-md:max-w-[320px] md:-top-[180px] md:max-w-[360px] lg:-top-[200px] lg:max-w-[400px]"
        />
      )}
      {order && (
        <div
          className="absolute -top-[30px] -left-[50px] z-30 flex items-center justify-center bg-[length:100%_100%] bg-center bg-no-repeat max-md:-top-[20px] max-md:-left-[30px] max-md:w-[85px] md:w-[110px] lg:w-[135px]"
          style={{ backgroundImage: orderBorder }}
        >
          <span className={cn('lg:text-[100px] md:text-[70px] max-md:text-[40px]', orderColor)}>{order}</span>
        </div>
      )}
      <div className="z-10 w-full rounded-[20px] bg-white">{children}</div>
    </div>
  );
}
