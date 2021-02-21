import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../utils/constants"

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

  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    flex-direction: column;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    margin-bottom: 50px;
  }

  > h3 {
    @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
      text-align: center;
    }
  }
  > a {
    @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
      justify-content: center;
    }
  }

  > p {
    max-width: 350px;

    @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
      text-align: center;
    }
  }
`
