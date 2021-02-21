import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.WHITE_LINEN};
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 350px;
  }
  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    display: none;
  }
`

export const LeftContainer = styled.div`
  width: 50%;
  z-index: 1;
  padding: 180px 0;
  position: relative;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 70%;
    padding: 100px 0;
  }
  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    width: 100%;
    padding: 80px 0;
  }

  > h1 {
    max-width: 320px;
    text-transform: uppercase;

    @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
      text-align: center;
      max-width: 100%;
    }
  }

  > p {
    max-width: 500px;

    @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
      text-align: center;
    }
  }
`
