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
  cursor: ${({ $isClickable }) => ($isClickable ? "pointer" : "default")};
  transition: all 0.3s ease;
  margin: 10px;

  &:hover {
    transform: ${({ $isClickable }) => ($isClickable ? "scale(1.01)" : "none")};
  }

  > p {
    margin-top: 10px;
  }
`

export const ComingSoonFlag = styled.span`
  position: absolute;
  top: -10px;
  left: 50%;
  font-size: 10px;
  color: #6698c1;
  text-transform: uppercase;
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 900;
  background-color: white;
  padding: 5px 12px;
  border-radius: 50px;
  letter-spacing: 1px;
  transform: translateX(-50%);
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  max-height: 400px;
`

export const Body = styled.div`
  flex: 1;
  margin-bottom: 10px;
`

export const LangsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const LangTag = styled.span`
  padding: 5px 12px;
  border-radius: 5px;
  font-weight: 900;
  font-size: 10px;
  text-transform: uppercase;
  font-family: ${FONT.NUNITO_SANS};
  background-color: ${COLOR.BITTERSWEET};
  margin: 5px;
  color: white;

  &:hover {
    transform: ${({ $isHoverable }) => ($isHoverable ? "scale(1.01)" : "none")};
  }
`
