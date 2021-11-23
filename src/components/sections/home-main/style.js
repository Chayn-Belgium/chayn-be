import styled from "styled-components"

import { MEDIA_QUERY, FONT, COLOR } from "../../../utils/constants"

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 90px 0;
  align-items: center;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    padding: 40px 0;
  }
`

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 10%;

  ${MEDIA_QUERY.SMALL_DESKTOP_AND_DOWN} {
    padding-left: 2%;
  }
  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    padding-left: 0;
    align-items: center;
  }
`

export const ImageContainer = styled.div`
  width: 50%;
  height: 500px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    height: 300px;
    margin-top: 20px;
  }
`

export const Title = styled.h1`
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 20px;
  font-family: ${FONT.ORDNER};
  color: ${COLOR.AMARANTH};
  white-space: pre-wrap;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    font-size: 32px;
    text-align: center;
  }
`

export const Text = styled.p`
  font-size: 24px;
  line-height: 1.65;
  font-family: ${FONT.NUNITO_SANS};
  color: ${COLOR.CAPE_COD};
  white-space: pre-wrap;
  font-weight: 300;
  max-width: 430px;
  margin-bottom: 20px;

  ${MEDIA_QUERY.TABLET_AND_DOWN} {
    max-width: 100%;
    text-align: center;
    font-size: 22px;
    line-height: 1.45;
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
