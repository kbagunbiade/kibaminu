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
                  src="/assets/images/aboutus-image-1.jpg"
                  alt=""
                  width={400}
                  height={500}
                  style={{ objectFit: 'cover', objectPosition: 'right' }}
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
              <h2>Hands-On Infrastructure Experts</h2>
              <p>
                Based in Hayward, CA, KibAminu brings over a decade of hands-on experience in
                network infrastructure, cabling, and IT installations. We're the team businesses
                trust for reliable, professional work—whether it's a single cable run or a
                complete infrastructure buildout.
              </p>
              <ul className="list-unstyled mb-0">
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>Low voltage cabling and structured wiring systems
                </li>
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>CCTV, security systems, and EV charging stations
                </li>
                <li className="text">
                  <i className="circle fa-duotone fa-check"></i>Server room setup, racking, and network engineering
                </li>
                <li className="text text1">
                  <i className="circle fa-duotone fa-check"></i>On-site troubleshooting and hardware support
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
