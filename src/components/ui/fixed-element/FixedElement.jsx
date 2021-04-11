import React, { Component } from "react"
import ReactDOM from "react-dom"

import { Container } from "./style"

const portalRoot =
  typeof document !== `undefined` ? document.getElementById("portal") : null

class FixedElement extends Component {
  static defaultProps = {
    bottom: "auto",
    left: "auto",
    right: "auto",
    top: "auto",
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
    const { children, left, top, right, bottom } = this.props

    // Check that this.el is not null before using ReactDOM.createPortal
    if (this.el) {
      return ReactDOM.createPortal(
        <Container positions={{ left, top, right, bottom }}>
          {children}
        </Container>,
        this.el
      )
    } else {
      return null
    }
  }
}

export default FixedElement
