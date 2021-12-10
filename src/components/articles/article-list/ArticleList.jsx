import React from "react"

import { P, List, ListItem } from "./style"
import { Wrapper } from "../style"

const ArticleList = ({ isFull, intro, outro, list, isJustify }) => (
  <Wrapper isFull={isFull}>
    {intro && (
      <P dangerouslySetInnerHTML={{ __html: intro }} isJustify={isJustify} />
    )}
    <List>
      {list.map((item, index) => (
        <ListItem
          key={index}
          dangerouslySetInnerHTML={{ __html: item }}
          isJustify={isJustify}
        />
      ))}
    </List>
    {outro && (
      <P dangerouslySetInnerHTML={{ __html: outro }} isJustify={isJustify} />
    )}
  </Wrapper>
)

export default ArticleList
