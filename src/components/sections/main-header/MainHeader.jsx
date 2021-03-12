import React from "react"

import { Section, ImageContainer, LeftContainer, Wrapper } from "./style"
import { Heading, P, Image } from "../../ui"
import { Container } from "../../../styles"
import { COLOR } from "../../../utils/constants"

const MainHeader = ({ picture, title, text }) => (
  <Section>
    <Container>
      <Wrapper>
        <LeftContainer>
          <Heading color={COLOR.AMARANTH}>{title}</Heading>
          <P>{text}</P>
        </LeftContainer>
        <ImageContainer>
          <Image picture={picture} />
        </ImageContainer>
      </Wrapper>
    </Container>
  </Section>
)

export default MainHeader
