import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const ImageContainer = styled.div`
  width: 100%;
  min-height: 300px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    min-height: 200px !important;
  }

  > div {
    display: block !important;
    height: 300px !important;

    ${MEDIA_QUERY.TABLET_AND_DOWN} {
      height: 200px !important;
    }
  }
`
