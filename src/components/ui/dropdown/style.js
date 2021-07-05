import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  position: relative;
`

export const Wrapper = styled.div`
  display: flex;
`

export const Drawer = styled.div`
  display: flex;
  position: absolute;
  min-width: 100%;
  width: auto;
  width: max-content;
  height: auto;
  top: calc(100% + 35px);
  left: 0;
  transition: all 0.2s;
  transform-origin: top;
  background-color: white;
  padding: 12px 0;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 15px 45px 0 rgba(0, 0, 0, 0.1);
  ${({ position }) => position};
  ${({ isOpen }) => {
    if (isOpen) {
      return `
        visibility: visible;
        transform: scale(1);
        opacity: 1;
      `
    }
    return `
      visibility: hidden;
      transform: scale(0);
      opacity: 0;
    `
  }}
  &::before {
    content: "";
    position: absolute;
    height: 15px;
    width: 15px;
    border-top-left-radius: 3px;
    background-color: white;
    top: 2px;
    left: 50%;
    z-index: 102;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    content: "";
    position: absolute;
    background-color: transparent;
    width: 100%;
    height: 35px;
    top: -35px;
    left: 0;
    z-index: 1;
  }
`
