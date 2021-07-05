import React from "react"

import { P } from "./style"
import { Wrapper } from "../style"

const ArticleText = ({ text }) => (
  <Wrapper>
    <P dangerouslySetInnerHTML={{ __html: text }} />
  </Wrapper>
)

export default ArticleText
