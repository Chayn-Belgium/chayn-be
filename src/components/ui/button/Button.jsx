import React from "react"

import Icon from "../icon"

const Button = ({
  is: Element,
  children,
  iconVariant,
  iconLeft,
  iconRight,
  isLoading,
  ...props
}) => {
  let iconLeftElement
  if (iconLeft || isLoading) {
    iconLeftElement = <Icon name={isLoading ? "spinner" : iconLeft} />
  }
  let iconRightElement
  if (iconRight) {
    iconRightElement = <Icon name={iconRight} />
  }

  return (
    <Element {...props}>
      {iconLeftElement}
      {children}
      {iconRightElement}
    </Element>
  )
}

Button.defaultProps = {
  is: "button",
}

export default Button
