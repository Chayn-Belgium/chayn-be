import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const Section = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background-color: ${COLOR.WHITE_LINEN};
  flex-shrink: 0;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 35px;
  background: linear-gradient(90deg, #db1d70 0%, #f6b92c 100%);
  box-shadow: 0 5px 20px 0 rgba(20, 106, 255, 0.1);
  color: #ffffff;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 0;
  line-height: 19px;
  text-align: center;
  padding: 10px 25px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
`
