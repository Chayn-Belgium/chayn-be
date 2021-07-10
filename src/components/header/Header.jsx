import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { Header, Content, DesktopNav, NavItem } from "./style"
import MobileNav from "./mobile-nav"
import Logo from "../logo"

const getNavItems = elements =>
  elements?.map((element, index) => (
    <NavItem as={Link} to={element.href} type="minimal" key={index}>
      {element.label}
    </NavItem>
  ))

const HeaderSection = ({ nav }) => (
  <Header>
    <Content>
      <Logo />
      <DesktopNav>{getNavItems(nav)}</DesktopNav>
      <MobileNav>{getNavItems(nav)}</MobileNav>
    </Content>
  </Header>
)

HeaderSection.propsTypes = {
  nav: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
}

export default HeaderSection
