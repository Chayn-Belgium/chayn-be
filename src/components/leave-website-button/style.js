import styled from "styled-components"

import { COLOR, MEDIA_QUERY, FONT } from "../../utils/constants"

export const Container = styled.div`
  transition: all 0.3s ease;
  border: 1px solid ${COLOR.AMARANTH};
  border-radius: 5px;
  font-family: ${FONT.NUNITO_SANS};
  font-size: 14px;
  color: ${({ theme }) => theme.color.text};
  cursor: pointer;
  padding: 6px 10px;
  font-weight: 900;
  background-color: #fff;
  text-align: center;
  margin-left: 50px;

  &:hover {
    transform: scale(1.05);
  }

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    display: none;
  }
`
