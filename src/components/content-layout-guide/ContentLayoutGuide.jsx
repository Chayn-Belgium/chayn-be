import React, { useState /*useEffect*/ } from "react"
// import throttle from "lodash.throttle"
import { Link } from "gatsby"

import {
  AsideContentLeft,
  AsideContentRight,
  AsideLeft,
  AsideRight,
  Body,
  ComingSoonFlag,
  Container,
  IconContainer,
  TextMenu,
} from "./style"
import { Icon } from "../ui"
import { capitalize, slugify } from "../../utils/helpers"

// const isElementActive = el => {
//   if (!el) return

//   const { top, bottom } = el.getBoundingClientRect()

//   if (top <= 50 && bottom > 0) return true

//   return false
// }

// const handleScroll = throttle((targetElements, setActiveId) => {
//   let activeElement = null

//   targetElements.forEach((el, index) => {
//     if (isElementActive(el)) {
//       activeElement = el
//     }
//   })

//   if (activeElement && activeElement.id) {
//     setActiveId(activeElement.id)
//   } else {
//     setActiveId(null)
//   }
// }, 200)

const ContentLayoutGuide = ({
  content,
  asideLeft = [],
  asideRight = [],
  chapterId,
}) => {
  const [anchorTarget, setAnchorTarget] = useState(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // useEffect(() => {
  //   const gatsbyContainer = document.getElementById("gatsby-focus-wrapper")
  //   const titles = document.querySelectorAll('[data-section="chapter"]')

  //   const onScroll = () => handleScroll(titles, setAnchorTarget)

  //   gatsbyContainer.addEventListener("scroll", onScroll)

  //   return () => {
  //     gatsbyContainer.removeEventListener("scroll", onScroll)
  //   }
  // }, [])

  const handleClick = (event, id) => {
    event.preventDefault()
    const elementToScroll = document.getElementById(id)

    if (!elementToScroll) return

    elementToScroll.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <Container>
      <AsideLeft>
        <AsideContentLeft isOpen={isMobileMenuOpen}>
          <IconContainer
            isReverse={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Icon name="right-arrow-angle" />
          </IconContainer>
          {asideLeft.map((item, index) => (
            <TextMenu
              as={Link}
              $isActive={chapterId ? chapterId === item.id : chapterId === ""}
              $index={index}
              $isOpen={isMobileMenuOpen}
              key={String(item.href) + String(index) + "left"}
              to={item.href}
              $isMenuOpen={isMobileMenuOpen}
            >
              {capitalize(item.title.toLowerCase())}
              {index >= 10 && <ComingSoonFlag>Coming soon</ComingSoonFlag>}
            </TextMenu>
          ))}
        </AsideContentLeft>
      </AsideLeft>

      <Body>{content}</Body>

      <AsideRight>
        <AsideContentRight isOpen={isMobileMenuOpen}>
          {asideRight.map((item, index) => (
            <TextMenu
              $isActive={
                anchorTarget
                  ? anchorTarget === (item.id || slugify(item.title))
                  : index === 0
              }
              $isOpen={isMobileMenuOpen}
              key={String(item.href) + String(index) + "right"}
              onClick={event => {
                if (!item.id) {
                  item.id = slugify(item.title)
                }
                setAnchorTarget(item.id)
                handleClick(event, item.id)
              }}
              $level={item.level}
            >
              {capitalize(item.title.toLowerCase())}
            </TextMenu>
          ))}
        </AsideContentRight>
      </AsideRight>
    </Container>
  )
}

export default ContentLayoutGuide
