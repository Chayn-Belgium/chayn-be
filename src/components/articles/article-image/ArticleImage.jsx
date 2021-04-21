import React from "react"

import { Image } from "../../ui"
import { Wrapper, ImageContainer } from "./style"

const ArticleTitle = ({ image }) => (
  <Wrapper>
    {console.log("okok", image)}
    <ImageContainer>
      <Image picture={image} />
    </ImageContainer>
  </Wrapper>
)

export default ArticleTitle
