import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutSection from '@/components/AboutSection';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="banner_outer">
        <Header />
        <figure className="banner-layerright mb-0">
          <Image
            src="/assets/images/banner-layerright.png"
            alt=""
            className="img-fluid"
            width={612}
            height={940}
          />
        </figure>
        <Hero />
      </div>
      <Services />
      <AboutSection />
      <Footer />
    </>
  );
}
