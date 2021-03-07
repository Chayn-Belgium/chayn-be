import React from "react"

import { Card, ImageContainer } from "./style"
import { Image, Heading, P } from "../ui"

const ResourceCard = ({ title, picture, text, ...cardProps }) => (
  <Card {...cardProps}>
    <Heading size="s">{title}</Heading>
    <ImageContainer>
      <Image picture={picture} />
    </ImageContainer>
    <P size="s">{text}</P>
  </Card>
)

export default ResourceCard
