import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  /* background-color: #ed3150; */
  background-color: #fc7373;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px auto 200px auto;
  position: relative;
  text-align: center;
  z-index: 1;

  > p {
    max-width: 850px;
    margin-bottom: 20px;
  }
`

export const ImageContainer = styled.div`
  /* left: -60px; */
  /* position: absolute; */
  /* bottom: -20px; */
  width: 40%;
  z-index: 0;
  /* opacity: 0.7; */
  > img {
    width: 100%;
  }
`