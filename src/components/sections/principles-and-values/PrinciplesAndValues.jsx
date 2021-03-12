import React from "react"

import {
  Section,
  ImageContainer,
  ContentWrapper,
  Wrapper,
  CardsContainer,
  Card,
} from "./style"
import { P, Image, Heading } from "../../ui"
import { Container } from "../../../styles"

const getImage = (imageName, pictures) => {
  let picture = pictures.find(
    pic =>
      pic.node.childImageSharp["fluid" || "fixed"].originalName === imageName
  )

  return picture.node.childImageSharp
}

const CardsSection = ({ title, cards, appendText, pictures }) => (
  <Section>
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Heading level={2}>{title}</Heading>
          <CardsContainer>
            {cards &&
              cards.map((item, index) => (
                <Card key={index}>
                  <ImageContainer>
                    <Image picture={getImage(item.imageName, pictures)} />
                  </ImageContainer>
                  <Heading size="m">{item.title}</Heading>
                  <P size="s">{item.text}</P>
                </Card>
              ))}
          </CardsContainer>
          <P size="s">{appendText}</P>
        </ContentWrapper>
      </Wrapper>
    </Container>
  </Section>
)

export default CardsSection
