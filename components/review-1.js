import React from 'react'

import PropTypes from 'prop-types'

const Review1 = (props) => {
  return (
    <>
      <section className={`review-1-card ${props.rootClassName} `}>
        <div className="review-1-stars">
          <svg viewBox="0 0 1024 1024" className="review-1-icon">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-1-icon02">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-1-icon04">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-1-icon06">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="review-1-icon08">
            <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
          </svg>
          <svg viewBox="0 0 950.8571428571428 1024" className="review-1-icon10">
            <path d="M677.714 546.857l146.857-142.857-241.143-35.429-17.143-34.286-90.857-184v550.286l33.714 17.714 181.714 96-34.286-202.857-6.857-37.714zM936 397.143l-207.429 202.286 49.143 285.714c4 25.143-5.143 40-22.857 40-6.286 0-14.286-2.286-22.857-6.857l-256.571-134.857-256.571 134.857c-8.571 4.571-16.571 6.857-22.857 6.857-17.714 0-26.857-14.857-22.857-40l49.143-285.714-208-202.286c-24.571-24.571-16.571-48.571 17.714-53.714l286.857-41.714 128.571-260c7.429-15.429 17.714-23.429 28-23.429v0c10.286 0 20 8 28 23.429l128.571 260 286.857 41.714c34.286 5.143 42.286 29.143 17.143 53.714z"></path>
          </svg>
        </div>
        <span className="review-1-text">{props.text}</span>
        <h1 className="review-1-text1">{props.heading}</h1>
      </section>
      <style jsx>
        {`
          .review-1-card {
            gap: var(--dl-space-space-threeunits);
            flex: 1;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            position: relative;
            align-items: flex-start;
            border-radius: 20px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #fdfdfd;
          }
          .review-1-stars {
            gap: 4px;
            top: 50px;
            left: 0px;
            display: flex;
            position: absolute;
            align-items: center;
            justify-content: center;
          }
          .review-1-icon {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-icon02 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-icon04 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-icon06 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-icon08 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-icon10 {
            fill: #ffde6a;
            width: 16px;
            height: 16px;
          }
          .review-1-text {
            top: 45px;
            left: 130px;
            position: absolute;
            font-size: 25px;
          }
          .review-1-text1 {
            top: 10px;
            left: 0px;
            position: absolute;
          }
          .review-1-root-class-name {
            top: 440px;
            left: 10px;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
          }
          .review-1-root-class-name1 {
            top: 440px;
            left: 10px;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
          }
          @media (max-width: 991px) {
            .review-1-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

Review1.defaultProps = {
  rootClassName: '',
  heading: 'RMIT University',
  text: '(10)',
}

Review1.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
}

export default Review1
