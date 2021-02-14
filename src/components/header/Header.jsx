import React from "react"

import { Header, Content, Nav } from "./style"
import Logo from "../logo"
import Cta from "../cta"
import { Button } from "../ui"
import { Container } from "../../styles"

const HeaderSection = ({ nav }) => (
  <Header>
    <Container>
      <Content>
        <Logo />
        <Nav>
          {nav.map((item, index) => (
            <Button is={Cta} link={item} type="minimal" key={index}>
              {item.label}
            </Button>
          ))}
        </Nav>
      </Content>
    </Container>
  </Header>
)

export default HeaderSection
