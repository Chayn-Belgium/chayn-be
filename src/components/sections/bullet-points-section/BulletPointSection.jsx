import React from "react"

import { Section, ContentWrapper, Wrapper, List, ListItem } from "./style"
import { Heading, P, Button } from "../../ui"
import { Container } from "../../../styles"
import Cta from "../../cta"

const BulletPointSection = ({ bulletPoints, title, link }) => (
  <Section>
    <Container>
      <Wrapper>
        <ContentWrapper>
          <Heading size="s">{title}</Heading>
          <List>
            {bulletPoints.map((item, index) => (
              <ListItem key={index}>
                <P size="s" dangerouslySetInnerHTML={{ __html: item }} />
              </ListItem>
            ))}
          </List>
          {link && (
            <Button is={Cta} link={link}>
              {link.label}
            </Button>
          )}
        </ContentWrapper>
      </Wrapper>
    </Container>
  </Section>
)

export default BulletPointSection
