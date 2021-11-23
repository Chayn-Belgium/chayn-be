import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ isFull, title }) => (
  <Wrapper isFull={isFull}>
    <Heading>{title}</Heading>
  </Wrapper>
)

export default ArticleTitle
