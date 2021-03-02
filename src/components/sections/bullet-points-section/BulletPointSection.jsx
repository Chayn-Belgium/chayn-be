import React from "react"

import { Section, ContentWrapper, Wrapper, List, ListItem } from "./style"
import { Heading, P } from "../../ui"
import { Container } from "../../../styles"

const BulletPointSection = ({ bulletPoints, title }) => (
  <Section>
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Heading size="m">{title}</Heading>
          <List>
            {bulletPoints.map((item, index) => (
              <ListItem key={index}>
                <P size="s" dangerouslySetInnerHTML={{ __html: item }} />
              </ListItem>
            ))}
          </List>
        </ContentWrapper>
      </Wrapper>
    </Container>
  </Section>
)

export default BulletPointSection
