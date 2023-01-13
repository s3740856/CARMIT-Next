import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const ProcessingPage3 = (props) => {
  return (
    <>
      <div className="processing-page3-container">
        <Head>
          <title>Processing-Page-3 - CARMIT</title>
          <meta property="og:title" content="Processing-Page-3 - CARMIT" />
        </Head>
        <div className="processing-page3-container01">
          <div className="processing-page3-container02">
            <div className="processing-page3-container03">
              <div className="processing-page3-container04">
                <span className="processing-page3-text">
                  <span>Parking at</span>
                  <br></br>
                </span>
                <select className="processing-page3-select">
                  <option value="Nguyen">Nguyen Van Linh,Viet Nam</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="processing-page3-container05">
              <span className="processing-page3-text03">Parking from</span>
              <select className="processing-page3-select1">
                <option value="Nguyen">Today at 14:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="processing-page3-container06">
              <span className="processing-page3-text04">
                <span>Parking until</span>
                <br></br>
              </span>
              <select className="processing-page3-select2">
                <option value="Nguyen">Today at 16:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <button className="processing-page3-button button">
              <span className="processing-page3-text07">
                <span>Search</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="processing-page3-container07">
            <div className="processing-page3-container08">
              <span className="processing-page3-text10">RMIT University</span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-49he-200h.png"
                className="processing-page3-pasted-image"
              />
              <span className="processing-page3-text11">RESERVABLE</span>
              <div className="processing-page3-container09">
                <div className="processing-page3-container10">
                  <span className="processing-page3-text12">2h</span>
                  <span className="processing-page3-text13">
                    <span className="processing-page3-text14">
                      parking duration
                    </span>
                    <br className="processing-page3-text15"></br>
                  </span>
                </div>
                <div className="processing-page3-container11">
                  <span className="processing-page3-text16">100 000 VND</span>
                  <span className="processing-page3-text17">
                    <span className="processing-page3-text18">parking fee</span>
                    <br className="processing-page3-text19"></br>
                  </span>
                </div>
                <div className="processing-page3-container12">
                  <span className="processing-page3-text20">3 mins</span>
                  <span className="processing-page3-text21">
                    <span className="processing-page3-text22">
                      to destination
                    </span>
                    <br className="processing-page3-text23"></br>
                  </span>
                </div>
              </div>
              <Link href="/parking-process">
                <a className="processing-page3-link button">
                  Reserve for 100 000 VND
                </a>
              </Link>
              <span className="processing-page3-text24">
                <span className="processing-page3-text25">
                  Once you&apos;ve paid
                </span>
                <br></br>
              </span>
              <div className="processing-page3-container13">
                <Link href="/processing-page-1">
                  <a className="processing-page3-link1">
                    <span>Information</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/processing-page-2">
                  <a className="processing-page3-link2">
                    <span>Review</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/processing-page-3">
                  <a className="processing-page3-link3">
                    <span>How to park</span>
                    <br></br>
                  </a>
                </Link>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-4hv-200h.png"
                  className="processing-page3-pasted-image1"
                />
              </div>
              <span className="processing-page3-text33">
                <span>The space owner/car park is notified</span>
                <br></br>
                <span>of your booking. </span>
                <br></br>
              </span>
              <span className="processing-page3-text38">
                <span>Just turn up, park your vehicle and get</span>
                <br></br>
                <span>on with your day!</span>
                <br></br>
              </span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-vcb-200h.png"
                className="processing-page3-pasted-image2"
              />
              <span className="processing-page3-text43">
                <span>You&apos;ll receive directions to the space</span>
                <br></br>
                <span>and information on how to access it.  </span>
                <br></br>
              </span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-qau-200h.png"
                className="processing-page3-pasted-image3"
              />
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-rxkb-200h.png"
                className="processing-page3-pasted-image4"
              />
            </div>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-rvk8-1300w.png"
            />
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      </div>
      <style jsx>
        {`
          .processing-page3-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .processing-page3-container01 {
            top: 149px;
            left: -2px;
            width: 100%;
            height: 850.3200073242188px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .processing-page3-container02 {
            top: 0px;
            left: 1px;
            width: 100%;
            height: 173px;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: flex-start;
            border-color: var(--dl-color-danger-700);
            border-style: dashed;
            border-width: 2px;
            justify-content: flex-end;
          }
          .processing-page3-container03 {
            top: 38px;
            left: 34px;
            width: 447px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .processing-page3-container04 {
            top: -2px;
            flex: 0 0 auto;
            left: -6px;
            width: 333px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            margin-right: 52px;
            justify-content: flex-start;
            background-color: #ededed;
          }
          .processing-page3-text {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page3-select {
            left: -1px;
            width: 312px;
            height: 109px;
            position: absolute;
            margin-top: 0px;
            margin-left: 15px;
            padding-top: 21.5px;
            margin-right: -15px;
            margin-bottom: 0px;
            padding-bottom: 21.5px;
            background-color: transparent;
          }
          .processing-page3-container05 {
            flex: 0 0 auto;
            left: 368px;
            width: 302px;
            bottom: 23px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: #ededed;
          }
          .processing-page3-text03 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page3-select1 {
            left: -1px;
            width: 287px;
            height: 109px;
            position: absolute;
            margin-top: 0px;
            margin-left: 15px;
            padding-top: 21.5px;
            margin-right: -15px;
            margin-bottom: 0px;
            padding-bottom: 21.5px;
            background-color: transparent;
          }
          .processing-page3-container06 {
            flex: 0 0 auto;
            left: 679px;
            width: 302px;
            bottom: 24px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
            background-color: #ededed;
          }
          .processing-page3-text04 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page3-select2 {
            left: -1px;
            width: 287px;
            height: 109px;
            position: absolute;
            margin-top: 0px;
            margin-left: 15px;
            padding-top: 21.5px;
            margin-right: -15px;
            margin-bottom: 0px;
            padding-bottom: 21.5px;
            background-color: transparent;
          }
          .processing-page3-button {
            top: 43px;
            right: 10px;
            width: 191px;
            height: 102px;
            position: absolute;
            padding-top: 43px;
            padding-left: 13px;
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: 13px;
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #004aad;
          }
          .processing-page3-text07 {
            color: #ffffff;
          }
          .processing-page3-container07 {
            top: 170.32000732421875px;
            left: 0px;
            width: 1205px;
            height: 680px;
            display: flex;
            position: absolute;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-style: hidden;
            border-width: 1px;
            justify-content: flex-end;
            background-color: #ededed;
          }
          .processing-page3-container08 {
            flex: 0 0 auto;
            left: 20px;
            width: 491px;
            bottom: 3px;
            height: 644px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: #fdfdfd;
          }
          .processing-page3-text10 {
            top: 33px;
            left: 23px;
            position: absolute;
            font-size: 20px;
          }
          .processing-page3-pasted-image {
            top: 70px;
            left: 22px;
            width: 72px;
            height: 15px;
            position: absolute;
          }
          .processing-page3-text11 {
            top: 95px;
            left: 23px;
            color: #004aad;
            position: absolute;
          }
          .processing-page3-container09 {
            top: 179px;
            flex: 0 0 auto;
            left: 0px;
            width: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: flex-start;
            background-color: #ededed;
          }
          .processing-page3-container10 {
            flex: 0 0 auto;
            width: 156px;
            height: 68px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-style: ridge;
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .processing-page3-text12 {
            top: 22px;
            left: 68px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page3-text13 {
            top: 42px;
            left: 37px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page3-text14 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page3-text15 {
            font-style: normal;
          }
          .processing-page3-container11 {
            flex: 0 0 auto;
            width: 175px;
            height: 66px;
            display: flex;
            position: relative;
            align-items: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            justify-content: center;
            border-top-width: 0px;
            border-left-width: 0px;
            border-bottom-width: 0px;
          }
          .processing-page3-text16 {
            top: 22px;
            left: 36px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page3-text17 {
            color: black;
            right: 56px;
            bottom: 10px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page3-text18 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page3-text19 {
            font-style: normal;
          }
          .processing-page3-container12 {
            flex: 0 0 auto;
            width: 158px;
            height: 88px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .processing-page3-text20 {
            top: 33px;
            left: 55px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page3-text21 {
            top: 53px;
            left: 47px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page3-text22 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page3-text23 {
            font-style: normal;
          }
          .processing-page3-link {
            left: 20px;
            color: #efe5e5;
            width: 437px;
            bottom: 7px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: rgb(0, 74, 173);
          }
          .processing-page3-text24 {
            top: 346px;
            left: 98px;
            position: absolute;
          }
          .processing-page3-text25 {
            font-style: normal;
            font-weight: 700;
          }
          .processing-page3-container13 {
            width: 100%;
            height: 97px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-end;
          }
          .processing-page3-link1 {
            top: 26px;
            left: 46px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page3-link2 {
            top: 28px;
            left: 207px;
            color: #000000;
            position: absolute;
            font-weight: 400;
            text-decoration: none;
          }
          .processing-page3-link3 {
            top: 27px;
            color: #1d51a8;
            right: 47px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }
          .processing-page3-pasted-image1 {
            top: 43px;
            left: 6px;
            width: 474px;
            height: 27px;
            position: absolute;
          }
          .processing-page3-text33 {
            top: 434px;
            left: 98px;
            position: absolute;
          }
          .processing-page3-text38 {
            top: 503px;
            left: 99px;
            position: absolute;
          }
          .processing-page3-pasted-image2 {
            top: 374px;
            left: 25px;
            width: 52px;
            height: 51px;
            position: absolute;
          }
          .processing-page3-text43 {
            top: 378px;
            left: 99px;
            position: absolute;
          }
          .processing-page3-pasted-image3 {
            top: 437px;
            left: 27px;
            width: 46px;
            height: 48px;
            position: absolute;
          }
          .processing-page3-pasted-image4 {
            top: 499px;
            left: 26px;
            width: 60px;
            height: 54px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default ProcessingPage3
