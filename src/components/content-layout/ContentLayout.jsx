import React, { useState, useEffect } from "react"
import throttle from "lodash.throttle"

import {
  Container,
  Body,
  Aside,
  AsideContent,
  TextMenu,
  IconContainer,
} from "./style"
import { Icon } from "../ui"

const isElementActive = el => {
  if (!el) return

  const { top, bottom } = el.getBoundingClientRect()

  if (top <= 50 && bottom > 0) return true

  return false
}

const handleScroll = throttle((targetElements, setActiveId) => {
  let activeElement = null

  targetElements.forEach((el, index) => {
    if (isElementActive(el)) {
      activeElement = el
    }
  })

  if (activeElement && activeElement.id) {
    setActiveId(activeElement.id)
  } else {
    setActiveId(null)
  }
}, 200)

const ContentLayout = ({ content, aside }) => {
  const [anchorTarget, setAnchorTarget] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const gatsbyContainer = document.getElementById("gatsby-focus-wrapper")
    const sectionsResources = document.querySelectorAll(
      '[data-section="chapter"]'
    )

    const onScroll = () => handleScroll(sectionsResources, setAnchorTarget)

    gatsbyContainer.addEventListener("scroll", onScroll)
    return () => {
      gatsbyContainer.removeEventListener("scroll", onScroll)
    }
  }, [])

  const handleClick = id => {
    const elementToScroll = document.getElementById(id)

    if (!elementToScroll) return

    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Container>
      <Body>{content}</Body>
      {aside && (
        <Aside>
          <AsideContent isOpen={isMobileMenuOpen}>
            <IconContainer
              isReverse={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name="right-arrow-angle" />
            </IconContainer>
            {aside.map((item, index) => (
              <TextMenu
                isActive={anchorTarget ? anchorTarget === item.id : index === 0}
                isOpen={isMobileMenuOpen}
                key={item.id}
                onClick={() => {
                  setAnchorTarget(item.id)
                  handleClick(item.id)
                }}
              >
                {item.title.toLowerCase()}
              </TextMenu>
            ))}
          </AsideContent>
        </Aside>
      )}
    </Container>
  )
}

export default ContentLayout
