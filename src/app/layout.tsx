import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const RobotoCondensed = Roboto_Condensed({
  subsets: ['latin', 'cyrillic'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'FitTrack',
  description: 'Track your fitness activity with FitTrack'
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html className={RobotoCondensed.className} lang="en">
      <body>{children}</body>
    </html>
  );
}
