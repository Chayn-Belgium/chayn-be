import React from "react"

import { BodyContainer, Container } from "./style"
import { Wrapper } from "../style"

const GuideChapter = ({ children, ...props }) => (
  <Wrapper isFull {...props}>
    <Container>
      <BodyContainer>{children}</BodyContainer>
    </Container>
  </Wrapper>
)

export default GuideChapter
