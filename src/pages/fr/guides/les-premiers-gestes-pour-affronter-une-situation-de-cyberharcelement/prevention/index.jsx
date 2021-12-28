import React from "react"

import GuidePage from "../../../../../components/guide/guide-page"
import { GUIDE } from "../../../../../../site-data/constants"

const Page = () => (
  <GuidePage
    lang="fr"
    name={GUIDE.THE_FIRST_STEPS_TO_FACE_A_CYBERBULLYING_SITUATION}
    chapterId="prevention"
  />
)

export default Page
