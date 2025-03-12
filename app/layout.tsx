import type { Metadata } from "next";
import "./globals.css";
import Container  from "@/components/global/container";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Store App",
  description: "Store website created using Next.js",
};

export default function RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar/>
          <Container className="py-20">
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
