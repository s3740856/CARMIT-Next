import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar1 = (props) => {
  return (
    <>
      <nav className="navbar-1-navbar">
        <Link href="/">
          <a className="navbar-1-link">
            <img
              alt="Planical7012"
              src={props.BrandingLogo}
              className="navbar-1-branding-logo"
            />
          </a>
        </Link>
        <span className="navbar-1-text">{props.text}</span>
        <div className="navbar-1-nav-content">
          <div className="navbar-1-nav-links">
            <Link href="/help-centre">
              <a className="navbar-1-link2 nav-link">Help</a>
            </Link>
          </div>
          <div id="open-mobile-menu" className="navbar-1-hamburger get-started">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-1-image"
            />
          </div>
        </div>
        <div id="mobile-menu" className="navbar-1-mobile-menu">
          <div className="navbar-1-branding">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="navbar-1-image1"
            />
            <div id="close-mobile-menu" className="navbar-1-container">
              <svg viewBox="0 0 1024 1024" className="navbar-1-icon">
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
          </div>
          <div className="navbar-1-nav-links1">
            <span className="nav-link">Features</span>
            <span className="nav-link">Why us</span>
            <span className="nav-link">Prices</span>
            <span className="nav-link">Contact</span>
          </div>
          <div className="get-started">
            <span className="navbar-1-text1">Get started</span>
          </div>
        </div>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Mobile menu - Code Embed
*/

/* listenForUrlChangesMobileMenu() makes sure that if you changes pages inside your app, 
the mobile menu will still work*/

const listenForUrlChangesMobileMenu = () => {
    let url = location.href;
    document.body.addEventListener("click", () => {
        requestAnimationFrame(() => {
            if (url !== location.href) {
                runMobileMenuCodeEmbed();
                url = location.href;
            }
        });
    },
    true
    );
};

const runMobileMenuCodeEmbed = () => {
    // Mobile menu
    const mobileMenu = document.querySelector("#mobile-menu")

    // Buttons
    const closeButton = document.querySelector("#close-mobile-menu")
    const openButton = document.querySelector("#open-mobile-menu")

    // On openButton click, set the mobileMenu position left to -100vw
    openButton && openButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(0%)"
    })

    // On closeButton click, set the mobileMenu position to 0vw
    closeButton && closeButton.addEventListener("click", function() {
        mobileMenu.style.transform = "translateX(100%)"
    })
}

runMobileMenuCodeEmbed()
listenForUrlChangesMobileMenu()
</script>`}
          ></DangerousHTML>
        </div>
      </nav>
      <style jsx>
        {`
          .navbar-1-navbar {
            width: 100%;
            height: 148px;
            display: flex;
            z-index: 1000;
            position: relative;
            max-width: 1200px;
            align-self: auto;
            align-items: center;
            flex-shrink: 1;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-black);
          }
          .navbar-1-link {
            display: contents;
          }
          .navbar-1-branding-logo {
            left: 24px;
            width: 160px;
            bottom: 0px;
            height: 100%;
            position: absolute;
            align-self: flex-start;
            box-sizing: content-box;
            text-decoration: none;
          }
          .navbar-1-text {
            top: 75px;
            left: 180px;
            color: #ffffff;
            position: absolute;
            font-size: 40px;
          }
          .navbar-1-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-1-nav-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-1-link2 {
            top: var(--dl-space-space-oneandhalfunits);
            left: -60px;
            bottom: var(--dl-space-space-twounits);
            position: absolute;
            font-size: 20px;
            text-decoration: none;
          }
          .navbar-1-hamburger {
            display: none;
          }
          .navbar-1-image {
            width: 100px;
            object-fit: cover;
          }
          .navbar-1-mobile-menu {
            gap: var(--dl-space-space-twounits);
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: fixed;
            transform: translateX(100%);
            transition: 0.3s;
            align-items: stretch;
            flex-direction: column;
            background-color: #fff;
          }
          .navbar-1-branding {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-1-image1 {
            width: 100px;
            filter: brightness(0) saturate(100%);
            object-fit: cover;
          }
          .navbar-1-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar-1-icon {
            width: 24px;
            height: 24px;
          }
          .navbar-1-nav-links1 {
            gap: var(--dl-space-space-unit);
            color: var(--dl-color-gray-black);
            display: flex;
            flex-direction: column;
          }
          .navbar-1-text1 {
            color: rgba(255, 255, 255, 1);
            align-self: auto;
            font-style: Medium;
            text-align: left;
            font-family: Poppins;
            font-weight: 500;
            font-stretch: normal;
            text-decoration: none;
          }
          @media (max-width: 767px) {
            .navbar-1-navbar {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .navbar-1-branding-logo {
              width: 80px;
            }
            .navbar-1-nav-links {
              display: none;
            }
            .navbar-1-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-1-image {
              width: 16px;
              height: 14px;
            }
            .navbar-1-branding {
              width: 100%;
            }
            .navbar-1-nav-links1 {
              margin-top: var(--dl-space-space-twounits);
              align-items: flex-start;
              margin-bottom: var(--dl-space-space-twounits);
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar1.defaultProps = {
  image_src1: '/playground_assets/planical7012-ttpb.svg',
  rootClassName: '',
  BrandingLogo: '/playground_assets/carmitlogo-200h.png',
  image_alt: 'image',
  image_alt1: 'image',
  image_src: '/playground_assets/hamburger-200h.png',
  text: 'SECURE PAYMENT',
}

Navbar1.propTypes = {
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  BrandingLogo: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src: PropTypes.string,
  text: PropTypes.string,
}

export default Navbar1
