import { cn } from '@/utils/Helpers';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  className,
  type = 'button',
  handleClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={cn(
        'rounded-[40px] border-3 border-[#434552] lg:px-6 py-1 md:px-4 max-md:px-2 font-cookie cursor-pointer hover:opacity-[0.8] text-[1.0625rem] md:text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] flex items-center justify-center',
        className,
      )}
    >
      {children}
    </button>
  );
}
