import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ title }) => (
  <Wrapper>
    <Heading>{title}</Heading>
  </Wrapper>
)

export default ArticleTitle