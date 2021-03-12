import React from "react"

import { Section, ContentWrapper } from "./style"
import { Heading, P } from "../../ui"
import { Container } from "../../../styles"

const Context = ({ title, text }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <Heading>{title}</Heading>
        <P dangerouslySetInnerHTML={{ __html: text }} />
      </ContentWrapper>
    </Container>
  </Section>
)

export default Context
