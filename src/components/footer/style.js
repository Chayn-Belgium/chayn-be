import styled from "styled-components"

import { COLOR } from "../../utils/constants"

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px 0 20px 0;
  background-color: ${COLOR.BIZARRE};
`

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SocialContainer = styled.div`
  display: flex;
  padding: 20px 0;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    max-width: 350px;
  }
`
