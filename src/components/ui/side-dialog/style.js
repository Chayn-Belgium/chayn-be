import React from "react"
import styled from "styled-components"

export const Container = styled(({ isVisible, ...props }) => (
  <div {...props} />
))`
  position: absolute;
  left: 0;
  bottom: ${({ isVisible }) => (isVisible ? "0" : "100%")};
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

export const Overlay = styled.div`
  position: absolute;
  background-color: #0005;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`

export const Content = styled.div`
  position: absolute;
  background-color: white;
  right: 0;
  top: 0;
  width: 300px;
  height: 100%;
  padding: 20px 0;
`
