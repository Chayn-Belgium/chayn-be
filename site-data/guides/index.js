const { GUIDE, LANG } = require("../constants")

module.exports.langsPerGuide = {
  [GUIDE.THE_FIRST_STEPS_TO_FACE_A_CYBERBULLYING_SITUATION]: [LANG.FR],
}

module.exports.guides = {
  [GUIDE.THE_FIRST_STEPS_TO_FACE_A_CYBERBULLYING_SITUATION]: require(`./${GUIDE.THE_FIRST_STEPS_TO_FACE_A_CYBERBULLYING_SITUATION}`),
  // ...langsPerGuide.map(lang => )
}
