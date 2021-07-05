import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Divider = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 50px 0 50px 0;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    line-height: 28px;
  }
`

export const Dot = styled.span`
  display: inline-block;
  width: 3px;
  height: 3px;
  background-color: black;
  border-radius: 50%;
  margin: 0 10px;
`
