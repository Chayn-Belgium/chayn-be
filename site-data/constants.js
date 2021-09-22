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

const resource = {
  BUILD_CASE_NO_LAWYER:
    "how-to-build-your-own-domestic-violence-case-without-a-lawyer",
  HOW_TO_BE_A_GOOD_ALLIED: "how-to-be-a-good-allied",
}

module.exports.RESOURCE = resource
module.exports.RESOURCES = Object.values(resource)

const lang = {
  EN: "en",
  ES: "es",
  FR: "fr",
  NL: "nl",
  PL: "pl",
  TR: "tr",
}

module.exports.LANG = lang
module.exports.LANGS = Object.keys(lang)

const contentType = {
  TEXT: "text",
  MAIN_TITLE: "main-title",
  TITLE: "title",
  IMAGE: "image",
  CHAPTER: "chapter",
  DIVIDER: "divider",
  QUOTE: "quote",
  LIST: "list",
}

module.exports.CONTENT_TYPE = contentType
module.exports.CONTENT_TYPES = Object.keys(contentType)
