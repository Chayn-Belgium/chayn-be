import React from "react"

import {
  ArticleDivider,
  ArticleImage,
  ArticleList,
  ArticleMainTitle,
  ArticleQuote,
  ArticleText,
  ArticleTitle,
} from "../components/articles"
import { CONTENT_TYPE } from "../../site-data/constants"

export const getImage = (imageName, pictures) => {
  let picture = pictures.find(pic => {
    return pic.fluid.originalName === imageName
  })

  if (imageName?.includes(".gif")) {
    picture = imageName
  }

  return picture
}

const getResourceImageByName = (pictures, name) => {
  if (!name) return

  const element = pictures.resourceImages.edges.find(el => {
    return el.node.childImageSharp.fixed.originalName === name
  })

  return element?.node?.childImageSharp
}

export const getArticleSection = (type, props) =>
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
    [CONTENT_TYPE.QUOTE]: <ArticleQuote {...props} />,
    [CONTENT_TYPE.LIST]: <ArticleList {...props} />,
    [CONTENT_TYPE.DIVIDER]: <ArticleDivider {...props} />,
  }[type])
