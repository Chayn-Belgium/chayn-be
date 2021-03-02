import React from "react"

import { Section, ImageContainer, ContentWrapper } from "./style"
import { Heading, P, Image, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"
import { getImage } from "../../../utils/helpers"

const CenteredSection = ({ title, text, link, imageName, pictures }) => (
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
        <Image picture={getImage(imageName, pictures)} />
      </ImageContainer>
    </Container>
  </Section>
)

export default CenteredSection
