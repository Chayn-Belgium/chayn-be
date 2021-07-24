import styled from "styled-components"

import { MEDIA_QUERY, FONT, COLOR } from "../../../utils/constants"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px 0;
  align-items: center;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 0;
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ reverse }) => (reverse ? "flex-end" : "flex-start")};
  flex: 1;
  order: ${({ reverse }) => (reverse ? "1" : "2")};
  text-align: ${({ reverse }) => (reverse ? "right" : "left")};

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    align-items: center;
    order: 1;
  }
`

export const Title = styled.h1`
  font-size: 32px;
  line-height: 1.15;
  margin-bottom: 20px;
  font-family: ${FONT.ORDNER};
  color: ${COLOR.AMARANTH};
  white-space: pre-wrap;
  text-align: inherit;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 28px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 20px;
  line-height: 1.45;
  font-family: ${FONT.NUNITO_SANS};
  color: ${COLOR.CAPE_COD};
  white-space: pre-wrap;
  font-weight: 300;
  max-width: 430px;
  margin-bottom: 20px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    max-width: 100%;
    text-align: center;
    font-size: 18px;
    line-height: 1.25;
  }

  > b {
    font-weight: 600;
  }
  > sup {
    font-weight: 900;
    color: ${COLOR.AMARANTH};
    vertical-align: inherit;
  }
`

export const ArrowContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${({ reverse }) => (reverse ? "flex-start" : "flex-end")};
  align-items: flex-end;
  min-height: 300px;
  order: ${({ reverse }) => (reverse ? "2" : "1")};
  ${({ reverse }) => (reverse ? `margin-left: 50px;` : `margin-right: 50px;`)}

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    order: 2;
    transform: none;
    margin-right: 0;
    margin-left: 0;
    min-height: 60px;
  }
`

export const ArrowLine = styled.div`
  position: relative;
  width: 40%;
  height: 200px;
  border-top: 1px dashed ${COLOR.AMARANTH};
  ${({ reverse }) => {
    if (reverse) {
      return `
        border-top-right-radius: 100%;
        border-right: 1px dashed ${COLOR.AMARANTH};
      `
    } else {
      return `
        border-top-left-radius: 100%;
        border-left: 1px dashed ${COLOR.AMARANTH};
      `
    }
  }}

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    height: 60px;
    margin-bottom: 50px;
  }
`

export const ArrowEnd = styled.div`
  position: absolute;
  bottom: 0;
  width: 35px;
  height: 35px;
  border-left: 1px dashed ${COLOR.AMARANTH};
  border-bottom: 1px dashed ${COLOR.AMARANTH};
  ${({ reverse }) => {
    if (reverse) {
      return `
        right: 0;
        transform: rotate(-45deg) translate(50%, 25%);
      `
    } else {
      return `
        left: 0;
        transform: rotate(-45deg) translate(-25%, -50%);
      `
    }
  }}
`
