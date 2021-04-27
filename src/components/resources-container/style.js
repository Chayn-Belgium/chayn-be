import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px 0;
`

export const Cockpit = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLOR.BIZARRE};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
