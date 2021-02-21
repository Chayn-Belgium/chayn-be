import React from "react"

import {
  Section,
  ImageContainer,
  ContentWrapper,
  Wrapper,
  List,
  ListItem,
} from "./style"
import { P, Image, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const ListWithImageAndCta = ({ list, text, picture, link, appendText }) => (
  <Section>
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image picture={picture} />
        </ImageContainer>
        <ContentWrapper>
          <P dangerouslySetInnerHTML={{ __html: text }} />
          <List>
            {list.map((item, index) => (
              <ListItem key={index}>
                <P size="s">{item}</P>
              </ListItem>
            ))}
          </List>
          <Button is={Cta} link={link}>
            {link.label}
          </Button>
          <P size="s">{appendText}</P>
        </ContentWrapper>
      </Wrapper>
    </Container>
  </Section>
)

export default ListWithImageAndCta
