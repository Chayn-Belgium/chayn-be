import React from "react"

import { Section, ImageContainer, ContentWrapper, Wrapper } from "./style"
import { P, Image, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const ListWithImageAndCta = ({ list, text, picture, link, ...props }) => {
  console.log("list", props)
  return (
    <Section>
      <Container>
        <Wrapper>
          <ContentWrapper>
            <P dangerouslySetInnerHTML={{ __html: text }} />
            <ul>
              {list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Button is={Cta} link={link}>
              {link.label}
            </Button>
          </ContentWrapper>
          <ImageContainer>
            <Image picture={picture} />
          </ImageContainer>
        </Wrapper>
      </Container>
    </Section>
  )
}

export default ListWithImageAndCta
