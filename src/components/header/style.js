import styled from "styled-components"

import { MEDIA_QUERY, FONT } from "../../utils/constants"

export const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 96px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.backgroundLight};
  z-index: 2;
  flex-shrink: 0;
  padding: 0 20px;

  ${MEDIA_QUERY.MOBILE_AND_DOWN} {
    height: 50px;
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: 1440px;
`

export const DesktopNav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    display: none;
  }
`

export const NavItem = styled.a`
  display: inline-block;
  font-family: ${FONT.NUNITO_SANS};
  color: ${({ theme }) => theme.color.text};
  align-items: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.3;
  position: relative;
  overflow: hidden;
  padding: 10px 5px;

  &:not(:last-child) {
    margin-right: 38px;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(100% - 2px);
    left: 0;
    width: calc(100% + 10px);
    height: 2px;
    background-color: ${({ theme }) => theme.color.text};
    transform: translateX(-100%);
    transition: all 0.2s ease;
  }

  &:hover:after {
    transform: translateX(0);
  }
`
