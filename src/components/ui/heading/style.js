import React from "react"
import styled from "styled-components"

import { FONT } from "../../../utils/constants"
import { getHeadingSize } from "../../../styles"

export const Heading = styled(({ level, size, color, font, ...props }) => {
  const El = `h${level}`

  return <El {...props} />
})`
  font-size: ${({ size }) => getHeadingSize(size)};
  margin-bottom: 20px;
  font-family: ${({ font }) => font || FONT.ORDNER};
  color: ${({ color }) => color};
  white-space: pre-wrap;
`
