import React from "react"

import { Section, ImageContainer, LeftContainer } from "./style"
import { Heading, P, Image } from "../../ui"
import { Container } from "../../../styles"
import { COLOR } from "../../../utils/constants"

const BasicHeader = ({ picture, title, text }) => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image picture={picture} />
        </ImageContainer>
        <LeftContainer>
          <Heading color={COLOR.AMARANTH}>{title}</Heading>
          <P>{text}</P>
        </LeftContainer>
      </Container>
    </Section>
  )
}

export default BasicHeader
