import React from "react"

import {
  TextContainer,
  Wrapper,
  Title,
  Text,
  ArrowContainer,
  ArrowLine,
  ArrowEnd,
} from "./style"
import { PageSection, SectionContainer } from "../../../styles"

const InformSensitizeAct = ({ data: { blocs } }) => (
  <PageSection backgroundColor="light">
    <SectionContainer>
      {blocs.map((bloc, index) => (
        <Wrapper key={index}>
          <ArrowContainer reverse={index % 2 !== 0}>
            {index < 2 && (
              <ArrowLine reverse={index % 2 !== 0}>
                <ArrowEnd reverse={index % 2 !== 0} />
              </ArrowLine>
            )}
          </ArrowContainer>
          <TextContainer reverse={index % 2 !== 0}>
            <Title>{bloc.title}</Title>
            <Text dangerouslySetInnerHTML={{ __html: bloc.text }} />
          </TextContainer>
        </Wrapper>
      ))}
    </SectionContainer>
  </PageSection>
)

export default InformSensitizeAct
