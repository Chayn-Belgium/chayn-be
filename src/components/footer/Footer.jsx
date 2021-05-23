import React from "react"

import {
  Footer,
  Column,
  TopContainer,
  BottomContainer,
  SocialContainer,
  Button,
  Link,
} from "./style"
import Logo from "../logo"
import Cta from "../cta"
import { P, Heading, Icon } from "../ui"
import { Container } from "../../styles"
import { FONT } from "../../utils/constants"

const FooterSection = ({ data }) => (
  <Footer>
    <Container>
      <TopContainer>
        <Logo />
        <SocialContainer>
          {data?.social?.map((item, index) => (
            <Button as={Cta} link={item} key={index}>
              <Icon name={item.icon} />
            </Button>
          ))}
        </SocialContainer>
      </TopContainer>
      <BottomContainer>
        <Column>
          <Heading level={3} size="m" font={FONT.NUNITO_SANS}>
            {data?.international?.title}
          </Heading>
          {data?.international?.links.map((item, index) => (
            <Link type="text" key={index} link={item} as={Cta} size="s">
              {item.label}
            </Link>
          ))}
        </Column>
        <Column>
          <Heading level={3} size="m" font={FONT.NUNITO_SANS}>
            {data?.info?.title}
          </Heading>
          <P size="s">{data?.info?.text}</P>
        </Column>
      </BottomContainer>
      <P size="s">&copy; {`${new Date().getFullYear()} Chayn Belgium`}</P>
    </Container>
  </Footer>
)

export default FooterSection
