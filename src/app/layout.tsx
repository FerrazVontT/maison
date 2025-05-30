import FooterSection from "./_components/FooterSection";
import { Header } from "./_components/header";
import "./globals.css";

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
        <FooterSection />
      </body>
    </html>
  );
}

