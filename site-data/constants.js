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
module.exports.getInlineLink = (text, href, isExternal = true) =>
  `<a href="${href}" ${
    isExternal ? 'rel="noreferrer noopener" target="_blank"' : ""
  }>${text}</a>`

const resource = {
  BUILD_CASE_NO_LAWYER:
    "how-to-build-your-own-domestic-violence-case-without-a-lawyer",
  HOW_TO_BE_A_GOOD_ALLIED: "how-to-be-a-good-allied",
}

module.exports.RESOURCE = resource
module.exports.RESOURCES = Object.values(resource)

const guide = {
  THE_FIRST_STEPS_TO_FACE_A_CYBERBULLYING_SITUATION:
    "the-first-steps-to-face-a-cyberbullying-situation",
}

module.exports.GUIDE = guide
module.exports.GUIDES = Object.keys(guide)

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
