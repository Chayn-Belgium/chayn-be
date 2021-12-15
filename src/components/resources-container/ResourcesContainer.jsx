import React, { useState } from "react"

import {
  Wrapper,
  Cockpit,
  CardsContainer,
  SelectLang,
  ContentDropdown,
} from "./style"
import ResourceCard from "../resource-card"
import { Container } from "../../styles"
import { resources } from "../../../site-data/resources"
import { RESOURCE } from "../../../site-data/constants"
import { Dropdown, Button } from "../ui"
import { LangTag } from "../resource-card/style"

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
    langs: ["en", "fr", "nl"],
  },
  {
    title:
      "Guide : Les premiers gestes pour affronter une situation de cyberharcèlement",
    text:
      "Ressources et conseils pour vous aider à affronter une situation de cyberharclèment et de cyberviolences",
    imageName: "guide-coming-soon.jpg",
    langs: ["fr"],
    link: {
      href: `/${CURRENT_LANG}/guides/les-premiers-gestes-pour-affronter-une-situation-de-cyberharcelement/introduction`,
    },
  },
  {
    title: "Comment être un(e) bon(ne) allié(e)",
    imageName: "guide-coming-soon.jpg",
    isComingSoon: true,
    langs: ["es", "fr", "pl", "nl", "en"],
  },
  {
    title: "How to be safe online",
    imageName: "guide-coming-soon.jpg",
    isComingSoon: true,
    langs: ["nl", "en", "tr", "pt"],
  },
]

const getResourceImageByName = (pictures, name) => {
  const element = pictures.resourceImages.edges.find(
    el => el.node.childImageSharp.fixed.originalName === name
  )

  return element.node.childImageSharp
}

const ResourcesContainer = ({ pictures }) => {
  const [selectedLang, setSelectedLand] = useState("all")

  const filteredResources = resourcesData.filter(r => {
    if (selectedLang === "all") {
      return true
    }
    return r.langs.includes(selectedLang)
  })

  const allLangs = resourcesData
    .map(({ langs }) => langs)
    .reduce((acc, curr) => [...acc, ...curr], [])
    .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), [])

  return (
    <Wrapper>
      <Container>
        <Cockpit>
          <Dropdown
            main={() => (
              <SelectLang>
                Langue: <LangTag>{selectedLang}</LangTag>
              </SelectLang>
            )}
            content={() => (
              <ContentDropdown>
                {["all", ...allLangs]
                  .filter(item => item !== selectedLang)
                  .map(lang => (
                    <Button
                      key={lang}
                      onClick={() => setSelectedLand(lang)}
                      type="minimal"
                    >
                      {lang}
                    </Button>
                  ))}
              </ContentDropdown>
            )}
          />
        </Cockpit>
        <CardsContainer>
          {filteredResources.map((resource, index) => (
            <ResourceCard
              key={index}
              title={resource.title}
              picture={getResourceImageByName(pictures, resource.imageName)}
              text={resource.text}
              link={resource.link}
              isComingSoon={resource.isComingSoon}
              langs={resource.langs}
            />
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  )
}

export default ResourcesContainer
