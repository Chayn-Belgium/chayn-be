import React from "react"

import { P } from "./style"
import { Wrapper } from "../style"

const ArticleText = ({ isFull, text }) => (
  <Wrapper isFull={isFull}>
    <P dangerouslySetInnerHTML={{ __html: text }} />
  </Wrapper>
)

export default ArticleText
