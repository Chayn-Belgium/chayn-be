import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../utils/constants"

export const Container = styled.div`
  padding: 10px;
  max-width: 150px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  border-color: ${COLOR.AMARANTH};
  border-top-width: 2px;
  border-left-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 0;
  border-style: solid;

  &:hover {
    transform: scale(1.05);
  }

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    display: none;
  }
`
