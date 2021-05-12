import React from "react"

import { Card, ImageContainer, ComingSoonFlag } from "./style"
import { Image, Heading, P } from "../ui"
import { FONT } from "../../utils/constants"

const ResourceCard = ({ title, picture, text, isComingSoon, ...cardProps }) => (
  <Card {...cardProps} isClickable={!!cardProps.href}>
    {isComingSoon && <ComingSoonFlag>Coming soon</ComingSoonFlag>}
    {title && (
      <Heading size="s" font={FONT.NUNITO_SANS}>
        {title}
      </Heading>
    )}
    <ImageContainer>
      <Image picture={picture} />
    </ImageContainer>
    {text && <P size="s">{text}</P>}
  </Card>
)

export default ResourceCard
