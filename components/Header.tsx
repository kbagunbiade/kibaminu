'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand" href="/">
              <figure className="mb-0 banner-logo">
                <Image
                  src="/assets/images/image-preview-3.png"
                  alt="KibAminu LLC"
                  width={150}
                  height={65}
                  className="img-fluid"
                />
              </figure>
            </Link>

            {/* Desktop Menu */}
            <div className="desktop-nav d-none d-lg-flex align-items-center">
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
                    href="tel:+16619042936"
                  >
                    +1 (661) 904-2936
                  </a>
                </div>
              </div>
            </div>

            {/* Header Controls - Theme Toggle + Menu */}
            <div className="header-controls d-flex align-items-center gap-3">
              <ThemeToggle />
              <button
                className={`navbar-toggler d-lg-none ${isOpen ? '' : 'collapsed'}`}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="mobileMenu"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>

            {/* Full-Screen Overlay Menu */}
            <div
              className={`overlay-menu ${isOpen ? 'open' : ''}`}
              onClick={handleLinkClick}
            >
              <div className="overlay-menu-content" onClick={(e) => e.stopPropagation()}>
                <div className="overlay-menu-header">
                  <Link href="/" onClick={handleLinkClick}>
                    <figure className="mb-0 overlay-logo">
                      <Image
                        src="/assets/images/image-preview-3.png"
                        alt="KibAminu LLC"
                        width={120}
                        height={52}
                        className="img-fluid"
                      />
                    </figure>
                  </Link>
                  <button
                    className="overlay-close"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <span></span>
                    <span></span>
                  </button>
                </div>

                <nav className="overlay-nav">
                  <Link
                    href="/"
                    className="overlay-nav-link"
                    onClick={handleLinkClick}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="overlay-nav-link"
                    onClick={handleLinkClick}
                  >
                    About
                  </Link>
                  <Link
                    href="/services"
                    className="overlay-nav-link"
                    onClick={handleLinkClick}
                  >
                    Services
                  </Link>
                  <Link
                    href="/contact"
                    className="overlay-nav-link"
                    onClick={handleLinkClick}
                  >
                    Contact
                  </Link>
                </nav>

                <div className="overlay-footer">
                  <div className="overlay-contact">
                    <p className="overlay-contact-label">Call Anytime</p>
                    <a href="tel:+16619042936" className="overlay-contact-link">
                      +1 (661) 904-2936
                    </a>
                  </div>
                  <div className="overlay-contact">
                    <p className="overlay-contact-label">Email Us</p>
                    <a href="mailto:admin@kibaminutechsolutions.com" className="overlay-contact-link">
                      admin@kibaminutechsolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
