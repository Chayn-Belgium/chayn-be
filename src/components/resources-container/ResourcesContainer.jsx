import React from "react"

import { Wrapper } from "./style"
import ResourceCard from "../resource-card"
import { Container } from "../../styles"
import { resources } from "../../../site-data/resources"
import { RESOURCE } from "../../../site-data/constants"

const CURRENT_LANG = "fr"

const resourcesData = [
  {
    title:
      "Comment construire un dossier judiciaire de violences domestiques sans l’aide d’un·e avocat·e",
    imageName: "building-case-no-lawyer.png",
    text: "Comment collecter et présenter des preuves d’abus",
    link: {
      href: `/${CURRENT_LANG}/ressources/${
        resources[RESOURCE.BUILD_CASE_NO_LAWYER][CURRENT_LANG].slug
      }`,
    },
  },
]

const getResourceImageByName = (pictures, name) => {
  const element = pictures.resourceImages.edges.find(
    el => el.node.childImageSharp.fixed.originalName === name
  )

  return element.node.childImageSharp
}

const ResourcesContainer = ({ pictures }) => {
  return (
    <Wrapper>
      <Container>
        {resourcesData.map((resource, index) => (
          <ResourceCard
            key={index}
            title={resource.title}
            picture={getResourceImageByName(pictures, resource.imageName)}
            text={resource.text}
            link={resource.link}
          />
        ))}
      </Container>
    </Wrapper>
  )
}

export default ResourcesContainer
