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

export const TitleContainer = styled.div`
  position: sticky;
  top: 111px;
  background-color: ${COLOR.SEASHELL};
  padding: 14px 12px 10px 12px;
  border-radius: 20px;
  z-index: 1;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin: 30px 0 10px 0;
    border-radius: 10px;
  }
`

export const BodyContainer = styled.div`
  position: flex;
  flex-direction: column;
  z-index: 0;
  padding: 30px 0;
`

export const Heading = styled.h2`
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  white-space: pre-wrap;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 18px;
    line-height: 24px;
  }
`
