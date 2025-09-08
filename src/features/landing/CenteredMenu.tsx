'use client';

import Link from 'next/link';

import { ToggleMenuButton } from '@/components/ToggleMenuButton';
import { useMenu } from '@/hooks/UseMenu';
import { cn } from '@/utils/Helpers';

export const CenteredMenu = (props: {
  logo: React.ReactNode;
  children: React.ReactNode;
  rightMenu: React.ReactNode;
}) => {
  const { showMenu, handleToggleMenu } = useMenu();

  const navClass = cn(
    'max-lg:w-full max-lg:bg-secondary max-lg:p-5 max-lg:hidden',
    {
      // "max-lg:hidden": !showMenu,
    },
  );

  return (
    <div
      className={cn(
        '3xl:gap-[80px] flex w-full flex-wrap items-center justify-between lg:gap-[20px] xl:gap-[30px] 2xl:gap-[40px]',
        showMenu && 'h-screen content-start gap-0',
      )}
    >
      <Link href="/" className="w-4/8 lg:w-auto">
        {props.logo}
      </Link>

      <div className="flex w-1/8 justify-end lg:hidden [&_button]:opacity-60 [&_button:hover]:opacity-100">
        <ToggleMenuButton onClick={handleToggleMenu} />
      </div>

      <div
        className={cn(
          'w-full h-screen lg:hidden overflow-y-hidden',
          showMenu ? 'block' : 'hidden',
        )}
      >
        <nav className={cn('rounded-t mt-6 flex-1')}>
          <ul className="flex justify-between gap-x-4 gap-y-3 text-lg font-medium font-normal text-[#434552] max-lg:flex-col [&_a]:opacity-60 max-lg:[&_a]:inline-block max-lg:[&_a]:w-full lg:[&_a]:opacity-100 [&_a:hover]:opacity-100">
            {props.children}
          </ul>
          <ul className="mt-2 flex justify-end border-t-1 border-t-[#eee]">
            <div className="mt-4">
              {props.rightMenu}
            </div>
          </ul>
        </nav>
      </div>

      <nav className={cn('rounded-t max-lg:mt-2 flex-1', navClass)}>
        <ul className="flex justify-between gap-x-4 gap-y-3 text-lg font-medium font-normal text-[#434552] max-lg:flex-col [&_a]:opacity-60 max-lg:[&_a]:inline-block max-lg:[&_a]:w-full lg:[&_a]:opacity-100 [&_a:hover]:opacity-100">
          {props.children}
        </ul>
      </nav>

      <div
        className={cn(
          'rounded-b max-lg:border-t max-lg:border-border',
          navClass,
        )}
      >
        <ul className="flex flex-row items-center gap-x-1.5 text-lg font-medium [&_li[data-fade]]:opacity-60 [&_li[data-fade]:hover]:opacity-100">
          {props.rightMenu}
        </ul>
      </div>
    </div>
  );
};
