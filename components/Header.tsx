'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" href="/">
              <figure className="mb-0 banner-logo">
                <Image
                  src="/assets/images/image-preview.png"
                  alt="KibAminu Technology Solutions"
                  width={150}
                  height={65}
                  className="img-fluid"
                />
              </figure>
            </Link>
            <button
              className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-space nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              <div className="last_list">
                <figure className="nav-phoneimage mb-0">
                  <Image
                    className="img-fluid"
                    src="/assets/images/nav-phoneimage.png"
                    alt="Phone Icon"
                    width={40}
                    height={40}
                  />
                </figure>
                <div className="content">
                  <p className="text-size-18 text-white">Call Anytime:</p>
                  <a
                    className="text-decoration-none last_list_atag"
                    href="tel:+012(345)6789"
                  >
                    +012 (345) 6789
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
