import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Network Infrastructure',
    description: 'Custom network architecture tailored to your operational goals—scalable, secure, and built for performance from day one.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Cloud Integration',
    description: 'Seamless cloud deployment and management across AWS, Azure, and Google Cloud—optimized for cost, speed, and reliability.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Cybersecurity & Compliance',
    description: 'Enterprise-grade security frameworks, threat assessments, and compliance strategies that protect your most critical assets.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Managed IT Support',
    description: '24/7 all-around proactive monitoring, rapid response, and continuous optimization—keeping your network mission-ready, always.',
  },
];

export default function Services() {
  return (
    <section className="service-section">
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
            <div className="service_content" data-aos="fade-right">
              <h6>Our Services</h6>
              <h2>End-to-End IT Network Solutions</h2>
              <p>
                From strategic planning to hands-on implementation, we deliver comprehensive
                network solutions that align technology with your business objectives—driving
                efficiency, security, and competitive advantage.
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
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-12">
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
                  <Link
                    className="arrow text-decoration-none"
                    href="/services"
                  >
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
  );
}
