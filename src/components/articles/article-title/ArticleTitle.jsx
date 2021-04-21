import React from "react"

import { Heading } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ title, level }) => (
  <Wrapper>
    <Heading level={level} size="s">
      {title}
    </Heading>
  </Wrapper>
)

ArticleTitle.defaultProps = {
  level: 2,
}

export default ArticleTitle
