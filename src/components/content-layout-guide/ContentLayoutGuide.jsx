import React, { useState, useEffect } from "react"
import throttle from "lodash.throttle"
import { Link } from "gatsby"

import {
  Container,
  Body,
  AsideLeft,
  AsideRight,
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

const ContentLayoutGuide = ({
  content,
  asideLeft = [],
  asideRight = [],
  chapterId,
}) => {
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
      <AsideLeft>
        <AsideContent isOpen={isMobileMenuOpen}>
          <IconContainer
            isReverse={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Icon name="right-arrow-angle" />
          </IconContainer>
          {asideLeft.map(item => (
            <TextMenu
              as={Link}
              isActive={chapterId ? chapterId === item.id : chapterId === ""}
              isOpen={isMobileMenuOpen}
              key={item.href}
              to={item.href}
            >
              {item.title.toLowerCase()}
            </TextMenu>
          ))}
        </AsideContent>
      </AsideLeft>

      <Body>{content}</Body>

      <AsideRight>
        <AsideContent isOpen={isMobileMenuOpen}>
          {asideRight.map((item, index) => (
            <TextMenu
              isActive={anchorTarget ? anchorTarget === item.id : index === 0}
              isOpen={isMobileMenuOpen}
              key={item.href}
              onClick={() => {
                setAnchorTarget(item.id)
                handleClick(item.id)
              }}
            >
              {item.title.toLowerCase()}
            </TextMenu>
          ))}
        </AsideContent>
      </AsideRight>
    </Container>
  )
}

export default ContentLayoutGuide
