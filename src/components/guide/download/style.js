import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.a`
  display: flex;
  margin-bottom: 20px;
  background: ${COLOR.WHITE_LINEN};
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    display: none;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    fill: ${COLOR.CAPE_COD};
  }
`

export const Text = styled.p`
  font-size: 21px;
  line-height: 32px;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 600;
`
