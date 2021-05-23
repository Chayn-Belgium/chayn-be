import React, { useState } from "react"

import { Container, DialogContent, Button } from "./style"
import { SideDialog, Icon } from "../../ui"

const MobileNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Button onClick={() => setIsOpen(true)}>
        <Icon name="menu" />
      </Button>
      <SideDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>{children}</DialogContent>
      </SideDialog>
    </Container>
  )
}

export default MobileNav
