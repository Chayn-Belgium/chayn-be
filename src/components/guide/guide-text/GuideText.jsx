import React from "react"

import { P } from "./style"
import { Wrapper } from "../style"

const GuideText = ({ isFull, text, isJustify }) => {
  let content =
    typeof text === "string" ? (
      <P isJustify={isJustify} dangerouslySetInnerHTML={{ __html: text }} />
    ) : (
      <>
        {text.map(t => (
          <P
            key={t}
            isJustify={isJustify}
            dangerouslySetInnerHTML={{ __html: t }}
          />
        ))}
      </>
    )

  return <Wrapper isFull={isFull}>{content}</Wrapper>
}

export default GuideText
