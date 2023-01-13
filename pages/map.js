import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar from '../components/navbar'

const Map = (props) => {
  return (
    <>
      <div className="map-container">
        <Head>
          <title>Map - CARMIT</title>
          <meta property="og:title" content="Map - CARMIT" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <div className="map-container01">
          <div className="map-container02">
            <div className="map-container03">
              <div className="map-container04">
                <div className="map-container05">
                  <span className="map-text">
                    <span>Parking at</span>
                    <br></br>
                  </span>
                  <select className="map-select">
                    <option value="Nguyen">Nguyen Van Linh,Viet Nam</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="map-container06">
                <span className="map-text03">Parking from</span>
                <select className="map-select1">
                  <option value="Nguyen">Today at 14:00</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <div className="map-container07">
                <span className="map-text04">
                  <span>Parking until</span>
                  <br></br>
                </span>
                <select className="map-select2">
                  <option value="Nguyen">Today at 16:00</option>
                  <option value="Option 2">Option 2</option>
                  <option value="Option 3">Option 3</option>
                </select>
              </div>
              <button className="map-button button">
                <span className="map-text07">
                  <span>Search</span>
                  <br></br>
                </span>
              </button>
            </div>
            <div className="map-container08">
              <div className="map-container09">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="map-image"
                />
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-20cb-200h.png"
                  className="map-pasted-image"
                />
                <span className="map-text10">
                  <span>Residental area Him Lam</span>
                  <br></br>
                </span>
                <span className="map-text13">RESERVABLE</span>
                <span className="map-text14">50 000 VND</span>
                <span className="map-text15">
                  <span className="map-text16">parking fee</span>
                  <br className="map-text17"></br>
                </span>
                <span className="map-text18">
                  <span className="map-text19">to destination</span>
                  <br className="map-text20"></br>
                </span>
                <span className="map-text21">
                  <span>15 mins</span>
                  <br></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-0nx-200h.png"
                  className="map-pasted-image1"
                />
              </div>
              <Link href="/processing-page-1">
                <a className="map-link">
                  <div className="map-container10">
                    <img
                      alt="image"
                      src="https://play.teleporthq.io/static/svg/default-img.svg"
                      className="map-image1"
                    />
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-49he-200h.png"
                      className="map-pasted-image2"
                    />
                    <span className="map-text24">
                      <span>RMIT University</span>
                      <br></br>
                    </span>
                    <span className="map-text27">RESERVABLE</span>
                    <span className="map-text28">
                      <span>3 mins</span>
                      <br></br>
                    </span>
                    <span className="map-text31">100 000 VND</span>
                    <span className="map-text32">
                      <span className="map-text33">parking fee</span>
                      <br className="map-text34"></br>
                    </span>
                    <span className="map-text35">
                      <span className="map-text36">to destination</span>
                      <br className="map-text37"></br>
                    </span>
                    <img
                      alt="pastedImage"
                      src="/playground_assets/pastedimage-wz-200h.png"
                      className="map-pasted-image3"
                    />
                  </div>
                </a>
              </Link>
              <div className="map-container11">
                <img
                  alt="image"
                  src="https://play.teleporthq.io/static/svg/default-img.svg"
                  className="map-image2"
                />
                <span className="map-text38">
                  <span>Ton Duc Thang University</span>
                  <br></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-pb9n-200h.png"
                  className="map-pasted-image4"
                />
                <span className="map-text41">RESERVABLE</span>
                <span className="map-text42">55 000 VND</span>
                <span className="map-text43">
                  <span className="map-text44">parking fee</span>
                  <br className="map-text45"></br>
                </span>
                <span className="map-text46">
                  <span>25 mins</span>
                  <br></br>
                </span>
                <span className="map-text49">
                  <span className="map-text50">to destination</span>
                  <br className="map-text51"></br>
                </span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-rfkw-200h.png"
                  className="map-pasted-image5"
                />
              </div>
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-rvk8-700w.png"
                className="map-pasted-image6"
              />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .map-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .map-container01 {
            top: 149px;
            left: 0px;
            right: 0px;
            width: 1191px;
            height: 850px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .map-container02 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 850px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .map-container03 {
            top: 0px;
            left: 1px;
            width: 100%;
            height: 173px;
            display: flex;
            position: absolute;
            align-self: center;
            align-items: center;
            border-color: var(--dl-color-danger-700);
            border-style: dashed;
            border-width: 2px;
            justify-content: flex-end;
          }
          .map-container04 {
            top: 38px;
            left: 34px;
            width: 447px;
            height: 109px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .map-container05 {
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
          .map-text {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .map-select {
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
          .map-container06 {
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
          .map-text03 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .map-select1 {
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
          .map-container07 {
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
          .map-text04 {
            top: 12px;
            left: 18px;
            position: absolute;
          }
          .map-select2 {
            left: -1px;
            width: 287px;
            height: 109px;
            position: absolute;
            margin-top: 0px;
            margin-left: 15px;
            padding-top: 21.5px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: 0px;
            padding-bottom: 21.5px;
            background-color: transparent;
          }
          .map-button {
            width: 192px;
            height: 102px;
            align-self: center;
            padding-top: 43px;
            padding-left: var(--dl-space-space-unit);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
            background-color: #004aad;
          }
          .map-text07 {
            color: #ffffff;
          }
          .map-container08 {
            top: 170px;
            left: 0px;
            width: 1193px;
            height: 680px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: flex-end;
            background-color: #ededed;
          }
          .map-container09 {
            top: 21px;
            flex: 0 0 auto;
            left: 23px;
            width: 425px;
            height: 156px;
            display: flex;
            position: absolute;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
            background-color: #fdfdfd;
          }
          .map-image {
            width: 158px;
            height: 100%;
            object-fit: cover;
          }
          .map-pasted-image {
            top: 44px;
            left: 169px;
            width: 72px;
            height: 15px;
            position: absolute;
          }
          .map-text10 {
            top: 22px;
            left: 169px;
            position: absolute;
          }
          .map-text13 {
            top: 63px;
            left: 169px;
            color: #004aad;
            position: absolute;
          }
          .map-text14 {
            top: 109px;
            left: 169px;
            color: black;
            position: absolute;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .map-text15 {
            left: 170px;
            color: black;
            bottom: 11px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text16 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .map-text17 {
            font-style: normal;
          }
          .map-text18 {
            color: #a6a6a6;
            right: 20px;
            bottom: 11px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text19 {
            font-weight: 300;
          }
          .map-text20 {
            font-style: normal;
          }
          .map-text21 {
            top: 108px;
            color: black;
            right: 39px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .map-pasted-image1 {
            top: 2px;
            left: 1px;
            width: 155px;
            height: 153px;
            position: absolute;
          }
          .map-link {
            display: contents;
          }
          .map-container10 {
            top: 190px;
            flex: 0 0 auto;
            left: 23px;
            width: 423px;
            height: 157px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
            background-color: #fdfdfd;
          }
          .map-image1 {
            width: 158px;
            height: 100%;
            object-fit: cover;
          }
          .map-pasted-image2 {
            top: 47px;
            left: 168px;
            width: 72px;
            height: 15px;
            position: absolute;
          }
          .map-text24 {
            top: 27px;
            left: 169px;
            position: absolute;
          }
          .map-text27 {
            top: 69px;
            left: 168px;
            color: #004aad;
            position: absolute;
          }
          .map-text28 {
            top: 113px;
            color: black;
            right: 44px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .map-text31 {
            left: 169px;
            color: black;
            bottom: 23px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .map-text32 {
            left: 170px;
            color: black;
            bottom: 8px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text33 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .map-text34 {
            font-style: normal;
          }
          .map-text35 {
            color: black;
            right: 20px;
            bottom: 10px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text36 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .map-text37 {
            font-style: normal;
          }
          .map-pasted-image3 {
            top: 0px;
            left: 0px;
            width: 158px;
            position: absolute;
          }
          .map-container11 {
            top: 361px;
            flex: 0 0 auto;
            left: 20px;
            width: 427px;
            height: 167px;
            display: flex;
            position: absolute;
            align-items: flex-start;
            margin-right: 2px;
            flex-direction: column;
            justify-content: center;
            background-color: #fdfdfd;
          }
          .map-image2 {
            width: 158px;
            height: 100%;
            object-fit: cover;
          }
          .map-text38 {
            top: 31px;
            left: 172px;
            position: absolute;
          }
          .map-pasted-image4 {
            top: 51px;
            left: 171px;
            width: 85px;
            height: 18px;
            position: absolute;
          }
          .map-text41 {
            top: 72px;
            left: 175px;
            color: #004aad;
            position: absolute;
          }
          .map-text42 {
            left: 177px;
            color: black;
            bottom: 24px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
            text-transform: uppercase;
          }
          .map-text43 {
            left: 179px;
            color: black;
            bottom: 9px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text44 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .map-text45 {
            font-style: normal;
          }
          .map-text46 {
            top: 124px;
            color: black;
            right: 34px;
            position: absolute;
            font-style: normal;
            font-weight: 700;
          }
          .map-text49 {
            color: black;
            right: 19px;
            bottom: 11px;
            position: absolute;
            font-size: 12px;
            font-weight: 700;
          }
          .map-text50 {
            color: #a6a6a6;
            font-weight: 300;
          }
          .map-text51 {
            font-style: normal;
          }
          .map-pasted-image5 {
            top: -1px;
            left: 0px;
            width: 157px;
            height: 165px;
            position: absolute;
          }
          .map-pasted-image6 {
            top: 25px;
            right: 9px;
            width: 627px;
            height: 549px;
            position: absolute;
          }
        `}
      </style>
    </>
  )
}

export default Map
