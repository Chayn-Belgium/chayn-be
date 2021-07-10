import styled from "styled-components"

import { FONT, COLOR } from "../../utils/constants"

export const LogoContainer = styled.div`
  height: 60px;
  min-width: 60px;
  display: flex;
  align-items: center;
`

export const ImageContainer = styled.div`
  height: 60px;
  width: 60px;
`

export const Text = styled.p`
  font-size: 20px;
  font-family: ${FONT.ORDNER};
  color: ${COLOR.AMARANTH};
  margin-left: 20px;
`
