import React from "react"

import { Section, ContentWrapper } from "./style"
import { Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const LonelyCta = ({ link }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <Button is={Cta} link={link}>
          {link.label}
        </Button>
      </ContentWrapper>
    </Container>
  </Section>
)

export default LonelyCta
