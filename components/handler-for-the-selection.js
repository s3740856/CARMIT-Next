import React from 'react'

import PropTypes from 'prop-types'

const HandlerForTheSelection = (props) => {
  return (
    <>
      <div
        className={`handler-for-the-selection-container ${props.rootClassName} `}
      ></div>
      <style jsx>
        {`
          .handler-for-the-selection-container {
            flex: 0 0 auto;
            width: 244px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 90px;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
        `}
      </style>
    </>
  )
}

HandlerForTheSelection.defaultProps = {
  rootClassName: '',
}

HandlerForTheSelection.propTypes = {
  rootClassName: PropTypes.string,
}

export default HandlerForTheSelection
