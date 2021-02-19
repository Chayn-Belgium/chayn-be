"use strict"

const {
  PAGE_TEMPLATE,
  SECTION_TEMPLATE,
  EXTERNAL_LINK_ATTRIBUTES,
} = require("./constants")

module.exports = {
  nav: {
    fr: [
      {
        label: "Nous rejoindre",
        href: "https://www.google.com/",
      },
      {
        label: "Projet",
        href: "https://www.google.com/",
      },
      {
        label: "Ressources",
        href: "https://www.google.com/",
      },
    ],
  },
  footer: {
    fr: {
      social: [
        {
          iconLeft: "facebook",
          href: "https://www.facebook.com/chayn",
          ...EXTERNAL_LINK_ATTRIBUTES,
        },
        {
          iconLeft: "instagram",
          href: "https://www.instagram.com/chayn.be",
          ...EXTERNAL_LINK_ATTRIBUTES,
        },
        {
          iconLeft: "mail",
          href: "mailto:collective@chayn.be",
          ...EXTERNAL_LINK_ATTRIBUTES,
        },
      ],
      international: {
        title: "Réseau international",
        links: [
          {
            label: "Chayn HQ",
            href: "https://chayn.co/",
          },
          {
            label: "Chayn Pakistan",
            href: "https://chaynpakistan.org/",
          },
          {
            label: "Chayn Inde",
            href: "http://chaynindia.com/",
          },
          {
            label: "Chayn Italie",
            href: "https://chaynitalia.org/",
          },
        ],
      },
      info: {
        title: "Chayn Belgium",
        text:
          "Projet opérant sous Open Collective Brussels\n\nAttention\nTout le contenu de Chayn Belgium est créé avec la meilleure intention. Nous ne prenons aucune responsabilité dans le cas où l’information ne serait pas précise.",
      },
    },
  },
  pages: [
    {
      name: "index",
      template: PAGE_TEMPLATE.DEFAULT,
      urls: {
        fr: "/fr/",
      },
      sections: [
        {
          lang: "fr",
          template: SECTION_TEMPLATE.BASIC_HEADER,
          imageName: "team.png",
          title: "CHAYN Belgium",
          text:
            "Nous sommes une collective féministe et antiraciste utilisant les technologies ouvertes pour lutter contre les violences et cyberviolences faites aux femmes.",
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.LIST_WITH_IMAGE_AND_CTA,
          imageName: "founders2.gif",
          text:
            "Chayn Belgium est une collective initiée suite à l’augmentation des violences et des cyberviolences contre les femmes* pendant la pandémie du covid-19 en 2020. En Belgique, de nombreuses femmes sont notamment victimes de cyberviolences de genre, amplifiée ou non de par l’intersection identitaire où elles se trouvent.\nChayn Belgium est une collective intersectionnelle, par et pour les femmes de tous horizons et de toutes croyances désireuses de :",
          list: [
            "Consulter des ressources multilingues écrites par des survivantes de violences conjugales",
            "Comprendre la problématique des cyberviolences et comment s’en protéger.",
            "Contribuer à un espace bienveillant de création de ressources, de soutien et de partage de connaissance.",
          ],
          appendText:
            "*Par «femmes», il est entendu toute personne qui a fait, fait ou fera l’expérience sociale d’être femme ou d’être perçue comme femme au cours de sa vie.",
          link: {
            label: "Accéder aux ressources",
            href: "https://www.google.com/",
          },
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.SHORT_TEXT_WITH_CTA,
          imageName: "2-girls.png",
          title: "Nous sommes là pour vous soutenir.",
          text:
            "Qu’importe ce que dit quelqu’un sur vous, en ligne ou hors ligne, vous méritez le respect. Consulter ce site est la première étape. Utilisez nos ressources pour repérer les violences de genre, collecter des preuves, rester en sécurité, vous rétablir et vous connecter à d’autres associations qui prendront soin de vous.\nWe got you.",
          link: {
            label: "Accéder aux ressources",
            href: "https://www.google.com/",
          },
        },
      ],
    },
  ],
}
