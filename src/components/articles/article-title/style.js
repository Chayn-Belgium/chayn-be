import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"
import { getFontSize, getMarginBottom } from "./utils"

export const Heading = styled.h2`
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-size: ${({ level }) => `${getFontSize(level)}px`};
  line-height: ${({ level }) => `${getFontSize(level) + 6}px`};
  font-weight: 700;
  white-space: pre-wrap;
  margin-bottom: ${({ level }) => `${getMarginBottom(level)}px`};

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 30px;
    line-height: 36px;
  }
`
