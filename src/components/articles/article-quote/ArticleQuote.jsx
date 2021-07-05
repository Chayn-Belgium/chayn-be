import React from "react"

import { Figure, Figcaption, Blockquote, Cite } from "./style"
import { Wrapper } from "../style"
import { Icon } from "../../ui"

const ArticleQuote = ({ quote, author }) => (
  <Wrapper>
    <Figure>
      <Icon name="left-quotes" />
      <Blockquote cite="">{quote}</Blockquote>
      <Figcaption>
        — <Cite>{author}</Cite>
      </Figcaption>
    </Figure>
  </Wrapper>
)

export default ArticleQuote
