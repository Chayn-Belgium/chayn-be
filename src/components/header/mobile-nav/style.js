import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: none;
  justify-content: flex-end;
  flex-grow: 1;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: flex;
  }

  > div:nth-child(1) {
    cursor: pointer;
  }
`
export const DialogContent = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 20px;
`
