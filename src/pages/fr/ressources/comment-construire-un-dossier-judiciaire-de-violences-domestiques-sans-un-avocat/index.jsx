import React, { useMemo } from "react"
import { graphql } from "gatsby"

import Layout from "../../../../components/layout"
import { ArticleChapter } from "../../../../components/articles"
import ContentLayout from "../../../../components/content-layout"
import data from "../../../../../site-data"
import { resources } from "../../../../../site-data/resources"
import { RESOURCE, CONTENT_TYPE } from "../../../../../site-data/constants"
import { Container } from "../../../../styles"
import { getArticleSection } from "../../../../utils/helpers"

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

const ResourcesBuildCaseNoLawyerPage = ({ data }) => {
  const hasChapter = resources[ARTICLE_NAME][CURRENT_LANG].content.some(
    section => section.type === CONTENT_TYPE.CHAPTER
  )

  const asideContent = hasChapter ? [] : undefined
  if (hasChapter) {
    resources[ARTICLE_NAME][CURRENT_LANG].content.forEach(section => {
      if (section.type !== CONTENT_TYPE.CHAPTER) return
      asideContent.push({
        title: section.title,
        id: section.id,
      })
    })
  }

  const content = useMemo(
    () => (
      <>
        {resources[ARTICLE_NAME][CURRENT_LANG].content.map(
          (resource, index) => {
            const { type, ...props } = resource

            if (type === CONTENT_TYPE.CHAPTER) {
              return (
                <ArticleChapter
                  id={props.id}
                  title={props.title}
                  key={index}
                  data-section="chapter"
                >
                  {props.content.map((chapterResource, chapterIndex) => {
                    const {
                      type: chapterType,
                      ...chapterProps
                    } = chapterResource

                    const section = getArticleSection(chapterType, {
                      key: `${index}-${chapterIndex}`,
                      ...chapterProps,
                    })

                    if (!section) {
                      console.warn("Section missing:", chapterType)
                    }

                    return section
                  })}
                </ArticleChapter>
              )
            }

            const section = getArticleSection(type, {
              key: index,
              imageData: data,
              ...props,
            })

            if (!section) {
              console.warn("Section missing:", type)
            }

            return section
          }
        )}
      </>
    ),
    [data]
  )

  return (
    <Layout lang={CURRENT_LANG} nav={navData} footer={footerData}>
      <Container>
        <ContentLayout content={content} aside={asideContent} />
      </Container>
    </Layout>
  )
}

export default ResourcesBuildCaseNoLawyerPage
