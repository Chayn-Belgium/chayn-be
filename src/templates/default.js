import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import BasicHeader from "../components/sections/basic-header"
import CenteredSection from "../components/sections/centered-section"
import ListSection from "../components/sections/list-section"
import CardsSection from "../components/sections/cards-section"
import LonelyTitleSection from "../components/sections/lonely-title-section"
import BulletPointSection from "../components/sections/bullet-points-section"
import LonelyCtaSection from "../components/sections/lonely-cta-section"
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

const DefaultTemplate = props => {
  const {
    pageContext: { lang, sections, nav, footer },
    data: { images },
  } = props
  const pictures = images.edges.map(el => el.node.childImageSharp)

  return (
    <Layout lang={lang} nav={nav} footer={footer}>
      {sections.map((section, index) => {
        const props = {
          ...section,
          pictures,
        }

        return {
          [SECTION_TEMPLATE.BASIC_HEADER]: (
            <BasicHeader key={index} {...props} />
          ),
          [SECTION_TEMPLATE.CENTERED_SECTION]: (
            <CenteredSection key={index} {...props} />
          ),
          [SECTION_TEMPLATE.LIST_SECTION]: (
            <ListSection key={index} {...props} />
          ),
          [SECTION_TEMPLATE.CARDS]: <CardsSection key={index} {...props} />,
          [SECTION_TEMPLATE.LONELY_TITLE]: (
            <LonelyTitleSection key={index} {...props} />
          ),
          [SECTION_TEMPLATE.BULLET_POINTS]: (
            <BulletPointSection key={index} {...props} />
          ),
          [SECTION_TEMPLATE.LONELY_CTA]: (
            <LonelyCtaSection key={index} {...props} />
          ),
        }[props.template]
      })}
    </Layout>
  )
}

export default DefaultTemplate
