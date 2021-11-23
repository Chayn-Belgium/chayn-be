import styled from "styled-components"

import { FONT, COLOR, MEDIA_QUERY } from "../../utils/constants"

export const LogoContainer = styled.div`
  height: 60px;
  min-width: 60px;
  display: flex;
  align-items: center;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    height: 30px;
    min-width: 30px;
  }
`

export const ImageContainer = styled.div`
  height: 60px;
  width: 60px;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    height: 30px;
    width: 30px;
  }
`

export const Text = styled.p`
  font-size: 20px;
  font-family: ${FONT.ORDNER};
  color: ${COLOR.AMARANTH};
  margin-left: 20px;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    font-size: 16px;
  }
`
