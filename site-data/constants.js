const pageTemplateValue = {
  DEFAULT: "default",
}
module.exports.PAGE_TEMPLATE = pageTemplateValue
module.exports.PAGE_TEMPLATES = Object.keys(pageTemplateValue)

const sectionTemplateValue = {
  BASIC_HEADER: "basic-header",
  SHORT_TEXT_WITH_CTA: "short-text-with-cta",
  LIST_WITH_IMAGE_AND_CTA: "list-with-image-and-cta",
}
module.exports.SECTION_TEMPLATE = sectionTemplateValue
module.exports.SECTION_TEMPLATES = Object.keys(sectionTemplateValue)

module.exports.EXTERNAL_LINK_ATTRIBUTES = {
  target: "_blank",
  rel: "noopener noreferrer",
}
