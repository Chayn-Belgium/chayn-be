import React from "react"

import { Heading } from "./style"
import { COLOR } from "../../../utils/constants"

const HeadingEl = ({ children, ...props }) => {
  return <Heading {...props}>{children}</Heading>
}

HeadingEl.defaultProps = {
  level: 1,
  size: "xl",
  color: COLOR.CAPE_COD,
}

export default HeadingEl
