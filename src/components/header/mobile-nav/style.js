import styled from "styled-components"

import { MEDIA_QUERY, FONT } from "../../../utils/constants"

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

export const Button = styled.button`
  cursor: pointer;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-family: ${FONT.NUNITO_SANS};
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 19px;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`
