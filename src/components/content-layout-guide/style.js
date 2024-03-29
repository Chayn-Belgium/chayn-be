import styled from "styled-components"

import { COLOR, FONT, MEDIA_QUERY } from "../../utils/constants"

export const Container = styled.div`
  width: 100%;
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
  padding: 50px 20px;
`

export const AsideLeft = styled.aside`
  width: 300px;
  z-index: 1;
  position: relative;
  padding: 50px 0;
  padding-left: 20px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 0;
    width: 100%;
  }
`

export const AsideContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: calc(96px + 50px);
  background-color: #fff;
  width: 100%;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100;
    padding: 10px 20px;
    max-height: ${({ isOpen }) => (isOpen ? "80vh" : "80px")};
    box-shadow: 0 0 45px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
`

export const AsideRight = styled.aside`
  width: 300px;
  z-index: 1;
  position: sticky;
  top: 96px;
  padding: 50px 20px;
  max-height: calc(100vh - 96px);
  overflow-y: auto;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: none;
  }
`

export const AsideContentRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100;
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
  cursor: pointer;
  transform: ${({ isReverse }) =>
    isReverse ? "rotate(90deg) scale(1)" : "rotate(-90deg) scale(1)"};
  z-index: 10;

  &:hover {
    transform: ${({ isReverse }) =>
      isReverse ? "rotate(90deg) scale(1.02)" : "rotate(-90deg) scale(1.02)"};
  }

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: block;
  }
`

export const TextMenu = styled.div`
  display: inline-block;
  position: relative;
  font-size: 14px;
  font-family: ${FONT.NUNITO_SANS};
  opacity: ${({ $isActive }) => ($isActive ? "1" : "0.5")};
  cursor: pointer;
  color: ${COLOR.CAPE_COD};
  font-weight: 300;
  padding-left: ${({ $level }) =>
    $level > 2 ? `${Number($level) * 6}px` : "0"};

  &:not(:last-child) {
    margin: 0 0 10px 0;

    ${MEDIA_QUERY.TABLET_AND_DOWN} {
      margin: ${({ $isActive, $isMenuOpen }) =>
        $isActive && !$isMenuOpen ? "0" : "0 0 10px 0"};
    }
  }

  &:hover {
    opacity: 1;
  }

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: ${({ $isActive, $isOpen }) =>
      $isActive || $isOpen ? "inline-block" : "none"};
    white-space: nowrap;
    text-overflow: ellipsis;
    width: calc(100% - 20px);
    overflow: hidden;
  }
`

export const ComingSoonFlag = styled.span`
  display: inline-block;
  font-size: 8px;
  color: #233442;
  text-transform: uppercase;
  font-family: ${FONT.NUNITO_SANS};
  font-weight: 900;
  background-color: #6698c1;
  padding: 2px 6px;
  border-radius: 50px;
  letter-spacing: 1px;
  white-space: nowrap;
  margin-left: 5px;
`
