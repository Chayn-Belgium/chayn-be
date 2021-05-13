import styled from "styled-components"

import { COLOR, MEDIA_QUERY, FONT } from "../../utils/constants"

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 50px 0 20px 0;
  background-color: ${COLOR.BIZARRE};
  flex-shrink: 0;
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

export const Button = styled.a`
  cursor: pointer;
  padding: 0.8rem 1.8rem;
  border-radius: 8px;
  font-family: ${FONT.NUNITO_SANS};
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 19px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`

export const Link = styled.a`
  cursor: pointer;
  font-family: ${FONT.NUNITO_SANS};
  font-size: 0.95rem;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 19px;
  color: ${COLOR.CAPE_COD};
  margin: 4px 0;
`
