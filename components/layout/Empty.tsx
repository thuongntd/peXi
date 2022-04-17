import { ILayoutProps } from '@/models';
import * as React from 'react';

export function EmptyLayout({ children }: ILayoutProps) {
  return <>{children}</>;
}
