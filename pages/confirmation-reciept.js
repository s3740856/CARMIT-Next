import React from 'react'
import Head from 'next/head'

import Navbar1 from '../components/navbar-1'

const ConfirmationReciept = (props) => {
  return (
    <>
      <div className="confirmation-reciept-container">
        <Head>
          <title>Confirmation-Reciept - CARMIT</title>
          <meta property="og:title" content="Confirmation-Reciept - CARMIT" />
        </Head>
        <Navbar1></Navbar1>
        <div className="confirmation-reciept-hero">
          <div className="confirmation-reciept-container1">
            <h1 className="confirmation-reciept-text">
              Your booking information
            </h1>
            <span className="confirmation-reciept-text01">Arriving on:</span>
            <span className="confirmation-reciept-text02">Today at 14:00</span>
            <span className="confirmation-reciept-text03">Leaving on:</span>
            <span className="confirmation-reciept-text04">Today at 16:00</span>
            <span className="confirmation-reciept-text05">Duration:</span>
            <span className="confirmation-reciept-text06">2 hours</span>
            <h1 className="confirmation-reciept-text07">
              1. Personal Information
            </h1>
            <span className="confirmation-reciept-text08">Cash Payment</span>
            <span className="confirmation-reciept-text09">12345</span>
            <span className="confirmation-reciept-text10">Thu Nguyen</span>
            <span className="confirmation-reciept-text11">
              hellominhthu@gmail.com
            </span>
            <span className="confirmation-reciept-text12">0110000</span>
            <h1 className="confirmation-reciept-text13">
              2. Vehicle License Plate
            </h1>
            <h1 className="confirmation-reciept-text14">
              2. Vehicle License Plate
            </h1>
            <span className="confirmation-reciept-text15">Parking fee:</span>
            <span className="confirmation-reciept-text16">
              Transaction fee:
            </span>
            <span className="confirmation-reciept-text17">100 000 VND</span>
            <span className="confirmation-reciept-text18">10 000 VND</span>
            <span className="confirmation-reciept-text19">110 000 VND</span>
            <h1 className="confirmation-reciept-text20">Final Price</h1>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .confirmation-reciept-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .confirmation-reciept-hero {
            width: 1200px;
            height: 1200px;
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
          .confirmation-reciept-container1 {
            top: 15px;
            left: 200px;
            right: 200px;
            width: 800px;
            height: 1150px;
            display: flex;
            z-index: 100;
            position: absolute;
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
          .confirmation-reciept-text {
            top: 40px;
            left: 0px;
            right: 0px;
            margin: auto;
            position: absolute;
            font-size: 40px;
            text-align: center;
            font-family: Arial;
          }
          .confirmation-reciept-text01 {
            top: 130px;
            left: 100px;
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text02 {
            top: 130px;
            left: 530px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .confirmation-reciept-text03 {
            top: 170px;
            left: 100px;
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text04 {
            top: 170px;
            left: 530px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .confirmation-reciept-text05 {
            top: 210px;
            left: 100px;
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text06 {
            top: 210px;
            left: 530px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            text-align: left;
            font-weight: 700;
            text-decoration: underline;
          }
          .confirmation-reciept-text07 {
            top: 320px;
            left: 100px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .confirmation-reciept-text08 {
            top: 840px;
            left: 100px;
            color: var(--dl-color-gray-500);
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text09 {
            top: 650px;
            left: 100px;
            color: var(--dl-color-gray-500);
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text10 {
            top: 400px;
            left: 100px;
            color: var(--dl-color-gray-500);
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text11 {
            top: 430px;
            left: 100px;
            color: var(--dl-color-gray-500);
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text12 {
            top: 460px;
            left: 100px;
            color: var(--dl-color-gray-500);
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text13 {
            top: 760px;
            left: 100px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .confirmation-reciept-text14 {
            top: 570px;
            left: 100px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-family: Arial;
            font-weight: 700;
          }
          .confirmation-reciept-text15 {
            top: 950px;
            left: 40px;
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text16 {
            top: 990px;
            left: 40px;
            position: absolute;
            font-size: 20px;
          }
          .confirmation-reciept-text17 {
            top: 950px;
            right: 45px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .confirmation-reciept-text18 {
            top: 990px;
            right: 45px;
            position: absolute;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            text-decoration: underline;
          }
          .confirmation-reciept-text19 {
            top: 1070px;
            right: 45px;
            bottom: 601px;
            position: absolute;
            font-size: 25px;
            font-style: normal;
            font-weight: 700;
          }
          .confirmation-reciept-text20 {
            top: 1070px;
            left: 40px;
            height: 40px;
            position: absolute;
            font-size: 30px;
            font-weight: 700;
          }
          @media (max-width: 991px) {
            .confirmation-reciept-hero {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .confirmation-reciept-hero {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .confirmation-reciept-hero {
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

export default ConfirmationReciept
