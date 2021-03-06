import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import { ResourcesContainer } from "../../../styles/pages/resources"
import data from "../../../../site-data"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]

export const query = graphql`
  query {
    images: allFile(filter: { relativePath: { regex: "/resources_bg.png/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 1024, quality: 100) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

const ResourcesPage = p => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    {console.log("p", p)}
    <ResourcesContainer>ok</ResourcesContainer>
  </Layout>
)

export default ResourcesPage
