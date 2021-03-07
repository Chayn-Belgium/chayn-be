import styled from "styled-components"

import { MEDIA_QUERY } from "../../utils/constants"

export const ResourcesHead = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 50px 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 50px 20px;
  }

  > h1 {
    text-align: center;
  }

  > p {
    text-align: center;
    max-width: 800px;
  }
`

export const ResourcesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 50px 0;
`
