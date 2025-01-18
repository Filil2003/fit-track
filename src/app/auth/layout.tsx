import type { ReactNode } from 'react';
import cssClasses from './layout.module.css';

export default function AuthLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className={cssClasses.main}>
      {children}
    </main>
  );
}
