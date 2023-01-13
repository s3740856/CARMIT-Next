import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navbar1 from '../components/navbar-1'
import Review1 from '../components/review-1'

const ParkingProcess = (props) => {
  return (
    <>
      <div className="parking-process-container">
        <Head>
          <title>Parking-process - CARMIT</title>
          <meta property="og:title" content="Parking-process - CARMIT" />
        </Head>
        <Navbar1></Navbar1>
        <div className="parking-process-hero">
          <div className="parking-process-container1">
            <h1 className="parking-process-text">
              Confirm your booking and pay
            </h1>
            <span className="parking-process-text01">Arriving on:</span>
            <span className="parking-process-text02">Today at 14:00</span>
            <span className="parking-process-text03">Leaving on:</span>
            <span className="parking-process-text04">Today at 16:00</span>
            <span className="parking-process-text05">Duration:</span>
            <span className="parking-process-text06">2 hours</span>
            <input
              type="text"
              required
              placeholder="Enter your first name"
              className="parking-process-textinput input"
            />
            <input
              type="tel"
              required
              placeholder="Enter your phone number"
              className="parking-process-textinput1 input"
            />
            <input
              type="password"
              required
              maxlength="8"
              placeholder="Enter your phone number"
              autoComplete="on"
              className="parking-process-textinput2 input"
            />
            <input
              type="text"
              required
              placeholder="Enter your last name"
              className="parking-process-textinput3 input"
            />
            <h1 className="parking-process-text07">First name</h1>
            <h1 className="parking-process-text08">Phone number</h1>
            <h1 className="parking-process-text09">Last name</h1>
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="parking-process-textinput4 input"
            />
            <input
              type="text"
              required
              placeholder="Enter your License Plate"
              className="parking-process-textinput5 input"
            />
            <input
              type="text"
              required
              placeholder="Enter your card name"
              className="parking-process-textinput6 input"
            />
            <h1 className="parking-process-text10">
              <span>
                Email Address
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="parking-process-text12">
                (to receive your booking detail)
              </span>
            </h1>
            <h1 className="parking-process-text13">Add License Plate Number</h1>
            <h1 className="parking-process-text14">
              <span>
                Password
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="parking-process-text16">
                (Must be at least 8 characters)
              </span>
            </h1>
            <h1 className="parking-process-text17">1. Personal Information</h1>
            <h1 className="parking-process-text18">2. Vehicle License Plate</h1>
            <h1 className="parking-process-text19">3. Payment</h1>
            <Link href="/confirmation-reciept">
              <a className="parking-process-link button">
                110.000 VND - Pay now and reserve
              </a>
            </Link>
            <h1 className="parking-process-text20">Cash Payment</h1>
            <input
              type="checkbox"
              id="Card Payment"
              className="parking-process-checkbox"
            />
            <input
              type="checkbox"
              id="Card Payment"
              checked
              required
              className="parking-process-checkbox1"
            />
            <h1 className="parking-process-text21">Card Payment</h1>
            <li className="parking-process-li list-item">
              <span className="parking-process-text22">
                <span>
                  Card
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>Holder</span>
                <span> name</span>
              </span>
            </li>
            <input
              type="text"
              required
              placeholder="Enter your card number"
              className="parking-process-textinput7 input"
            />
            <input
              type="text"
              required
              placeholder="Enter your card CVV"
              className="parking-process-textinput8 input"
            />
            <li className="parking-process-li1 list-item">
              <span className="parking-process-text26">Card number</span>
            </li>
            <li className="parking-process-li2 list-item">
              <span className="parking-process-text27">CCV</span>
            </li>
          </div>
          <div className="parking-process-container2">
            <img
              alt="image"
              src="/playground_assets/car_parking_bundoora-400h.jpg"
              className="parking-process-image"
            />
            <Review1 rootClassName="review1-root-class-name"></Review1>
            <span className="parking-process-text28">Parking fee:</span>
            <span className="parking-process-text29">Transaction fee:</span>
            <span className="parking-process-text30">100 000 VND</span>
            <span className="parking-process-text31">110 000 VND</span>
            <span className="parking-process-text32">10 000 VND</span>
            <h1 className="parking-process-text33">
              Space verified by CARMIT Team
            </h1>
            <h1 className="parking-process-text34">
              Easy extend available after booking
            </h1>
            <h1 className="parking-process-text35">
              Instruction shared after you book
            </h1>
            <h1 className="parking-process-text36">Final Price</h1>
            <svg viewBox="0 0 1024 1024" className="parking-process-icon">
              <path d="M672 192l-320-128-352 128v768l352-128 320 128 352-128v-768l-352 128zM384 145.73l256 102.4v630.138l-256-102.398v-630.14zM64 236.828l256-93.090v631.8l-256 93.088v-631.798zM960 787.172l-256 93.092v-631.8l256-93.090v631.798z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="parking-process-icon2">
              <path d="M534 298v224l192 114-32 54-224-136v-256h64zM512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125z"></path>
            </svg>
            <svg viewBox="0 0 1024 1024" className="parking-process-icon4">
              <path d="M512 890.112c-50.517-28.672-188.587-114.987-258.133-236.757-3.371-5.888-6.528-11.776-9.515-17.792-19.456-38.869-31.019-80.128-31.019-123.563v-269.099l298.667-112 298.667 112v269.099c0 43.435-11.563 84.693-30.976 123.605-2.987 5.973-6.187 11.904-9.515 17.792-69.589 121.771-207.659 208.043-258.133 236.757zM531.072 976.811c0 0 212.864-105.6 313.173-281.131 4.096-7.168 8.021-14.507 11.776-21.973 24.235-48.427 39.979-102.741 39.979-161.707v-298.667c0-18.176-11.392-33.707-27.691-39.936l-341.333-128c-10.069-3.797-20.693-3.499-29.952 0l-341.333 128c-17.024 6.357-27.563 22.485-27.691 39.936v298.667c0 58.965 15.744 113.28 40.021 161.749 3.712 7.467 7.637 14.763 11.776 21.973 100.309 175.531 313.173 281.131 313.173 281.131 12.459 6.229 26.453 5.803 38.144 0z"></path>
            </svg>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .parking-process-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: column;
            background-color: #d9d9d9;
          }
          .parking-process-hero {
            width: 1200px;
            height: 1748px;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            max-width: var(--dl-size-size-maxwidth);
            min-height: 80vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
            flex-direction: row;
            justify-content: center;
            background-color: #d9d9d9;
          }
          .parking-process-container1 {
            top: 15px;
            left: 10px;
            width: 600px;
            height: 1688px;
            display: flex;
            z-index: 100;
            position: absolute;
            transition: 0.3s;
            align-items: flex-start;
            border-color: #ffffff;
            border-style: solid;
            border-width: 5px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: flex-end;
            background-color: #ffffff;
            border-top-left-radius: var(--dl-radius-radius-radius8);
            border-top-right-radius: var(--dl-radius-radius-radius8);
            border-bottom-left-radius: var(--dl-radius-radius-radius8);
            border-bottom-right-radius: var(--dl-radius-radius-radius8);
          }

          .parking-process-text {
            top: 20px;
            left: 10px;
            position: absolute;
            font-size: 25px;
            font-family: Arial;
          }
          .parking-process-text01 {
            top: 70px;
            left: 10px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text02 {
            top: 70px;
            left: 380px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .parking-process-text03 {
            top: 110px;
            left: 10px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text04 {
            top: 110px;
            left: 380px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .parking-process-text05 {
            top: 150px;
            left: 10px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text06 {
            top: 150px;
            left: 380px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            text-decoration: underline;
          }
          .parking-process-textinput {
            top: 310px;
            left: 10px;
            color: var(--dl-color-gray-black);
            width: 247px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput1 {
            top: 550px;
            left: 10px;
            width: 568px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput2 {
            top: 670px;
            left: 10px;
            width: 568px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput3 {
            top: 310px;
            left: 330px;
            width: 247px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-text07 {
            top: 280px;
            left: 10px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text08 {
            top: 520px;
            left: 10px;
            color: rgb(0, 0, 0);
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text09 {
            top: 280px;
            left: 330px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-textinput4 {
            top: 430px;
            left: 10px;
            color: var(--dl-color-gray-black);
            width: 568px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput5 {
            top: 1000px;
            left: 10px;
            color: var(--dl-color-gray-black);
            right: 13px;
            width: 568px;
            height: 54px;
            position: absolute;
            font-size: 20px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput6 {
            left: 260px;
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-xxlarge);
            bottom: 230px;
            height: var(--dl-size-size-small);
            position: absolute;
            font-size: 17px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-text10 {
            top: 400px;
            left: 10px;
            color: rgb(0, 0, 0);
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text12 {
            color: #c3c0c0;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-process-text13 {
            top: 970px;
            left: 10px;
            color: rgb(0, 0, 0);
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text14 {
            top: 640px;
            left: 10px;
            color: rgb(0, 0, 0);
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text16 {
            color: #c3c0c0;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
          }
          .parking-process-text17 {
            top: 240px;
            left: 10px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .parking-process-text18 {
            top: 930px;
            left: 10px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .parking-process-text19 {
            top: 1260px;
            left: 10px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .parking-process-link {
            left: 10px;
            color: rgb(249, 248, 248);
            width: 567px;
            bottom: 20px;
            position: absolute;
            font-size: 25px;
            text-decoration: none;
            background-color: rgb(13, 48, 230);
          }
          .parking-process-text20 {
            top: 1323px;
            left: 70px;
            position: absolute;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
          .parking-process-checkbox {
            top: 1376px;
            flex: 1;
            left: 30px;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            position: absolute;
            min-width: auto;
          }
          .parking-process-checkbox1 {
            top: 1324px;
            flex: 1;
            left: 28px;
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            position: absolute;
            min-width: auto;
          }
          .parking-process-text21 {
            top: 1374px;
            left: 70px;
            position: absolute;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
          .parking-process-li {
            left: 70px;
            bottom: 243px;
            position: absolute;
          }
          .parking-process-text22 {
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
          }
          .parking-process-textinput7 {
            left: 260px;
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-xxlarge);
            bottom: 170px;
            height: var(--dl-size-size-small);
            position: absolute;
            font-size: 17px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-textinput8 {
            left: 260px;
            color: var(--dl-color-gray-black);
            width: var(--dl-size-size-xxlarge);
            bottom: 110px;
            height: var(--dl-size-size-small);
            position: absolute;
            font-size: 17px;
            border-color: #dedcdc;
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
          }
          .parking-process-li1 {
            left: 70px;
            bottom: 183px;
            position: absolute;
          }
          .parking-process-text26 {
            font-size: 17px;
          }
          .parking-process-li2 {
            left: 70px;
            bottom: 123px;
            position: absolute;
          }
          .parking-process-text27 {
            font-size: 17px;
          }
          .parking-process-container2 {
            top: 15px;
            left: 620px;
            right: -7px;
            width: 570px;
            height: 940px;
            display: flex;
            position: absolute;
            align-items: flex-end;
            border-radius: var(--dl-radius-radius-radius8);
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .parking-process-image {
            top: 20px;
            left: 10px;
            right: 10px;
            width: 550px;
            height: 400px;
            margin: auto;
            position: absolute;
            object-fit: cover;
          }
          .parking-process-text28 {
            top: 560px;
            left: 30px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text29 {
            top: 600px;
            left: 30px;
            position: absolute;
            font-size: 20px;
          }
          .parking-process-text30 {
            top: 560px;
            right: 45px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .parking-process-text31 {
            top: 680px;
            right: 45px;
            bottom: 41px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
          }
          .parking-process-text32 {
            top: 600px;
            right: 45px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .parking-process-text33 {
            top: 840px;
            left: 80px;
            bottom: 38px;
            height: 40px;
            position: absolute;
            font-size: 20px;
            font-weight: 700;
          }
          .parking-process-text34 {
            top: 800px;
            left: 80px;
            bottom: 38px;
            height: 40px;
            position: absolute;
            font-size: 20px;
            font-weight: 700;
          }
          .parking-process-text35 {
            top: 760px;
            left: 80px;
            bottom: 38px;
            height: 40px;
            position: absolute;
            font-size: 20px;
            font-weight: 700;
          }
          .parking-process-text36 {
            top: 680px;
            left: 30px;
            bottom: 47px;
            height: 40px;
            position: absolute;
            font-size: 30px;
            font-weight: 700;
          }
          .parking-process-icon {
            top: 760px;
            left: 30px;
            width: 24px;
            bottom: 0px;
            height: 24px;
            position: absolute;
          }
          .parking-process-icon2 {
            top: 800px;
            left: 30px;
            width: 24px;
            bottom: 0px;
            height: 24px;
            position: absolute;
          }
          .parking-process-icon4 {
            top: 840px;
            left: 30px;
            width: 24px;
            bottom: 0px;
            height: 24px;
            position: absolute;
          }
          @media (max-width: 991px) {
            .parking-process-hero {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .parking-process-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .parking-process-hero {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default ParkingProcess
