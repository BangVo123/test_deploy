'use client';

import { Button } from '@/components/ui/button';

export const ToggleMenuButton = (props: {
  onClick: () => void;
}) => (
  <Button
    className="cursor-pointer p-2 focus-visible:ring-offset-0"
    variant="ghost"
    size="icon"
    onClick={props.onClick}
    aria-label="Toggle menu"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="size-6 stroke-current stroke-2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </Button>
);
