import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SVESAP - Admin Panel",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      {children}
    </main>
  );
}
