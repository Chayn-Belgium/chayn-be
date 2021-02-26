import styled from "styled-components"

import { COLOR, MEDIA_QUERY } from "../../../utils/constants"
import listIcon from "../../../assets/icons/dot.svg"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${COLOR.BITTERSWEET};
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  z-index: 0;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    justify-content: center;
  }

  > img {
    width: 100%;

    @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
      max-width: 300px;
    }
  }
`

export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 100px auto 100px auto;
  position: relative;
  padding-left: 50px;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    margin: 50px 0;
    padding: 0;
    align-items: center;
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

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
`

export const ListItem = styled.li`
  width: 100%;
  position: relative;
  padding-left: 20px;
  margin-bottom: 10px;
  max-width: 80%;

  &:before {
    content: "";
    width: 4px;
    height: 4px;
    background-image: url(${listIcon});
    position: absolute;
    top: 8px;
    left: 6px;
    color: green;
  }
`
