import React from "react"

import { Section, ImageContainer, LeftContainer } from "./style"
import { Heading, P, Image } from "../../ui"
import { Container } from "../../../styles"
import { COLOR } from "../../../utils/constants"
import { getImage } from "../../../utils/helpers"

const BasicHeader = ({ pictures, title, text, imageName }) => {
  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image picture={getImage(imageName, pictures)} />
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
