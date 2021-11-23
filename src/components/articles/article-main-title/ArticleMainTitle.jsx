import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ title, isFull }) => (
  <Wrapper isFull={isFull}>
    <Heading size="l">{title}</Heading>
  </Wrapper>
)

ArticleTitle.defaultProps = {
  isFull: false,
}

export default ArticleTitle
