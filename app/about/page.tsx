import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Page Banner */}
      <div className="sub-banner sub-banner1">
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
                  <figure className="about-rightcircle service-rightcircle mb-0">
                    <Image
                      src="/assets/images/service-rightcircle.png"
                      alt=""
                      className="img-fluid"
                      width={150}
                      height={150}
                    />
                  </figure>
                  <h1 className="text-white">About Us</h1>
                  <p>
                    Professional infrastructure installation and IT services—serving the Bay Area since day one
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
                    <span className="mb-0 box_span">About</span>
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

      {/* About Us Section */}
      <section className="aboutus-section">
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
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-1 order-2">
              <div className="about_wrapper">
                <figure className="mb-0 aboutus-image1">
                  <Image
                    src="/assets/images/aboutus-image-1.jpg"
                    alt=""
                    width={400}
                    height={500}
                  />
                </figure>
                <figure className="mb-0 aboutus-image2">
                  <Image
                    src="/assets/images/aboutus-image-2.jpg"
                    alt=""
                    className="img-fluid"
                    width={300}
                    height={350}
                  />
                </figure>
                <div className="image-circle">
                  <div className="years">
                    <span className="text-white value counter">10</span>
                    <sup className="text-white mb-0 plus">+</sup>
                    <span className="text-white text">Years of Experience</span>
                  </div>
                  <figure className="mb-0 about-imagecircle">
                    <Image
                      src="/assets/images/about-imagecircle.png"
                      alt=""
                      width={200}
                      height={200}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 order-lg-2 order-1">
              <div className="service_content position-relative" data-aos="fade-right">
                <figure className="service-rightcircle mb-0">
                  <Image
                    src="/assets/images/service-rightcircle.png"
                    alt=""
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </figure>
                <h6>About Us</h6>
                <h2>Built on Expertise, Proven in the Field</h2>
                <p>
                  KibAminu LLC delivers professional network infrastructure installation
                  and IT services throughout the Bay Area. From structured cabling and security systems to
                  server room buildouts and troubleshooting—we bring hands-on technical expertise and a
                  commitment to quality workmanship on every project.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>Low voltage cabling, Cat5e/Cat6, fiber optics
                  </li>
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>CCTV installation, EV charging stations, POS systems
                  </li>
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>Server room design, racking and stacking, network engineering
                  </li>
                  <li className="text text1">
                    <i className="circle fa-duotone fa-check"></i>On-site support, hardware troubleshooting, and repairs
                  </li>
                </ul>
                <Link
                  className="get_started text-white text-decoration-none"
                  href="/contact"
                >
                  Get Started
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

      {/* Company Story Section */}
      <section className="service-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="service_content text-center" data-aos="fade-up">
                <h6>Our Story</h6>
                <h2>Built on Skill, Driven by Quality</h2>
                <p className="mx-auto" style={{ maxWidth: '800px' }}>
                  Founded in Hayward, California, KibAminu LLC was built on a simple
                  principle: do the work right, every time. Our co-founders brought together decades of
                  hands-on experience in network infrastructure, cabling, and IT installations—creating
                  a company that businesses trust for professional, reliable service. From low voltage
                  cabling to full server room buildouts, we deliver technical expertise and quality
                  workmanship on projects of all sizes throughout the Bay Area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="aboutus-section" style={{ paddingTop: '60px' }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h6>Leadership</h6>
              <h2>Meet the Co-Founders</h2>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" data-aos="fade-right">
              <div className="service_content">
                <h4>Kolapo "Kiba" Agunbiade</h4>
                <h6 className="text-secondary">Co-Founder & Technical Lead</h6>
                <p>
                  With over a decade of hands-on experience in network infrastructure and IT installations,
                  Kiba leads KibAminu's technical operations with precision and expertise. Based in Hayward,
                  he orchestrates a network of specialized independent contractors, bringing together the
                  right talent for every project—from complex server room buildouts to multi-site cabling
                  installations. His approach is simple: listen first, engineer second. Clients trust him
                  to deliver enterprise-grade solutions with the attention and integrity of a true partner.
                  Every installation is executed right the first time, every system is built to last.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mb-4" data-aos="fade-left">
              <div className="service_content">
                <h4>Aminu "Osaz" Isegen</h4>
                <h6 className="text-secondary">Co-Founder & Strategic Director</h6>
                <p>
                  Aminu transforms complex IT projects into seamless executions. As KibAminu's Strategic
                  Director, he coordinates project management, client relationships, and the company's
                  network of independent contractors—ensuring every installation is delivered on time,
                  within scope, and beyond expectations. His methodology combines approachable communication
                  with relentless attention to detail, turning infrastructure challenges into business
                  advantages. From procurement to final deployment, he orchestrates every moving part
                  with precision, building lasting partnerships that drive real results. In the Bay Area's
                  competitive IT landscape, Aminu delivers the reliability businesses depend on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="aboutoffer-section">
        <figure className="service-rightlayer mb-0">
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
              <div className="offer_content">
                <h6>What We Deliver</h6>
                <h2>Experience You Can Trust</h2>
                <p>
                  Over a decade of professional installations across the Bay Area—from small businesses
                  to large commercial projects. We bring the technical expertise and hands-on experience
                  that gets the job done right.
                </p>
              </div>
            </div>
          </div>
          <div className="achievement_wrapper d-none">
            <div className="row">
              <figure className="offer-circleimage mb-0">
                <Image
                  src="/assets/images/offer-circleimage.png"
                  alt=""
                  className="img-fluid"
                  width={150}
                  height={150}
                />
              </figure>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="achievement-box box1">
                  <figure className="icon achievement-icon">
                    <Image
                      src="/assets/images/achievement-clienticon.png"
                      alt=""
                      className="img-fluid"
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className="wrapper">
                    <h3>150+</h3>
                    <p className="text-size-18 mb-0">Satisfied Clients</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="achievement-box box2">
                  <figure className="icon1 achievement-icon">
                    <Image
                      src="/assets/images/achievement-projecticon.png"
                      alt=""
                      className="img-fluid"
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className="wrapper">
                    <h3>300+</h3>
                    <p className="text-size-18 mb-0">Projects Completed</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="achievement-box box3">
                  <figure className="icon achievement-icon">
                    <Image
                      src="/assets/images/achievement-teamicon.png"
                      alt=""
                      className="img-fluid"
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">25</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Team Members</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                <div className="achievement-box box4">
                  <figure className="icon1 achievement-icon">
                    <Image
                      src="/assets/images/achievement-awardicon.png"
                      alt=""
                      className="img-fluid"
                      width={60}
                      height={60}
                    />
                  </figure>
                  <div className="wrapper">
                    <div className="number">
                      <h3 className="value counter">15</h3>
                      <span className="plus">+</span>
                    </div>
                    <p className="text text-size-18 mb-0">Awards Won</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="service-leftlayer mb-0">
          <Image
            src="/assets/images/service-rightlayer.png"
            alt=""
            className="img-fluid"
            width={300}
            height={400}
          />
        </figure>
      </section>

      <Footer />
    </>
  );
}
