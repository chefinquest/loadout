import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Loadout — Twitter vibe product recommendations',
  description: 'A Call of Duty inspired product recommendation screen based on a mocked Twitter/X profile vibe.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
