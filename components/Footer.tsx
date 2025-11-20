import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="container">
        <figure className="footer-leftimage mb-0">
          <Image
            src="/assets/images/footer-leftimage.png"
            alt=""
            className="img-fluid"
            width={200}
            height={200}
          />
        </figure>
        <figure className="mb-0 about-leftcircle">
          <Image
            src="/assets/images/about-rightcircle.png"
            alt=""
            className="img-fluid"
            width={100}
            height={100}
          />
        </figure>
        <div className="middle-portion">
          <div className="row">
            <div className="col-lg-4 col-md-5 col-sm-6 col-12">
              <div className="first-column">
                <Link href="/">
                  <figure className="footer-logo">
                    <Image
                      src="/assets/images/image-preview-3.png"
                      className="img-fluid"
                      alt="KibAminu Technology Solutions"
                      width={150}
                      height={65}
                    />
                  </figure>
                </Link>
                <p className="text-size-18 footer-text">
                  Your trusted partner for comprehensive IT network solutions—delivering strategic
                  consultation, enterprise-grade implementation, and continuous support.
                </p>
                <div className="lower">
                  <div className="lower-content">
                    <figure className="icon">
                      <Image
                        src="/assets/images/footer-callicon.png"
                        alt=""
                        className="img-fluid"
                        width={30}
                        height={30}
                      />
                    </figure>
                    <div className="content">
                      <span className="text-white">Call us:</span>
                      <a
                        className="text-size-18 mb-0 text text-decoration-none"
                        href="tel:+16619042936"
                      >
                        +1 (661) 904-2936
                      </a>
                    </div>
                  </div>
                  <div className="lower-content">
                    <figure className="icon">
                      <Image
                        src="/assets/images/footer-emailicon.png"
                        alt=""
                        className="img-fluid"
                        width={30}
                        height={30}
                      />
                    </figure>
                    <div className="content">
                      <span className="text-white">Email us:</span>
                      <a
                        href="mailto:admin@kibaminutechsolutions.com"
                        className="text-size-18 mb-0 text-decoration-none"
                      >
                        admin@kibaminutechsolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-md-block d-none">
              <div className="links list-pd">
                <h4 className="heading text-white">Quick Links</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/" className="text-size-18 text text-decoration-none">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-size-18 text text-decoration-none">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-size-18 text text-decoration-none">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-size-18 text text-decoration-none">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-12 d-lg-block d-none">
              <div className="links">
                <h4 className="heading text-white">Our Services</h4>
                <ul className="list-unstyled mb-0">
                  <li>
                    <Link href="/services" className="text-size-18 text text-decoration-none">
                      Network Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-size-18 text text-decoration-none">
                      Cloud Solutions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-size-18 text text-decoration-none">
                      Security Consulting
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-size-18 text text-decoration-none">
                      IT Support
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 d-sm-block d-none">
              <div className="icons">
                <h4 className="heading mb-0 text-white">Subscribe to</h4>
                <h4 className="heading text-white">Our Newsletter Today!</h4>
                <p className="text-size-18 footer-text text-white">
                  Stay informed with insights on network infrastructure, security, and IT innovation.
                </p>
                <form method="POST" action="/api/subscribe">
                  <div className="form-group mb-0">
                    <input
                      type="email"
                      className="form_style"
                      placeholder="Enter Email Address:"
                      name="email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="subscribe_now text-white text-decoration-none"
                  >
                    Subscribe Now
                    <i className="circle fa-thin fa-arrow-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container">
            <div className="row copyright-border">
              <div className="col-lg-6 col-md-6 col-sm-12 co-12 column">
                <p className="text-size-16">
                  Copyright ©2025 KibAminu Technology Solutions. All Rights Reserved
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 co-12 d-md-block d-none">
                <div className="social-icons position-relative">
                  <ul className="list-unstyled position-absolute">
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-facebook-f social-networks"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-twitter social-networks"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-linkedin social-networks"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-decoration-none">
                        <i className="fa-brands fa-instagram social-networks"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="footer-dotimage mb-0">
          <Image
            src="/assets/images/footer-dotimage.png"
            alt=""
            className="img-fluid"
            width={150}
            height={150}
          />
        </figure>
        <figure className="footer-leftlayer mb-0">
          <Image
            src="/assets/images/footer-leftlayer.png"
            alt=""
            className="img-fluid"
            width={200}
            height={200}
          />
        </figure>
      </div>
    </section>
  );
}
