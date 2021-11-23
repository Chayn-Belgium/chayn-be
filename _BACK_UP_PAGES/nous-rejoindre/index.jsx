import React from "react"
import { graphql } from "gatsby"

import Layout from "../../src/components/layout"
import data from "../../site-data"
import WhoWeAre from "../../src/components/sections/who-we-are"
import PrinciplesAndValues from "../../src/components/sections/principles-and-values"
import LonelyTitle from "../../src/components/sections/lonely-title-section"
import BulletPoints from "../../src/components/sections/bullet-points-section"
import SupportUs from "../../src/components/sections/support-us"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]
const sectionsData = data.pages.find(({ name }) => name === "join-us").sections
const whoWeAreData = sectionsData[0]
const principlesAndValuesData = sectionsData[1]
const lonelyTitleData = sectionsData[2]
const howJoinUsData = sectionsData[3]
const requirementsData = sectionsData[4]
const supportUsData = sectionsData[5]

export const query = graphql`
  query {
    pictures: allFile(filter: { relativeDirectory: { eq: "pages/join-us" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 600, quality: 90) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

const getImageByName = (data, name) => {
  const element = data.pictures.edges.find(
    el => el.node.childImageSharp["fluid" || "fixed"].originalName === name
  )

  return element.node.childImageSharp
}

const ResourcesPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <WhoWeAre
      picture={getImageByName(data, whoWeAreData.imageName)}
      title={whoWeAreData.title}
      text={whoWeAreData.text}
    />
    <PrinciplesAndValues
      pictures={data.pictures.edges}
      title={principlesAndValuesData.title}
      appendText={principlesAndValuesData.appendText}
      cards={principlesAndValuesData.cards}
    />
    <LonelyTitle title={lonelyTitleData.title} />
    <BulletPoints
      title={howJoinUsData.title}
      bulletPoints={howJoinUsData.bulletPoints}
    />
    <BulletPoints
      title={requirementsData.title}
      bulletPoints={requirementsData.bulletPoints}
      link={requirementsData.link}
    />
    <SupportUs
      link={supportUsData.link}
      title={supportUsData.title}
      text={supportUsData.text}
    />
  </Layout>
)

export default ResourcesPage
