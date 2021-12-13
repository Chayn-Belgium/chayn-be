import React from "react"
import PropTypes from "prop-types"

import Layout from "../../layout"
import ContentLayoutGuide from "../../content-layout-guide"
import { Container } from "../../../styles"
import data from "../../../../site-data"
import { guides } from "../../../../site-data/guides"
import { CONTENT_TYPE } from "../../../../site-data/constants"
import { getGuideSection } from "../../../utils/helpers"

const GuidePage = ({ name, lang, chapterId }) => {
  const currentGuide = guides[name]
  const currentGuideLocalize = currentGuide[lang]
  const hasChapter = currentGuideLocalize.content.some(
    section => section.type === CONTENT_TYPE.CHAPTER
  )
  const asideLeftContent = hasChapter
    ? currentGuideLocalize.content
        .filter(section => section.type === CONTENT_TYPE.CHAPTER)
        .map(section => ({
          title: section.title,
          id: section.id,
          href: `/${lang}/guides/${currentGuideLocalize.slug}/${
            section.id ? section.id : ""
          }`,
        }))
    : undefined
  const currentChapter = hasChapter
    ? currentGuideLocalize.content.find(item =>
        item.id ? item.id === chapterId : true
      )
    : undefined
  const asideRightContent = currentChapter
    ? currentChapter.content.filter(item => item.type === CONTENT_TYPE.TITLE)
    : undefined
  console.log("asideRightContent", asideRightContent)
  const content = currentChapter.content.map((el, index) =>
    getGuideSection(el.type, {
      key: index,
      // imageData: data,
      ...el,
    })
  )

  return (
    // TODO: don't use hardcoded languages
    <Layout lang={lang} nav={data.nav["fr"]} footer={data.footer["fr"]}>
      <Container>
        <ContentLayoutGuide
          content={content}
          asideLeft={asideLeftContent}
          asideRight={asideRightContent}
          chapterId={chapterId}
        />
      </Container>
    </Layout>
  )
}

GuidePage.propTypes = {
  name: PropTypes.string, //PropTypes.oneOf(GUIDES),
  // TODO: use constant instead of hardcoded values
  lang: PropTypes.oneOf(["fr"]),
  data: PropTypes.any,
}

export default GuidePage
