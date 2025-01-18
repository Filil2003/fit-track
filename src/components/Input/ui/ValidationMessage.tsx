import type { PropsWithChildren } from 'react';
import cssClasses from './ValidationMessage.module.css';
import cn from 'classnames';

export default function ValidationMessage({ children }: Readonly<PropsWithChildren>) {
  if (children) return (
    <p className={cn(cssClasses.message, cssClasses.error)}>
      {children}
    </p>
  );
}
