'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Handle form submission
    console.log('Form data:', data);
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <>
      {/* Page Banner */}
      <div className="sub-banner">
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
                  <h1 className="text-white">Contact Us</h1>
                  <p>Connect with our network infrastructure experts—let's build your solution together</p>
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
                    <span className="mb-0 box_span">Contact</span>
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

      {/* Contact Section */}
      <section className="contact-section">
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
            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
              <div className="contact_content" data-aos="fade-right">
                <h6>Contact Info</h6>
                <h2>Let's Connect</h2>
                <div className="contact-box">
                  <div className="box-image">
                    <figure className="contact-location">
                      <Image
                        src="/assets/images/contact-location.png"
                        alt=""
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4>Location:</h4>
                    <p className="text">
                      26970 Hayward Blvd, 107<br />
                      Hayward, CA 94542
                    </p>
                  </div>
                </div>
                <div className="contact-box">
                  <div className="box-image">
                    <figure className="contact-email">
                      <Image
                        src="/assets/images/contact-email.png"
                        alt=""
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4 className="heading">Email:</h4>
                    <p>
                      <a
                        href="mailto:admin@kibaminutechsolutions.com"
                        className="text-decoration-none"
                      >
                        admin@kibaminutechsolutions.com
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:babatope_agunbiade@hotmail.com"
                        className="mb-0 text-decoration-none"
                      >
                        babatope_agunbiade@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-box box-mb">
                  <div className="box-image">
                    <figure className="contact-phone">
                      <Image
                        src="/assets/images/contact-phone.png"
                        alt=""
                        className="img-fluid"
                        width={50}
                        height={50}
                      />
                    </figure>
                  </div>
                  <div className="box-content">
                    <h4 className="heading">Phone:</h4>
                    <p>
                      <a
                        href="tel:+16619042936"
                        className="text-decoration-none text"
                      >
                        +1 (661) 904-2936
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+19258081959"
                        className="mb-0 text-decoration-none text"
                      >
                        +1 (925) 808-1959
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
              <div className="need-section">
                <figure className="offer-circleimage mb-0">
                  <Image
                    src="/assets/images/offer-circleimage.png"
                    alt=""
                    className="img-fluid"
                    width={150}
                    height={150}
                  />
                </figure>
                <div className="need_content">
                  <h6 className="text-white">Write to us</h6>
                  <h2 className="text-white">Start the Conversation</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Your Name:"
                            {...register('name', { required: 'Name is required' })}
                          />
                          {errors.name && (
                            <span className="text-danger">{errors.name.message}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-0">
                          <input
                            type="email"
                            className="form_style"
                            placeholder="Your Email:"
                            {...register('email', {
                              required: 'Email is required',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address',
                              },
                            })}
                          />
                          {errors.email && (
                            <span className="text-danger">{errors.email.message}</span>
                          )}
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mb-0">
                          <textarea
                            className="form_style"
                            placeholder="Message"
                            rows={3}
                            {...register('message', { required: 'Message is required' })}
                          ></textarea>
                          {errors.message && (
                            <span className="text-danger">{errors.message.message}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="manage-button text-center">
                      <button
                        type="submit"
                        className="send_now text-white text-decoration-none"
                      >
                        Send Now
                        <i className="circle fa-thin fa-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
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

      {/* Map Section */}
      <div className="contact_map_section">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.3329737833114!2d144.96011341590386!3d-37.80566904135444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2s!4v1669200882885!5m2!1sen!2s"
              width="1920"
              height="556"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
