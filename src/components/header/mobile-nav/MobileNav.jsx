import React, { useState } from "react"

import { Container, DialogContent } from "./style"
import { SideDialog, Icon } from "../../ui"

const MobileNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Icon name="menu" onClick={() => setIsOpen(true)} />
      <SideDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>{children}</DialogContent>
      </SideDialog>
    </Container>
  )
}

export default MobileNav
