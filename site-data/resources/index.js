const { RESOURCE, LANG } = require("../constants")

module.exports.langsPerResources = {
  [RESOURCE.BUILD_CASE_NO_LAWYER]: [LANG.FR],
}

module.exports.resources = {
  [RESOURCE.BUILD_CASE_NO_LAWYER]: require(`./${RESOURCE.BUILD_CASE_NO_LAWYER}`),
  // ...langsPerResources.map(lang => )
}
