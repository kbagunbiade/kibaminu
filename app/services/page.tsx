import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Network Infrastructure Design',
    description: 'Custom network architecture design and implementation for optimal performance and scalability.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Cloud Computing Solutions',
    description: 'Expert cloud migration, deployment, and management across AWS, Azure, and Google Cloud platforms.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Cybersecurity Consulting',
    description: 'Comprehensive security assessments, penetration testing, and implementation of security frameworks.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Network Monitoring & Support',
    description: '24/7 proactive monitoring, maintenance, and technical support for your IT infrastructure.',
  },
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Disaster Recovery Planning',
    description: 'Business continuity planning and disaster recovery solutions to protect your critical data.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'IT Infrastructure Optimization',
    description: 'Performance analysis and optimization of existing IT systems for maximum efficiency.',
  },
];

export default function Services() {
  return (
    <>
      {/* Page Banner */}
      <div className="sub-banner sub-banner4">
        <Header />
        <figure className="sub-bannerleftlayer mb-0">
          <Image
            src="/assets/images/sub-bannerleftlayer.png"
            alt=""
            className="img-fluid"
            width={300}
            height={400}
          />
        </figure>
        <section className="banner-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="banner_content" data-aos="fade-up">
                  <figure className="service-rightcircle mb-0">
                    <Image
                      src="/assets/images/service-rightcircle.png"
                      alt=""
                      className="img-fluid"
                      width={150}
                      height={150}
                    />
                  </figure>
                  <h1 className="text-white">Our Services</h1>
                  <p>
                    Comprehensive IT network computing consultation services tailored to your needs
                  </p>
                  <div className="box">
                    <span className="mb-0">Home</span>
                    <figure className="mb-0 arrow">
                      <Image
                        src="/assets/images/button-arrow.png"
                        alt=""
                        className="img-fluid"
                        width={20}
                        height={20}
                      />
                    </figure>
                    <span className="mb-0 box_span">Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <figure className="banner-circleright mb-0">
          <Image
            src="/assets/images/banner-circleright.png"
            className="img-fluid"
            alt=""
            width={200}
            height={200}
          />
        </figure>
        <figure className="sub-bannerrightlayer mb-0">
          <Image
            src="/assets/images/sub-bannerrightlayer.png"
            alt=""
            className="img-fluid"
            width={300}
            height={400}
          />
        </figure>
      </div>

      {/* Services Section */}
      <section className="servicepage-section service-section">
        <figure className="service-leftlayer mb-0">
          <Image
            src="/assets/images/service-leftlayer.png"
            alt=""
            className="img-fluid"
            width={300}
            height={400}
          />
        </figure>
        <figure className="service-dotimage mb-0">
          <Image
            src="/assets/images/service-dotimage.png"
            alt=""
            className="img-fluid"
            width={200}
            height={200}
          />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="servicepage_content" data-aos="fade-right">
                <h6>Our Services</h6>
                <h2>BEST IT SOLUTION Services</h2>
                <p>
                  We provide comprehensive IT network computing consultation services designed to
                  transform your business infrastructure and drive digital innovation.
                </p>
                <figure className="offer-circleimage mb-0">
                  <Image
                    src="/assets/images/offer-circleimage.png"
                    alt=""
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </figure>
              </div>
            </div>
          </div>
          <div className="service_contentbox">
            <div className="row">
              {servicesData.map((service, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
                  <div className="service-box">
                    <figure className="service-marketicon">
                      <Image
                        src={service.icon}
                        alt=""
                        className="img-fluid"
                        width={80}
                        height={80}
                      />
                    </figure>
                    <h4>{service.title}</h4>
                    <p className="text-size-18">{service.description}</p>
                    <Link className="arrow text-decoration-none" href="/contact">
                      <i className="circle fa-thin fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <figure className="service-rightlayer mb-0">
          <Image
            src="/assets/images/service-rightlayer.png"
            alt=""
            className="img-fluid"
            width={300}
            height={400}
          />
        </figure>
      </section>

      {/* Consultation CTA */}
      <section className="consultation-section">
        <figure className="consultation-leftimage mb-0">
          <Image
            src="/assets/images/service-consultationleftimage.png"
            alt=""
            className="img-fluid"
            width={400}
            height={300}
          />
        </figure>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-12 col-12">
              <div className="consultation_content" data-aos="fade-right">
                <h6>WE ARE HERE TO GUIDE YOU</h6>
                <h2 className="text-white">NEED A CONSULTATION?</h2>
                <p className="mb-0">
                  Get expert advice on optimizing your IT infrastructure and implementing
                  best practices for network security and performance.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-12 col-12">
              <div className="consultation_wrapper">
                <figure className="service-rightcircle mb-0">
                  <Image
                    src="/assets/images/service-rightcircle.png"
                    alt=""
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </figure>
                <Link
                  className="get_started button1 text-white text-decoration-none"
                  href="/contact"
                >
                  Get a Quote
                  <figure className="mb-0">
                    <Image
                      src="/assets/images/button-arrow.png"
                      alt=""
                      className="img-fluid"
                      width={20}
                      height={20}
                    />
                  </figure>
                </Link>
                <Link
                  className="get_started button2 text-white text-decoration-none"
                  href="/contact"
                >
                  Contact Us
                  <figure className="mb-0">
                    <Image
                      src="/assets/images/button-arrow.png"
                      alt=""
                      className="img-fluid"
                      width={20}
                      height={20}
                    />
                  </figure>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
