import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SVESAP Auth',
};

export default function GuestLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="">{children}</main>;
}
