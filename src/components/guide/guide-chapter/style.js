import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 50px 0;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    margin: 20px 0;
  }
`

export const BodyContainer = styled.div`
  position: flex;
  flex-direction: column;
  z-index: 0;
  padding: 30px 0;
`
