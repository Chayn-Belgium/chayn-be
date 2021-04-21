import React from "react"

import { Card, ImageContainer } from "./style"
import { Image, Heading, P } from "../ui"
import { FONT } from "../../utils/constants"
import Cta from "../cta"

const ResourceCard = ({ title, picture, text, ...cardProps }) => (
  <Card as={Cta} {...cardProps}>
    <Heading size="s" font={FONT.NUNITO_SANS}>
      {title}
    </Heading>
    <ImageContainer>
      <Image picture={picture} />
    </ImageContainer>
    <P size="s">{text}</P>
  </Card>
)

export default ResourceCard
