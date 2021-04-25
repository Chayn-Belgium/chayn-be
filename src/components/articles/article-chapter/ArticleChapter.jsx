import React from "react"

import { TitleContainer, BodyContainer, Heading, Container } from "./style"
import { Wrapper } from "../style"

const ArticleChapter = ({ title, level, children }) => (
  <Wrapper>
    <Container>
      <TitleContainer>
        <Heading level={level} size="s">
          {title}
        </Heading>
      </TitleContainer>
      <BodyContainer>{children}</BodyContainer>
    </Container>
  </Wrapper>
)

ArticleChapter.defaultProps = {
  level: 2,
}

export default ArticleChapter
