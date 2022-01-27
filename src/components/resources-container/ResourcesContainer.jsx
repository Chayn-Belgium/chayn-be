import React, { useState } from "react"

import {
  Wrapper,
  Cockpit,
  CardsContainer,
  SelectLang,
  ContentDropdown,
  DropdownLink,
} from "./style"
import ResourceCard from "../resource-card"
import { Container } from "../../styles"
import { resources } from "../../../site-data/resources"
import { RESOURCE } from "../../../site-data/constants"
import { Dropdown } from "../ui"
import { LangTag } from "../resource-card/style"
import pdfUrlAtelier from "../../assets/files/atelier-de-prevention-contre-les-cyberviolences.pdf"

const CURRENT_LANG = "fr"

const resourcesData = [
  {
    title:
      "Comment construire un dossier judiciaire de violences domestiques sans l’aide d’un·e avocat·e",
    imageName: "building-case-no-lawyer.png",
    text: "Comment collecter et présenter des preuves d’abus",
    langs: ["fr", "nl"],
    links: {
      fr: `/${CURRENT_LANG}/ressources/${
        resources[RESOURCE.BUILD_CASE_NO_LAWYER][CURRENT_LANG].slug
      }`,
      nl: `/nl/bronnen/${resources[RESOURCE.BUILD_CASE_NO_LAWYER].nl.slug}`,
    },
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
    // isComingSoon: true,
    langs: ["es", "pl", "nl", "tr", "en"],
    links: {
      en: `/en/resources/how-to-be-a-good-allied`,
      es: `/es/recursos/guia-del-buen-amigo`,
      pl: `/pl/surowce/przewodnik-dobrego-sojusznika`,
      nl: `/nl/bronnen/de-gids-van-de-goede-bondgenoot`,
      tr: `/tr/kaynaklar/iyi-muttefikin-rehberi`,
    },
  },
  {
    title: "How to be safe online",
    imageName: "guide-coming-soon.jpg",
    // isComingSoon: true,
    // langs: ["en"],
    link: {
      href: "https://www.chayn.co/themes/online-safety",
      target: "_blank",
    },
  },
  {
    title: "Atelier de prévention contre les cyberviolences",
    text: `Les informations nécessaires`,
    imageName: "atelier.png",
    langs: ["fr"],
    link: {
      href: `https://chayn.be${pdfUrlAtelier}`,
      target: "_blank",
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
  const [selectedLang, setSelectedLand] = useState("all")

  const filteredResources = resourcesData.filter(r => {
    if (selectedLang === "all") {
      return true
    }
    return r.langs?.includes(selectedLang)
  })

  const allLangs = resourcesData
    .map(data => data?.langs || [])
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
                    <DropdownLink
                      key={lang}
                      onClick={() => setSelectedLand(lang)}
                      type="minimal"
                    >
                      {lang}
                    </DropdownLink>
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
              links={resource.links}
              isComingSoon={resource.isComingSoon}
              langs={resource.langs || []}
            />
          ))}
        </CardsContainer>
      </Container>
    </Wrapper>
  )
}

export default ResourcesContainer
