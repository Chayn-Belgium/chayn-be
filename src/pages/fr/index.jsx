import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import data from "../../../site-data"
import HomeMain from "../../components/sections/home-main"
// import WeSupportYouSection from "../../components/sections/we-support-you-section"
// import DescriptionSection from "../../components/sections/description-section"
import NewsletterSection from "../../components/sections/newsletter"
import InformSensitizeAct from "../../components/sections/inform-sensitize-act"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]
const sectionsData = data.pages.find(({ name }) => name === "index").sections
// const weSupportYouData = sectionsData[1]
// const descriptionData = sectionsData[2]
const [mainHeaderData, informSensitizeActData] = sectionsData

export const query = graphql`
  query {
    pictures: allFile(filter: { relativeDirectory: { eq: "pages/home" } }) {
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
    el =>
      el.node.childImageSharp &&
      el.node.childImageSharp["fluid" || "fixed"].originalName === name
  )

  return element.node.childImageSharp
}

const HomePage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <HomeMain
      picture={getImageByName(data, mainHeaderData.imageName)}
      title={mainHeaderData.title}
      text={mainHeaderData.text}
      CTALabel={"Voir nos ressources"}
      CTALink={"/fr/ressources"}
    />
    <InformSensitizeAct data={informSensitizeActData} />
    {/* <WeSupportYouSection
      picture={getImageByName(data, weSupportYouData.imageName)}
      title={weSupportYouData.title}
      text={weSupportYouData.text}
    /> */}
    {/* <DescriptionSection
      picture={`pages/home/${descriptionData.imageName}`}
      appendText={descriptionData.appendText}
      text={descriptionData.text}
      link={descriptionData.link}
      title={descriptionData.title}
      subtitle={descriptionData.subtitle}
      list={descriptionData.list}
    /> */}
    <NewsletterSection />
  </Layout>
)

export default HomePage
