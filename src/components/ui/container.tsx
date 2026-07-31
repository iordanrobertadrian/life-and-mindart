import type { ElementType, ReactNode } from 'react';

import { cn } from '@/lib/cn';

const widths = {
  /** Full page width — grids, heroes, image bands. */
  page: 'max-w-(--container-page)',
  /** Reading width — long-form prose and legal pages. */
  content: 'max-w-(--container-content)',
  /** Something in between, for section intros. */
  narrow: 'max-w-3xl',
} as const;

interface ContainerProps {
  as?: ElementType;
  width?: keyof typeof widths;
  className?: string;
  children: ReactNode;
}

export function Container({ as: Tag = 'div', width = 'page', className, children }: ContainerProps) {
  return <Tag className={cn('mx-auto w-full px-5 sm:px-8', widths[width], className)}>{children}</Tag>;
}
