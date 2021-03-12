import styled from "styled-components"

import { MEDIA_QUERY, COLOR } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.BITTERSWEET};
`

export const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 100px auto 100px auto;
  position: relative;
  text-align: center;
  z-index: 1;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin: 50px auto 0 auto;
  }

  > p {
    max-width: 850px;
    margin-bottom: 20px;
  }
`
