import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../components/layout"
import data from "../../../../site-data"
import Context from "../../../components/sections/context"
import Workshops from "../../../components/sections/workshops"
import GoToResources from "../../../components/sections/go-to-resources"
import { PageSection, SectionContainer } from "../../../styles"

const CURRENT_LANG = "fr"
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]
const sectionsData = data.pages.find(({ name }) => name === "project").sections
const contextData = sectionsData[0]
const workshopsData = sectionsData[1]
const toResourcesData = sectionsData[2]

export const query = graphql`
  query {
    pictures: allFile(filter: { relativeDirectory: { eq: "pages/projects" } }) {
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

const ProjectPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <PageSection>
      <SectionContainer>
        <Context title={contextData.title} text={contextData.text} />
      </SectionContainer>
    </PageSection>
    <PageSection backgroundColor="light">
      <SectionContainer>
        <Workshops
          picture={getImageByName(data, workshopsData.imageName)}
          title={workshopsData.title}
          text={workshopsData.text}
          list={workshopsData.list}
          appendText={workshopsData.appendText}
        />
      </SectionContainer>
    </PageSection>
    <PageSection>
      <SectionContainer>
        <GoToResources
          text={toResourcesData.text}
          link={toResourcesData.link}
        />
      </SectionContainer>
    </PageSection>
  </Layout>
)

export default ProjectPage
