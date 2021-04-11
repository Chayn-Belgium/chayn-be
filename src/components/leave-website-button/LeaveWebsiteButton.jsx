import React, { useEffect } from "react"

import { Container } from "./style"
import { P } from "../ui"

const exitURL =
  "https://www.google.com/search?q=cute+kitten&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiLzM7SnPbvAhXTgP0HHTQWDBEQ_AUoAXoECAEQAw&biw=1440&bih=789&dpr=2"

const LeaveWebsiteButton = ({ text }) => {
  const leaveWebsite = () => {
    window.location.href = exitURL
  }

  const onEscape = e => {
    if (e.key === "Escape") {
      e.preventDefault()
      leaveWebsite()
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", onEscape)
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", onEscape)
      }
    }
  })

  return (
    <Container onClick={leaveWebsite}>
      <P size="s">{text}</P>
    </Container>
  )
}

export default LeaveWebsiteButton
