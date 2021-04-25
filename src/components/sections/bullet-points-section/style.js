import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"
import listIcon from "../../../assets/icons/dot.svg"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  width: 100%;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const ContentWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  position: relative;
  width: 100%;
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
  }
`
