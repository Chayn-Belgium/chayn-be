import React from "react"

import { P } from "./style"
import { COLOR } from "../../../utils/constants"

const PEl = ({ children, ...props }) => {
  return <P {...props}>{children}</P>
}

PEl.defaultProps = {
  color: COLOR.CAPE_COD,
  size: "m",
}

export default PEl
