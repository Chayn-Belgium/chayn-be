import React from "react"
import Img from "gatsby-image/withIEPolyfill"
import BackgroundImg from "gatsby-background-image"

const Image = ({ picture, alt, objectFit, svg, isBackground, children }) => {
  if (typeof picture === "string") {
    return <img src={require(`../../../assets/images/${picture}`)} alt={alt} />
  }

  if (svg) {
    return <img src={svg} alt={alt} />
  }

  if (picture) {
    return isBackground ? (
      <BackgroundImg
        alt={alt}
        fixed={picture.fixed || undefined}
        fluid={picture.fluid || undefined}
        objectFit={objectFit}
        style={{ width: "100%", height: "100%" }}
        children={children}
      />
    ) : (
      <Img
        alt={alt}
        fixed={picture.fixed || undefined}
        fluid={picture.fluid || undefined}
        objectFit={objectFit}
        style={{ width: "100%", height: "100%" }}
      />
    )
  }

  return null
}

Image.defaultProps = {
  alt: "",
  objectFit: "cover",
  isBackground: false,
}

export default Image
