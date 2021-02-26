"use strict"

const {
  getInlineLink,
  EXTERNAL_LINK_ATTRIBUTES,
  PAGE_TEMPLATE,
  SECTION_TEMPLATE,
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
          template: SECTION_TEMPLATE.LIST_SECTION,
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
          template: SECTION_TEMPLATE.CENTERED_SECTION,
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
    {
      name: "join-us",
      template: PAGE_TEMPLATE.DEFAULT,
      urls: {
        fr: "/fr/nous-rejoindre",
      },
      sections: [
        {
          lang: "fr",
          template: SECTION_TEMPLATE.CENTERED_SECTION,
          imageName: "girls-flower.png",
          title: "Qui nous sommes",
          text:
            "Nous sommes une collective qui croyons que l’utilisation des technologies ouvertes doit soutenir les survivantes de violences (dont les cyberviolences) de genre. Nous travaillons avec une communauté de militant⸱e⸱s et de bénévoles compétent⸱e⸱s et passionné⸱e⸱s qui se battent pour changer les choses à nos côtés. Plus nous serons nombreuses et nombreux, plus notre impact pourra être grand.",
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.CARDS,
          title: "Pricinpes & Valeurs",
          subtitle:
            "Toutes les actions de la collective féministe rencontrent les valeurs et principes suivants.",
          appendText:
            "*Par «femmes», il est entendu toute personne qui a fait, fait ou fera l’expérience sociale d’être femme ou d’être perçue comme femme au cours de sa vie.",
          cards: [
            {
              title: "Intersectionnel",
              text:
                "L’oppression n’est pas une exception. Les caractéristiques de race, genre, religion, identité sexuelle et d’invalidité impactent profondément nos expériences de vie. Nous sommes intersectionnel.les par design. Chayn Belgium s’engage à proposer des contenus et activités qui soient accessible à tou⸱tes.",
              imageName: "intersectionnel.png",
            },
            {
              title: "Ouvert par défaut",
              text:
                "Nous ne pouvons pas relever les défis communs sans partager, apprendre et tirer parti du travail de chacun⸱e. Toutes nos ressources sont sous licences Creative Commons, ce qui signifie que tout le monde peut se les approprier et les partager en mentionnant l’attribution à Chayn.",
              imageName: "ouvert-par-defaut.png",
            },
            {
              title: "Innovation",
              text:
                "Chayn utilise des technologies adaptées et accessibles pour collaborer sur les ressources et lancer des solutions évolutives et reproductibles. Chayn Belgium est d’ailleurs le chapitre belge de Chayn HQ, association créée en 2013. Aucune ressource n’est définitive, et avec l’utilisation de feedbacks réguliers, nos projets sont toujours un travail en cours.",
              imageName: "innovation.png",
            },
            {
              title: "Empuissancement",
              text:
                "L’une de nos intentions centrales vise le développement de la résilience et de l’empuissancement chez nos publics cibles. Tous nos projets sont développés pour encourager les femmes* à se sentir indépendantes afin qu’elles soient en mesure d’agir en connaissance de cause. Nous voulons nous assurer qu'elles se sentent vues, entendues, comprises et motivées à vivre une vie qui leur ressemble.",
              imageName: "empuissancement.png",
            },
            {
              title: "Digne de confiance",
              text:
                "Notre communauté peut être confrontée à de graves répercussions de la part de leurs agresseurs. Nous œuvrons à minimiser les risques en préservant l’anonymat et la sécurité de tou⸱tes nos participant⸱e⸱s. Les espaces de parole et d’échange créés sont construits pour respecter l’anonymat et la bienveillance.",
              imageName: "digne-de-confiance.png",
            },
            {
              title: "Développé avec des survivantes",
              text:
                "‘Développé ensemble, pas pour’. Tout le contenu créé par Chayn HQ a été développé en collaboration directe et continue avec des survivantes de violences et de cyberviolences faites aux femmes*.",
              imageName: "developpe-avec-des-survivantes.png",
            },
          ],
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.LONELY_TITLE,
          title: "❤️ Chayn BE recherche des militant·e·s et bénévoles ❤️",
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.BULLET_POINTS,
          title: "Comment faire pour nous rejoindre ?",
          bulletPoints: [
            "Remplissez le formulaire ci-dessous",
            "La collective se met d'accord sur les projets à développer",
            "Les membres de la collective se donnent rendez-vous 2 fois par mois (en ligne ou hors ligne selon le covid) pour travailler ensemble",
          ],
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.BULLET_POINTS,
          title: "Que faut-il pour nous rejoindre ?",
          bulletPoints: [
            "Vouloir lutter contre les violences et cyberviolences faites aux femmes.",
            "Il ne faut pas forcément avoir un profil technique. La collective a besoin de militantes qui s'y connaissent en communication, en coordination de projet, etc...mais aussi en design ou développement web.",
            `Chaque membre de la collective adhère au code de conduite & aux ${getInlineLink(
              "valeur et principes",
              "https://docs.chayn.be/valeurs-and-principes"
            )} que la collective portent.`,
          ],
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.LONELY_CTA,
          link: {
            label: "Je m'implique",
            href:
              "https://docs.google.com/forms/d/e/1FAIpQLSe4XnZPoqdHkoYsdSbCqA85UGaWH88X2Tfpu9ICPCYej3XNWw/viewform",
            rel: "noreferrer noopener",
            target: "_blank",
          },
        },
        {
          lang: "fr",
          template: SECTION_TEMPLATE.CENTERED_SECTION,
          title: "Nous soutenir",
          text: "Vous pouvez également soutenir nos actions par des dons.",
          link: {
            label: "Je soutiens le projet",
            href: "https://opencollective.com/chayn-belgium",
            rel: "noreferrer noopener",
            target: "_blank",
          },
        },
      ],
    },
  ],
}
