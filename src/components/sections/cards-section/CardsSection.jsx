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
import { getImage } from "../../../utils/helpers"

const CardsSection = ({ cards, appendText, pictures, ...props }) => (
  <Section>
    <Container>
      <Wrapper>
        <ContentWrapper>
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
