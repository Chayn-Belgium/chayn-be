import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../../utils/constants"

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 30px;
  }
  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    padding: 15px;
  }
`

export const Blockquote = styled.blockquote`
  font-size: 28px;
  line-height: 38px;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 300;
  white-space: pre-wrap;
  text-align: center;
  margin-top: 20px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
  }
`

export const Figcaption = styled.figcaption`
  display: flex;
  justify-content: center;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  padding: 20px 0 0 0;
`

export const Cite = styled.cite`
  font-size: 20px;
  line-height: 28px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 14px;
    line-height: 24px;
  }
`
