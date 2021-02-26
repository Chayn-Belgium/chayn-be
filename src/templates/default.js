import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BasicHeader from "../components/sections/basic-header"
import CenteredSection from "../components/sections/centered-section"
import ListSection from "../components/sections/list-section"
import { SECTION_TEMPLATE } from "../../site-data/constants"

export const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "used" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 700, quality: 90) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  }
`

const getSection = (props, index) =>
  ({
    [SECTION_TEMPLATE.BASIC_HEADER]: <BasicHeader key={index} {...props} />,
    [SECTION_TEMPLATE.CENTERED_SECTION]: (
      <CenteredSection key={index} {...props} />
    ),
    [SECTION_TEMPLATE.LIST_SECTION]: <ListSection key={index} {...props} />,
  }[props.template])

const DefaultTemplate = props => {
  const {
    pageContext: { lang, sections, nav, footer },
    data: { images },
  } = props
  const pictures = images.edges.map(el => el.node.childImageSharp)

  return (
    <Layout lang={lang} nav={nav} footer={footer}>
      {sections.map((section, index) => {
        let picture = pictures.find(pic => {
          return pic.fluid.originalName === section.imageName
        })

        if (section?.imageName?.includes(".gif")) {
          picture = section.imageName
        }

        return getSection(
          {
            ...section,
            picture,
          },
          index
        )
      })}
    </Layout>
  )
}

export default DefaultTemplate
