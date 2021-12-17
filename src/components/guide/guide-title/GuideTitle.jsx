import React from "react"

import { Heading, Anchor } from "./style"
import { Wrapper } from "../style"
import { slugify } from "../../../utils/helpers"

const GuideTitle = ({ title, level, id }) => (
  <Wrapper>
    <Heading as={`h${level || 2}`} level={level}>
      <Anchor id={id || slugify(title)} dataTitle={true} />
      {title}
    </Heading>
  </Wrapper>
)

export default GuideTitle
