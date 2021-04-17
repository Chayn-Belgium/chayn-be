import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-shrink: 0;
`

export const ImageContainer = styled.div`
  left: -60px;
  position: absolute;
  bottom: -100px;
  width: 500px;
  z-index: 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    position: relative;
    right: 0;
    bottom: 0;
    width: 100%;
  }
`

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px auto 150px auto;
  position: relative;
  text-align: center;
  z-index: 1;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin: 50px auto 0 auto;
  }

  > p {
    max-width: 850px;
    margin-bottom: 20px;
  }
`
