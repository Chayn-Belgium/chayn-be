import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.WHITE_LINEN};
  overflow: hidden;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  height: 500px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    height: 300px;
  }
`

export const LeftContainer = styled.div`
  width: 50%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    padding: 50px 0 10px 0;
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
