import React from "react"
import styled, { ThemeProvider } from "styled-components"

import { COLOR } from "../utils/constants"

export * from "./elements"
export { GlobalStyle } from "./GlobalStyle"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
  flex-shrink: 0;
  align-items: center;
`

/**
 * s, m, l, xl
 * @param {string} size
 * @returns {string} size in rem
 */
export const getHeadingSize = size =>
  ({
    xl: "3.4rem",
    l: "2.1rem",
    m: "1.4rem",
    s: ".95rem",
  }[size || "xl"])

/**
 * s, m
 * @param {string} size
 * @returns {string} size in rem
 */
export const getTextSize = size =>
  ({
    m: "1.15rem",
    s: ".95rem",
  }[size || "m"])

/**
 * Theme
 */
const theme = {
  color: {
    backgroundLight: COLOR.WHITE_LINEN,
    text: COLOR.CAPE_COD,
  },
}

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
