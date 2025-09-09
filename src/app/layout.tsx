import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web AR Camp 2025 Summer",
  description: "Web AR Camp 2025 Summer Documentation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
