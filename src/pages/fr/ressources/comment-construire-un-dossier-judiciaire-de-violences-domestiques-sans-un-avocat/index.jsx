import React from "react"
import { graphql } from "gatsby"

import Layout from "../../../../components/layout"
import data from "../../../../../site-data"
import {
  ArticleMainTitle,
  ArticleTitle,
  ArticleText,
  ArticleImage,
  ArticleChapter,
} from "../../../../components/articles"
import { resources } from "../../../../../site-data/resources"
import { RESOURCE, CONTENT_TYPE } from "../../../../../site-data/constants"
import { Container } from "../../../../styles"

const CURRENT_LANG = "fr"
const ARTICLE_NAME = RESOURCE.BUILD_CASE_NO_LAWYER
const footerData = data.footer[CURRENT_LANG]
const navData = data.nav[CURRENT_LANG]

export const query = graphql`
  query {
    resourceImages: allFile(
      filter: {
        relativeDirectory: {
          eq: "pages/resources/how-to-build-your-own-domestic-violence-case-without-a-lawyer"
        }
      }
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
  if (!name) return

  const element = pictures.resourceImages.edges.find(el => {
    return el.node.childImageSharp.fixed.originalName === name
  })

  return element?.node?.childImageSharp
}

const getArticleSection = (type, props) =>
  ({
    [CONTENT_TYPE.MAIN_TITLE]: <ArticleMainTitle {...props} />,
    [CONTENT_TYPE.TITLE]: <ArticleTitle {...props} />,
    [CONTENT_TYPE.TEXT]: <ArticleText {...props} />,
    [CONTENT_TYPE.IMAGE]: (
      <ArticleImage
        {...props}
        image={getResourceImageByName(props.imageData, props.imageName)}
      />
    ),
  }[type])

const ResourcesBuildCaseNoLawyerPage = ({ data }) => (
  <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
    <Container>
      {resources[ARTICLE_NAME][CURRENT_LANG].content.map((resource, index) => {
        const { type, ...props } = resource

        // console.log(index, type, props)

        if (type === CONTENT_TYPE.CHAPTER) {
          return (
            <ArticleChapter title={props.title}>
              {props.content.map((chapterResource, chapterIndex) => {
                const { type: chapterType, ...chapterProps } = chapterResource

                return getArticleSection(chapterType, {
                  key: `${index}-${chapterIndex}`,
                  ...chapterProps,
                })
              })}
            </ArticleChapter>
          )
        }

        return getArticleSection(type, {
          key: index,
          imageData: data,
          ...props,
        })
      })}
    </Container>
  </Layout>
)

export default ResourcesBuildCaseNoLawyerPage
