'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Initialize AOS if needed
    if (typeof window !== 'undefined') {
      import('aos').then((AOS) => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      });
    }
  }, []);

  return (
    <section className="banner-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 col-12" data-aos="fade-right">
              <div className="banner_content" data-aos="fade-up">
                <figure className="banner-line mb-0">
                  <Image
                    src="/assets/images/banner-line.png"
                    alt=""
                    className="img-fluid"
                    width={72}
                    height={2}
                  />
                </figure>
                <h6>Welcome to KibAminu LLC</h6>
                <h1>Your Network, Our Mission</h1>
                <p>
                  Professional network infrastructure installation and IT services serving Hayward
                  and the Bay Area. From low voltage cabling and CCTV systems to server room setup
                  and POS installations—we deliver hands-on expertise that keeps your business connected.
                </p>
                <div className="box d-flex gap-3 justify-content-center justify-content-start d-md-flex justify-content-md-start">
                  <Link
                    className="get_started text-white text-decoration-none"
                    href="/services"
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
                  <Link className="get_started button2" href="/contact">
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
                <figure className="banner-circleleft mb-0">
                  <Image
                    src="/assets/images/banner-circleleft.png"
                    className="img-fluid"
                    alt=""
                    width={56}
                    height={56}
                  />
                </figure>
                <figure className="banner-dotleft mb-0">
                  <Image
                    src="/assets/images/banner-dotleft.png"
                    className="img-fluid"
                    alt=""
                    width={146}
                    height={35}
                  />
                </figure>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="banner_wrapper">
                <figure className="mb-0 banner-image">
                  <Image
                    src="/assets/images/banner-image-2.jpg"
                    alt="IT Consultation"
                    className="img-fluid"
                    width={759}
                    height={725}
                    priority
                  />
                </figure>
                <figure className="banner-circleright mb-0">
                  <Image
                    src="/assets/images/banner-circleright.png"
                    className="img-fluid"
                    alt=""
                    width={27}
                    height={27}
                  />
                </figure>
                <figure className="banner-dotright mb-0">
                  <Image
                    src="/assets/images/banner-dotright.png"
                    className="img-fluid"
                    alt=""
                    width={141}
                    height={204}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
