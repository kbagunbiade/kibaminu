import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Network Infrastructure',
    description: 'Design and implementation of robust network infrastructure solutions tailored to your business needs.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Cloud Solutions',
    description: 'Expert cloud migration, management, and optimization services for AWS, Azure, and Google Cloud.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Security Consulting',
    description: 'Comprehensive security assessments, vulnerability testing, and implementation of security best practices.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'IT Support & Maintenance',
    description: '24/7 IT support and proactive maintenance to keep your systems running smoothly and efficiently.',
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
              <h2>BEST IT SOLUTION Services</h2>
              <p>
                Comprehensive IT network computing consultation services designed to optimize
                your infrastructure, enhance security, and drive digital transformation.
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
