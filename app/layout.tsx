import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiba Aminu | IT Network Computing Consultation",
  description: "Professional IT network computing consultation services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
