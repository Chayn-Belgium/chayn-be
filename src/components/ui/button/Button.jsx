import React from "react"

const Button = ({
  is: Element,
  children,
  iconVariant,
  isLoading,
  ...props
}) => {
  return <Element {...props}>{children}</Element>
}

Button.defaultProps = {
  is: "button",
}

export default Button
