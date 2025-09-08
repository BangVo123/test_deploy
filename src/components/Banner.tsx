import { cn } from '@/utils/Helpers';

export default function Banner({
  content,
  imgUrl,
  className,
}: {
  content: React.ReactElement;
  imgUrl: string;
  className?: string;
}): React.ReactElement {
  return (
    <div className={cn('bg-[#ec6277] max-md:w-full md:grid md:grid-cols-12', className)}>
      <div className="col-span-10 col-start-2 flex w-full items-center justify-between px-[10px] py-[40px]">
        <div>{content}</div>
        <img
          src={imgUrl}
          alt="banner-decorator"
          width="480px"
          height="480px"
          className="w-[200px] md:w-[340px] lg:w-[480px]"
        />
      </div>
    </div>
  );
}
