import React from "react"

import { GlobalStyle, Main, Theme } from "../../styles"
import Header from "../header"
import Footer from "../footer"
import Head from "../head"
import data from "../../../site-data"

const Layout = ({ children, nav, footer, lang }) => (
  <Theme>
    <GlobalStyle />
    <Head />
    <Header nav={nav} exitText={data.leaveWebsiteButton[lang]} />
    <Main>{children}</Main>
    <Footer data={footer} />
  </Theme>
)

export default Layout
