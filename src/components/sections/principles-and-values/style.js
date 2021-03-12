import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.BIZARRE};
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 100px auto 100px auto;
  position: relative;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin: 50px 0;
    padding: 0;
    align-items: center;
  }

  > h2 {
    margin: auto;
    text-align: center;
  }

  > p {
    max-width: 850px;
    margin-bottom: 20px;

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      text-align: center;
    }
  }

  > a {
    margin: 20px 0;
  }
`

export const CardsContainer = styled.ul`
  display: flex;
  list-style: none;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.li`
  width: 33%;
  min-width: 250px;
  padding: 50px 20px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 50%;
  }
  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    width: 100%;
    padding: 20px 0;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: 80%;
  z-index: 0;
  margin: auto;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
  }
  @media ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    width: 60%;
    margin-bottom: 20px;
  }

  > img {
    margin: auto;
    width: 100%;
  }
`
