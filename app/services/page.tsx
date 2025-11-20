import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Network Infrastructure',
    description: 'Strategic network architecture engineered for your operational needs—combining scalability, resilience, and performance optimization.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Cloud Integration',
    description: 'Expert deployment across AWS, Azure, and Google Cloud—delivering seamless transitions, hybrid architectures, and cost-optimized solutions.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Cybersecurity & Compliance',
    description: 'Multi-layered security frameworks, vulnerability assessments, and regulatory compliance strategies—protecting your digital assets 24/7.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Managed IT Support',
    description: 'Round-the-clock monitoring, rapid incident response, and proactive maintenance—ensuring your network runs at peak performance.',
  },
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Disaster Recovery & Business Continuity',
    description: 'Comprehensive backup strategies, failover systems, and recovery planning—minimizing downtime and safeguarding business operations.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Network Optimization & Modernization',
    description: 'Performance audits, infrastructure upgrades, and modernization roadmaps—transforming legacy systems into competitive advantages.',
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
                    Comprehensive IT network solutions designed to drive performance, security, and growth
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
                <h2>Complete IT Network Solutions</h2>
                <p>
                  From strategic consulting to hands-on implementation, we deliver integrated
                  IT network services that align with your business goals—ensuring reliability,
                  security, and continuous innovation.
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
                <h2 className="text-white">READY TO ELEVATE YOUR NETWORK?</h2>
                <p className="mb-0">
                  Partner with KibAminu for strategic guidance, expert implementation, and
                  ongoing support that transforms your IT infrastructure into a competitive advantage.
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
