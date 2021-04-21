import styled from "styled-components"

import { COLOR, FONT } from "../../../utils/constants"

export const P = styled.p`
  font-size: 21px;
  line-height: 32px;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 300;
  white-space: pre-wrap;

  > b {
    font-weight: 700;
  }
`
