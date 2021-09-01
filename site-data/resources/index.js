const { RESOURCE, LANG } = require("../constants")

module.exports.langsPerResources = {
  [RESOURCE.BUILD_CASE_NO_LAWYER]: [LANG.FR],
}

module.exports.resources = {
  [RESOURCE.BUILD_CASE_NO_LAWYER]: require(`./${RESOURCE.BUILD_CASE_NO_LAWYER}`),
  [RESOURCE.HOW_TO_BE_A_GOOD_ALLIED]: require(`./${RESOURCE.HOW_TO_BE_A_GOOD_ALLIED}`),
  // ...langsPerResources.map(lang => )
}
