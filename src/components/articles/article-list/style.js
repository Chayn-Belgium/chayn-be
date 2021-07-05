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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
`

export const ListItem = styled.li`
  width: 100%;
  position: relative;
  padding-left: 30px;
  margin-bottom: 10px;
  font-size: 21px;
  line-height: 32px;
  color: ${COLOR.CAPE_COD};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 300;
  white-space: pre-wrap;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 18px;
    line-height: 28px;
  }

  &:before {
    content: "";
    width: 12px;
    height: 2px;
    position: absolute;
    top: 15px;
    left: 0px;
    background-color: ${COLOR.CAPE_COD};

    ${MEDIA_QUERY.TABLET_AND_DOWN} {
      top: 13px;
      left: 6px;
    }
  }
`