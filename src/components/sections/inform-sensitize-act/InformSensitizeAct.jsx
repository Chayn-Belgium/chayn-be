import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  TextContainer,
  Wrapper,
  Title,
  Text,
  ArrowContainer,
  ArrowLine,
  ArrowEnd,
} from "./style"
import { Image, Button } from "../../ui"
import { PageSection, SectionContainer } from "../../../styles"
// import { fluidPicCustomPropType } from "../../../utils/helpers"

const txt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet adipisci laudantium similique pariatur autem culpa blanditiis nemo voluptate? Earum cum quisquam mollitia, ullam unde incidunt accusantium saepe officiis eum maiores?"

const InformSensitizeAct = () => (
  <PageSection backgroundColor="light">
    <SectionContainer>
      <Wrapper>
        <ArrowContainer>
          <ArrowLine>
            <ArrowEnd />
          </ArrowLine>
        </ArrowContainer>
        <TextContainer>
          <Title>Nous informons</Title>
          <Text dangerouslySetInnerHTML={{ __html: txt }} />
        </TextContainer>
      </Wrapper>
      <Wrapper>
        <ArrowContainer reverse>
          <ArrowLine reverse>
            <ArrowEnd reverse />
          </ArrowLine>
        </ArrowContainer>
        <TextContainer reverse>
          <Title>Nous sensibilisons</Title>
          <Text dangerouslySetInnerHTML={{ __html: txt }} />
        </TextContainer>
      </Wrapper>
      <Wrapper>
        <ArrowContainer />
        <TextContainer>
          <Title>Nous agissons</Title>
          <Text dangerouslySetInnerHTML={{ __html: txt }} />
        </TextContainer>
      </Wrapper>
    </SectionContainer>
  </PageSection>
)

InformSensitizeAct.propTypes = {}

export default InformSensitizeAct
