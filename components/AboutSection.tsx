import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  return (
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
              <h2>Strategic IT Partnership, Delivered</h2>
              <p>
                With over a decade of proven expertise, KibAminu partners with organizations
                to design, secure, and optimize network infrastructures that fuel growth and
                resilience. We're not just consultants—we're your dedicated technology ally.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>Enterprise-grade network design and deployment
                </li>
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>Advanced cybersecurity and compliance frameworks
                </li>
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>Seamless cloud migration and hybrid solutions
                </li>
                <li className="text text1">
                  <i className="circle fa-duotone fa-check"></i>Round-the-clock managed support and monitoring
                </li>
              </ul>
              <Link
                className="get_started text-white text-decoration-none"
                href="/about"
              >
                Learn More
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
  );
}
