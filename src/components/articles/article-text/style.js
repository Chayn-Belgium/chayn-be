import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const P = styled.p`
  font-size: 21px;
  line-height: 32px;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 300;
  white-space: pre-wrap;
  margin-bottom: 20px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 18px;
    line-height: 28px;
  }

  > b {
    font-weight: 700;
  }
`
