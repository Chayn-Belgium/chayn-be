import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import { ResourcesContainer } from "../../../styles/pages/resources"
import data from "../../../../site-data"
import { Image } from "../../../components/ui"
import { Container } from "../../../styles"

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

const ResourcesPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <Image picture={data.images.edges[0].node.childImageSharp} isBackground>
      <ResourcesContainer>
        <Container>hello</Container>
      </ResourcesContainer>
    </Image>
  </Layout>
)

export default ResourcesPage
