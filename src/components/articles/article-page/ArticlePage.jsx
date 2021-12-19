import React, { useMemo } from "react"
import PropTypes from "prop-types"

import ArticleChapter from "../article-chapter"
import Layout from "../../layout"
import ContentLayout from "../../content-layout"
import { Container } from "../../../styles"
import data from "../../../../site-data"
import { resources } from "../../../../site-data/resources"
import { CONTENT_TYPE, RESOURCES } from "../../../../site-data/constants"
import { getArticleSection } from "../../../utils/helpers"

const ArticlePage = ({ articleName, lang }) => {
  const hasChapter = resources[articleName][lang].content.some(
    section => section.type === CONTENT_TYPE.CHAPTER
  )

  const asideContent = hasChapter
    ? resources[articleName][lang].content
        .filter(section => section.type === CONTENT_TYPE.CHAPTER)
        .map(section => ({ title: section.title, id: section.id }))
    : undefined

  const content = useMemo(
    () => (
      <>
        {resources[articleName][lang].content.map((resource, index) => {
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
                  const { type: chapterType, ...chapterProps } = chapterResource

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
        })}
      </>
    ),
    [articleName, lang]
  )

  return (
    // TODO: don't use hardcoded languages
    <Layout lang={lang} nav={data.nav["fr"]} footer={data.footer["fr"]}>
      <Container>
        <ContentLayout content={content} aside={asideContent} />
      </Container>
    </Layout>
  )
}

ArticlePage.propTypes = {
  articleName: PropTypes.oneOf(RESOURCES),
  // TODO: use constant instead of hardcoded values
  lang: PropTypes.oneOf(["en", "fr", "es"]),
  data: PropTypes.any,
}

export default ArticlePage
