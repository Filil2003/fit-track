import cn from 'classnames';
import type { ButtonHTMLAttributes } from 'react';
import cssClasses from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export default function Button({
  children,
  variant = 'primary',
  ...buttonProps
}: Readonly<Props>) {
  return (
    <button
      className={cn(
        cssClasses.common,
        cssClasses[variant]
      )}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
