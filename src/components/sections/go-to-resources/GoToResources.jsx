import React from "react"

import { Section, ContentWrapper } from "./style"
import { P, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const GoToResources = ({ text, link }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <P dangerouslySetInnerHTML={{ __html: text }} />
        <Button is={Cta} link={link}>
          {link.label}
        </Button>
      </ContentWrapper>
    </Container>
  </Section>
)

export default GoToResources
