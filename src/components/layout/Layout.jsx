import React from "react"

import { GlobalStyle, Main } from "../../styles"
import Header from "../header"
import Footer from "../footer"
import Head from "../head"
import LeaveWebsiteButton, {
  leaveWebsiteButtonPositions,
} from "../leave-website-button"
import { FixedElement } from "../ui"
import data from "../../../site-data"

const Layout = ({ children, nav, footer, lang }) => (
  <>
    <GlobalStyle />
    <Head />
    <FixedElement {...leaveWebsiteButtonPositions}>
      <LeaveWebsiteButton text={data.leaveWebsiteButton[lang]} />
    </FixedElement>
    <Header nav={nav} />
    <Main>{children}</Main>
    <Footer data={footer} />
  </>
)

export default Layout
