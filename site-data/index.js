const {
  getInlineLink,
  EXTERNAL_LINK_ATTRIBUTES,
  PAGE_TEMPLATE,
} = require("./constants")

module.exports = {
  nav: {
    fr: [
      // {
      //   label: "Nous rejoindre",
      //   href: "/fr/nous-rejoindre",
      // },
      {
        label: "Guide",
        href:
          "/fr/guides/les-premiers-gestes-pour-affronter-une-situation-de-cyberharcelement/introduction",
        isNew: true,
      },
      {
        label: "Projets",
        href: "/fr/projets",
      },
      {
        label: "Ressources",
        href: "/fr/ressources",
      },
    ],
  },
  footer: {
    fr: {
      social: [
        {
          icon: "facebook",
          href: "https://www.facebook.com/chayn",
          ...EXTERNAL_LINK_ATTRIBUTES,
        },
        {
          icon: "instagram",
          href: "https://www.instagram.com/chayn.be",
          ...EXTERNAL_LINK_ATTRIBUTES,
        },
        {
          icon: "mail",
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
            ...EXTERNAL_LINK_ATTRIBUTES,
          },
          {
            label: "Chayn Pakistan",
            href: "https://chaynpakistan.org/",
            ...EXTERNAL_LINK_ATTRIBUTES,
          },
          {
            label: "Chayn Inde",
            href: "http://chaynindia.com/",
            ...EXTERNAL_LINK_ATTRIBUTES,
          },
          {
            label: "Chayn Italie",
            href: "https://chaynitalia.org/",
            ...EXTERNAL_LINK_ATTRIBUTES,
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
  leaveWebsiteButton: {
    fr: "Quitter le site\n(ou presser 'esc')",
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
          imageName: "team.png",
          title: "Nous luttons contre les cyberviolences",
          text:
            "Chayn Belgium est une collective <b>féministe</b> et <b>antiraciste</b> utilisant les technologies ouvertes pour lutter contre les (cyber)violences faites aux femmes<sup>*</sup>",
        },
        {
          blocs: [
            {
              title: "Nous sensibilisons",
              text:
                "Les (cyber)violences ont pris une ampleur immense dans nos sociétés. Pourtant, ces (cyber)violences - et leurs effets secondaires physiques et psychologiques - restent incompris et sous-estimés par beaucoup de personnes. Il est temps de changer cela.",
            },
            {
              title: "Nous informons",
              text:
                "Nous créons et publions des ressources multilingues à destination des femmes* voulant apprendre à mieux se protéger en ligne (cybersécurité) ou ayant subi des (cyber)violences.",
            },
            {
              title: "Nous agissons",
              text:
                "Nous organisons des ateliers de cybersécurité, digital care et de prévention contre les cyberviolences. Restez informé.e sur notre newsletter pour savoir la prochaine date.",
            },
          ],
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
          imageName: "girls-flower.png",
          title: "Qui nous sommes",
          text:
            "Nous sommes une collective qui croyons que l’utilisation des technologies ouvertes doit soutenir les survivantes de violences (dont les cyberviolences) de genre. Nous travaillons avec une communauté de militant⸱e⸱s et de bénévoles compétent⸱e⸱s et passionné⸱e⸱s qui se battent pour changer les choses à nos côtés. Plus nous serons nombreuses et nombreux, plus notre impact pourra être grand.",
        },
        {
          title: "Principes & Valeurs",
          subtitle:
            "Toutes les actions de la collective féministe rencontrent les valeurs et principes suivants.",
          appendText:
            "*Par «femmes», il est entendu toute personne qui a fait, fait ou fera l’expérience sociale d’être femme ou d’être perçue comme femme au cours de sa vie.",
          cards: [
            {
              title: "Intersectionnel",
              text:
                "L’oppression n’est pas une exception. Les caractéristiques de race, genre, religion, identité sexuelle et d’invalidité impactent profondément nos expériences de vie. Nous sommes intersectionnel.les. Chayn Belgium s’engage à proposer des contenus et activités qui soient accessible à tou⸱tes.",
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
                '"Développé ensemble, pas pour". Tout le contenu créé par Chayn HQ a été développé en collaboration directe et continue avec des survivantes de violences et de cyberviolences faites aux femmes*.',
              imageName: "developpe-avec-des-survivantes.png",
            },
          ],
        },
        {
          title: "💜 Chayn BE recherche des militant·e·s et bénévoles 💜",
        },
        {
          title: "Comment faire pour nous rejoindre ?",
          bulletPoints: [
            "Remplissez le formulaire ci-dessous",
            "La collective se met d'accord sur les projets à développer",
            "Les membres de la collective se donnent rendez-vous 2 fois par mois (en ligne ou hors ligne selon le covid) pour travailler ensemble et faire bouger les choses",
          ],
        },
        {
          title: "Que faut-il pour nous rejoindre ?",
          bulletPoints: [
            "Vouloir lutter contre les violences et cyberviolences faites aux femmes*.",
            "Il ne faut pas forcément avoir un profil technique. La collective a besoin de militantes qui s'y connaissent en communication, en coordination de projet, etc...mais aussi en design ou développement web.",
            `Chaque membre de la collective adhère ${getInlineLink(
              "au code de conduite",
              "https://docs.chayn.be/charte-pour-les-membres"
            )} & ${getInlineLink(
              "aux valeur et principes",
              "https://docs.chayn.be/valeurs-and-principes"
            )} que la collective portent.`,
          ],
          link: {
            label: "Je m'implique",
            href:
              "https://docs.google.com/forms/d/e/1FAIpQLSe4XnZPoqdHkoYsdSbCqA85UGaWH88X2Tfpu9ICPCYej3XNWw/viewform",
            rel: "noreferrer noopener",
            target: "_blank",
          },
        },
        {
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
    {
      name: "project",
      template: PAGE_TEMPLATE.DEFAULT,
      urls: {
        fr: "/fr/projets",
      },
      sections: [
        {
          title: "Contexte",
          text: `Selon une étude d’${getInlineLink(
            "Amnesty International",
            "https://www.amnesty.org/en/latest/news/2017/11/amnesty-reveals-alarming-impact-of-online-abuse-against-women/"
          )}, un quart des femmes* ont déjà vécu des situations de violences dans l’espace numérique (harcèlement, menaces, injures, diffusion d’images de violences, etc.). Selon les Nations Unies, ${getInlineLink(
            "la situation s’est dramatiquement empirée",
            "https://www.unwomen.org/en/digital-library/publications/2020/04/brief-online-and-ict-facilitated-violence-against-women-and-girls-during-covid-19?mc_cid=8e92d77db3&mc_eid=943aed7f64#view"
          )} pendant la période de confinement du coronavirus. Les cyberviolences désignent toutes les formes de violences (harcèlement, menaces, injures, diffusion d’images de violences, etc.) qui s’exercent dans l’espace numérique.\n\nPourtant, il s’agit d’un sujet tabou et méconnu dans les écoles et dans la société dans son ensemble malgré l’omniprésence des technologies. Les conséquences, parfois irréversibles, vécues dans le silence poussent beaucoup de jeunes femmes* à montrer de la réticence à l’idée de militer en ligne ou d’utiliser leur voix. Ces constats ne peuvent malheureusement pas s’affaisser uniquement en les identifiant, raison pour laquelle <b>Chayn Belgium vise à informer, sensibiliser et agir face aux éléments précurseurs ainsi qu’aux conséquences de ces cyberviolences.</b>`,
        },
        {
          imageName: "equal-brussels.webp",
          title: "Projets",
          subtitle:
            "Ateliers de prévention contre les cyberviolences pour adultes",
          text:
            "Chayn Belgium souhaite former les femmes* à mieux appréhender la cybersécurité pour se protéger davantage en ligne. Ces ateliers s’adressent dans un premier temps aux femmes* hautement susceptibles de subir du cyberharcèlement (journalistes, activistes, militantes, politiques,..).",
          appendText:
            "Ces ateliers sont organisés avec le soutien de la Région bruxelloise dans le cadre de l'appel à projet de lutte contre les violences faites aux femmes*.",
        },
        // {
        //   imageName: "federation-wallonie-bruxelles.png",
        //   subtitle:
        //     "Ateliers de prévention contre les cyberviolences pour les jeunes de 16 à 18 ans.",
        //   text: "Ce projet est réalisé en 3 phases :",
        //   list: [
        //     "<strong>Sensibilisation</strong>\nVia l’organisation de ces ateliers en école secondaire, Chayn Belgium vise à sensibiliser les jeunes sur les questions de cyberviolences, en ouvrant le dialogue sur les types de cyberviolences, les démarches à suivre lorsqu’on en est victime et faire comprendre aux élèves pourquoi ce problème est genré.",
        //     "<strong>Prévention</strong>\nChayn Belgium vise à effectuer de la prévention proactive en enseignant aux jeunes les différentes manières de se sécuriser en ligne grâce aux bases de la cybersécurité.",
        //     "<strong>Réutilisation</strong>\nLe contenu pédagogique ludique sera publié sous licence ouverte et diffusé dans les écoles secondaires francophones. Concrètement, tout ce contenu sera mis en ligne sur le site internet de Chayn Belgium et directement téléchargeable pour les professeurs.",
        //   ],
        //   appendText:
        //     "Ce projet est développé avec le soutien de la Fédération Wallonie Bruxelles dans le cadre de l'appel à projet visant à lutter contre les violences faites aux femmes* et aux filles dans un contexte post covid.",
        // },
        {
          text:
            "La collective travaille continuellement à la création et à la mise en ligne de ressources multilingues et intersectionnelles pour vous aider.",
          link: {
            label: "Accéder aux ressources",
            href: "/fr/ressources",
          },
        },
      ],
    },
  ],
}
