import React from "react"

import {
  Card,
  ImageContainer,
  ComingSoonFlag,
  LangsContainer,
  LangTag,
  Body,
} from "./style"
import { Image, Heading, P } from "../ui"
import { FONT } from "../../utils/constants"
import Cta from "../cta"

const ResourceCard = ({
  title,
  picture,
  text,
  isComingSoon,
  langs,
  ...cardProps
}) => (
  <Card
    as={cardProps.link ? Cta : undefined}
    {...cardProps}
    $isClickable={!!cardProps?.link?.href}
  >
    {isComingSoon && <ComingSoonFlag>Coming soon</ComingSoonFlag>}
    {title && (
      <Heading size="s" font={FONT.NUNITO_SANS}>
        {title}
      </Heading>
    )}
    <ImageContainer>
      <Image picture={picture} />
    </ImageContainer>
    <Body>{text && <P size="s">{text}</P>}</Body>
    {!!langs?.length && (
      <LangsContainer>
        {langs.sort().map(l => (
          <LangTag
            $isHoverable={!!cardProps.links}
            as={cardProps.links ? Cta : undefined}
            key={l}
            link={cardProps.links ? { href: cardProps.links[l] } : undefined}
          >
            {l}
          </LangTag>
        ))}
      </LangsContainer>
    )}
  </Card>
)

ResourceCard.defaultProps = {
  langs: [],
}

export default ResourceCard
