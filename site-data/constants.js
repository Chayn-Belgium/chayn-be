const pageTemplateValue = {
  DEFAULT: "default",
}
module.exports.PAGE_TEMPLATE = pageTemplateValue
module.exports.PAGE_TEMPLATES = Object.keys(pageTemplateValue)

const sectionTemplateValue = {
  BASIC_HEADER: "basic-header",
  BULLET_POINTS: "bullet-points",
  CARDS: "cards",
  CENTERED_SECTION: "centered-section",
  LIST_SECTION: "list-section",
  LONELY_CTA: "lonely-cta",
  LONELY_TITLE: "lonely-title",
}
module.exports.SECTION_TEMPLATE = sectionTemplateValue
module.exports.SECTION_TEMPLATES = Object.keys(sectionTemplateValue)

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
