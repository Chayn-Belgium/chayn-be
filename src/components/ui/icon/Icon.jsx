import React from "react"

import { IconContainer } from "./style"

import facebookIconPath from "../../../assets/icons/facebook.svg"
import instagramIconPath from "../../../assets/icons/instagram.svg"
import mailIconPath from "../../../assets/icons/mail.svg"

const getIconPath = name =>
  ({
    facebook: facebookIconPath,
    instagram: instagramIconPath,
    mail: mailIconPath,
  }[name])

const Icon = ({ name }) => {
  return (
    <IconContainer>
      <img src={getIconPath(name)} alt={`${name}-icon`} />
    </IconContainer>
  )
}

export default Icon

// todo
/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
