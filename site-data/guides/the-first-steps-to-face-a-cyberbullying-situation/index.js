const { LANG, CONTENT_TYPE, getInlineLink } = require("../../constants")

module.exports = {
  [LANG.FR]: {
    slug:
      "les-premiers-gestes-pour-affronter-une-situation-de-cyberharcelement",
    content: [
      {
        type: CONTENT_TYPE.CHAPTER,
        title:
          "Les premiers gestes pour affronter une situation de cyberharcèlement",
        id: "introduction",
        content: [
          {
            type: CONTENT_TYPE.MAIN_TITLE,
            title:
              "Les premiers gestes pour affronter une situation de cyberharcèlement",
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Introduction",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: [
              `Commentaires à caractères sexistes, intimidation, humiliation, harcèlements, haine, violence, dans l’espace digital, public ou privé, ou sur des supports électroniques.`,
              `Vous sentez-vous inquiètes ou concernées ? Pensez-vous en être la cible ?`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: [
              `<b>Informées et soudées, nous serons mieux armées</b>`,
              `Ce guide a pour objectif de rassembler les ressources, conseils et protocoles existants pour faire face au harcèlement et aux autres formes de violences en ligne. L’objectif étant de mieux comprendre ce phénomène et de fournir quelques pistes en “premier secours” pour réagir face au cyberharcèlement.`,
              `Toutes ces informations ont été récoltées auprès de personnes ayant traversé cette douloureuse expérience ainsi qu’auprès d’associations et d’organisations référentes en ce domaine.`,
              `Si ce guide entend s’adresser aux personnes susceptibles d'être victimes de violences fondées sur le genre, et particulièrement aux femmes c’est qu’il en va de l'objectif premier de Chayn qui est de s’adapter à leurs besoins spécifiques en les guidant vers un meilleur accès à l’information.`,
              `Par ailleurs, certaines personnes se trouvant simultanément à l’intersection de plusieurs oppressions se retrouvent plus exposées à une forme de violence en ligne. En effet, au sexisme ou violence à l’égard des personnes LGBTQIA+ se superposent des violences basées sur l’appartenance ethnique, philosophique ou religieuse, au handicap ou encore la situation économique.`,
              `Ce qui suit ne se donne pour autant pas pour vocation de se substituer au travail des organismes, services de médiation et autres services publics ou privés spécialisés dans l’accompagnement psychologique, social et juridique.\nNotre contribution entend simplement répondre à un besoin de prévention et d’information vous permettant de déceler les situations de cyberviolence pour, par la suite, vous fournir des outils pour y faire face. Vous trouverez ici un certain nombre d’interlocuteurs et d’espaces de confiance vers qui vous tourner en toute sécurité.`,
              `Réagir face au cyberharcèlement et l’affronter demande de l’énergie, nous en sommes conscientes. C’est pourquoi nous avons tenu à vous partager un maximum des ressources à votre disposition. Il existe bien des structures en mesure de vous écouter, de vous conseiller et de vous soutenir dans vos démarches. C’est pourquoi nous avons recensé dans ce guide toutes les pistes que nous avons considérées comme pertinentes. Néanmoins, nous sommes conscientes des mécanismes sociétaux qui permettent au cyberharcèlement de prendre forme et du fait que ces enjeux méritent une réflexion approfondie. Aussi, nous relaierons ici les plaidoyers de personnes impliquées dans ce champ d'expertise.`,
            ],
            isJustify: true,
          },
        ],
      },
      {
        type: CONTENT_TYPE.CHAPTER,
        title: "Boîte 1: Comprendre et reconnaître le cyberharcèlement",
        id: "comprendre-et-reconnaitre-le-cyberharcelement",
        content: [
          {
            type: CONTENT_TYPE.TITLE,
            title: "De quoi parle-t-on ?",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Avec la digitalisation de nos sociétés, de nouvelles formes de violences sexistes et sexuelles apparaissent. Elles peuvent prendre différents visages, s’inscrire sur différents supports, et mener rapidement à du cyberharcèlement.`,
            isJustify: true,
          },
          // WORK ON INFOBOX
          // {
          //   type: CONTENT_TYPE.TITLE,
          //   title: "Infobox",
          // },
          // {
          //   type: CONTENT_TYPE.TEXT,
          //   text:
          //     "Le harcèlement ne trouve pas de définition claire dans le Code pénal. Néanmoins, le texte qui l’encadre stipule qu’il est composé de deux éléments : l’un matériel (les agissements doivent affecter la tranquillité d’une ou de plusieurs personnes) et l’autre, moral (l’intention de nuire).",
          // },
          // {
          //   type: CONTENT_TYPE.LIST,
          //   intro:
          //     "Il précise  également les Conditions à remplir pour qu’une situation soit acceptée juridiquement comme du harcèlement :",
          //   list: [
          //     "Le comportement doit être répétitif et abusif.",
          //     "Il doit y avoir atteinte à la tranquillité.",
          //     "Le harceleur doit être conscient du préjudice causé à sa victime.",
          //   ],
          // },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Différences entre cyberharcèlement et harcèlement physique",
            level: 3,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              `La diffusion de cyberviolences (en “meute” par exemple) peut être massive et l’impact instantané et les contenus peuvent atteindre un public large difficilement identifiable.  La rapidité de propagation du message rend la reprise de contrôle particulièrement complexe. Ceci ayant pour effet de générer un sentiment d’impuissance chez les victimes et de les plonger dans une détresse d’autant plus intense.`,
              `De manière générale, le cyberharcèlement se combine à sa variante physique. Chaque espace de vie devient contrôlé et assujetti à la traque. Exemple : le domicile d’une personne est publié sur un forum.`,
              `La personne à l’origine du harcèlement peut agir sous le couvert de l’anonymat grâce à l’utilisation de pseudonymes, par exemple. Cela renforce le sentiment d’insécurité que peut ressentir la victime et peut parfois provoquer crises d’angoisses et épisodes paranoïaques. Sans compter que le ou les auteur(s) jouissent d’une impunité telle qu’il devient difficile, voire impossible, de leur appliquer toute sanction légale.`,
              `En raison de la relative nouveauté des cyberviolences, la législation n’est pas encore mature  en ce qui concerne la régulation du web et de l’ensemble des outils numériques. De même, le web n’est pas organisé selon une structure stricte, ni par un fonctionnement, susceptible de faciliter l’intervention d’une autorité, qu’elle soit juridique ou institutionnelle.`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Avant d’envisager les différentes étapes que vous pourrez entreprendre pour réagir face à une telle situation, voici une liste des principaux espaces numériques où ces situations apparaissent, les différents supports numériques utilisés, les différentes formes que peuvent prendre les cyber violences/harcèlements ainsi que les types de violences discriminatoires véhiculées par celles-ci.`,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les espaces numériques du cyberharcèlement",
            level: 2,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              "<b>Emails</b>",
              "<b>Forums et salles de chat</b>",
              "<b>Conversations privées et en groupe</b> sur des applications comme Whatsapp, Facebook, Messenger, Signal, Telegram, Viber, Twitter, Instagram, Youtube, etc.",
              "<b>Réseaux sociaux :</b> Publications, tags, commentaires et messages.",
              "<b>Plateformes de jeux :</b> en streaming ou en réseau, chat privés ou publics.",
              "<b>Commentaires :</b> sur les sites web des différents médias,  sur YouTube, etc.",
              "<b>Plateformes collaboratives en milieu professionnel :</b> visioconférence, canaux de discussions de groupe, commentaire de documents, etc.",
              "<b>Sites de rencontre</b>",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les supports et médias, vecteurs du cyberharcèlement",
            level: 2,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              "<b>Supports écrits :</b> messages,  commentaires",
              "<b>Supports images :</b> photomontages, infographies, caricatures, dessins, photographies, gifs, etc. ",
              "<b>Supports vidéo :</b> Reels, Stories, live chat et autres contenus vidéo.",
              "<b>Supports audios :</b> messages et commentaires vocaux, podcast, appels en ligne, etc.",
              "<b>Création de profils virtuels ou de pages, piratages de compte, vol d’identité, etc.</b>",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Les formes que peuvent prendre la cyber violences/harcèlements : de la cyberintimidation au revenge porn",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Cyberstalking",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Création d’un sentiment d’oppression chez une personne cible en la mettant dans une position de proie traquée. Technique qui vise à se saisir de l’ensemble de l’identité virtuelle d’une personne afin d’ augmenter son sentiment d’insécurité et ainsi affecter sa vie personnelle.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Affichage",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Création d’un sujet de discussion, d’une salle de chat, d’un groupe ou d’une page sur un réseau social à votre encontre dans le but d’attirer l’attention sur vous ou de vous dénigrer auprès d’autres utilisateurs.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Insultes et discours haineux",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Formulation ou reprise de discours haineux, de menaces, de provocations ou d’insultes dans le but de blesser ou d’attenter à la réputation de quelqu’un, ou d’un groupe. De là est né le terme de trolling en anglais.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Diffamation et propagation de rumeurs",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Diffusion large et récurrente de faits, avérés ou non, impliquant une personne afin de promouvoir une image négative de celle-ci par dénigrement.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Attaques coordonnées ou raids furtifs",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque plusieurs personnes/comptes coordonnés accablent collectivement une personne ciblée en se servant d’attaques personnelles, de menaces ou d’insultes. Cette technique est souvent utilisée lors de débats d’opinion sur internet. Ces raids peuvent également se dérouler par messages privés ou par visio-conférence, via les messageries par exemple.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Exclusion",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Technique de discrimination volontaire et ciblée visant à évincer une personne d’un groupe, d’une conversation ou encore d’un jeux.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Harcèlement sexuel par le biais de supports numériques",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Sollicitations à connotations sexuelles ou sexistes exercées de manière répétée sur une personne constituant une atteinte à la dignité d’une personne en raison de leur caractère dégradant. Phénomène incluant notamment le sexting et l’envoi de contenus sexuellement explicites non désirés.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Revenge porn (Diffusion non consentie, sextorsion, chantage à la cam, compte fisha, ...)",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Très proche du “harcèlement sexuel par le biais de supports numériques”. Diffusions de photos ou de vidéos à caractère sexuel, mettant en scène la victime, sans son consentement et dans la volonté de lui nuire, le plus souvent dans un contexte de vengeance (jalousie, rupture,violence, etc.).`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Cyberviolences conjugales",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque le harcèlement s’inscrit dans les relations dysfonctionnelles et/ou abusives au sein d’un couple donné. Ces abus peuvent revêtir plusieurs formes : contrôle des activités du conjoint “en ligne” (lecture des sms, pression téléphonique constante, viol de l’intimité, etc.), d’injures et de campagnes de dénigrement sur les réseaux. Cela peut même mener à des menaces de mort dans certains cas. Les technologies numériques permettent également une surveillance accrue du conjoint (avec un contrôle des déplacements via des logiciels de traçage, par exemple). Il faut savoir que dans le cadre des violences conjugales, on observe depuis quelque temps un glissement vers l’espace numérique des violences sexuelles (comme c’est le cas du revenge porn mentionné plus haut) Une violence économique peut également découler de ce glissement (piratage des comptes bancaires, restriction des accès, etc.).`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Exposition et abus de la vie privée (Doxing)",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Utilisation et divulgation publique d'informations personnelles. Cette technique, communément appelée doxing, est utilisée par les harceleurs afin d'affaiblir la victime ou encore d’accentuer le processus d’intimidation.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Usurpation d’identité",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Création d’un compte, page ou profil sur un réseau social dans le but d’usurper l’identité digitale d’une personne.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Phishing",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Fraude à l’identité reposant sur la confiance et le crédit accordé à  un organisme public ou privé pour en imiter les usages. Cette arnaque sert très souvent des fins lucratives en permettant l’accès à des informations personnelles ou bancaires. Le harcèlement découle du caractère répétitif et récurrent de cette technique.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Astroturfing",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Technique de harcèlement visant  à coordonner des actions (création de faux comptes, achats de followers actifs, etc.)  pour gonfler les volumes de propagation d’un message afin de faire croire à un engouement authentique. Cette méthode de pression est très souvent utilisée à des fins politiques ou polémiques. La pression exercée sur la personne ciblée est ainsi considérablement accrue par le soin apporté au réalisme et à la crédibilité du message véhiculé.`,
            // \n${getInlineLink(
            //   "Premiers gestes (boîte 2)",
            //   "#boîte-2-agir-fac-au-cyberharcèlement",
            //   false
            // )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Les types de violences et discriminations véhiculées par le cyberharcèlement",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Les violences spécifiques entraînant une violation des droits humains  et une forme de discrimination à l’égard de certains publics sont majoritaires dans les types de violences en ligne menant aux harcèlement. Violences sexistes et sexuelles, mais également violences basées sur l’appartenance ethnique, philosophique ou religieuse, au handicap ou encore la situation économique, certaines personnes se trouvant à l’intersection de ces oppressions. Dans certains cas, la nature de ces violences tombent sous le coup de la loi et peuvent intervenir dans la définition du harcèlement.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Sexisme",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque le harcèlement consiste en des gestes, propos ou des attitudes sexistes. C'est-à-dire des remarques méprisantes et stéréotypées basées sur le genre.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Chantage, message de haine,  menaces et insulte, humiliation, envers des personnes, LGBTQIA+",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur l’orientation sexuelle d’une personne, son identité de genre et/ou son expression de genre. Les violences à l’égard des publics LGBTQIA+ découlent des violences de genres et s’inscrivent clairement dans le continuum des violences lié aux stéréotypes de genre.*`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Racisme",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur l’origine ethnique d’une personne, sa religion ou son appartenance philosophique.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Slut shaming",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque la démarche a pour but de générer de la honte chez une femme* en portant le discrédit sur sa sexualité, sa tenue vestimentaire, ou sur toute autre attitude ou posture jugée déshonorante.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Grossophobie",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur le poids d’une personne, considéré comme supérieure aux standards esthétiques valorisés par le groupe.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Body Shaming",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Lorsque la démarche a pour but de générer de la honte chez une personne qui ne correspond pas, par l’un ou l’autre aspect, aux standards esthétiques valorisés par le groupe.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Validisme",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Le validisme ou capacitisme est une discrimination basée sur le handicap. C’est un système d’oppression qui considère que les personnes valides sont supérieures aux personnes handicapées. Le handicap est alors perçu comme quelque chose “d’anormal” et de honteux. L’idéal à atteindre est la validité.`,
            isJustify: true,
          },
          // TODO: Infobox to design
          // {
          //   type: CONTENT_TYPE.LIST,
          //   intro: "Inforbox ressources",
          //   list: [
          //     `Cyberbullying and Hate Speech Online - What can social data tell us about cyberbullying and hate speech online? ${getInlineLink(
          //       "Brandwatch and Ditch the Label, 2016",
          //       "https://www.brandwatch.com/reports/cyberbullying-2016/"
          //     )}`,
          //     `La plateforme de conseil du gouvernement français, à destination des mineurs, de leurs parents, professeurs et écoles. ${getInlineLink(
          //       "Qu’est-ce que le cyberharcèlement ?",
          //       "https://www.nonauharcelement.education.gouv.fr/que-faire/quest-ce-que-le-cyberharcelement/"
          //     )}`,
          //     getInlineLink(
          //       "Fiche thématique de l’UNICEF sur le cyberharcèlemet",
          //       "https://www.unicef.fr/sites/default/files/fiche_thematique-myunicef-le_cyberharcelement.pdf"
          //     ),
          //     getInlineLink(
          //       "10 types de cyberharcèlement",
          //       "https://blog.securly.com/2018/10/04/the-10-types-of-cyberbullying/"
          //     ),
          //     getInlineLink(
          //       "Note sur le cyberharcèlement",
          //       "https://www.renaissancenumerique.org/ckeditor_assets/attachments/453/note_sur_le_cyberharcelement.pdf"
          //     ),
          //     getInlineLink(
          //       "Se protéger contre le doxing",
          //       "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/"
          //     ),
          //   ],
          // },
        ],
      },
      {
        type: CONTENT_TYPE.CHAPTER,
        title: "Boîte 2: Agir face au cyberharcèlement",
        id: "agir-face-au-cyberharcelement",
        content: [
          {
            type: CONTENT_TYPE.TITLE,
            title: "Agir face au cyberharcèlement",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "<b>Comment réagir face au harcèlement en ligne ? Que faire si l’on doit faire face à une déferlante d’injures ?  Que faire face à une attaque furtive ?</b>",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: [
              `Bienvenue dans la boîte 2, agir face au cyberharcèlement. Nous l’avons vu, les formes de harcèlement ou de violence rencontrées dans l’espace digital peuvent être nombreuses ( BOITE 1). De même, les impacts sur votre vie peuvent être multiples.`,
              `Il est donc peu réaliste de fournir une liste exhaustive adaptée à chaque situation. Mais, des premiers soins peuvent être prodigués. C’est l’objet de cette BOITE 2`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: [
              `La frontière entre le digital et le monde physique (beaucoup de femmes* ont pu le vivre), est ténue (on peut également l’appeler “espace phygital”). Il faut donc, dès que possible, envisager de porter plainte. Nous avons compilé toutes les informations, démarches et éléments nécessaires pour vous accompagner dans ce sens. (BOÎTE 3)`,
              `Sachez qu’une information essentielle sera requise par les services de police et que vous devez impérativement prendre en compte :`,
              `Conservez les messages et tout autre élément qui pourraient constituer une preuve devant les autorités avant de signaler, supprimer les contenus ou de bloquer les comptes. N’hésitez pas à demander à une personne de confiance de le faire pour vous.`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les premiers gestes",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Évitez de répondre",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous risqueriez d’ouvrir la voie à un acharnement de la part de votre agresseur, impliquant une surenchère dans ses attaques. Ne perdez pas de vue que tout ce que vous direz pourrait être instrumentalisé contre vous. Une réponse de votre part ira également renforcer la visibilité des contenus qui vous atteignent et c’est dans votre intérêt de l’éviter.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Demandez de l’aide",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Si vous êtes seul·e ou que vous peinez à trouver une écoute bienveillante parmi vos proches, il existe des organismes et des intervenants prêts à vous épauler. Vous trouverez toutes les ressources nécessaires boîte 4`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Gardez les preuves",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `<b>Faites toujours des copies ou des captures d’écran</b> des contenus que vous estimez illicites et abusifs. Pensez à sauvegarder tous ces éléments dans un lieu sécurisé (disque dur externe, sauvegarde cryptée en ligne…) Vous pourrez vous en servir si vous êtes amenée à constituer un dossier. Récolter des preuves peut demander énormément d’énergie. N’hésitez pas à demander à une personne de confiance de le faire pour vous.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Signalez aux plateformes",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `<b>Signalez l’infraction aux plateformes</b> sur lesquelles se déroulent les abus. Pour que le signalement fonctionne et soit effectivement pris en compte, n’hésitez pas à demander à un maximum de témoins de signaler également les contenus avec vous.`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Ensuite…",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `En fonction de la situation, ripostez de manière spécifique, prenez soin de vous, organisez les preuves (traces numériques) et portez plainte (Boîte 3).`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Ne restez pas seul·e !",
            level: 2,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `<b>Il est important de sortir de l’isolement, d’être entouré·e et conseillé·e. Vous n’êtes pas seul·e !</b>`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes adulte ?",
            level: 3,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              `Parlez-en à une personne de confiance, amis, proches, collègues, parents,... Il existe aussi des organismes et des intervenants prêts à vous épauler.`,
              `Vous êtes une personne isolée ou vous vivez dans un contexte familial de violence, de dépendance ou d’emprise psychologique. Dans ce cas, nous avons recensé pour vous, en boîte 4, les ressources à votre disposition pour faire face au cyberharcèlement.`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes mineur·e ou souhaitez aider un mineur ?",
            level: 3,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              `Parlez-en directement à un adulte de confiance. Choisissez une personne qui vous sécurise: un·e de vos professeurs, parents,  assistant social, centre PMS de votre école ou de votre commune, planning familial, etc.`,
              `<b>Appelez le 116 000 - Child Focus</b>\nEn Belgique, Child Focus est joignable gratuitement au 116 000 pour les questions de sécurité en ligne destinées aux enfants, adolescents, parents et professionnels de l’éducation.\n\nLe site ${getInlineLink(
                "CYBERSQUAD",
                "https://cybersquad.be/"
              )}\nCe site peut accompagner les jeunes en répondant aux questions par chat principalement.\n\nL’application ${getInlineLink(
                "CYBERHELP",
                "https://childfocus.be/fr/nouvelle/lancement-de-cyber-help-lapplication-qui-vole-au-secours-du-jeune-en-cas-de-cyber"
              )}.\nChild Focus a également mis en place plusieurs dispositifs pour aider les enseignants et parents à prévenir, déceler, sensibiliser et réagir face à des situation de cyber harcèlement. Il existe une application ( Cyber help ) pour des institutions de mineurs qui aide à lutter plus efficacement contre ce phénomène.`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes témoins de faits de harcèlement en ligne ?",
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous pouvez porter secours à la victime en lui proposant votre soutien et votre écoute bienveillante et en vous référant aux conseils recensés en boîte 7: Être un bon·ne allié·e`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Quelques outils",
            level: 2,
          },
          // TODO
          {
            type: CONTENT_TYPE.TEXT,
            text: `En cours de rédaction...`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Cas particuliers",
            level: 2,
          },
          // TODO
          {
            type: CONTENT_TYPE.TEXT,
            text: `En cours de rédaction...`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les preuves et traces numériques",
            level: 2,
          },
          // TODO
          {
            type: CONTENT_TYPE.TEXT,
            text: `En cours de rédaction...`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Aller plus loin",
            level: 2,
          },
          // TODO
          {
            type: CONTENT_TYPE.TEXT,
            text: `En cours de rédaction...`,
            isJustify: true,
          },
        ],
      },
    ],
  },
}
