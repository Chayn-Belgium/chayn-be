import React from "react"

import { Section, ImageContainer, ContentWrapper } from "./style"
import { Heading, P, Image } from "../../ui"
import { Container } from "../../../styles"

const WeSupportYouSection = ({ title, text, picture }) => (
  <Section>
    <Container>
      <ContentWrapper>
        <Heading level={2} size="l">
          {title}
        </Heading>
        <P dangerouslySetInnerHTML={{ __html: text }} />
      </ContentWrapper>
      <ImageContainer>
        <Image picture={picture} />
      </ImageContainer>
    </Container>
  </Section>
)

export default WeSupportYouSection
