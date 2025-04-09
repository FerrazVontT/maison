import "./globals.css";

import { Footer } from "../app/_components/footer";
import { Header } from "../app/_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

