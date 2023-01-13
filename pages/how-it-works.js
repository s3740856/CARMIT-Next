import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const HowItWorks = (props) => {
  return (
    <>
      <div className="how-it-works-container">
        <Head>
          <title>How-it-works - CARMIT</title>
          <meta property="og:title" content="How-it-works - CARMIT" />
        </Head>
        <Navbar></Navbar>
        <section className="how-it-works-section">
          <h1 className="how-it-works-text">A smarter, easier way to park</h1>
          <span className="how-it-works-text01">
            <span>
              Our premise is simple: we connect drivers with parking spaces.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Our award-winning platform makes searching, booking &amp; paying
              for parking stress-free.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Whether you’re looking for a parking space or have a driveway
              you’d like to rent out - we’re here to help.
            </span>
          </span>
        </section>
        <footer className="how-it-works-footer">
          <div className="how-it-works-content">
            <main className="how-it-works-main-content">
              <div className="how-it-works-container1">
                <div className="how-it-works-content1">
                  <header className="how-it-works-main">
                    <div className="how-it-works-header">
                      <img
                        alt="image"
                        src="/playground_assets/carmitlogo-200h.png"
                        className="how-it-works-branding"
                      />
                      <span className="how-it-works-text07">
                        &quot; The joy in your ride &quot;
                      </span>
                    </div>
                    <div className="how-it-works-socials">
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="how-it-works-link"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/linkedin-200h.png"
                          className="social"
                        />
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="how-it-works-link1"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/instagram-200h.png"
                          className="social"
                        />
                      </a>
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="how-it-works-link2"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/twitter-200h.png"
                          className="social"
                        />
                      </a>
                    </div>
                  </header>
                  <header className="how-it-works-categories">
                    <div className="how-it-works-category">
                      <div className="how-it-works-header1">
                        <span className="footer-header">Information</span>
                      </div>
                      <div className="how-it-works-links">
                        <Link href="/about-us">
                          <a className="how-it-works-link3 footer-link">
                            <span>About us</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="how-it-works-category1">
                      <div className="how-it-works-header2">
                        <span className="footer-header">Services</span>
                      </div>
                      <div className="how-it-works-links1">
                        <Link href="/">
                          <a className="how-it-works-link4 footer-link">
                            <span>Find parking slot</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="how-it-works-category2">
                      <div className="how-it-works-header3">
                        <span className="footer-header">Get in touch</span>
                      </div>
                      <div className="how-it-works-links2">
                        <Link href="/how-it-works">
                          <a className="how-it-works-link5 footer-link">
                            How CARMIT works
                          </a>
                        </Link>
                        <Link href="/help-centre">
                          <a className="how-it-works-link6 footer-link">
                            Help centre
                          </a>
                        </Link>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
              <div className="how-it-works-container2">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="how-it-works-link7"
                >
                  <div className="how-it-works-i-o-s button">
                    <img
                      alt="image"
                      src="/playground_assets/apple-200w.png"
                      className="how-it-works-icon"
                    />
                    <span className="how-it-works-text19">
                      Download for iOS
                    </span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&amp;utm_medium=hasem&amp;utm_content=Oct0121&amp;utm_campaign=Evergreen&amp;pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700074087465541_creativeid_446280875236_device_c&amp;gclid=CjwKCAiAnZCdBhBmEiwA8nDQxQlRg_0q0RHX1_qoLhW__5eZesMpUSzyNAeE7Sd9sslmg0jLCGISoxoCag4QAvD_BwE&amp;gclsrc=aw.ds&amp;pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="how-it-works-link8"
                >
                  <div className="how-it-works-android button">
                    <img
                      alt="image"
                      src="/playground_assets/android-200h.png"
                      className="how-it-works-icon1"
                    />
                    <span className="how-it-works-text20">
                      Download for Android
                    </span>
                  </div>
                </a>
              </div>
            </main>
            <section className="how-it-works-copyright">
              <span className="how-it-works-text21">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .how-it-works-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .how-it-works-section {
            width: 100%;
            height: 670px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            background-size: cover;
            justify-content: center;
            background-image: url('/playground_assets/background-1500w.png');
            border-bottom-width: 1px;
          }
          .how-it-works-text {
            top: 200px;
            left: 100px;
            color: var(--dl-color-gray-white);
            position: absolute;
            font-size: 50px;
            align-self: center;
          }
          .how-it-works-text01 {
            top: 300px;
            left: 0px;
            color: var(--dl-color-primary-100);
            right: 200px;
            width: 1200px;
            height: auto;
            opacity: 0.8;
            z-index: 100;
            position: absolute;
            align-self: center;
            text-align: left;
            font-family: Noto Sans;
            line-height: 1.5;
            padding-top: 40px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            padding-left: 100px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: 40px;
            background-image: linear-gradient(
              90deg,
              rgb(255, 255, 255) 100%,
              rgb(255, 255, 255) 100%
            );
          }
          .how-it-works-footer {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .how-it-works-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .how-it-works-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .how-it-works-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .how-it-works-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .how-it-works-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-branding {
            width: 120px;
            object-fit: cover;
          }
          .how-it-works-text07 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .how-it-works-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .how-it-works-link {
            display: contents;
          }
          .how-it-works-link1 {
            display: contents;
          }
          .how-it-works-link2 {
            display: contents;
          }
          .how-it-works-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .how-it-works-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .how-it-works-link3 {
            text-decoration: none;
          }
          .how-it-works-category1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-links1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .how-it-works-link4 {
            text-decoration: none;
          }
          .how-it-works-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .how-it-works-link5 {
            text-decoration: none;
          }
          .how-it-works-link6 {
            text-decoration: none;
          }
          .how-it-works-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .how-it-works-link7 {
            display: contents;
          }
          .how-it-works-i-o-s {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .how-it-works-icon {
            width: 16px;
            object-fit: cover;
          }
          .how-it-works-text19 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .how-it-works-link8 {
            display: contents;
          }
          .how-it-works-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .how-it-works-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .how-it-works-text20 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .how-it-works-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .how-it-works-text21 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .how-it-works-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .how-it-works-content {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .how-it-works-i-o-s {
              flex: 1;
              justify-content: center;
            }
            .how-it-works-android {
              flex: 1;
              justify-content: center;
            }
            .how-it-works-copyright {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .how-it-works-content1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .how-it-works-main {
              gap: var(--dl-space-space-twounits);
            }
            .how-it-works-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .how-it-works-i-o-s {
              flex: 0 0 auto;
              width: 100%;
            }
            .how-it-works-android {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default HowItWorks
