import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Network Infrastructure & Cabling',
    description: 'Complete low voltage cabling, structured wiring, IoT integration, and network installation—from Cat5e/Cat6 runs to fiber optics and smart building connectivity.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Security & Access Control',
    description: 'Professional CCTV installation, IP surveillance systems, access control solutions, network security, and integrated monitoring—protecting your property with advanced technology.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Server Room & IT Infrastructure',
    description: 'Server room design, equipment racking and stacking, network engineering, asset management, and complete IT project management for seamless infrastructure deployment.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Technical Support & Onsite Services',
    description: 'Comprehensive helpdesk support, onsite technicians, hardware troubleshooting, POS system setup, equipment procurement, and hands-on technical assistance when you need it most.',
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
              <h2>Hands-On IT Infrastructure & Network Solutions</h2>
              <p>
                From low voltage cabling and CCTV installations to server room setup and network
                engineering—we deliver on-site expertise and proven infrastructure solutions that
                keep your business connected, secure, and running smoothly.
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
