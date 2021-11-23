import styled from "styled-components"

const getBackgroundColor = (name, theme) =>
  ({
    default: "white",
    light: theme.color.backgroundLight,
  }[name])

export const PageSection = styled.section`
  width: 100%;
  height: auto;
  padding: 0 20px;
  background-color: ${({ backgroundColor, theme }) =>
    getBackgroundColor(backgroundColor, theme)};
`
PageSection.defaultProps = {
  backgroundColor: "default",
}

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  position: relative;
  margin: auto;
`
Container.defaultProps = {
  hasMarginOnMobile: true,
}

export const SectionContainer = styled(Container)``
