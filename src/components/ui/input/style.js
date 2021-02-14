import styled from "styled-components"

import { COLOR } from "../../../utils/constants"

export const Input = styled.input`
  border: 2px solid ${COLOR.SEASHELL};
  border-radius: 25px;
  padding: 10px 15px;

  &:focus {
    outline: none;
    border: 2px solid ${COLOR.BIZARRE};
  }

  ::placeholder {
    color: ${COLOR.BIZARRE}55;
  }
`

export const Textarea = styled.textarea`
  border: 2px solid ${COLOR.SEASHELL};
  border-radius: 20px;
  resize: none;
  padding: 10px 15px;
  min-height: 100px;

  &:focus {
    outline: none;
    border: 2px solid ${COLOR.BIZARRE};
  }

  ::placeholder {
    color: ${COLOR.BIZARRE}55;
  }
`
