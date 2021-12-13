import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const GuideTitle = ({ title, isFull }) => (
  <Wrapper isFull={isFull}>
    <Heading size="l">{title}</Heading>
  </Wrapper>
)

GuideTitle.defaultProps = {
  isFull: false,
}

export default GuideTitle
