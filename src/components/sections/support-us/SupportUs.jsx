import React from "react"

import { Section, ContentWrapper } from "./style"
import { Heading, P, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const SupportUs = ({ title, text, link }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <Heading level={2}>{title}</Heading>
        <P dangerouslySetInnerHTML={{ __html: text }} />
        {link && (
          <Button is={Cta} link={link}>
            {link.label}
          </Button>
        )}
      </ContentWrapper>
    </Container>
  </Section>
)

export default SupportUs
