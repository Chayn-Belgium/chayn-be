import React from "react"

import {
  Footer,
  Column,
  TopContainer,
  BottomContainer,
  SocialContainer,
} from "./style"
import Logo from "../logo"
import Cta from "../cta"
import { P, Heading, Button } from "../ui"
import { Container } from "../../styles"

const FooterSection = ({ data }) => {
  console.log("footer", data)
  return (
    <Footer>
      <Container>
        <TopContainer>
          <Logo />
          <SocialContainer>
            {data.social.map((item, index) => (
              <Button
                type="minimal"
                iconLeft={item.iconLeft}
                is={Cta}
                link={item}
                key={index}
              />
            ))}
          </SocialContainer>
        </TopContainer>
        <BottomContainer>
          <Column>
            <Heading level={3} size="s">
              {data.international.title}
            </Heading>
            {data.international.links.map((item, index) => (
              <Button type="text" key={index} link={item} is={Cta} size="s">
                {item.label}
              </Button>
            ))}
          </Column>
          <Column>
            <Heading level={3} size="s">
              {data.info.title}
            </Heading>
            <P size="s">{data.info.text}</P>
          </Column>
        </BottomContainer>
        <P size="s">&copy; {`${new Date().getFullYear()} Chayn Belgium`}</P>
      </Container>
    </Footer>
  )
}

export default FooterSection
