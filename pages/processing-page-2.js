import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const ProcessingPage2 = (props) => {
  return (
    <>
      <div className="processing-page2-container">
        <Head>
          <title>Processing-Page-2 - CARMIT</title>
          <meta property="og:title" content="Processing-Page-2 - CARMIT" />
        </Head>
        <div className="processing-page2-container01">
          <div className="processing-page2-container02">
            <div className="processing-page2-container03">
              <div className="processing-page2-container04">
                <span className="processing-page2-text">
                  <span>Parking at</span>
                  <br></br>
                </span>
                <select className="processing-page2-select">
                  <option value="Nguyen">Nguyen Van Linh,Viet Nam</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="processing-page2-container05">
              <span className="processing-page2-text03">Parking from</span>
              <select className="processing-page2-select1">
                <option value="Nguyen">Today at 14:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="processing-page2-container06">
              <span className="processing-page2-text04">
                <span>Parking until</span>
                <br></br>
              </span>
              <select className="processing-page2-select2">
                <option value="Nguyen">Today at 16:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <button className="processing-page2-button button">
              <span className="processing-page2-text07">
                <span>Search</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="processing-page2-container07">
            <div className="processing-page2-container08">
              <span className="processing-page2-text10">RMIT University</span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-49he-200h.png"
                className="processing-page2-pasted-image"
              />
              <span className="processing-page2-text11">RESERVABLE</span>
              <div className="processing-page2-container09">
                <div className="processing-page2-container10">
                  <span className="processing-page2-text12">2h</span>
                  <span className="processing-page2-text13">
                    <span className="processing-page2-text14">
                      parking duration
                    </span>
                    <br className="processing-page2-text15"></br>
                  </span>
                </div>
                <div className="processing-page2-container11">
                  <span className="processing-page2-text16">100 000 VND</span>
                  <span className="processing-page2-text17">
                    <span className="processing-page2-text18">parking fee</span>
                    <br className="processing-page2-text19"></br>
                  </span>
                </div>
                <div className="processing-page2-container12">
                  <span className="processing-page2-text20">3 mins</span>
                  <span className="processing-page2-text21">
                    <span className="processing-page2-text22">
                      to destination
                    </span>
                    <br className="processing-page2-text23"></br>
                  </span>
                </div>
              </div>
              <Link href="/confirmation-reciept">
                <a className="processing-page2-link button">
                  Reserve for 100 000 VND
                </a>
              </Link>
              <span className="processing-page2-text24">
                <span className="processing-page2-text25">The Khoi</span>
                <br></br>
              </span>
              <div className="processing-page2-container13">
                <Link href="/processing-page-1">
                  <a className="processing-page2-link1">
                    <span>Information</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/processing-page-2">
                  <a className="processing-page2-link2">
                    <span>Review</span>
                    <br></br>
                  </a>
                </Link>
                <Link href="/processing-page-3">
                  <a className="processing-page2-link3">
                    <span>How to park</span>
                    <br></br>
                  </a>
                </Link>
                <img
                  alt="pastedImage"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/a1c6b26f-a581-4312-988d-02a47e3c3fee/775f5b6d-f47f-45f9-9607-963f48ac2297?org_if_sml=1369"
                  className="processing-page2-pasted-image1"
                />
              </div>
              <span className="processing-page2-text33">
                5 stars Highly recommended
              </span>
              <span className="processing-page2-text34">1st January 2023</span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-q7s-200h.png"
                className="processing-page2-pasted-image2"
              />
            </div>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-rvk8-1300w.png"
            />
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      </div>
      <style jsx>
        {`
          .processing-page2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .processing-page2-container01 {
            top: 149px;
            left: -2px;
            width: 100%;
            height: 850.3200073242188px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .processing-page2-container02 {
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
          .processing-page2-container03 {
            top: 38px;
            left: 34px;
            width: 447px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .processing-page2-container04 {
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
          .processing-page2-text {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page2-select {
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
          .processing-page2-container05 {
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
          .processing-page2-text03 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page2-select1 {
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
          .processing-page2-container06 {
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
          .processing-page2-text04 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page2-select2 {
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
          .processing-page2-button {
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
          .processing-page2-text07 {
            color: #ffffff;
          }
          .processing-page2-container07 {
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
          .processing-page2-container08 {
            flex: 0 0 auto;
            left: 15px;
            width: 491px;
            bottom: 4px;
            height: 644px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: #fdfdfd;
          }
          .processing-page2-text10 {
            top: 33px;
            left: 23px;
            position: absolute;
            font-size: 20px;
          }
          .processing-page2-pasted-image {
            top: 70px;
            left: 22px;
            width: 72px;
            height: 15px;
            position: absolute;
          }
          .processing-page2-text11 {
            top: 95px;
            left: 23px;
            color: #004aad;
            position: absolute;
          }
          .processing-page2-container09 {
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
          .processing-page2-container10 {
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
          .processing-page2-text12 {
            top: 22px;
            left: 68px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page2-text13 {
            top: 42px;
            left: 37px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page2-text14 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page2-text15 {
            font-style: normal;
          }
          .processing-page2-container11 {
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
          .processing-page2-text16 {
            top: 22px;
            left: 36px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page2-text17 {
            color: black;
            right: 56px;
            bottom: 10px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page2-text18 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page2-text19 {
            font-style: normal;
          }
          .processing-page2-container12 {
            flex: 0 0 auto;
            width: 158px;
            height: 88px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .processing-page2-text20 {
            top: 33px;
            left: 55px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page2-text21 {
            top: 53px;
            left: 47px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page2-text22 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page2-text23 {
            font-style: normal;
          }
          .processing-page2-link {
            left: 20px;
            color: #efe5e5;
            width: 437px;
            bottom: 7px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: rgb(0, 74, 173);
          }
          .processing-page2-text24 {
            top: 363px;
            left: 17px;
            position: absolute;
          }
          .processing-page2-text25 {
            font-style: normal;
            font-weight: 700;
          }
          .processing-page2-container13 {
            width: 100%;
            height: 97px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-end;
          }
          .processing-page2-link1 {
            top: 26px;
            left: 46px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page2-link2 {
            top: 28px;
            left: 207px;
            color: #004aad;
            position: absolute;
            font-style: normal;
            font-weight: 700;
            text-decoration: none;
          }
          .processing-page2-link3 {
            top: 27px;
            right: 47px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page2-pasted-image1 {
            left: 1px;
            bottom: 14px;
            position: absolute;
          }
          .processing-page2-text33 {
            top: 408px;
            left: 20px;
            position: absolute;
          }
          .processing-page2-text34 {
            top: 365px;
            left: 110px;
            color: #b0a6a6;
            position: absolute;
            font-size: 13px;
          }
          .processing-page2-pasted-image2 {
            top: 383px;
            left: 11px;
            width: 70px;
            height: 20px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default ProcessingPage2
