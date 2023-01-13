import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>About-us - CARMIT</title>
          <meta property="og:title" content="About-us - CARMIT" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <section className="about-us-section">
          <h1 className="about-us-text">
            <span className="about-us-text01">About</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-us-text03">CARMIT</span>
          </h1>
          <span className="about-us-text04 Content">
            <span>
              Due to the rapid increase of car ownership, and the imbalance
              between the demand and suply of car parking. Parking places has
              been a paramount concern to most of drivers. So that we desire to
              develop Carmit - a website which assists car owners to find a car
              parking near them. Our website will cooperate with
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              the parking’s owners and publish their places’ information on the
              web so that when my users can connect to the nearest parking and
              get a deal of it. With an easy-learning interface and simple steps
              to access, we believe that our website is able to be used by every
              customer at every ages. Besides, many payment options are provided
              for customers to ensure they can choose the most suitable and
              convenient method.
            </span>
          </span>
        </section>
        <footer className="about-us-footer">
          <div className="about-us-content">
            <main className="about-us-main-content">
              <div className="about-us-container1">
                <div className="about-us-content1">
                  <header className="about-us-main">
                    <div className="about-us-header">
                      <img
                        alt="image"
                        src="/playground_assets/carmitlogo-200h.png"
                        className="about-us-branding"
                      />
                      <span className="about-us-text08">
                        &quot; The joy in your ride &quot;
                      </span>
                    </div>
                    <div className="about-us-socials">
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="about-us-link"
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
                        className="about-us-link1"
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
                        className="about-us-link2"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/twitter-200h.png"
                          className="social"
                        />
                      </a>
                    </div>
                  </header>
                  <header className="about-us-categories">
                    <div className="about-us-category">
                      <div className="about-us-header1">
                        <span className="footer-header">Information</span>
                      </div>
                      <div className="about-us-links">
                        <Link href="/about-us">
                          <a className="about-us-link3 footer-link">
                            <span>About us</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="about-us-category1">
                      <div className="about-us-header2">
                        <span className="footer-header">Services</span>
                      </div>
                      <div className="about-us-links1">
                        <Link href="/">
                          <a className="about-us-link4 footer-link">
                            <span>Find parking slot</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="about-us-category2">
                      <div className="about-us-header3">
                        <span className="footer-header">Get in touch</span>
                      </div>
                      <div className="about-us-links2">
                        <Link href="/how-it-works">
                          <a className="about-us-link5 footer-link">
                            How CARMIT works
                          </a>
                        </Link>
                        <Link href="/help-centre">
                          <a className="about-us-link6 footer-link">
                            Help centre
                          </a>
                        </Link>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
              <div className="about-us-container2">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link7"
                >
                  <div className="about-us-i-o-s button">
                    <img
                      alt="image"
                      src="/playground_assets/apple-200w.png"
                      className="about-us-icon"
                    />
                    <span className="about-us-text20">Download for iOS</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&amp;utm_medium=hasem&amp;utm_content=Oct0121&amp;utm_campaign=Evergreen&amp;pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700074087465541_creativeid_446280875236_device_c&amp;gclid=CjwKCAiAnZCdBhBmEiwA8nDQxQlRg_0q0RHX1_qoLhW__5eZesMpUSzyNAeE7Sd9sslmg0jLCGISoxoCag4QAvD_BwE&amp;gclsrc=aw.ds&amp;pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-us-link8"
                >
                  <div className="about-us-android button">
                    <img
                      alt="image"
                      src="/playground_assets/android-200h.png"
                      className="about-us-icon1"
                    />
                    <span className="about-us-text21">
                      Download for Android
                    </span>
                  </div>
                </a>
              </div>
            </main>
            <section className="about-us-copyright">
              <span className="about-us-text22">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/default-img.svg');
          }
          .about-us-section {
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
          .about-us-text {
            top: 200px;
            left: 484px;
            position: absolute;
            font-size: 2em;
            align-self: center;
          }
          .about-us-text01 {
            color: #ffffff;
          }
          .about-us-text03 {
            color: #1165ec;
          }
          .about-us-text04 {
            top: 300px;
            left: 200px;
            color: var(--dl-color-primary-100);
            right: 200px;
            width: auto;
            height: auto;
            opacity: 0.8;
            padding: var(--dl-space-space-unit);
            z-index: 100;
            position: absolute;
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            border-radius: 20px;
            padding-right: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
            background-image: linear-gradient(
              90deg,
              rgb(255, 255, 255) 100%,
              rgb(255, 255, 255) 100%
            );
          }
          .about-us-footer {
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
            background-color: #000000;
          }
          .about-us-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .about-us-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-container1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-branding {
            width: 120px;
            object-fit: cover;
          }
          .about-us-text08 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .about-us-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .about-us-link {
            display: contents;
          }
          .about-us-link1 {
            display: contents;
          }
          .about-us-link2 {
            display: contents;
          }
          .about-us-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .about-us-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-link3 {
            text-decoration: none;
          }
          .about-us-category1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-links1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-link4 {
            text-decoration: none;
          }
          .about-us-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .about-us-link5 {
            text-decoration: none;
          }
          .about-us-link6 {
            text-decoration: none;
          }
          .about-us-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .about-us-link7 {
            display: contents;
          }
          .about-us-i-o-s {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .about-us-icon {
            width: 16px;
            object-fit: cover;
          }
          .about-us-text20 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .about-us-link8 {
            display: contents;
          }
          .about-us-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .about-us-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .about-us-text21 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .about-us-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .about-us-text22 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .about-us-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .about-us-content {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .about-us-i-o-s {
              flex: 1;
              justify-content: center;
            }
            .about-us-android {
              flex: 1;
              justify-content: center;
            }
            .about-us-copyright {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .about-us-content1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .about-us-main {
              gap: var(--dl-space-space-twounits);
            }
            .about-us-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .about-us-i-o-s {
              flex: 0 0 auto;
              width: 100%;
            }
            .about-us-android {
              flex: 0 0 auto;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
