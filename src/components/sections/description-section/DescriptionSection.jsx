import React from "react"

import {
  Section,
  ImageContainer,
  ContentWrapper,
  Wrapper,
  List,
  ListItem,
} from "./style"
import Cta from "../../cta"
import { P, Image, Button } from "../../ui"
import { Container } from "../../../styles"

const DescriptionSection = ({ appendText, link, list, picture, text }) => (
  <Section>
    <Container>
      <Wrapper>
        <ContentWrapper>
          <P dangerouslySetInnerHTML={{ __html: text }} />
          {list && (
            <List>
              {list.map((item, index) => (
                <ListItem key={index}>
                  <P size="s" dangerouslySetInnerHTML={{ __html: item }} />
                </ListItem>
              ))}
            </List>
          )}
          {link && (
            <Button is={Cta} link={link}>
              {link.label}
            </Button>
          )}
          <P size="s">{appendText}</P>
        </ContentWrapper>
        <ImageContainer>
          <Image picture={picture} objectFit="contain" />
        </ImageContainer>
      </Wrapper>
    </Container>
  </Section>
)

export default DescriptionSection
