import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const Heading = styled.h2`
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  white-space: pre-wrap;
  color: red;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 30px;
    line-height: 36px;
  }
`
