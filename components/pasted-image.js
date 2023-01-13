import React from 'react'

import PropTypes from 'prop-types'

const PastedImage = (props) => {
  return (
    <>
      <div className={`pasted-image-container ${props.rootClassName} `}>
        <img alt={props.pastedImage_alt} src={props.pastedImage_src} />
      </div>
      <style jsx>
        {`
          .pasted-image-container {
            display: flex;
            position: relative;
          }
        `}
      </style>
    </>
  )
}

PastedImage.defaultProps = {
  rootClassName: '',
  pastedImage_src: '/playground_assets/pastedimage-gw77-200h.png',
  pastedImage_alt: 'pastedImage',
}

PastedImage.propTypes = {
  rootClassName: PropTypes.string,
  pastedImage_src: PropTypes.string,
  pastedImage_alt: PropTypes.string,
}

export default PastedImage
