import React from "react"
import styled from "styled-components"

export const Container = styled(({ positions, ...props }) => (
  <div {...props} />
))`
  position: fixed;
  /* To be under the mobile nav dialog */
  z-index: 9;
  ${({ positions }) => `
    left: ${positions.left};
    right: ${positions.right};
    top: ${positions.top};
    bottom: ${positions.bottom};
  `}
`
