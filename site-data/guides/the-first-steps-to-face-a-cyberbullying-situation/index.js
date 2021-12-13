const { LANG, CONTENT_TYPE, getInlineLink } = require("../../constants")

module.exports = {
  [LANG.FR]: {
    slug:
      "les-premiers-gestes-pour-affronter-une-situation-de-cyberharcelement",
    content: [
      {
        type: CONTENT_TYPE.CHAPTER,
        title: "Introduction",
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
            level: 3,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Avec la digitalisation de nos sociétés, de nouvelles formes de violences apparaissent . Elles peuvent prendre différents visages, s’inscrire sur différents supports, et mener rapidement à du cyberharcèlement. Les violences sexistes et sexuelles y sont majoritaires.`,
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
            title:
              "En quoi le cyberharcèlement se distingue-t-il du harcèlement physique ?",
            level: 4,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: [
              "La diffusion et la publicité peuvent être massives et l’impact instantané. Les contenus peuvent atteindre un public large et difficilement identifiable.   La rapidité de propagation du message rend la reprise de contrôle particulièrement complexe. Ceci ayant pour effet de générer un sentiment d’impuissance chez les victimes et de les plonger dans une détresse d’autant plus intense.",
              "De manière générale, le cyberharcèlement se combine à sa variante physique, ce qui finit d’en isoler la victime. Chaque espace de vie se voit alors contrôlé et assujetti à la traque.",
              "La personne à l’origine du harcèlement peut agir sous le couvert de l’anonymat grâce à l’utilisation de pseudonymes, par exemple. Cela renforce le sentiment d’insécurité que peut ressentir la victime et peut même parfois provoquer crises d’angoisses et épisodes paranoïaques. Sans compter que le ou les auteur(s) jouissent d’une impunité telle qu’il devient difficile, voire impossible, de leur appliquer toute sanction légale.",
              "En raison de la relative nouveauté des enjeux en présence, la législation n’a pas encore atteint sa phase de totale maturité en ce qui concerne la régulation du web et de l’ensemble des outils numériques, en constante expansion.. De même, le web n’est pas organisé selon une structure stricte, ni par un fonctionnement, susceptible de facilité l’intervention d’une autorité, qu’elle soit juridique ou institutionnelle.",
              `Avant d’envisager les différentes étapes que vous pourrez entreprendre pour réagir face à une telle situation, voici une liste des principaux espaces numériques où ces situations apparaissent, les différents supports numériques utilisés, les différentes formes que peuvent prendre les cyber violences/harcèlements ainsi que les types de violences discriminatoires véhiculées par celles-ci.`,
            ],
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les espaces numériques du cyberharcèlement",
            level: 3,
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              "<b>Emails :</b> chaînes, conversations, etc.",
              "<b>Forums et salles de chat.</b>",
              "<b>Conversations privées et en groupe</b> sur les applications comme Whatsapp, Facebook, Messenger, Signal, Telegram, Viber, Twitter, Instagram, Youtube, etc.",
              "<b>Réseaux sociaux :</b> Publications, tags, commentaires et messages",
              "<b>Plateformes de jeux</b>, en streaming ou en réseau :</b> chat privés ou publics",
              "<b>Commentaires</b> sur les sites web des différents médias,  sur YouTube, etc.",
              "<b>Plateformes collaboratives en milieu professionnel :</b> visioconférence, canaux de discussions de groupe, commentaire de documents, etc.",
              "<b>Sites de rencontre</b>",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les supports et médias, vecteurs du cyberharcèlement",
            level: 3,
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
            level: 3,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Affichage",
            level: 4,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Création d’un sujet de discussion, d’une salle de chat, d’un groupe ou d’une page sur un réseau social à votre encontre dans le but d’attirer l’attention sur vous ou de vous dénigrer auprès d’autres utilisateurs.\n${getInlineLink(
              "Premiers gestes (boîte 2)",
              "#boîte-2-agir-fac-au-cyberharcèlement",
              false
            )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Cyberstalking",
            level: 4,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Création d’un sentiment d’oppression chez une personne cible en la mettant dans une position de proie traquée. Technique qui vise à se saisir de l’ensemble de l’identité virtuelle d’une personne afin d’ augmenter son sentiment d’insécurité et ainsi affecter sa vie personnelle.\n${getInlineLink(
              "Premiers gestes (boîte 2)",
              "#boîte-2-agir-fac-au-cyberharcèlement",
              false
            )}`,
            isJustify: true,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Diffamation et propagation de rumeurs",
            level: 4,
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Diffusion large et récurrente de faits, avérés ou non, impliquant un individu afin de promouvoir une image négative de celui-ci par dénigrement.Certains agissements constituent du harcèlement.\n${getInlineLink(
              "Premiers gestes (boîte 2)",
              "#boîte-2-agir-fac-au-cyberharcèlement",
              false
            )}`,
            isJustify: true,
          },

          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Lorsque vous jouissez du soutien d’une communauté déjà active ou que vous êtes une personne médiatisée/influente, vous pouvez également :",
            list: [
              `Demander à une personne de confiance de prendre note des narratifs et de veiller aux volumes`,
              `Vous pouvez lancer une contre-offensive munie d’une copie des contenus inappropriés , en demandant à des allié.e.s (des personnes que vous avez fédéré.e.s) de porter votre parole. Attention, ce dispositif est conseillé uniquement dans le cas d’une crise médiatique forte et si vous bénéficiez d’un soutien suffisamment large.`,
              `<b>Discours et insultes</b> : Formulation ou reprise de discours haineux, de menaces, de provocations ou d’insultes dans le but de blesser ou d’attenter à la réputation de quelqu’un, ou d’un groupe. De là est né le terme de trolling en anglais.\n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Exclusion</b> : Technique de discrimination volontaire et ciblée visant à évincer une personne d’un groupe, d’une conversation ou encore d’un jeux.\n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Lorsque vous jouissez du soutien d’une communauté  déjà active ou que vous êtes une personne médiatisée/influente, vous pouvez également :",
            list: [
              `Demander à une personne de confiance de prendre note des narratifs et de veiller aux volumes`,
              `Vous pouvez lancer une contre-offensive munie d’une copie des contenus inappropriés , en demandant à des allié.e.s (des personnes que vous avez fédéré.e.s) de porter votre parole. Attention, ce dispositif est conseillé uniquement dans le cas d’une crise médiatique forte et si vous bénéficiez d’un soutien suffisamment large.`,
              `<b>Harcèlement sexuel par le biais de supports numériques</b> : Sollicitations à connotations sexuelles ou sexistes exercée de manière répétée sur une personne constituant une atteinte à la dignité d’une personne en raison de leur caractère dégradant. Phénomène incluant notamment le sexting et l’envoi de contenus sexuellement explicites non désirés.\n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Exposition et abus de la vie privée</b> : Utilisation et divulgation publique d'informations personnelles. Cette technique, communément appelée doxing, est utilisée par les harceleurs afin d'affaiblir la victime ou encore d’accentuer le processus d’intimidation.\n-> En cas de situation de doxing, suivez les conseils disponibles grâce au lien suivant : ${getInlineLink(
                "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/https:/onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/",
                "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/https:/onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/"
              )}\n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Usurpation d’identité</b> : Création d’un compte, page ou profil sur un réseau social dans le but d’usurper l’identité digitale d’une personne.\nSignalez immédiatement l’usurpation d’identité à la plateforme concernée. N’oubliez pas au préalable, de faire des  captures d’écran des pages frauduleuses afin d’en garder la preuve.
              \n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Phishing</b> : Fraude à l’identité reposant sur la confiance et le crédit accordé à un organisme public ou privé pour en imiter les usages. Cette arnaque sert très souvent des fins lucratives en permettant l’accès à des informations personnelles ou bancaires. Le harcèlement découle du caractère répétitif et récurrent de cette technique.\n\nVous devez également signaler toute tentative de phishing en envoyant le message suspect à l’adresse ${getInlineLink(
                "suspect@safeonweb.be",
                "mailto:suspect@safeonweb.be"
              )}. N’oubliez cependant pas d’en faire une capture d’écran, que vous conserverez, avant de le supprimer.
              \n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>L’astroturfing</b> : Technique de harcèlement visant  à coordonner des actions (création de faux comptes, achats de followers actifs, etc.)  pour gonfler les volumes de propagation d’un message afin de faire croire à un engouement authentique. Cette méthode de pression est très souvent utilisée à des fins politiques ou polémiques. La pression exercée sur la personne ciblée est ainsi considérablement accrue par le soin apporté au réalisme et à la crédibilité du message véhiculé.\nPour identifier des contenus relevant d’astroturfing :\n- sur Facebook, rendez-vous  ${getInlineLink(
                "ici",
                "https://fr.wikihow.com/d%C3%A9masquer-un-faux-compte-Facebook"
              )},\n-  sur Twitter, rendez-vous ${getInlineLink(
                "ici",
                "https://thenextweb.com/news/how-to-find-and-remove-fake-accounts-on-twitter"
              )}\nSouvent, il s’agit d’images glanées sur le web, comme des fausses photo de profil par exemple. Vous pouvez donc tenter une recherche d’image inversée sur Google. Ainsi vous verrez si cette même  photographie a déjà été utilisée à d’autres fins.`,
              `<b>Revenge porn</b> :  Très proche du “harcèlement sexuel par le biais de supports numériques Diffusions de photos ou de vidéos à caractère sexuel, mettant en scène la victime, sans son consentement et dans la volonté de lui nuire, le plus souvent dans un contexte de vengeance (partenaire éconduit, jalousie amoureuse, etc.). ${getInlineLink(
                "Voir plus",
                "https://igvm-iefh.belgium.be/fr/activites/violence/revenge_porn"
              )}\n\nFaites une capture d’écran ou une copie vidéo du contenu indésirable et signalez-le à la plateforme  avant de le supprimer  pour éviter qu’il ne se propage davantage.\n\n -> Porter plainte d’urgence auprès de l’Institut de l’égalité entre les femmes et les hommes et suivez leurs conseils.\n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Les cyberviolences conjugales : Lorsque le harcèlement s’inscrit dans les relations dsifonctionnelles et/ou abusives au sein d’un couple donné. Ces abus peuvent revêtir plusieurs formes</b> : contrôle des activités du conjoint “en ligne” (lecture des sms, pression téléphonique constante, viol de l’intimité, etc., d’injures et de campagnes de dénigrement sur les réseaux. Cela peut même mener à des menaces de mort dans certains cas. Les technologies numériques permettent également une surveillance accrue du conjoint( avec un contrôle des déplacements via des logiciels de traçage, par exemple. Il faut savoir que dans le cadre des violences conjugales, on observe depuis quelque temps un glissement vers l’espace numérique des violences sexuelles (comme c’est le cas du revenge porn mentionné plus haut) Une violence économique peut également découler de ce glissement (piratage des comptes bancaires, restriction des accès, etc.)
              \n -> ${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les formes de violence générées par le cyberharcèlement",
            list: [
              `<b>Sexisme</b>: Lorsque le harcèlement consiste en des gestes, propos ou des attitudes sexistes.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Slut shaming</b>:  Lorsque la démarche a pour but de générer  de la honte chez une  femme en portant le discrédit sur sa  sexualité, sa tenue vestimentaire, ou sur toute autre attitude ou posture jugé déshonorante.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Chantage, message de haine,  menaces et insulte, humiliation, envers des personnes, LGBT+</b>: Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur l’orientation sexuelle d’une personne, son identité de genre et son expression de genre.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Humiliations et menaces à l’encontre de personnes racisées</b>: Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur l’origine ethnique d’une personne.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Grossophobie</b>: Lorsque le harcèlement consiste en des gestes, propos ou attitudes portant sur le poids d’une personne, considéré comme supérieure aux standards esthétiques valorisés par le groupe.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Body Shaming</b>: Lorsque la démarche a pour but de générer de la honte chez une personne qui ne correspond pas, par l’un ou l’autre aspect, aux standards esthétiques valorisés par le groupe.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
            ],
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous avez rencontré une ou plusieurs situations de harcèlement ou de violences dans l’espace digital ? Vous avez envie de contribuer à ce wiki sur le sujet ? De compléter cette liste ?  N’hésitez pas à nous contacter : ${getInlineLink(
              "collective@chayn.be",
              "mailto:collective@chayn.be"
            )}`,
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Inforbox ressources",
            list: [
              `Cyberbullying and Hate Speech Online - What can social data tell us about cyberbullying and hate speech online? ${getInlineLink(
                "Brandwatch and Ditch the Label, 2016",
                "https://www.brandwatch.com/reports/cyberbullying-2016/"
              )}`,
              `La plateforme de conseil du gouvernement français, à destination des mineurs, de leurs parents, professeurs et écoles. ${getInlineLink(
                "Qu’est-ce que le cyberharcèlement ?",
                "https://www.nonauharcelement.education.gouv.fr/que-faire/quest-ce-que-le-cyberharcelement/"
              )}`,
              getInlineLink(
                "Fiche thématique de l’UNICEF sur le cyberharcèlemet",
                "https://www.unicef.fr/sites/default/files/fiche_thematique-myunicef-le_cyberharcelement.pdf"
              ),
              getInlineLink(
                "10 types de cyberharcèlement",
                "https://blog.securly.com/2018/10/04/the-10-types-of-cyberbullying/"
              ),
              getInlineLink(
                "Note sur le cyberharcèlement",
                "https://www.renaissancenumerique.org/ckeditor_assets/attachments/453/note_sur_le_cyberharcelement.pdf"
              ),
              getInlineLink(
                "Se protéger contre le doxing",
                "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/"
              ),
            ],
          },
        ],
      },
      {
        type: CONTENT_TYPE.CHAPTER,
        title: "Boîte 2: Agir face au cyberharcèlement",
        id: "agir-face-au-cyberharcelement",
        content: [
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Comment réagir face au harcèlement en ligne ? Que faire si l’on doit faire face à une déferlante d’injures ?  Que faire face à une attaque furtive ?",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Nous l’avons vu, les formes de harcèlement ou de violence rencontrés dans l’espace digital peuvent être nombreuses. De même, les impacts sur votre vie peuvent être multiples. Il est donc peu réaliste de fournir une liste exhaustive adaptée à chaque situation. Mais, des premiers soins peuvent être prodigués. Lors de vos démarches, surtout :\n\nNe restez pas seule - soyez conseillée - soyez écoutée\n\nLa frontière entre le digital et le monde physique (beaucoup de femmes* ont pu le vivre), est ténue (Espace phygital). Il faut donc, dès que possible, envisager de porter plainte. Nous avons compilé toutes les informations, démarches et éléments nécessaires pour vous accompagner dans ce sens.\n\nAvant d’ouvrir notre « boîte de secours », il est une information essentielle, requise par les services de police, que vous devez impérativement prendre en compte \n\n<b>Conservez les messages et tout autre élément qui pourraient constituer une preuve devant les autorités avant de signaler, supprimer les contenus ou de bloquer les comptes !</b>",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les premiers gestes :",
            list: [
              "Évitez de répondre. Vous risqueriez d’ouvrir la voie à un acharnement de la part de votre agresseur, impliquant une surenchère dans ses attaques car ne perdez pas de vue que tout ce que vous direz sera évidemment instrumentalisé contre vous. Une réponse de votre part ira également renforcer la visibilité des contenus qui vous atteignent et c’est dans votre intérêt de l’éviter.",
              "Osez demander de l’aide. Si vous êtes seule ou que vous peinez à trouver une écoute bienveillante parmi vos proches, il existe des organismes et des intervenants prêts à vous épauler.",
              //Vous trouverez toutes les ressources nécessaires boîte 4",
              "Faites toujours des copies ou des captures d’écran des contenus que vous estimez illicites et abusifs. Pensez à sauvegarder tous ces éléments dans un lieu sécurisé (disque dur externe, sauvegarde cryptée en ligne…) Vous pourrez vous en servir si vous êtes amenée à constituer un dossier.",
              "Signalez l’infraction aux plateformes sur lesquelles se déroulent les abus. Pour que le signalement fonctionne et soit effectivement pris en compte, n’hésitez pas à demander à un maximum de témoins de signaler également les contenus avec vous.",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Ne restez pas seule",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Il est important de sortir de l’isolement, d’être entourée et conseillée",
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes adulte ?",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Parlez-en également à toute personne de confiance, ne restez pas seule! Il existe des organismes et des intervenants prêts à vous épauler.`,
            // Need boite 4 for this one
            // `Vous êtes une personne isolée ou vous vivez dans un contexte familial de violence, de dépendance ou d’emprise psychologique. Dans ce cas, nous avons recensé pour vous, en boîte 4, les ressources à votre disposition pour faire face au cyberharcèlement.
            // `,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes mineure d’âge ou aidez un mineur ?",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Parlez-en directement à un adulte de confiance. Choisissez une personne qui vous sécurise: un de vos professeurs, parents,  assistant social, centre PMS de votre école ou de votre commune, planning familial, etc.\n\nEn Belgique, Child Focus est joignable gratuitement au 116 000 pour les questions de sécurité en ligne destinées aux enfants, adolescents, parents et professionnels de l’éducation. Le site ${getInlineLink(
              "https://cybersquad.be/",
              "https://cybersquad.be/"
            )} peut accompagner le jeune victime de cyberharcèlement.`,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Vous êtes témoins de faits de harcèlement en ligne ?",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous pouvez porter secours à la victime en lui proposant votre soutien et votre écoute bienveillante et en vous référant aux conseils recensés en boîte 7 (En cours de rédaction).`,
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Quelques conseils :",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les premiers gestes :",
            list: [
              `Comme nous l’avons déjà énoncé plus haut, faites toujours des <b>captures d’écrans</b> avant de bloquer ou de signaler les comptes et/ou les contenus indésirables car vous risquez de perdre définitivement de précieux éléments de preuve.`,
              `Pour signaler des messages, ou autres contenus indésirables, aux plateformes qui les hébergent, vous pouvez suivre les instructions disponibles via le lien suivant :\n\n-> ${getInlineLink(
                "Ressource complète",
                "https://onlineharassmentfieldmanual.pen.org/fr/le-signalement-aux-plateformes/"
              )} du online harassment field manual.\n\nLiens rapides :\n\n${getInlineLink(
                "Twitter",
                "https://help.twitter.com/fr/safety-and-security/report-abusive-behavior"
              )} / ${getInlineLink(
                "Facebook",
                "https://www.facebook.com/help/1753719584844061?helpref=page_content"
              )} / ${getInlineLink(
                "Whatsapp",
                "https://faq.whatsapp.com/general/security-and-privacy/about-blocking-and-reporting-contacts"
              )} / ${getInlineLink(
                "Tiktok",
                "https://support.tiktok.com/fr/safety-hc/report-a-problem"
              )} / ${getInlineLink(
                "Instagram",
                "https://help.instagram.com/192435014247952"
              )} / ${getInlineLink(
                "Twitch",
                "https://help.twitch.tv/s/article/how-to-file-a-user-report?language=fr"
              )} / ${getInlineLink(
                "Medium",
                "https://help.medium.com/hc/en-us/articles/217047977-Report-posts-users"
              )}`,
              `Sur Facebook, une fonctionnalité vous permet de masquer certains commentaires au bas de vos publications. L’auteur n’en sera pas alerté et sera, lui, toujours disposé à les voir. Ces contenus seront cependant bien conservés mais inaccessibles aux autres utilisateurs`,
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Cas particuliers",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Nous l’avons vu, les formes de harcèlement ou de violences rencontrées dans l’espace digital peuvent être nombreuses, leur impact important et leur diffusion très large. Certains cas spécifiques nécessiteront des protocoles d’action bien précis, et parfois plus complexes. En effet, certaines victimes, en raison de leur situation, de leur statut ou de leur âge, devront faire l’objet d’un traitement plus particulier. En voici deux exemples :`,
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: `<b>Journaliste, Femme politique ou autre figure médiatique</b>\n\nIl s’agit ici d’un cas spécifique en raison de l’effet de la médiatisation sur la diffusion des contenus agressifs. Une rumeur, ou campagne de dénigrement, bénéficiera en effet d’un plus large écho en fonction de la notoriété de la personne visée. \n\nSi vous subissez les répercussions négatives d’une couverture médiatique, relative ou importante, renforçant le sentiment de détresse que vous ressentez face à du cyberharcèlement, voici quelques conseils susceptibles de vous aider :`,
            list: [
              `Publiez un communiqué officiel, en utilisant de préférence le même canal que celui dont sont issues les attaques (par exemple, dans le cas d’une rumeur diffusée sur Instagram, utilisez cette même plateforme pour émettre votre message.)`,
              `Vous pouvez également envisager de contacter la presse, solliciter le concours de professionnels de l’information, si vous estimez que la situation vous échappe.`,
              `Evitez de répondre ponctuellement aux agressions afin d’éviter que vos propos soient isolés de leur contexte et instrumentalisés à vos dépens. Il est important également d’éviter une surexposition qui vous desservirait.`,
              `Mettre sur pied un dispositif de veille ou de monitoring (externe)`,
              `Essayer, à votre échelle, de fédérer une communauté de soutien disposée à porter votre parole et de témoigner en votre faveur.`,
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: `<b>Enfant, adolescente ou adulte sous tutelle</b>\n\nCertaines personnes sont particulièrement vulnérables et constituent en cela des proies particulièrement attrayantes pour les prédateurs du web. Que ce soit en raison de leur jeune âge ou de leur situation de dépendance à l’égard d’autres adultes, il est difficile pour ces victimes d’identifier des contextes de harcèlement ou d’adopter les bons réflexes pour y faire face.`,
            list: [
              `Dès les premiers signes ou doutes quant à une situation de cyberharcèlement, tournez-vous directement vers un, ou plusieurs, adulte de confiance : parents, professeur, assistant social, etc.`,
              `Evitez de répondre aux messages et aux sollicitations de la part de votre agresseur. Il est important pour vous de vous protéger et d’empêcher toute tentative de manipulation.`,
              `Vous pouvez aussi contacter ${getInlineLink(
                "Childfocus chat",
                "http://www.childfocus.be/fr/besoin-daide/chat-116000"
              )} et ${getInlineLink(
                "103ecoute.be",
                "http://www.103ecoute.be/"
              )}`,
            ],
          },
          // Revenge porn doc ~page 12
          // {
          //   type: CONTENT_TYPE.TITLE,
          //   title: "Cas particuliers",
          // },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les preuves et traces numériques",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Veillez à soigneusement récolter et compiler l’ensemble des éléments susceptibles de prouver qu’il y a bien fraude ou intention de nuire. Conservez également tout indice pouvant mener à l’identité du/des auteur/s. Cet ensemble d’informations constitue ce que l’on appelle “les traces numériques”.",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Dans un emplacement sécurisé, pensez à recenser et sauvegarder :",
            list: [
              `Les dates et heures des messages ou échanges litigieux,`,
              `La plateforme le réseau social, l’application ou le site internet utilisé,`,
              `Le type de document ou de support employé (Message privé, commentaire, contenu visuel, etc.),`,
              `Les éventuels liens URL (vous pouvez utiliser Archive.is pour conserver une adresse URL)`,
              `Le nombre de messages,`,
              `La nature de l’incident en ligne (menace de nature sexuelle, attaque à caractère raciste, etc.)`,
              `Le nom ou pseudonyme utilisé par l’auteur ainsi que ses potentielles autres identités digitales (accompagnées des différentes photos le représentant, ou désignées comme telles.) Si vous êtes en mesure d’y avoir accès, notez également son adresse email, son numéro de téléphone, son adresse IP ou encore des indices permettant sa localisation. Tout élément relatif à son identité peut s’avérer déterminant pour confronter la personne à l’origine du harcèlement,`,
              `Les captures d’écran ou vidéos enregistrées,`,
              `Votre matériel informatique, vos identifiants et votre nom d’utilisateur`,
              `Les autres agressions, verbales et/ou physiques, subies hors de l’espace numérique, liées aux faits relatés en ligne,`,
              `Toute éventuelle preuve de préjudice : certificat médical, bilan psychologique, ordonnance psychiatrique, ou tout autre témoignage de votre entourage, professionnel ou privé,`,
              `La fréquence des attaques, le type d’attaque, ou tout autre élément de contexte que vous jugerez pertinent de mentionner.`,
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Info box",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous avez vécu une expérience particulière et vous aimeriez nous la partager ?  Vous avez appliqué une méthode efficace que vous voudriez nous exposer ? Vous avez trouvé un appui auprès d’un organisme ou d’une structure dont nous n’avons pas parlé ?\n\vVous pouvez contribuer à enrichir notre boîte à idées.\nContactez-nous : ${getInlineLink(
              "collective@chayn.be",
              "mailto:collective@chayn.be"
            )}`,
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: `Pour aller plus loin :`,
            list: [
              `Pour les curieuses ou passionnée d’outils informatiques , l’outil  « OSINT » (Open source investigation) ${getInlineLink(
                "https://osintframework.com/",
                "https://osintframework.com/"
              )} investigations sur base des données et informations accessibles librement mais parfois bien cachées, sur le web`,
              `Outil Instagram développé par deux victimes de cyberharcèlement: ${getInlineLink(
                "https://siecledigital.fr/2021/04/22/instagram-outils-cyberharcelement-messsages-prives/",
                "https://siecledigital.fr/2021/04/22/instagram-outils-cyberharcelement-messsages-prives/"
              )}`,
              `Deux initiatives que nous sommes fières de soutenir: ${getInlineLink(
                "https://www.ladn.eu/tech-a-suivre/block-party-twitter-troll/",
                "https://www.ladn.eu/tech-a-suivre/block-party-twitter-troll/"
              )}\n${getInlineLink(
                "https://time.com/5916772/kid-of-the-year-2020/",
                "https://time.com/5916772/kid-of-the-year-2020/"
              )}`,
              `Des ressources à destination des enfants, ou de leurs parents, des enseignants et autres professionnels de l’enfance, confrontés à des situations de harcèlement et/ou de violences dans l’espace digital : ${getInlineLink(
                "http://www.enseignement.be/index.php?page=27461&navi=4106",
                "http://www.enseignement.be/index.php?page=27461&navi=4106"
              )}`,
              // `En France, un numéro vert: ${getInlineLink(
              //   "https://www.01net.com/actualites/cyberharcelement-le-numero-vert-net-ecoute-devient-le-3018-2041256.html",
              //   "https://www.01net.com/actualites/cyberharcelement-le-numero-vert-net-ecoute-devient-le-3018-2041256.html"
              // )}`,
              `${getInlineLink(
                "Application Cyberhelp",
                "https://www.childfocus.be/fr/nouvelle/lancement-de-cyber-help-lapplication-qui-vole-au-secours-du-jeune-en-cas-de-cyber"
              )}, initiée par la fondation Child Focus`,
              `Comment identifier un faux profil sur facebook ?\n${getInlineLink(
                "https://fr.wikihow.com/d%C3%A9masquer-un-faux-compte-Facebook",
                "https://fr.wikihow.com/d%C3%A9masquer-un-faux-compte-Facebook"
              )}`,
            ],
          },
        ],
      },
    ],
  },
}
