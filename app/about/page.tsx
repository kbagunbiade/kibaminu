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
                    Leading IT network computing consultation services with a decade of experience
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
                    src="/assets/images/aboutus-image1.jpg"
                    alt=""
                    width={400}
                    height={500}
                  />
                </figure>
                <figure className="mb-0 aboutus-image2">
                  <Image
                    src="/assets/images/aboutus-image2.jpg"
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
                <h2>Innovative IT Solutions For Success</h2>
                <p>
                  We specialize in providing comprehensive IT network computing consultation services
                  that help businesses optimize their infrastructure, enhance security, and achieve
                  their digital transformation goals.
                </p>
                <ul className="list-unstyled mb-0">
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>Customized network infrastructure solutions
                  </li>
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>Advanced security implementations
                  </li>
                  <li className="text">
                    <i className="circle fa-duotone fa-check"></i>Cloud migration and management
                  </li>
                  <li className="text text1">
                    <i className="circle fa-duotone fa-check"></i>Proactive monitoring and support
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
                <h6>What We Offer</h6>
                <h2>Some of Our Achievements</h2>
                <p>
                  Over the years, we have helped numerous businesses transform their IT infrastructure
                  and achieve operational excellence.
                </p>
              </div>
            </div>
          </div>
          <div className="achievement_wrapper">
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
