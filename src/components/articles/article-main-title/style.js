import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const Heading = styled.h2`
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  white-space: pre-wrap;
  margin: 25px 0;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 34px;
    line-height: 42px;
  }
`
