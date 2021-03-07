import React from "react"
import styled from "styled-components"

import { COLOR, FONT } from "../../../utils/constants"
import { getTextSize } from "../../../styles"

export const P = styled(({ color, size, ...props }) => <p {...props} />)`
  font-size: ${({ size }) => getTextSize(size)};
  color: ${({ color }) => color};
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 300;
  white-space: pre-wrap;

  > b,
  > strong {
    font-weight: 600;
  }

  > a {
    color: ${COLOR.BITTERSWEET};
    font-weight: 900;

    &:hover {
      text-decoration: underline;
    }
  }
`
