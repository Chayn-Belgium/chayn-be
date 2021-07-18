import PropTypes from "prop-types"

export const fluidPicCustomPropType = PropTypes.shape({
  fluid: PropTypes.shape({
    aspectRatio: PropTypes.number,
    base64: PropTypes.string,
    originalName: PropTypes.string,
    sizes: PropTypes.string,
    src: PropTypes.string,
    srcSet: PropTypes.string,
  }),
})
