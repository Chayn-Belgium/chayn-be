import styled from "styled-components"

import { COLOR, FONT } from "../../utils/constants"

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${COLOR.BIZARRE};
  box-shadow: "0 15px 45px 0 rgba(0, 0, 0, 0.1)";
  cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    transform: ${({ isClickable }) => (isClickable ? "scale(1.01)" : "none")};
  }

  > p {
    margin-top: 10px;
  }
`

export const ComingSoonFlag = styled.span`
  position: absolute;
  top: -20px;
  left: 50%;
  font-size: 12px;
  color: #6698c1;
  text-transform: uppercase;
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 900;
  background-color: white;
  padding: 8px 15px;
  border-radius: 50px;
  letter-spacing: 1px;
  transform: translateX(-50%);
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  max-height: 400px;
`
