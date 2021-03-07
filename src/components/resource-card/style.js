import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${COLOR.BIZARRE};
  box-shadow: "0 15px 45px 0 rgba(0, 0, 0, 0.1)";
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.01);
  }
`

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  max-height: 400px;
`
