import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import {
  ResourcesHead,
  ResourcesContainer,
} from "../../../styles/pages/resources"
import data from "../../../../site-data"
import { Image, Heading, P } from "../../../components/ui"
import { Container } from "../../../styles"
import ResourceCard from "../../../components/resource-card"
import { resources } from "../../../../site-data/resources"
import { RESOURCE } from "../../../../site-data/constants"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]
const resourcesData = [
  {
    title:
      "Comment construire un dossier judiciaire de violences domestiques sans l’aide d’un·e avocat·e",
    imageName: "building-case-no-lawyer.png",
    text: "Comment collecter et présenter des preuves d’abus",
    link: {
      href: `/${CURRENT_LANG}/ressources/${
        resources[RESOURCE.BUILD_CASE_NO_LAWYER][CURRENT_LANG].slug
      }`,
    },
  },
]

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

const getResourceImageByName = (pictures, name) => {
  const element = pictures.resourceImages.edges.find(
    el => el.node.childImageSharp.fixed.originalName === name
  )

  return element.node.childImageSharp
}

const ResourcesPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <ResourcesHead>
      <Heading size="l">Nos ressources et guides informatifs</Heading>
      <P>
        Vos expériences comptent et ces ressources vous aideront à acquérir les
        connaissances et les compétences nécessaires pour vous aider.
        Sélectionnez un guide et commencez votre parcour.
        <br />
        Nous sommes avec vous, vous pouvez le faire !
      </P>
    </ResourcesHead>
    <Image picture={data.background.edges[0].node.childImageSharp} isBackground>
      <ResourcesContainer>
        <Container>
          {resourcesData.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              picture={getResourceImageByName(data, resource.imageName)}
              text={resource.text}
              link={resource.link}
            />
          ))}
        </Container>
      </ResourcesContainer>
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
