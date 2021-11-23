import React from "react"

import { Divider, Dot } from "./style"
import { Wrapper } from "../style"

const ArticleText = ({ text }) => (
  <Wrapper>
    <Divider>
      <Dot />
      <Dot />
      <Dot />
    </Divider>
  </Wrapper>
)

export default ArticleText
