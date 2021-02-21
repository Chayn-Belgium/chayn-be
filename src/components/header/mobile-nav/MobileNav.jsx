import React, { useState } from "react"

import { Container, DialogContent } from "./style"
import { SideDialog, Button } from "../../ui"

const MobileNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <Button onClick={() => setIsOpen(true)} iconLeft="menu" type="minimal" />
      <SideDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DialogContent>{children}</DialogContent>
      </SideDialog>
    </Container>
  )
}

export default MobileNav
