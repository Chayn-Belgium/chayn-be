import styled from "styled-components"

export const Wrapper = styled.div`
  max-width: 600px;
  margin: auto;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 300px;
  z-index: 0;
  border: 2px solid black;

  > img {
    width: 100%;
  }
`
