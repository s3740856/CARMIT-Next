import React from 'react'
import Link from 'next/link'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <nav className={`navbar-navbar ${props.rootClassName} `}>
        <Link href="/">
          <a className="navbar-link">
            <img
              alt="Planical7012"
              src={props.BrandingLogo}
              className="navbar-branding-logo"
            />
          </a>
        </Link>
        <div className="navbar-nav-content">
          <div className="navbar-nav-links">
            <Link href="/how-it-works">
              <a className="navbar-link2 nav-link">How it works</a>
            </Link>
            <Link href="/map">
              <a className="navbar-link4 nav-link">Find parking slot</a>
            </Link>
            <Link href="/help-centre">
              <a className="navbar-link6 nav-link">Help</a>
            </Link>
            <span className="navbar-link7 nav-link">Login</span>
          </div>
          <div className="navbar-get-started get-started">
            <span className="navbar-text">Sign up</span>
          </div>
          <div id="open-mobile-menu" className="navbar-hamburger get-started">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="navbar-image"
            />
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
          .navbar-navbar {
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
          .navbar-link {
            display: contents;
          }
          .navbar-branding-logo {
            left: 24px;
            width: 160px;
            bottom: 0px;
            height: 100%;
            position: absolute;
            align-self: flex-start;
            box-sizing: content-box;
            text-decoration: none;
          }
          .navbar-nav-content {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-self: flex-start;
            align-items: center;
            margin-left: auto;
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-nav-links {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            border-color: transparent;
          }
          .navbar-link2 {
            text-decoration: none;
          }
          .navbar-link4 {
            text-decoration: none;
          }
          .navbar-link6 {
            text-decoration: none;
          }
          .navbar-link7 {
            font-style: normal;
            font-weight: 700;
          }
          .navbar-get-started {
            border-color: var(--dl-color-gray-900);
            border-width: 3px;
            background-color: var(--dl-color-primary-100);
          }
          .navbar-text {
            color: rgb(255, 255, 255);
            align-self: auto;
            font-style: normal;
            text-align: left;
            font-family: Poppins;
            font-weight: 700;
            font-stretch: normal;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .navbar-hamburger {
            display: none;
          }
          .navbar-image {
            width: 100px;
            object-fit: cover;
          }

          .navbar-root-class-name2 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }

          .navbar-root-class-name5 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          .navbar-root-class-name6 {
            top: 0px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
          }
          .navbar-root-class-name7 {
            top: -1px;
            right: -1px;
            margin: auto;
            position: absolute;
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .navbar-branding-logo {
              width: 80px;
            }
            .navbar-nav-links {
              display: none;
            }
            .navbar-get-started {
              display: none;
            }
            .navbar-hamburger {
              display: flex;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .navbar-image {
              width: 16px;
              height: 14px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  image_alt: 'image',
  image_src: '/playground_assets/hamburger-200h.png',
  BrandingLogo: '/playground_assets/carmitlogo-200h.png',
  rootClassName: '',
}

Navbar.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  BrandingLogo: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Navbar
