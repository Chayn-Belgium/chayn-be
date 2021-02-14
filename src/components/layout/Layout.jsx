import React from "react"

import { GlobalStyle, Main } from "../../styles"
import Header from "../header"
import Footer from "../footer"
import Head from "../head"

const Layout = ({ children, nav, footer }) => {
  return (
    <>
      <GlobalStyle />
      <Head />
      <Header nav={nav} />
      <Main>{children}</Main>
      <Footer data={footer} />
    </>
  )
}

export default Layout
