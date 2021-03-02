import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* margin: 100px auto 200px auto; */

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    /* margin: 50px auto 0 auto; */
  }
`
