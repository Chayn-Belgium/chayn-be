import React from "react"

import { TitleContainer, BodyContainer, Heading } from "./style"
import { Wrapper } from "../style"

const ArticleChapter = ({ title, level, children }) => (
  <Wrapper>
    <TitleContainer>
      <Heading level={level} size="s">
        {title}
      </Heading>
    </TitleContainer>
    <BodyContainer>{children}</BodyContainer>
  </Wrapper>
)

ArticleChapter.defaultProps = {
  level: 2,
}

export default ArticleChapter
