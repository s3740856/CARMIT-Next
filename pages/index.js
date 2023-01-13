import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Navbar from '../components/navbar'
import Card from '../components/card'
import Review from '../components/review'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>CARMIT</title>
          <meta property="og:title" content="CARMIT" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <section className="home-section">
          <div className="home-hero">
            <div className="home-content">
              <main className="home-main">
                <header className="home-header">
                  <h1 className="home-heading">
                    <span>Find</span>
                    <br></br>
                    <span>parking</span>
                    <br></br>
                    <span>in seconds</span>
                    <br></br>
                  </h1>
                </header>
                <div className="home-container1">
                  <div
                    data-thq="thq-dropdown"
                    className="home-thq-dropdown list-item"
                  >
                    <ul
                      data-thq="thq-dropdown-list"
                      className="home-dropdown-list"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="home-dropdown list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="home-dropdown-toggle"
                        >
                          <span className="home-text06">Sub-menu Item</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="home-dropdown1 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="home-dropdown-toggle1"
                        >
                          <span className="home-text07">Sub-menu Item</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="home-dropdown2 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="home-dropdown-toggle2"
                        >
                          <span className="home-text08">Sub-menu Item</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <input
                    type="text"
                    placeholder="PARKING IN"
                    className="home-input input"
                  />
                  <div className="home-container2">
                    <input
                      type="text"
                      placeholder="PARKING FROM"
                      className="home-textinput input"
                    />
                    <input
                      type="text"
                      placeholder="PARKING UNTIL"
                      className="home-textinput1 input"
                    />
                  </div>
                  <div className="home-container3">
                    <select className="home-select">
                      <option value="00:00" selected>
                        00:00
                      </option>
                      <option value="01:00">01:00</option>
                      <option value="02:00">02:00</option>
                      <option value="03:00">03:00</option>
                      <option value="04:00">04:00</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                      <option value="23:00">23:00</option>
                    </select>
                    <select className="home-select1">
                      <option value="00:00" selected>
                        00:00
                      </option>
                      <option value="01:00">01:00</option>
                      <option value="02:00">02:00</option>
                      <option value="03:00">03:00</option>
                      <option value="04:00">04:00</option>
                      <option value="05:00">05:00</option>
                      <option value="06:00">06:00</option>
                      <option value="07:00">07:00</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                      <option value="23:00">23:00</option>
                    </select>
                  </div>
                  <Link href="/map">
                    <a className="home-link button">Show parking spaces</a>
                  </Link>
                </div>
              </main>
            </div>
            <div className="home-image">
              <img
                alt="image"
                src="/playground_assets/mainpage-600h.png"
                className="home-image1"
              />
            </div>
          </div>
        </section>
        <section className="home-section1">
          <header className="home-header1">
            <header className="home-left">
              <h2 className="home-heading1 section-heading">
                Parking made easy
              </h2>
            </header>
            <div className="home-right"></div>
          </header>
          <main className="home-cards">
            <Card rootClassName="card-root-class-name"></Card>
            <Card
              Icon="/playground_assets/group%201314-200h.png"
              Header="Peace of mind"
              Description="View information on availability, price and restrictions"
              rootClassName="card-root-class-name1"
            ></Card>
            <Card
              Icon="/playground_assets/group%201317-200h.png"
              Header="Seamless experience"
              Description="Pay for CARMIT via website"
              Description1="Follow easy directions and access instructions"
              rootClassName="card-root-class-name2"
            ></Card>
          </main>
        </section>
        <section className="home-section2">
          <main className="home-content1">
            <img
              alt="image"
              src="/playground_assets/carmitlogophone-1200w.png"
              className="home-image2"
            />
            <header className="home-header2">
              <h2 className="home-heading2 section-heading">
                Download the CARMIT car parking app
              </h2>
              <h3 className="home-heading3 section-heading">
                <span>
                  Rated 5 stars with an average satisfaction rating of 96%
                </span>
                <br></br>
                <span>
                  CARMIT is Vietnam&apos;s favorite parking and rental car
                  service. But don&apos;t just take
                </span>
                <br></br>
                <span>
                  our word for it - check out some of the latest customer
                  reviews below for our Vietnam parking spaces.
                </span>
              </h3>
              <div className="home-buttons">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link01"
                >
                  <div className="home-i-o-s button">
                    <img
                      alt="image"
                      src="/playground_assets/apple-200w.png"
                      className="home-icon"
                    />
                    <span className="home-text14">Download for iOS</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&amp;utm_medium=hasem&amp;utm_content=Oct0121&amp;utm_campaign=Evergreen&amp;pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700074087465541_creativeid_446280875236_device_c&amp;gclid=CjwKCAiAnZCdBhBmEiwA8nDQxQlRg_0q0RHX1_qoLhW__5eZesMpUSzyNAeE7Sd9sslmg0jLCGISoxoCag4QAvD_BwE&amp;gclsrc=aw.ds&amp;pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link02"
                >
                  <div className="home-android button">
                    <img
                      alt="image"
                      src="/playground_assets/android-200h.png"
                      className="home-icon1"
                    />
                    <span className="home-text15">Download for Android</span>
                  </div>
                </a>
              </div>
            </header>
          </main>
        </section>
        <section className="home-section3">
          <header className="home-header3">
            <header className="home-left1">
              <h2 className="home-heading4 section-heading">
                What users are saying
              </h2>
            </header>
            <div className="home-right1">
              <p className="home-paragraph section-description">
                Don&apos;t just take our word for it - check out some of the
                latest customer reviews for our Vietnam parking spaces
              </p>
            </div>
          </header>
          <main className="home-cards1">
            <div className="home-container4">
              <Review rootClassName="review-root-class-name"></Review>
              <Review
                Quote="“Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.\u2028\u2028Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container5">
              <Review
                Quote="“Illum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                Quote="“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
            <div className="home-container6">
              <Review
                Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
              <Review
                Quote="“Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.”"
                rootClassName="review-root-class-name"
              ></Review>
            </div>
          </main>
          <div className="home-view-more">
            <p className="home-text16">View more</p>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-content2">
            <main className="home-main-content">
              <div className="home-container7">
                <div className="home-content3">
                  <header className="home-main1">
                    <div className="home-header4">
                      <img
                        alt="image"
                        src="/playground_assets/carmitlogo-200h.png"
                        className="home-branding"
                      />
                      <span className="home-text17">
                        &quot; The joy in your ride &quot;
                      </span>
                    </div>
                    <div className="home-socials">
                      <a
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link03"
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
                        className="home-link04"
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
                        className="home-link05"
                      >
                        <img
                          alt="image"
                          src="/playground_assets/twitter-200h.png"
                          className="social"
                        />
                      </a>
                    </div>
                  </header>
                  <header className="home-categories">
                    <div className="home-category">
                      <div className="home-header5">
                        <span className="footer-header">Information</span>
                      </div>
                      <div className="home-links">
                        <Link href="/about-us">
                          <a className="home-link06 footer-link">
                            <span>About us</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="home-category1">
                      <div className="home-header6">
                        <span className="footer-header">Services</span>
                      </div>
                      <div className="home-links1">
                        <Link href="/">
                          <a className="home-link07 footer-link">
                            <span>Find parking slot</span>
                            <br></br>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="home-category2">
                      <div className="home-header7">
                        <span className="footer-header">Get in touch</span>
                      </div>
                      <div className="home-links2">
                        <Link href="/how-it-works">
                          <a className="home-link08 footer-link">
                            How CARMIT works
                          </a>
                        </Link>
                        <Link href="/help-centre">
                          <a className="home-link09 footer-link">Help centre</a>
                        </Link>
                      </div>
                    </div>
                  </header>
                </div>
              </div>
              <div className="home-container8">
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link10"
                >
                  <div className="home-i-o-s1 button">
                    <img
                      alt="image"
                      src="/playground_assets/apple-200w.png"
                      className="home-icon2"
                    />
                    <span className="home-text29">Download for iOS</span>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/games?utm_source=apac_med&amp;utm_medium=hasem&amp;utm_content=Oct0121&amp;utm_campaign=Evergreen&amp;pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700074087465541_creativeid_446280875236_device_c&amp;gclid=CjwKCAiAnZCdBhBmEiwA8nDQxQlRg_0q0RHX1_qoLhW__5eZesMpUSzyNAeE7Sd9sslmg0jLCGISoxoCag4QAvD_BwE&amp;gclsrc=aw.ds&amp;pli=1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11"
                >
                  <div className="home-android1 button">
                    <img
                      alt="image"
                      src="/playground_assets/android-200h.png"
                      className="home-icon3"
                    />
                    <span className="home-text30">Download for Android</span>
                  </div>
                </a>
              </div>
            </main>
            <section className="home-copyright">
              <span className="home-text31">
                © 2022 latitude. All Rights Reserved.
              </span>
            </section>
          </div>
        </footer>
        <div>
          <DangerousHTML
            html={`<script>
    /*
Accordion - Code Embed
*/

/* listenForUrlChangesAccordion() makes sure that if you changes pages inside your app,
the Accordions will still work*/

const listenForUrlChangesAccordion = () => {
      let url = location.href;
      document.body.addEventListener(
        "click",
        () => {
          requestAnimationFrame(() => {
            if (url !== location.href) {
              runAccordionCodeEmbed();
              url = location.href;
            }
          });
        },
        true
      );
    };


const runAccordionCodeEmbed = () => {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
    const accordionIcons = document.querySelectorAll('[data-role="accordion-icon"]'); // All accordion icons

    accordionContents.forEach((accordionContent) => {
        accordionContent.style.display = "none"; //Hides all accordion contents
    });

    accordionContainers.forEach((accordionContainer, index) => {
        accordionContainer.addEventListener("click", () => {
            accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
            });

            accordionIcons.forEach((accordionIcon) => {
                accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
            });

            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        });
    });
}

runAccordionCodeEmbed()
listenForUrlChangesAccordion()

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
          ></DangerousHTML>
        </div>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .home-section {
            width: 100%;
            height: 80vh;
            display: flex;
            align-items: center;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
            border-bottom-width: 1px;
          }
          .home-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content {
            gap: var(--dl-space-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading {
            color: rgb(255, 255, 255);
            font-size: 64px;
            align-self: flex-start;
            font-style: normal;
            font-family: Poppins;
            font-weight: 600;
          }
          .home-container1 {
            width: 430px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
          }
          .home-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text06 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle1 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text07 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .home-dropdown-toggle2 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius4);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .home-text08 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
          }
          .home-input {
            width: 402px;
            height: 50px;
            align-self: flex-start;
            text-align: center;
            padding-top: var(--dl-space-space-halfunit);
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            margin-right: var(--dl-space-space-twounits);
            padding-left: 120px;
            border-radius: var(--dl-radius-radius-radius2);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            padding-right: 120px;
            padding-bottom: var(--dl-space-space-halfunit);
            text-transform: uppercase;
            background-color: var(--dl-color-gray-white);
          }
          .home-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-textinput {
            width: 189px;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-textinput1 {
            width: 189px;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: flex-start;
          }
          .home-select {
            width: 189px;
            height: 28px;
            padding-top: 0px;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .home-select1 {
            width: 189px;
            height: 27px;
            margin-right: 103px;
          }
          .home-link {
            color: var(--dl-color-gray-white);
            width: 402px;
            height: 65px;
            font-family: Arial Black;
            padding-top: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
            border-radius: var(--dl-radius-radius-radius2);
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-image {
            top: 150px;
            right: 0px;
            width: 521px;
            height: 732px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-image1 {
            top: 36px;
            right: 0px;
            width: 767px;
            height: 517px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .home-section1 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header1 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-left {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading1 {
            color: var(--dl-color-gray-white);
            font-size: 50px;
          }
          .home-right {
            gap: var(--dl-space-space-unit);
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-cards {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-section2 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-black);
          }
          .home-content1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-image2 {
            right: 0px;
            width: 470px;
            bottom: var(--dl-space-space-sixunits);
            position: absolute;
            object-fit: cover;
          }
          .home-header2 {
            gap: var(--dl-space-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: flex-start;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: flex-start;
          }
          .home-heading2 {
            text-align: left;
          }
          .home-heading3 {
            font-size: 16px;
            font-style: normal;
            text-align: left;
            font-weight: 100;
            line-height: 20px;
          }
          .home-buttons {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-link01 {
            display: contents;
          }
          .home-i-o-s {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-icon {
            width: 16px;
            object-fit: cover;
          }
          .home-text14 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-link02 {
            display: contents;
          }
          .home-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-icon1 {
            width: 16px;
            object-fit: cover;
          }
          .home-text15 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-section3 {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            color: var(--dl-color-gray-black);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            border-color: #51515a;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-top-width: 1px;
          }
          .home-header3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-left1 {
            gap: var(--dl-space-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-heading4 {
            color: var(--dl-color-primary-100);
            font-size: 50px;
            text-align: center;
          }
          .home-right1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-paragraph {
            width: 100%;
            max-width: 600px;
            text-align: center;
          }
          .home-cards1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-threeunits);
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            grid-template-columns: auto auto auto;
          }
          .home-container4 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container5 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-container6 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            flex-direction: column;
          }
          .home-view-more {
            gap: var(--dl-space-space-oneandhalfunits);
            cursor: pointer;
            display: none;
            transition: 0.3s;
            align-items: center;
            border-color: #80ff44;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-view-more:hover {
            opacity: 0.5;
          }
          .home-text16 {
            color: rgb(128, 255, 68);
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
          .home-footer {
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
          }
          .home-content2 {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container7 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-content3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-main1 {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header4 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-branding {
            width: 120px;
            object-fit: cover;
          }
          .home-text17 {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .home-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-link03 {
            display: contents;
          }
          .home-link04 {
            display: contents;
          }
          .home-link05 {
            display: contents;
          }
          .home-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .home-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header5 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link06 {
            text-decoration: none;
          }
          .home-category1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .home-header6 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link07 {
            text-decoration: none;
          }
          .home-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header7 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-link08 {
            text-decoration: none;
          }
          .home-link09 {
            text-decoration: none;
          }
          .home-container8 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-link10 {
            display: contents;
          }
          .home-i-o-s1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-icon2 {
            width: 16px;
            object-fit: cover;
          }
          .home-text29 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-link11 {
            display: contents;
          }
          .home-android1 {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .home-icon3 {
            width: 16px;
            object-fit: cover;
          }
          .home-text30 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .home-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text31 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          @media (max-width: 991px) {
            .home-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .home-content {
              position: relative;
              align-items: center;
            }
            .home-main {
              align-items: center;
            }
            .home-heading {
              text-align: left;
            }
            .home-image {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .home-section1 {
              gap: var(--dl-space-space-threeunits);
              padding-top: 100px;
              padding-bottom: 100px;
            }
            .home-header1 {
              gap: var(--dl-space-space-unit);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-cards {
              gap: var(--dl-space-space-oneandhalfunits);
              flex-direction: column;
            }
            .home-content1 {
              align-items: center;
              flex-direction: column;
            }
            .home-image2 {
              position: static;
            }
            .home-buttons {
              width: 100%;
            }
            .home-i-o-s {
              flex: 1;
              justify-content: center;
            }
            .home-android {
              flex: 1;
              justify-content: center;
            }
            .home-section3 {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .home-cards1 {
              grid-template-columns: auto;
            }
            .home-container6 {
              display: none;
            }
            .home-view-more {
              display: flex;
              border-color: #cccccc;
            }
            .home-text16 {
              color: #cccccc;
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
            }
            .home-content2 {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-i-o-s1 {
              flex: 1;
              justify-content: center;
            }
            .home-android1 {
              flex: 1;
              justify-content: center;
            }
            .home-copyright {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .home-content {
              gap: var(--dl-space-space-threeunits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .home-heading {
              font-size: 40px;
            }
            .home-left {
              gap: var(--dl-space-space-unit);
            }
            .home-section2 {
              padding-top: var(--dl-space-space-fourunits);
            }
            .home-header2 {
              padding-bottom: var(--dl-space-space-fiveunits);
            }
            .home-buttons {
              flex-direction: column;
            }
            .home-i-o-s {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-android {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-section3 {
              padding-top: var(--dl-space-space-fourunits);
              padding-bottom: var(--dl-space-space-fourunits);
            }
            .home-content3 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .home-main1 {
              gap: var(--dl-space-space-twounits);
            }
            .home-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .home-i-o-s1 {
              flex: 0 0 auto;
              width: 100%;
            }
            .home-android1 {
              flex: 0 0 auto;
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .home-header {
              align-items: flex-start;
            }
            .home-heading {
              max-width: 280px;
            }
            .home-image2 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
