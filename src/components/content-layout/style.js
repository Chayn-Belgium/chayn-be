import styled from "styled-components"

import { FONT, MEDIA_QUERY } from "../../utils/constants"

export const Container = styled.div`
  width: 100;
  display: flex;
  position: relative;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`

export const Body = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 0;
  position: relative;
`

export const Aside = styled.aside`
  max-width: 300px;
  width: 30%;
  padding-left: 20px;
  z-index: 1;
  position: relative;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    position: sticky;
    bottom: 0;
    padding-left: 0;
    width: 100%;
    max-width: 100%;
  }
`

export const AsideContent = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 80px;
  padding: 30px;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  background-color: #fff;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    position: relative;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    width: calc(100% + 40px);
    margin-left: -20px;
    top: auto;
    box-shadow: none;
    padding: 10px 20px;
    max-height: ${({ isOpen }) => (isOpen ? "80vh" : "80px")};
    box-shadow: 0 0 45px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
`

export const IconContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 20px;
  display: none;
  transform: ${({ isReverse }) =>
    isReverse ? "rotate(90deg)" : "rotate(-90deg)"};
  z-index: 10;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: block;
  }
`

export const TextMenu = styled.h3`
  font-size: 14px;
  font-family: ${FONT.NUNITO_SANS};
  text-transform: capitalize;
  opacity: ${({ isActive }) => (isActive ? "1" : "0.3")};
  cursor: pointer;

  &:not(:last-child) {
    margin: 0 0 10px 0;
  }

  &:hover {
    opacity: 1;
  }

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: ${({ isActive, isOpen }) =>
      isActive || isOpen ? "inline-block" : "none"};
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 20px);
    overflow: hidden;
  }
`
