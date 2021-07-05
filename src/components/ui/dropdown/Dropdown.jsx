import React, { useState } from "react"

import { Container, Wrapper, Drawer } from "./style"

const Dropdown = ({ main, content, position }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <Container onMouseEnter={open} onMouseLeave={close}>
      <Wrapper>{main({ isOpen, open, close })}</Wrapper>
      <Drawer isOpen={isOpen} position={position}>
        {content({ isOpen, open, close })}
      </Drawer>
    </Container>
  )
}

export default Dropdown
