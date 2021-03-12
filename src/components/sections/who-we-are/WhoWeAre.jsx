import React from "react"

import { Section, ImageContainer, ContentWrapper } from "./style"
import { Heading, P, Image, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const WhoWeAre = ({ title, text, link, picture }) => (
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
      <ImageContainer>
        <Image picture={picture} />
      </ImageContainer>
    </Container>
  </Section>
)

export default WhoWeAre
