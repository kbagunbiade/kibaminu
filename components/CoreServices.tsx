'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const services = [
  {
    id: 1,
    icon: '/assets/images/core-expertise-1.jpg',
    title: 'Telecommunications (Telco) Services',
    teaser: 'Reliable telecommunications solutions for seamless connectivity across all your business locations.',
    fullText: 'We provide reliable and scalable telecommunications solutions designed to keep your business connected at all times. From network planning to full deployment, our telco services ensure high-quality connectivity, minimal downtime, and seamless communication across all your locations.',
  },
  {
    id: 2,
    icon: '/assets/images/core-expertise-2.jpg',
    title: 'Voice Services',
    teaser: 'Advanced voice solutions including VoIP, SIP trunking, and PBX for crystal-clear calling.',
    fullText: 'Clear, dependable voice communication is essential for every modern business. We deliver advanced voice solutions—including VoIP, SIP trunking, PBX setup, and call-center configurations—to give your team professional, crystal-clear calling. Whether on-site or cloud-based, our voice systems are built for efficiency, reliability, and security.',
  },
  {
    id: 3,
    icon: '/assets/images/core-expertise-3.jpg',
    title: 'Data Services',
    teaser: 'Fast, secure data infrastructure that supports business growth and productivity.',
    fullText: 'Your business runs on data—so we make sure it moves fast, securely, and without interruption. Our data services include structured cabling, network design, high-speed internet provisioning, wireless solutions, and advanced network monitoring. We help you build a strong data foundation that supports growth, productivity, and future expansion.',
  },
];

export default function CoreServices() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    setExpandedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const isExpanded = (id: number) => expandedCards.includes(id);

  // Reusable card component
  const ServiceCard = ({ service }: { service: typeof services[0] }) => (
    <div
      className={`core-service-card ${isExpanded(service.id) ? 'expanded' : ''}`}
      data-aos="fade-up"
      data-aos-delay={service.id * 100}
    >
      <div className="card-header">
        <figure className="service-icon">
          <Image
            src={service.icon}
            alt=""
            className="img-fluid"
            width={60}
            height={60}
          />
        </figure>
        <h4>
          <Link href="/contact" className="service-title-link">
            {service.title}
          </Link>
        </h4>
      </div>

      <div className="card-content">
        <p className="teaser-text">{service.teaser}</p>

        <div className={`expanded-content ${isExpanded(service.id) ? 'show' : ''}`}>
          <p className="full-text">{service.fullText}</p>
        </div>

        <button
          className="expand-btn"
          onClick={() => toggleCard(service.id)}
          aria-label={isExpanded(service.id) ? 'Show less' : 'Learn more'}
        >
          {isExpanded(service.id) ? (
            <>
              Show Less
              <i className="fa-solid fa-chevron-up"></i>
            </>
          ) : (
            <>
              Learn More
              <i className="fa-solid fa-chevron-down"></i>
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <section className="core-services-section">
      {/* Video Background */}
      <video
        className="core-services-video-bg"
        autoPlay
        loop
        muted
        playsInline
        poster="/assets/images/pexels-brett-sayles-2881232.jpg"
      >
        <source src="/assets/images/1085656-sd_640_360_25fps.mp4" type="video/mp4" />
      </video>

      {/* Theme-Aware Overlay */}
      <div className="core-services-overlay"></div>

      <figure className="offer-toplayer mb-0">
        <Image
          src="/assets/images/offer-toplayer.png"
          alt=""
          className="img-fluid"
          width={300}
          height={200}
        />
      </figure>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="core-services_content" data-aos="fade-up">
              <h6>Core Expertise</h6>
              <h2>Infrastructure Solutions</h2>
              <h2>That Scale</h2>
              <p>
                Professional services built on 10+ years of hands-on experience in network
                infrastructure, telecommunications, and IT solutions.
              </p>

            </div>
          </div>
        </div>

        {/* Desktop/Tablet Grid View */}
        <div className="row core-services-cards core-services-grid">
          {services.map((service) => (
            <div key={service.id} className="col-lg-4 col-md-6 col-sm-12 col-12">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Mobile Swiper Carousel */}
        <div className="core-services-swiper">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            autoHeight={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={false}
            className="core-services-slider"
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCard service={service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <figure className="offer-bottomlayer mb-0">
        <Image
          src="/assets/images/offer-bottomlayer.png"
          alt=""
          className="img-fluid"
          width={300}
          height={200}
        />
      </figure>
    </section>
  );
}
