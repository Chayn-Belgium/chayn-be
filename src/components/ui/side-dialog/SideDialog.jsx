import React, { Component } from "react"
import ReactDOM from "react-dom"

// import { P } from "./style"
import { Container, Content, Overlay } from "./style"
import { COLOR } from "../../../utils/constants"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

class SideDialog extends Component {
  static defaultProps = {
    color: COLOR.CAPE_COD,
    size: "m",
  }

  constructor() {
    super()
    this.el =
      typeof document !== `undefined` ? document.createElement("div") : null
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }

  componentWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() {
    const { children, onClose, isOpen } = this.props

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(
        <Container isVisible={isOpen}>
          <Overlay onClick={() => onClose && onClose()} />
          <Content>{children}</Content>
        </Container>,
        this.el
      )
    } else {
      return null
    }
  }
}

export default SideDialog
