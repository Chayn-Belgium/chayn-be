import React, { useMemo } from "react"
import PropTypes from "prop-types"

import ArticleChapter from "../../articles/article-chapter"
import Layout from "../../layout"
import ContentLayout from "../../content-layout"
import { Container } from "../../../styles"
import data from "../../../../site-data"
import { guides } from "../../../../site-data/guides"
import { CONTENT_TYPE, GUIDES } from "../../../../site-data/constants"
import { getArticleSection } from "../../../utils/helpers"

const GuidePage = ({ name, lang }) => {
  const hasChapter = guides[name][lang].content.some(
    section => section.type === CONTENT_TYPE.CHAPTER
  )

  const asideContent = hasChapter
    ? guides[name][lang].content
        .filter(section => section.type === CONTENT_TYPE.CHAPTER)
        .map(section => ({ title: section.title, id: section.id }))
    : undefined

  const content = useMemo(
    () => (
      <>
        {guides[name][lang].content.map((resource, index) => {
          const { type, ...props } = resource

          if (type === CONTENT_TYPE.CHAPTER) {
            return (
              <ArticleChapter
                isFull
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
                    isFull: true,
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
            isFull: true,
          })

          if (!section) {
            console.warn("Section missing:", type)
          }

          return section
        })}
      </>
    ),
    [name, lang]
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

GuidePage.propTypes = {
  name: PropTypes.oneOf(GUIDES),
  // TODO: use constant instead of hardcoded values
  lang: PropTypes.oneOf(["fr"]),
  data: PropTypes.any,
}

export default GuidePage
