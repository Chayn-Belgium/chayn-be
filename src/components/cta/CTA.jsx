import React from "react"
import { Link } from "gatsby"

const CTA = ({ link, children, className, ...props }) => {
  const { href, rel, target, ...linkExtraAttributes } = link

  let isExternal
  if (link && !href) {
    isExternal = true
  } else {
    isExternal = href.includes("http") || href.includes("mailto")
  }

  let Tag
  if (!isExternal) {
    Tag = Link
  } else if (isExternal && href) {
    Tag = "a"
  } else {
    Tag = "button"
  }

  const finalHref = Tag === "a" ? href : undefined
  const to = !isExternal ? href : undefined

  return (
    <Tag
      /**
       * We pass all link attribute (for rel & target for example) then we
       * overwrite the ones we want to control
       */
      className={className}
      href={finalHref}
      rel={link.rel || undefined}
      target={link.target || undefined}
      to={to}
      {...linkExtraAttributes}
      {...props}
    >
      {children || link.label}
    </Tag>
  )
}

export default CTA
