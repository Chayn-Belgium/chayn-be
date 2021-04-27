import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import { ResourcesHead } from "../../../styles/pages/resources"
import data from "../../../../site-data"
import { Image, Heading, P } from "../../../components/ui"
import ResourcesContainer from "../../../components/resources-container"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]

export const query = graphql`
  query {
    background: allFile(
      filter: { relativePath: { regex: "pages/resources/resources_bg.png/" } }
    ) {
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
    resourceImages: allFile(
      filter: { relativeDirectory: { eq: "pages/resources" } }
    ) {
      edges {
        node {
          childImageSharp {
            fixed(width: 300, quality: 90) {
              ...GatsbyImageSharpFixed
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
    <ResourcesHead>
      <Heading size="l">Nos ressources et guides informatifs</Heading>
      <P>
        Vos expériences comptent et ces ressources vous aideront à acquérir les
        connaissances et les compétences nécessaires pour vous aider.
        Sélectionnez un guide et commencez votre parcour.
        <br />
        <br />
        Nous sommes avec vous, vous pouvez le faire !
      </P>
    </ResourcesHead>
    <Image picture={data.background.edges[0].node.childImageSharp} isBackground>
      <ResourcesContainer pictures={data} />
    </Image>
    <ResourcesHead>
      <P>
        La collective prépare de nouveaux guides qui seront prochainement
        publiés ici. Si vous souhaitez déjà les recevoir, envoyez-nous un email
        à{" "}
        <a href="mailto:collective@chayn.be" target="_blank" rel="noreferrer">
          collective@chayn.be
        </a>
        .
      </P>
    </ResourcesHead>
  </Layout>
)

export default ResourcesPage
