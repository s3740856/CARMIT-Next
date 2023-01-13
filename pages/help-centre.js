import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import DangerousHTML from 'dangerous-html/react'

import Navbar from '../components/navbar'

const HelpCentre = (props) => {
  return (
    <>
      <div className="help-centre-container">
        <Head>
          <title>Help-centre - CARMIT</title>
          <meta property="og:title" content="Help-centre - CARMIT" />
        </Head>
        <div className="help-centre-container1">
          <Link href="/">
            <a className="help-centre-link">
              <Navbar
                rootClassName="navbar-root-class-name3"
                className="help-centre-component"
              ></Navbar>
            </a>
          </Link>
          <section className="help-centre-section">
            <div className="help-centre-hero">
              <div className="help-centre-image">
                <img
                  alt="image"
                  src="/playground_assets/mainpage-600h.png"
                  className="help-centre-image1"
                />
              </div>
              <div className="help-centre-image2">
                <img
                  alt="image"
                  src="/playground_assets/heroimage-1500h.png"
                  className="help-centre-image3"
                />
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="help-centre-icon">
              <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
              <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
              <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="help-centre-icon04">
              <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
              <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
              <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
            </svg>
          </section>
          <footer className="help-centre-footer">
            <div className="help-centre-content">
              <main className="help-centre-main-content">
                <div className="help-centre-container2">
                  <div className="help-centre-content1">
                    <header className="help-centre-main">
                      <div className="help-centre-header">
                        <img
                          alt="image"
                          src="/playground_assets/carmitlogo-1500h.png"
                          className="help-centre-branding"
                        />
                        <span className="help-centre-text">
                          &quot; The joy in your ride &quot;
                        </span>
                      </div>
                      <div className="help-centre-socials">
                        <a
                          href="https://example.com"
                          target="_blank"
                          rel="noreferrer noopener"
                          className="help-centre-link01"
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
                          className="help-centre-link02"
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
                          className="help-centre-link03"
                        >
                          <img
                            alt="image"
                            src="/playground_assets/twitter-200h.png"
                            className="social"
                          />
                        </a>
                      </div>
                    </header>
                    <header className="help-centre-categories">
                      <div className="help-centre-category">
                        <div className="help-centre-header1">
                          <span className="footer-header">Information</span>
                        </div>
                        <div className="help-centre-links">
                          <Link href="/about-us">
                            <a className="help-centre-link04 footer-link">
                              <span>About us</span>
                              <br></br>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="help-centre-category1">
                        <div className="help-centre-header2">
                          <span className="footer-header">Services</span>
                        </div>
                        <div className="help-centre-links1">
                          <Link href="/">
                            <a className="help-centre-link05 footer-link">
                              <span>Find parking slot</span>
                              <br></br>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="help-centre-category2">
                        <div className="help-centre-header3">
                          <span className="footer-header">Get in touch</span>
                        </div>
                        <div className="help-centre-links2">
                          <Link href="/how-it-works">
                            <a className="help-centre-link06 footer-link">
                              How CARMIT works
                            </a>
                          </Link>
                          <Link href="/help-centre">
                            <a className="help-centre-link07 footer-link">
                              Help centre
                            </a>
                          </Link>
                        </div>
                      </div>
                    </header>
                  </div>
                </div>
                <div className="help-centre-container3">
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="help-centre-link08"
                  >
                    <div className="help-centre-i-o-s button">
                      <img
                        alt="image"
                        src="/playground_assets/apple-1500h.png"
                        className="help-centre-icon08"
                      />
                      <span className="help-centre-text12">
                        Download for iOS
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/games?utm_source=apac_med&amp;utm_medium=hasem&amp;utm_content=Oct0121&amp;utm_campaign=Evergreen&amp;pcampaignid=MKT-EDR-apac-vn-1003227-med-hasem-py-Evergreen-Oct0121-Text_Search_BKWS-BKWS%7CONSEM_kwid_43700074087465541_creativeid_446280875236_device_c&amp;gclid=CjwKCAiAnZCdBhBmEiwA8nDQxQlRg_0q0RHX1_qoLhW__5eZesMpUSzyNAeE7Sd9sslmg0jLCGISoxoCag4QAvD_BwE&amp;gclsrc=aw.ds&amp;pli=1"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="help-centre-link09"
                  >
                    <div className="help-centre-android button">
                      <img
                        alt="image"
                        src="/playground_assets/android-1500h.png"
                        className="help-centre-icon09"
                      />
                      <span className="help-centre-text13">
                        Download for Android
                      </span>
                    </div>
                  </a>
                </div>
              </main>
              <section className="help-centre-copyright">
                <span className="help-centre-text14">
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
        <h1 className="help-centre-text15">Hi, how can we help?</h1>
        <div
          data-thq="thq-dropdown"
          className="help-centre-thq-dropdown list-item"
        >
          <div
            data-thq="thq-dropdown-toggle"
            className="help-centre-dropdown-toggle"
          >
            <input
              type="text"
              placeholder="Please tell us your problem"
              className="help-centre-input input"
            />
            <div
              data-thq="thq-dropdown-arrow"
              className="help-centre-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="help-centre-icon10">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
          </div>
          <ul
            data-thq="thq-dropdown-list"
            className="help-centre-dropdown-list"
          >
            <li
              data-thq="thq-dropdown"
              className="help-centre-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="help-centre-dropdown-toggle1"
              >
                <span className="help-centre-text16">
                  Where can I sign up for CARMIT?
                </span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="help-centre-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="help-centre-dropdown-toggle2"
              >
                <span className="help-centre-text17">
                  How can I contact with customer service?
                </span>
              </div>
            </li>
            <li
              data-thq="thq-dropdown"
              className="help-centre-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="help-centre-dropdown-toggle3"
              >
                <span className="help-centre-text18">
                  How can I process with the payment?
                </span>
              </div>
            </li>
          </ul>
        </div>
        <h1 className="help-centre-text19">Contact us via</h1>
        <svg viewBox="0 0 1024 1024" className="help-centre-icon12">
          <path d="M805.973 299.179c34.475-21.163 57.301-50.048 68.48-86.784-33.536 17.792-66.944 29.995-100.309 36.736-29.995-32.256-67.968-48.64-113.493-48.64-44.501 0-82.091 15.616-112.768 45.995-30.507 30.592-45.909 67.755-45.909 111.147 0 13.184 1.664 24.96 4.992 34.944-131.243-4.48-239.872-58.923-325.461-163.712-14.507 25.643-21.76 51.755-21.76 78.763 0 55.509 23.424 99.499 70.187 131.797-26.667-2.261-50.176-9.003-70.187-20.053 0 39.637 11.648 72.747 34.987 101.888 23.424 28.843 53.504 47.232 90.24 55.083-13.312 3.413-27.349 5.035-41.771 5.035-13.312 0-22.741-1.109-28.331-3.541 9.813 32.299 28.331 58.496 55.083 78.549 26.667 20.139 57.344 30.763 91.819 31.701-56.832 44.587-121.813 66.645-195.328 66.645-18.005 0-30.763-0.256-38.485-1.621 72.405 47.019 153.003 70.357 242.176 70.357 91.264 0 171.904-23.125 242.091-69.376 70.187-45.995 121.984-102.741 155.264-169.557 33.451-66.731 50.005-136.192 50.005-208.725v-19.968c32.341-24.32 58.496-51.712 78.507-81.963-29.013 12.501-59.008 20.992-90.027 25.301z"></path>
        </svg>
        <svg
          viewBox="0 0 877.7142857142857 1024"
          className="help-centre-icon14"
        >
          <path d="M829.143 73.143c26.857 0 48.571 21.714 48.571 48.571v780.571c0 26.857-21.714 48.571-48.571 48.571h-223.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-420c-26.857 0-48.571-21.714-48.571-48.571v-780.571c0-26.857 21.714-48.571 48.571-48.571h780.571z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="help-centre-icon16">
          <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
          <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
          <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
        </svg>
      </div>
      <style jsx>
        {`
          .help-centre-container {
            width: 100%;
            display: flex;
            overflow: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 100vh;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #000000;
          }
          .help-centre-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #0f0f0f;
          }
          .help-centre-link {
            display: contents;
          }
          .help-centre-component {
            text-decoration: none;
          }
          .help-centre-section {
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
          .help-centre-hero {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .help-centre-image {
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
          .help-centre-image1 {
            top: 36px;
            right: 0px;
            width: 767px;
            height: 517px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .help-centre-image2 {
            display: none;
          }
          .help-centre-icon {
            width: 24px;
            height: 24px;
          }
          .help-centre-icon04 {
            width: 24px;
            height: 24px;
          }
          .help-centre-footer {
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
          .help-centre-content {
            width: 100%;
            display: flex;
            max-width: 1200px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .help-centre-main-content {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .help-centre-container2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .help-centre-content1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .help-centre-main {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-header {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-branding {
            width: 120px;
            object-fit: cover;
          }
          .help-centre-text {
            color: rgb(255, 255, 255);
            width: 100%;
            font-size: 14px;
            max-width: 260px;
            font-family: Poppins;
            line-height: 21px;
          }
          .help-centre-socials {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .help-centre-link01 {
            display: contents;
          }
          .help-centre-link02 {
            display: contents;
          }
          .help-centre-link03 {
            display: contents;
          }
          .help-centre-categories {
            gap: var(--dl-space-space-fourunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-end;
          }
          .help-centre-category {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-header1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-links {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .help-centre-link04 {
            text-decoration: none;
          }
          .help-centre-category1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            padding-left: 1px;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-header2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-links1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .help-centre-link05 {
            text-decoration: none;
          }
          .help-centre-category2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            display: flex;
            max-width: 175px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-header3 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-links2 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .help-centre-link06 {
            text-decoration: none;
          }
          .help-centre-link07 {
            text-decoration: none;
          }
          .help-centre-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .help-centre-link08 {
            display: contents;
          }
          .help-centre-i-o-s {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            margin-right: var(--dl-space-space-halfunit);
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .help-centre-icon08 {
            width: 16px;
            object-fit: cover;
          }
          .help-centre-text12 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .help-centre-link09 {
            display: contents;
          }
          .help-centre-android {
            gap: var(--dl-space-space-halfunit);
            display: flex;
            flex-direction: row;
            text-decoration: none;
            background-color: var(--dl-color-primary-100);
          }
          .help-centre-icon09 {
            width: 16px;
            object-fit: cover;
          }
          .help-centre-text13 {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-style: normal;
            font-family: Poppins;
            font-weight: 500;
            line-height: 24px;
          }
          .help-centre-copyright {
            gap: var(--dl-space-space-fiveunits);
            flex: 1;
            width: 100%;
            display: none;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .help-centre-text14 {
            color: #c4c4c4;
            width: 100%;
            font-size: 14px;
            font-family: Poppins;
            line-height: 21px;
          }
          .help-centre-text15 {
            top: 300px;
            left: 80px;
            color: rgb(255, 255, 255);
            width: 634px;
            height: 75px;
            position: absolute;
            font-size: 3em;
          }
          .help-centre-thq-dropdown {
            top: 380px;
            left: 80px;
            width: 500px;
            cursor: pointer;
            display: inline-block;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .help-centre-dropdown-toggle {
            fill: #595959;
            color: var(--dl-color-primary-100);
            width: 100%;
            height: 50px;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius2);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: var(--dl-color-gray-white);
          }
          .help-centre-input {
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-maxwidth);
            height: 50px;
            font-size: 25px;
          }
          .help-centre-dropdown-arrow {
            position: relative;
            transition: 0.3s;
          }
          .help-centre-icon10 {
            fill: #d9d9d9;
            width: 50px;
            height: 50px;
            margin-top: auto;
            transition: 0.3s;
            margin-bottom: auto;
          }
          .help-centre-dropdown-list {
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
          .help-centre-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .help-centre-dropdown-toggle1 {
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
          .help-centre-dropdown-toggle1:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .help-centre-text16 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
          }
          .help-centre-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .help-centre-dropdown-toggle2 {
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
          .help-centre-dropdown-toggle2:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .help-centre-text17 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
          }
          .help-centre-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .help-centre-dropdown-toggle3 {
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
          .help-centre-dropdown-toggle3:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .help-centre-text18 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
          }
          .help-centre-text19 {
            top: 550px;
            left: 80px;
            color: rgb(255, 255, 255);
            width: 634px;
            height: 75px;
            position: absolute;
            font-size: 2em;
          }
          .help-centre-icon12 {
            top: 600px;
            fill: #d9d9d9;
            left: 80px;
            right: 0px;
            width: auto;
            height: 60px;
            position: absolute;
          }
          .help-centre-icon14 {
            top: 600px;
            fill: #d9d9d9;
            left: 150px;
            right: 0px;
            width: auto;
            height: 60px;
            position: absolute;
          }
          .help-centre-icon16 {
            top: 600px;
            fill: #d9d9d9;
            left: 220px;
            width: auto;
            height: 60px;
            position: absolute;
          }
          @media (max-width: 991px) {
            .help-centre-section {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
            }
            .help-centre-hero {
              gap: var(--dl-space-space-fourunits);
              flex: 1;
              position: relative;
              max-width: auto;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .help-centre-image {
              right: 0px;
              display: none;
              position: absolute;
              flex-direction: column;
            }
            .help-centre-image2 {
              width: 100%;
              display: flex;
              align-items: flex-end;
              flex-direction: column;
            }
            .help-centre-image3 {
              width: 600px;
            }
            .help-centre-content {
              gap: var(--dl-space-space-threeunits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .help-centre-i-o-s {
              flex: 1;
              justify-content: center;
            }
            .help-centre-android {
              flex: 1;
              justify-content: center;
            }
            .help-centre-copyright {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .help-centre-image3 {
              width: 500px;
            }
            .help-centre-content1 {
              gap: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .help-centre-main {
              gap: var(--dl-space-space-twounits);
            }
            .help-centre-categories {
              gap: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .help-centre-i-o-s {
              flex: 0 0 auto;
              width: 100%;
            }
            .help-centre-android {
              flex: 0 0 auto;
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .help-centre-image3 {
              width: 400px;
            }
          }
        `}
      </style>
    </>
  )
}

export default HelpCentre
