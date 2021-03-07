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
import { getImage } from "../../../utils/helpers"

const ListSection = ({ list, text, pictures, link, appendText, imageName }) => (
  <Section>
    <Container>
      <Wrapper>
        <ImageContainer>
          <Image picture={getImage(imageName, pictures)} objectFit="contain" />
        </ImageContainer>
        <ContentWrapper>
          <P dangerouslySetInnerHTML={{ __html: text }} />
          {list && (
            <List>
              {list.map((item, index) => (
                <ListItem key={index}>
                  <P size="s">{item}</P>
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
