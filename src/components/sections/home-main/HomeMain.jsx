import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { ImageContainer, TextContainer, Wrapper, Title, Text } from "./style"
import { Image, Button } from "../../ui"
import { PageSection, SectionContainer } from "../../../styles"
import { fluidPicCustomPropType } from "../../../utils/helpers"

const HomeMain = ({ picture, title, text, CTALabel, CTALink }) => (
  <PageSection backgroundColor="light">
    <SectionContainer>
      <Wrapper>
        <TextContainer>
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: text }} />
          <Button as={Link} to={CTALink}>
            {CTALabel}
          </Button>
        </TextContainer>
        <ImageContainer>
          <Image picture={picture} />
        </ImageContainer>
      </Wrapper>
    </SectionContainer>
  </PageSection>
)

HomeMain.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  picture: fluidPicCustomPropType,
  CTALabel: PropTypes.string.isRequired,
  CTALink: PropTypes.string.isRequired,
}

export default HomeMain
