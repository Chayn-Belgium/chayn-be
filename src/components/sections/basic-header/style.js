import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.WHITE_LINEN};
  overflow: hidden;
`

export const ImageContainer = styled.div`
  width: 500px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
`

export const LeftContainer = styled.div`
  width: 50%;
  z-index: 1;
  padding: 180px 0;
  position: relative;

  > h1 {
    max-width: 320px;
    text-transform: uppercase;
  }

  > p {
    max-width: 500px;
  }
`
