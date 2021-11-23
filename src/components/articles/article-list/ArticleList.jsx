import React from "react"

import { P, List, ListItem } from "./style"
import { Wrapper } from "../style"

const ArticleList = ({ isFull, intro, list }) => (
  <Wrapper isFull={isFull}>
    <P dangerouslySetInnerHTML={{ __html: intro }} />
    <List>
      {list.map((item, index) => (
        <ListItem key={index} dangerouslySetInnerHTML={{ __html: item }} />
      ))}
    </List>
  </Wrapper>
)

export default ArticleList
