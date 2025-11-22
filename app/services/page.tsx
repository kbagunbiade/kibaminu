import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const servicesData = [
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Telecommunications (Telco) Services',
    description: 'Reliable telecommunications solutions for seamless connectivity across all your business locations. From network planning to full deployment, our telco services ensure high-quality connectivity, minimal downtime, and seamless communication.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Voice Services',
    description: 'Advanced voice solutions including VoIP, SIP trunking, and PBX for crystal-clear calling. Whether on-site or cloud-based, our voice systems are built for efficiency, reliability, and security.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Data Services',
    description: 'Fast, secure data infrastructure that supports business growth and productivity. Structured cabling, network design, high-speed internet provisioning, wireless solutions, and advanced network monitoring.',
  },
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Low Voltage Cabling & Structured Wiring',
    description: 'Professional Cat5e, Cat6, and fiber optic cable installation, patch panel termination, cable management, and complete structured cabling systems for offices and facilities.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'CCTV & Surveillance Systems',
    description: 'End-to-end security camera systems including IP cameras, NVR/DVR setup, access control integration, remote viewing configuration, and ongoing maintenance for complete property protection.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Access Control & Security Systems',
    description: 'Advanced keycard systems, biometric readers, electronic door locks, visitor management, and integrated security solutions—controlling access and protecting your facility.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Network Security Solutions',
    description: 'Firewall deployment, VPN configuration, intrusion detection systems, security audits, and network hardening—safeguarding your infrastructure from threats and vulnerabilities.',
  },
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'Server Room Setup & Racking',
    description: 'Professional server room design, equipment racking and stacking, cable management, power distribution, and environmental controls—building reliable data center infrastructure.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'IoT Solutions & Smart Building',
    description: 'Internet of Things implementation, sensor networks, building automation systems, environmental monitoring, and connected device integration for intelligent facility management.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'EV Charging Station Installation',
    description: 'Complete electric vehicle charging infrastructure—from site assessment and electrical planning to charger installation, testing, and commissioning for residential and commercial properties.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'POS & Business System Installation',
    description: 'Point-of-sale system deployment, network configuration, payment terminal setup, receipt printer installation, and staff training for retail and restaurant operations.',
  },
  {
    icon: '/assets/images/service-marketicon.png',
    title: 'IT Asset & Project Management',
    description: 'Hardware inventory tracking, lifecycle management, equipment procurement, vendor coordination, and complete project management for IT infrastructure deployments and upgrades.',
  },
  {
    icon: '/assets/images/service-producticon.png',
    title: 'Technical Support & Helpdesk',
    description: 'Remote and onsite technical assistance, software troubleshooting, ticketing system support, user training, and ongoing helpdesk services—keeping your team productive.',
  },
  {
    icon: '/assets/images/service-designicon.png',
    title: 'Onsite IT Services',
    description: 'Dedicated onsite technicians for installations, maintenance, hardware deployment, network configuration, and technical support—bringing expertise directly to your location.',
  },
  {
    icon: '/assets/images/service-dataicon.png',
    title: 'Network & Hardware Troubleshooting',
    description: 'On-site diagnostics and repair for network issues, computer problems, hardware failures, and equipment replacement—getting your systems back online fast.',
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
                    Expert infrastructure installation and hands-on IT services—built right, every time
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

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="servicepage_content" data-aos="fade-right">
                <h6>Our Services</h6>
                <h2>Professional Installation & Infrastructure Services</h2>
                <p>
                  From cabling and CCTV to server room buildouts and EV charging stations—we bring
                  technical expertise and hands-on experience to every installation. Your network
                  infrastructure, done right.
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
                <h6>WE ARE HERE TO HELP</h6>
                <h2 className="text-white">NEED AN INSTALLATION QUOTE?</h2>
                <p className="mb-0">
                  From cabling projects to full infrastructure buildouts—get expert guidance and
                  a detailed quote for your next installation. We're ready to bring your project to life.
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
