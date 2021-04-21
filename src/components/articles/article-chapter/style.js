import styled from "styled-components"

import { COLOR, FONT } from "../../../utils/constants"

export const TitleContainer = styled.div`
  position: sticky;
  top: 60px;
`

export const BodyContainer = styled.div`
  position: flex;
  flex-direction: column;
`

export const Heading = styled.h2`
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  white-space: pre-wrap;
`
