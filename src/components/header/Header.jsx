import React from "react"

import { Header, Content, DesktopNav } from "./style"
import MobileNav from "./mobile-nav"
import Logo from "../logo"
import Cta from "../cta"
import { Button } from "../ui"
import { Container } from "../../styles"

const getNavItems = elements =>
  elements?.map((element, index) => (
    <Button is={Cta} link={element} type="minimal" key={index}>
      {element.label}
    </Button>
  ))

const HeaderSection = ({ nav }) => (
  <Header>
    <Container>
      <Content>
        <Logo />
        <DesktopNav>{getNavItems(nav)}</DesktopNav>
        <MobileNav>{getNavItems(nav)}</MobileNav>
      </Content>
    </Container>
  </Header>
)

export default HeaderSection
