import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ isFull, title, level }) => (
  <Wrapper isFull={isFull}>
    <Heading as={`h${level || 2}`} level={level}>
      {title}
    </Heading>
  </Wrapper>
)

export default ArticleTitle
