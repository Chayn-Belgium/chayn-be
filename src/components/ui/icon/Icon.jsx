import React from "react"

import { IconContainer } from "./style"

const Icon = ({ name }) => {
  return (
    <IconContainer>
      <img
        src={require(`../../../assets/icons/${name}.svg`)}
        alt={`${name}-icon`}
      />
    </IconContainer>
  )
}

export default Icon

// todo
/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */
