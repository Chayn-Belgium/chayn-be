import React from "react"
import styled from "styled-components"

import Button from "./Button"
import { COLOR, FONT } from "../../../utils/constants"
import { getTextSize } from "../../../styles"

export const StyledButton = styled(({ type, isDisabled, size, ...rest }) => (
  <Button {...rest} />
))`
  display: inline-flex;
  align-items: center;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  ${({ type }) => {
    if (type === "default") {
      return `
        background-color: ${COLOR.BIZARRE}AA;
        color: ${COLOR.CAPE_COD};
        border: 2px solid transparent;
      `
    } else if (type === "minimal") {
      return `
        background: transparent;
        color: ${COLOR.CAPE_COD};
        border: 2px solid transparent;
      `
    } else if (type === "text") {
      return `
        background: transparent;
        color: ${COLOR.CAPE_COD};
        border: none;
        padding: 0.2rem 0;
      `
    }
  }}
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
  font-family: ${FONT.NUNITO_SANS};
  font-size: ${({ size }) => getTextSize(size)};
  font-weight: 900;
  letter-spacing: 0;
  line-height: 19px;
  background-clip: padding-box;
  transition: all 0.2s;
  text-decoration: none;
  opacity: ${({ isDisabled }) => (isDisabled ? 0.7 : 1)};

  &:hover,
  &:active,
  &:focus {
    ${({ isDisabled, type }) => {
      if (!isDisabled) {
        let res = `
          background-color: ${COLOR.BIZARRE};
        `
        if (type === "default") {
          res += `
            border: 2px solid ${COLOR.BIZARRE};
          `
        } else if (type === "minimal") {
          res += `
            background: ${COLOR.SEASHELL};
          `
        }

        return res
      }
    }}
  }
`

StyledButton.defaultProps = {
  type: "default",
  isDisabled: false,
  size: "m",
}
