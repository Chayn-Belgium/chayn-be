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
import NewsletterSection from "../../../components/sections/newsletter"

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

const getResourceImageByName = (pictures, name) => {
  const element = pictures?.resourceImages?.edges.find(
    el => el?.node?.childImageSharp?.fixed?.originalName === name
  )

  return element?.node?.childImageSharp
}

const ResourcesPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <ResourcesHead>
      <Heading size="l">Nos ressources et guides informatifs</Heading>
      <P
        dangerouslySetInnerHTML={{
          __html:
            "Vos expériences comptent et ces ressources vous aideront à acquérir les connaissances et les compétences nécessaires pour vous aider. Sélectionnez un guide et commencez votre parcours.\n\nNous sommes avec vous, vous pouvez le faire !",
        }}
      />
    </ResourcesHead>
    <NewsletterSection />
    <Image picture={data.background.edges[0].node.childImageSharp} isBackground>
      <Container>
        <ResourcesContainer>
          <ResourceCard
            title="Comment construire un dossier judiciaire de violences domestiques sans l’aide d’un·e avocat·e"
            picture={getResourceImageByName(
              data,
              "building-case-no-lawyer.png"
            )}
            text="Comment collecter et présenter des preuves d’abus"
            href="https://soulmedicine.io/fr/pathways/how-to-build-a-domestic-abuse-case-without-a-lawyer"
            target="_blank"
            rel="noreferrer noopener"
          />
          <ResourceCard
            title="Guide : Les premiers gestes pour affronter une situation de cyberharcèlement"
            text="Ressources et conseils pour vous aider à affronter une situation de cyberharclèment et de cyberviolences"
            picture={getResourceImageByName(data, "guide-coming-soon.jpg")}
            isComingSoon
          />
        </ResourcesContainer>
      </Container>
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
