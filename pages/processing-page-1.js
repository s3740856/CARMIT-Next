import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const ProcessingPage1 = (props) => {
  return (
    <>
      <div className="processing-page1-container">
        <Head>
          <title>Processing-Page-1 - CARMIT</title>
          <meta property="og:title" content="Processing-Page-1 - CARMIT" />
        </Head>
        <div className="processing-page1-container01">
          <div className="processing-page1-container02">
            <div className="processing-page1-container03">
              <div className="processing-page1-container04">
                <span className="processing-page1-text">
                  <span>Parking at</span>
                  <br></br>
                </span>
                <select className="processing-page1-select">
                  <option value="Nguyen">Nguyen Van Linh,Viet Nam</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
            </div>
            <div className="processing-page1-container05">
              <span className="processing-page1-text03">Parking from</span>
              <select className="processing-page1-select1">
                <option value="Nguyen">Today at 14:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <div className="processing-page1-container06">
              <span className="processing-page1-text04">
                <span>Parking until</span>
                <br></br>
              </span>
              <select className="processing-page1-select2">
                <option value="Nguyen">Today at 16:00</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
            <button className="processing-page1-button button">
              <span className="processing-page1-text07">
                <span>Search</span>
                <br></br>
              </span>
            </button>
          </div>
          <div className="processing-page1-container07">
            <div className="processing-page1-container08">
              <span className="processing-page1-text10">RMIT University</span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-49he-200h.png"
                className="processing-page1-pasted-image"
              />
              <span className="processing-page1-text11">RESERVABLE</span>
              <div className="processing-page1-container09">
                <div className="processing-page1-container10">
                  <span className="processing-page1-text12">2h</span>
                  <span className="processing-page1-text13">
                    <span className="processing-page1-text14">
                      parking duration
                    </span>
                    <br className="processing-page1-text15"></br>
                  </span>
                </div>
                <div className="processing-page1-container11">
                  <span className="processing-page1-text16">100 000 VND</span>
                  <span className="processing-page1-text17">
                    <span className="processing-page1-text18">parking fee</span>
                    <br className="processing-page1-text19"></br>
                  </span>
                </div>
                <div className="processing-page1-container12">
                  <span className="processing-page1-text20">3 mins</span>
                  <span className="processing-page1-text21">
                    <span className="processing-page1-text22">
                      to destination
                    </span>
                    <br className="processing-page1-text23"></br>
                  </span>
                </div>
              </div>
              <div className="processing-page1-container13">
                <Link href="/processing-page-1">
                  <a className="processing-page1-link">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-bmox-200h.png"
                      className="processing-page1-pasted-image1"
                    />
                  </a>
                </Link>
                <Link href="/processing-page-2">
                  <a className="processing-page1-link1">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-nw9a-200h.png"
                      className="processing-page1-pasted-image2"
                    />
                  </a>
                </Link>
                <Link href="/processing-page-3">
                  <a className="processing-page1-link2">
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-dbvu-200h.png"
                      className="processing-page1-pasted-image3"
                    />
                  </a>
                </Link>
              </div>
              <Link href="/parking-process">
                <a className="processing-page1-link3 button">
                  Reserve for 100 000 VND
                </a>
              </Link>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-qhib-200h.png"
                className="processing-page1-pasted-image4"
              />
              <span className="processing-page1-text24">
                <span>This space is big enough to fit vans and minibuses.</span>
                <br></br>
              </span>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-wnbih-200h.png"
                className="processing-page1-pasted-image5"
              />
            </div>
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-5v2j-200h.png"
              className="processing-page1-pasted-image6"
            />
            <img
              alt="pastedImage"
              src="/playground_assets/pastedimage-rvk8-1300w.png"
            />
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      </div>
      <style jsx>
        {`
          .processing-page1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .processing-page1-container01 {
            top: 149px;
            left: -2px;
            width: 100%;
            height: 850.3200073242188px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: column;
          }
          .processing-page1-container02 {
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
          .processing-page1-container03 {
            top: 38px;
            left: 34px;
            width: 447px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .processing-page1-container04 {
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
          .processing-page1-text {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page1-select {
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
          .processing-page1-container05 {
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
          .processing-page1-text03 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page1-select1 {
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
          .processing-page1-container06 {
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
          .processing-page1-text04 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .processing-page1-select2 {
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
          .processing-page1-button {
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
          .processing-page1-text07 {
            color: #ffffff;
          }
          .processing-page1-container07 {
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
          .processing-page1-container08 {
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
          .processing-page1-text10 {
            top: 33px;
            left: 23px;
            position: absolute;
            font-size: 20px;
          }
          .processing-page1-pasted-image {
            top: 70px;
            left: 22px;
            width: 72px;
            height: 15px;
            position: absolute;
          }
          .processing-page1-text11 {
            top: 95px;
            left: 23px;
            color: #004aad;
            position: absolute;
          }
          .processing-page1-container09 {
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
          .processing-page1-container10 {
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
          .processing-page1-text12 {
            top: 22px;
            left: 68px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page1-text13 {
            top: 42px;
            left: 37px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page1-text14 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page1-text15 {
            font-style: normal;
          }
          .processing-page1-container11 {
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
          .processing-page1-text16 {
            top: 22px;
            left: 36px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page1-text17 {
            color: black;
            right: 56px;
            bottom: 10px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page1-text18 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page1-text19 {
            font-style: normal;
          }
          .processing-page1-container12 {
            flex: 0 0 auto;
            width: 158px;
            height: 88px;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: center;
          }
          .processing-page1-text20 {
            top: 33px;
            left: 55px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .processing-page1-text21 {
            top: 53px;
            left: 47px;
            color: black;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .processing-page1-text22 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .processing-page1-text23 {
            font-style: normal;
          }
          .processing-page1-container13 {
            width: 100%;
            height: 97px;
            display: flex;
            position: relative;
            align-items: center;
            justify-content: flex-start;
          }
          .processing-page1-link {
            display: contents;
          }
          .processing-page1-pasted-image1 {
            top: 23px;
            left: 25px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page1-link1 {
            display: contents;
          }
          .processing-page1-pasted-image2 {
            top: 23px;
            left: 216px;
            width: 59px;
            height: 21px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page1-link2 {
            display: contents;
          }
          .processing-page1-pasted-image3 {
            top: 30px;
            right: 52px;
            width: 78px;
            height: 19px;
            position: absolute;
            text-decoration: none;
          }
          .processing-page1-link3 {
            left: 20px;
            color: #efe5e5;
            width: 437px;
            bottom: 7px;
            position: absolute;
            border-radius: var(--dl-radius-radius-radius8);
            text-decoration: none;
            background-color: rgb(0, 74, 173);
          }
          .processing-page1-pasted-image4 {
            top: 426px;
            right: 28px;
            width: 229px;
            height: 132px;
            position: absolute;
          }
          .processing-page1-text24 {
            top: 376px;
            left: 22px;
            position: absolute;
          }
          .processing-page1-pasted-image5 {
            left: 15px;
            width: 214px;
            bottom: 85px;
            height: 133px;
            position: absolute;
          }
          .processing-page1-pasted-image6 {
            top: 352px;
            left: 16px;
            width: 454px;
            height: 25px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default ProcessingPage1
