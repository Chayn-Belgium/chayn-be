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
import { P, Image, Button, Heading } from "../../ui"
import { Container } from "../../../styles"

const ListSection = ({
  appendText,
  link,
  list,
  picture,
  subtitle,
  text,
  title,
}) => (
  <Section>
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image picture={picture} objectFit="contain" />
        </ImageContainer>
        <ContentWrapper>
          <Heading level={2}>{title}</Heading>
          <Heading level={3} size="m">
            {subtitle}
          </Heading>
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
      </Wrapper>
    </Container>
  </Section>
)

export default ListSection
