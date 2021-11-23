import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: ${({ isFull }) => (isFull ? "100%" : "680px")};
  margin: auto;
  width: 100%;
`
