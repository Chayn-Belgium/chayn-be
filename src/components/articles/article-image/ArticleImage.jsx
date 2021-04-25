import React from "react"

import { Image } from "../../ui"
import { ImageContainer } from "./style"
import { Wrapper } from "../style"

const ArticleTitle = ({ image }) => (
  <Wrapper>
    <ImageContainer>
      <Image picture={image} objectFit="contain" />
    </ImageContainer>
  </Wrapper>
)

export default ArticleTitle
