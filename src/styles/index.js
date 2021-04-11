import styled from "styled-components"

export { GlobalStyle } from "./GlobalStyle"

export const Container = styled.div`
  max-width: 1096px;
  width: 100%;
  margin: 0 20px;
  position: relative;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  z-index: 1;
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
