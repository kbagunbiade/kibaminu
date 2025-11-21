import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: "KibAminu LLC | Network Infrastructure & IT Services",
  description: "Professional network infrastructure installation and IT services throughout the Bay Area. From low voltage cabling and CCTV to server rooms and IT support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
