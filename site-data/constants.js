const pageTemplateValue = {
  DEFAULT: "default",
}
module.exports.PAGE_TEMPLATE = pageTemplateValue
module.exports.PAGE_TEMPLATES = Object.keys(pageTemplateValue)

module.exports.EXTERNAL_LINK_ATTRIBUTES = {
  target: "_blank",
  rel: "noopener noreferrer",
}

/**
 * @param {string} text
 * @param {string} href
 */
module.exports.getInlineLink = (text, href) =>
  `<a href="${href}" rel="noreferrer noopener" target="_blank">${text}</a>`
