import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store App",
  description: "Store website created using Next.js",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
