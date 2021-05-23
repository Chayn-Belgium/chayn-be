import styled from "styled-components"

import { COLOR, FONT } from "../../utils/constants"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`

export const Cockpit = styled.div`
  display: flex;
  width: 100%;
  background-color: ${COLOR.BIZARRE};
  border-radius: 10px;
  padding: 15px 25px;
  margin-bottom: 30px;
  justify-content: flex-end;
`

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: -10px;
`

export const ContentDropdown = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SelectLang = styled.p`
  font-family: ${FONT.NUNITO_SANS};
`
