import React from "react"
import styled from "styled-components"

import Button from "./Button"
import { COLOR, FONT } from "../../../utils/constants"
import { getTextSize } from "../../../styles"

export const StyledButton_old = styled(
  ({ type, isDisabled, size, ...rest }) => <Button {...rest} />
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
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

StyledButton_old.defaultProps = {
  type: "default",
  isDisabled: false,
  size: "m",
}

export const StyledButton = styled.button`
  border-radius: 35px;
  background: linear-gradient(90deg, #db1d70 0%, #f6b92c 100%);
  box-shadow: 0 15px 45px 0 rgba(20, 106, 255, 0.1);
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 19px;
  text-align: center;
  padding: 20px 40px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
  font-family: ${FONT.NUNITO_SANS};
  transition: all 0.2s ease;
`
