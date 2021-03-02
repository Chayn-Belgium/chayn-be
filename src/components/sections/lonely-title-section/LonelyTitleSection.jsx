import React from "react"

import { Section, ContentWrapper } from "./style"
import { Heading } from "../../ui"
import { Container } from "../../../styles"

const LonelyTitleSection = ({ title }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <Heading size="l" level={2}>
          {title}
        </Heading>
      </ContentWrapper>
    </Container>
  </Section>
)

export default LonelyTitleSection
