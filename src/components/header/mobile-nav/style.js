import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const Container = styled.div`
  display: none;
  justify-content: flex-end;
  flex-grow: 1;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: flex;
  }
`
export const DialogContent = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`
