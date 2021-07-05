import React from "react"

import { P, List, ListItem } from "./style"
import { Wrapper } from "../style"

const ArticleList = ({ intro, list }) => (
  <Wrapper>
    <P dangerouslySetInnerHTML={{ __html: intro }} />
    <List>
      {list.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </List>
  </Wrapper>
)

export default ArticleList
