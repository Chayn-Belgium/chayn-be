const { LANG, CONTENT_TYPE, getInlineLink } = require("../../constants")

module.exports = {
  [LANG.FR]: {
    slug:
      "les-premiers-gestes-pour-affronter-une-situation-de-cyberharcèlement",
    content: [
      {
        type: CONTENT_TYPE.MAIN_TITLE,
        title:
          "Les premiers gestes pour affronter une situation de cyberharcèlement",
      },
      {
        type: CONTENT_TYPE.TITLE,
        title: "Introduction",
      },
      {
        type: CONTENT_TYPE.TEXT,
        text:
          "Commentaires à caractères sexistes, intimidation, humiliation, harcèlements, haine, violences, dans l’espace digital, public ou privé, et sur des supports électroniques, vous sentez-vous inquiètes ou concernées ? Pensez-vous en être la cible ?",
      },
      {
        type: CONTENT_TYPE.TEXT,
        text:
          "Malheureusement, vous n’êtes  pas seules! En 2015, 76% des femmes, dans le monde, ont déjà subi des cyberviolences. Le risque de harcèlement en ligne est 27 fois supérieur pour les femmes",
      },
      // Image
      {
        type: CONTENT_TYPE.TEXT,
        text:
          "Informées et soudées, nous serons mieux armées\nCe guide a pour objectif de rassembler en un lieu les ressources, conseils et protocoles existants sur le harcèlement et les violences en ligne. L’objectif est de mieux comprendre ce phénomène, et d’ avoir les pistes de “premier secours” pour agir et réagir face au cyberharcèlement.\nToutes ces informations ont été récoltées auprès de personnes qui ont traversé cette douloureuse expérience (merci à elles pour leurs témoignages), ainsi qu’auprès d’associations et d’organisations expérimentées sur les différentes problématiques qu’englobe ce problème sociétal.\nCe guide est à destination des femmes. C’est en effet l'objectif global de Chayn de permettre un lieu de ressources afin d' accompagner toutes  les femmes dans l’accès à l’information et mettre à leur disposition les connaissances sur les phénomènes de harcèlement, d'agressions, et de violences qu'elles subissent.\nCe guide n’a pas pour vocation de substituer le travail des organisations, associations, services de médiation, et autres services publics/privés qui se spécialisent dans l’accompagnement psychologique, social, et juridique. Nous avons souhaité recenser les espaces de confiance et de sécurité vers lesquels vous pouvez vous tourner si vous rencontrez une situation de cyberviolence.\nRéagir face au cyberharcèlement, l’affronter, demande de l’énergie, nous en sommes conscientes. C’est pourquoi nous tenions à vous partager aussi ces ressources d’accompagnement, d’écoute et de soutien, qui pourront vous épauler  et à vous faciliter ces démarches en rassemblant  l’information en un seul lieu.\nNous avons à cœur de recenser un maximum de pistes à votre disposition et de vous informer des démarches existantes. Néanmoins, nous sommes conscientes des enjeux d'améliorations et relayons aussi ici les plaidoyers des personnes impliquées dans ce champ d'expertise.",
      },
      {
        type: CONTENT_TYPE.TITLE,
        title: "Resté.e.s informé.e.s sur la sortie de notre guide",
      },
      {
        type: CONTENT_TYPE.TEXT,
        text:
          "Si vous souhaitez être informé.e de la sortie de notre guide, inscrivez-vous à notre newsletter",
      },
      {
        type: CONTENT_TYPE.TITLE,
        title: "N’hésitez pas à nous contacter si vous souhaitez y contribuer.",
      },
      {
        type: CONTENT_TYPE.TEXT,
        text: `Vous êtes expert.e.s des sujets abordés dans ce guide ? Vous êtes une association active sur ce sujet ? Vous avez des pistes de solutions structurelles pour faire face aux différents enjeux juridiques, technologiques, sociétaux, ou autres, en lien avec ce sujet ? Contactez-nous par ici : ${getInlineLink(
          "collective@chayn.be",
          "mailto:collective@chayn.be"
        )}`,
      },
      {
        type: CONTENT_TYPE.LIST,
        intro: `Vous avez rencontré une ou plusieurs situations de harcèlements ou de violences dans l’espace digital ? Vous souhaitez contribuer à notre  wiki sur le sujet ? Pour mieux nous armer, n’hésitez pas à nous proposer (${getInlineLink(
          "collective@chayn.be",
          "mailto:collective@chayn.be"
        )}) :`,
        list: [
          "Des idées de réactions qui ont pu fonctionner et qui n’ont pas été mentionnées",
          "Toute information ou conseil manquant dans ce guide",
        ],
      },
      {
        type: CONTENT_TYPE.CHAPTER,
        title: "Boîte 1: Comprendre et reconnaître",
        id: "boite-1-comprendre-et-reconnaitre",
        content: [
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Le cyberharcèlement peut se localiser sur différents lieux, différents supports et revêtir de nombreuses formes.  Il s’agit de harcèlement ayant lieu dans l’espace numérique.",
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Infobox",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Le harcèlement ne trouve pas de définition claire dans le Code pénal. Néanmoins, le texte qui l’encadre exprime qu’il est composé de deux éléments : matériel (les agissements doivent affecter la tranquillité d’une ou plusieurs personnes) et moral (l’intention de nuire). Il émet également les conditions à remplir.",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Conditions à remplir pour qu’une situation soit acceptée juridiquement comme du harcèlement :",
            list: [
              "Le comportement doit être répétitif et abusif.",
              "Il doit y avoir une atteinte à la tranquillité.",
              "Le harceleur devait savoir qu’avec ses agissements, il allait préjudicier la victime.",
            ],
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Pour bien comprendre les différentes étapes que vous pourrez entreprendre pour réagir face à cette situation, nous avons récolté les grands types de cyberharcèlement, leurs lieux et supports.",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les lieux du cyberharcèlement :",
            list: [
              "Emails: chaînes, conversations, ...",
              "Forums et salles de chat",
              "Conversations privées et de groupe  sur whatsapp, Facebook messenger, Signal, Telegram, Viber, Twitter, Instagram, YouTube, …",
              "Réseaux sociaux : Publications, tages, commentaires et messages, Twitter, Facebook, Instagram, Youtube et autres réseaux sociaux. (publications, tags, commentaires,...).",
              "Sur les plateformes de jeux en streaming ou de jeux en réseau (chat privés comme publics)",
              "En commentaires de médias : commentaires d’articles sur les sites web des médias, dans les commentaires sur YouTube",
              "Sur les plateformes collaboratives que vous avez au travail (visioconférence, canaux de discussions de groupe, commentaire de documents, …)",
              "Sur des sites de rencontre",
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les supports et médias, véhicules de cyberharcèlement :",
            list: [
              "Les supports écrits: des messages, des commentaires, des réponses dans un chat, publication sur un réseau social ou sur un forum, …",
              "Les supports “Images”:  Photomontages, infographies, caricatures, dessins,  photographies, gifs",
              "Les supports vidéo: vidéos, Reels, Stories, live chat video,,...",
              "Les supports audio : messages et commentaires vocaux, podcast, appels en ligne, ...",
              "La création de profils ou de pages",
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Les formes de cyberharcèlement de la cyberintimidation au revenge porn :",
            list: [
              `<b>Affichage</b> : La création d’un sujet de discussion, une salle de Chat, d’un groupe ou d’une page sur un réseau social à votre encontre, pour vous afficher et vous dénigrer  auprès d’autres.\n -> Suivez les consignes en boîte 2`,
              `<b>Attaques coordonnées ou ou raids furtifs</b> :  Il s’agit de plusieurs personnes/comptes coordonnés qui ensevelissent collectivement la personne ciblée d’attaques, de menaces, d’insultes,... Cette technique est souvent utilisée sur des sujets politiques ou quand une personne partage son opinion. Ces raids peuvent également avoir lieu par messages privés ou par visio-conférence, via les messageries (Zoom Bombing)\nSignalez les comptes auprès de la plateforme, sans oublier de prendre des captures d’écran au préalable\nSuivez les consignes en boîte 2\nVous pouvez également, lorsque vous jouissez d’une communauté soutenante développée ou que vous êtes une personne médiatisée/influente\nDemander à une personne de confiance de prendre note des narratifs et de veiller aux volumes \nVous pouvez lancer une contre-offensive, munie de vos narratifs et en demandant à des allié.e.s de porter votre parole. Attention, ce dispositif est conseillé uniquement en cas de crise médiatique forte et si vous avez un nombre suffisant de personnes alliées, plus nombreuses.`,
              `<b>Cyberstalking</b> : il s’agit de donner l’impression à la cible d’être traquée, d’être suivie, peu importe où elle se situe en ligne et ainsi augmenter le sentiment d’insécurité, et affecter sa vie.\nSuivez ensuite les consignes en boîte 2`,
              `<b>Diffamation et propagation de rumeurs</b> : le web est connu pour être un lieu propice à la propagation de la rumeur, du fait de la rapidité de propagation et de déformation qu’une information peut prendre. Certains agissements de harcèlement sont constitués\nSuivez les consignes en boîte 2\nVous pouvez également, lorsque vous avez une communauté soutenante développée ou que vous êtes une personne médiatisée/influente\nDemander à une personne de confiance de prendre note des narratifs et de veiller à l’ampleur et la quantité de messages, conversations qui circulent\nVous pouvez lancer une contre-offensive, munie de vos narratifs, mais uniquement si vous avez un nombre suffisant de personnes alliées, plus nombreuses. Ou encore, de passer par voie de communiqué officiel si une réponse est nécessaire.`,
              `<b>Exclusion</b> : Se faire exclure de groupes ou de conversations, ou encore de jeux.\nSuivez les consignes en boîte 2`,
              `<b>Discours et insultes</b> : Les discours haineux, les menaces, les provocations, les insultes et dénigrements, le trolling, dénigrement, ou encore atteinte à la réputation,...\nSuivez les consignes en boîte 2`,
              `<b>Harcèlement sexuel par le biais de supports numériques</b> : Ce phénomène inclue notamment le sexting mais mais aussi l’envoi de contenus sexuellement explicites non désirés.\nSuivez les consignes en boîte 2`,
              `<b>Exposition et abus de la vie privée</b> : Communément appelée le ”doxing”. Il s’agit de  l’utilisation et divulgation publique d'informations personnelles. Cette technique est utilisée par les harceleurs afin d'affaiblir la victime ou encore d’augmenter l’intimidation.\nEn cas de situation de doxing, suivez les conseils suivants:\n${getInlineLink(
                "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/",
                "https://onlineharassmentfieldmanual.pen.org/fr/se-proteger-du-doxing/"
              )}\nSuivez ensuite les consignes en boîte 2`,
              `<b>Phishing</b> : Lorsqu’une personne se fait passer pour un.e représentant.e d’organismes publics ou privés que vous connaissez. Certains parviennent à leurs fins de récupérations lucratives d’informations personnelles ou bancaires, à force de pratiques qui relèvent du harcèlement.\nVous devez également signaler le phishing en envoyant le message suspect à l’adresse suspect@safeonweb.be. Supprimez-le ensuite (en n’oubliant pas d’en prendre une capture d’écran au préalable.)\nSuivez ensuite les consignes en boîte 2`,
              `<b>Usurpation d’identité</b> : Il s’agit de créer  un compte sur un réseau social, et de se  faire passer pour vous, sous couvert d’un pseudo, ou de pirater votre compte, ou encore d’usurper votre identité digitale.\nSignalez immédiatement l’usurpation d’identité à la plateforme. N’oubliez pas au préalable, de prendre une capture d’écran de l’usurpation afin d’en garder la preuve.\nSuivez les consignes en boîte 2`,
              `<b>Revenge porn</b> : Très proche du “harcèlement sexuel par le biais de supports numériques”, ce phénomène exprime la diffusions de photos ou de vidéos à carractère sexuel, prises de la victimes, sans son consentement et dans une volonté de nuire, de se venger.\nPrenez une capture d’écran ou vidéo du contenu et signalez/supprimez directement le contenu avant qu’il ne se propage.\nPorter plainte d’urgence auprès de l’Institut de l’égalité entre les femmes et les hommes et suivez leurs conseils\nSuivez les consignes en boîte 2`,
              `<b>L’astroturfing</b> : Il s’agit d’une technique qui vise à coordonner des actions (création de faux comptes, achats de followers actifs, ….)  pour gonfler les volumes de  propagation d’un message pour faire croire à un engouement authentique. Il s’agit d’une méthode de pression souvent utilisée sur des sujets politiques. Il s'agit de faire augmenter la pression sur la personne ciblée. Beaucoup d’énergie est posée dans la construction de ces faux comptes pour leur apporter une dimension réelle.\nIl existe néanmoins quelques signes pour les remarquer sur Facebook, par ici, et sur Twitter par ici.\nSouvent il s’agit de fausses photos de profils glanées sur le web. Vous pouvez donc tenter une recherche d’image inversée sur Google et voir si le résultat vous conduit sur une photographie déjà utilisée à d’autres fins.`,
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Les formes de violences du cyberharcèlement",
            list: [
              `<b>Sexisme</b>: Quand le harcèlement comporte des gestes, propos ou des agissements sexistes\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Slut shaming</b>: Ce phénomène consiste à insuffler de la honte aux femmes en décriant leur sexualité ou leur tenue vestimentaire.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Menaces et insultes des personnes transgenres</b>: Quand le harcèlement comporte des gestes, propos ou agissements dénigrant les personnes homosexuelles.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Humiliations et menaces à l’encontre de personnes racisées</b>: Quand le harcèlement comporte des gestes, propos ou agissements dénigrant les personnes racisées.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Grossophobie</b>: Quand le harcèlement comporte des gestes, propos ou agissements dénigrant les personnes ayant un poids plus élevé.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Body Shaming</b>: Ce phénomène consiste à insuffler de la honte sur le corps d’une personne, peu importe sa taille, son genre ou son poids.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Chantage, haine, humiliation des personnes homosexuelles</b>:  Quand le harcèlement comporte des gestes, propos ou agissements dénigrant les personnes homosexuelles.\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
              `<b>Les cyber violences conjugales</b>: Il peur s’agir de contrôle abusif de vos activités “en ligne” (lecture sms, demande d’être joignable …), il peut s’agir de cyber-harcèlement (appels incessants, injures ou encore menaces de mort, …). Les technologies numériques permettent également une surveillance accrue dans les  cas de violences conjugales ( contrôle des déplacements et agissements par exemple via un logiciel traceur ou GPS ). Dans le cadre également de violences conjugales, il est observé un glissement vers l’espace numérique des violences sexuelles (diffusion ou menace de diffusion d’images revenge porn, …). La violence économique est également victime de ce glissement (piratage des comptes bancaires, restriction des accès, …)\n${getInlineLink(
                "Suivez les consignes en boîte 2",
                "#boîte-2-agir-fac-au-cyberharcèlement",
                false
              )}`,
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "En quoi se distingue-t-il du harcèlement physique ?",
            list: [
              "La propagation et la publicité peuvent être massives et l’agissement instantané. Les contenus peuvent atteindre des publics larges complexifiant ainsi la reprise de contrôle et plongent les victimes face à une pression d’autant plus intense.",
              "Bien généralement, le cyberharcèlement se complète de sa variante physique, ne laissant aucun répit à la victime. Chaque espace de vie étant touché.",
              "La personne à l’origine du harcèlement peut agir sous le couvert de l’anonymat par l’utilisation d’un pseudonyme. Cela renforce les effets du harcèlement (angoisse de croiser la personne dans la rue, sans la reconnaître.  Ne pas savoir de qui il s’agit et ainsi ne plus se sentir en sécurité avec d’autres personnes,...) et complique l’identification de l’auteur.",
              "Le web et les outils numériques ne sont pas encore dans une phase de maturité en ce qui concerne la législation et sa régulation. Également, le web n’est pas structuré d’une architecture, ni d’un fonctionnement facilitant l’intervention d’une autorité, qu’elle soit juridique ou institutionnelle.",
            ],
          },
          {
            type: CONTENT_TYPE.TEXT,
            text: `Vous avez rencontré une ou plusieurs situations de harcèlement ou de violences dans l’espace digital ? Vous avez envie de contribuer à ce wiki sur le sujet ? De compléter cette liste ?  N’hésitez pas à nous contacter : ${getInlineLink(
              "collective@chayn.be",
              "collective@chayn.be"
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
        id: "boîte-2-agir-fac-au-cyberharcèlement",
        content: [
          {
            type: CONTENT_TYPE.TITLE,
            title:
              "Que faire face à une attaque furtive ? Que faire si l’on doit faire face à une déferlante d’injures ? Comment réagir face au harcèlement en ligne ?",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Nous l’avons vu, les formes de harcèlement ou de violences rencontrées dans l’espace digital peuvent être nombreuses. Également, les impacts sur votre vie peuvent être multiples. Il est donc peu réaliste de fournir une liste exhaustive adaptée à chaque situation. Mais des premiers soins peuvent être prodigués. Dans ces démarches, surtout :\nNe restez pas  seule - soyez  conseillée - soyez  écoutée\n\nLa frontière entre le digital et le monde physique, beaucoup de nos sœurs ont pu le vivre et de nombreuses recherches le prouvent, est ténue (Espace “phygital”). Il faut donc dès que possible envisager de porter plainte. Nous avons compilé toutes les informations, démarches et éléments nécessaires pour porter plainte, dans le cours de la boîte 3 de ce guide.\nnAvant d’ouvrir la boîte de secours,  il est une information essentielle, requise par les services de police, si vous envisagez de porter plainte:\nConservez les messages et tout autres éléments qui pourraient constituer une preuve avant de signaler les contenus ou de bloquer les comptes !",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Quels premiers gestes ?",
            list: [
              "Évitez de répondre, vous risqueriez un acharnement allant à l’escalade et de renforcer la visibilité des contenus",
              "Demandez de l’aide. Vous n’êtes pas entourée de vos proches, vous êtes seuls ou vous souhaitez privilégier  vous trouverez les ressources nécessaires, en boite x, pour vous épauler",
              "Prenez  des captures d’écran des agissements de harcèlement et sauvegardez-les dans un lieu sécurisé (disque-dur externe, sauvegarde cryptée en ligne), pour constituer un dossier",
              "Signalez l’infraction aux plateformes sans oublier, au préalable, de prendre des captures d’écran ou vidéo. Pour que le système de signalement fonctionne, n’hésitez pas à demander à un maximum d’allié.e.s de signaler également les contenus avec vous",
              "Demandez de l'aide",
              "Constituez votre dossier de plainte. Nous vous y aidons dans cette section.",
              "Déconnectez-vous",
              "Portez plainte : Rendez-vous au commissariat de police, soyez entourée, prenez soin de vous",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            title: "Les preuves et traces numériques",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Récoltez toutes les informations possibles permettant de prouver les faits problématiques de cyber harcèlements mais aussi tous les éléments qui pourraient mener à l’identité des personnes qui agissent. C’est ce que l’on appelle “Les traces numériques”.",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Notez dans un endroit sécurisé :",
            list: [
              "Les Dates, heures, plateforme, réseau social ou application",
              "Types de documents et supports (Messages directs ? Images ? Commentaires Facebook ?...)",
              "Liens (vous pouvez utiliser Archive.is pour conserver une adresse URL)",
              "Le nombre de messages,",
              "La nature de l’incident en ligne (menace de violence sexuelle, attaque à caractère raciste, etc.)",
              "Les Plateformes, site web ou application sur lesquelles ont eu lieu les agissements",
              "Le nom du compte de l’auteur ? Autres comptes actifs ? Adresse email ? Numéro de téléphone ? Adresse IP ? Une photo ? Indices de localisation ?  Tout élément d’identité qui permettrait  d’identifier la/les personnes (un message qu’il ou elle aurait laissé traîner quelque part sur le web ?)",
              "Captures d’écran ou vidéos",
              "Votre matériel informatique, vos identifiants et votre nom d’utilisateur",
              "Agissements et faits ayant lieu  “hors-ligne”  et qui seraient liés à ce harcèlement en ligne",
              "Preuves du préjudice : certificat médical, attestations, psychologues, psychothérapeutes, employeurs,...",
              "La fréquence des attaques, le type d’attaque, ou tout autre élément de contexte (le message a-t-il été amplifié par exemple par des réseaux plus influents ?)",
            ],
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: "Conseils",
            list: [
              "Prenez des captures d’écrans avant de bloquer ou signaler le(s) compte(s) et contenus de la personne, ou de signaler les commentaires. En effet, ils s'effaceront lors de cette démarche",
              "Sur Facebook, vous pouvez masquer les messages en commentaires de vos publications, vidéos et photos, cela n'alerte pas l’auteur, qui sera toujours disposé à les voir.  Les autres utilisateur.ice.s ne les verront quant à eux plus et les messages seront bien conservés.",
              "Dans le cas d’attaques perpétrées par de très nombreux comptes, n’hésitez pas à questionner l’authenticité des comptes.",
              "Vous êtes témoins de faits de harcèlement en ligne ? Soyez un.e bon.ne allié.e - dirigez-vous en boîte 7 ou accompagnez la victime dans les démarches que nous conseillons dans cette partie du guide.",
              "Ne restez pas seule. C’est une expérience éprouvante, nous le savons\n\n- Vous êtes mineure d’âge ? Parlez-en directement à un.e adulte de confiance : votre prof, vos parents, votre assistant social, le Centre PMS de votre école ou de votre commune, votre planning familial,... Il existe également un numéro gratuit, le 103.\n\n- Vous êtes adulte ? Parlez-en également à toute personne de confiance, ne restez pas seule!\n\n- Vous n’avez personne vers qui vous tourner ? Nous avons recensé, en boîte 4, les ressources existantes pour vous épauler, et que vous pouvez contacter",
            ],
          },
          // TODO: add this section when it will be writen
          // {
          //   type: CONTENT_TYPE.TITLE,
          //   tiile:
          //     "Comment signaler des messages sur les plateformes ?",
          // },
          // {
          //   type: CONTENT_TYPE.TEXT,
          //   text:
          //     "",
          // },
          {
            type: CONTENT_TYPE.TITLE,
            tiile: "Quelques cas particuliers",
          },
          {
            type: CONTENT_TYPE.TEXT,
            text:
              "Nous l’avons vu, les formes de harcèlement ou de violences rencontrées dans l’espace digital peuvent être nombreuses, ainsi que les impacts et développements. Certains cas spécifiques demanderont de suivre des protocoles plus élaborés. Notamment à cause du contexte de la victime, de la temporalité, de la médiatisation et de la gravité des formes",
          },
          {
            type: CONTENT_TYPE.TITLE,
            tiile:
              "Journaliste ? Femme politique ? Femme médiatisée ? Le cas spécifique de la rumeur ou de la médiatisation élevée de la cible et/ou des faits de harcèlement",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro:
              "Si vous rencontrez une répercussion d’une ampleur médiatique large. Veillez à vous entourer d’un dispositif médiatique avant de vous déconnecter et de laisser des traces de votre positionnement ou de votre défense :",
            list: [
              "Publiez un communiqué officiel sur les lieux où les contenues se sont déployés",
              "Relations presse si l’on atteint un degré de crise médiatique",
              "Ne pas répondre aux commentaires de façon individuelle",
              "Mettre sur pied un dispositif de veille / monitoring (externe)",
              "Organisez une communauté de soutien pour élargir votre porte-parolat",
              "Suivre les même démarches ensuite de collecte de preuves et de plainte",
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            tiile: "Mineures d’âge",
          },
          {
            type: CONTENT_TYPE.LIST,
            list: [
              `Parles-en d’urgence à un.e adulte de confiance : ton  prof, tes parents, ton assistan.et social, le Centre PMS de ton  école ou de ta ville,  à ton  planning familial,...", "Ne répondez pas aux messages, commentaires, cela découragera l’agresseur", "Vous pouvez aussi contacter : ${getInlineLink(
                "Childfocus chat",
                "http://www.childfocus.be/fr/besoin-daide/chat-116000"
              )} et ${getInlineLink(
                "103ecoute.be",
                "http://www.103ecoute.be/"
              )}`,
            ],
          },
          {
            type: CONTENT_TYPE.TITLE,
            tiile: "Info box",
          },
          {
            type: CONTENT_TYPE.LIST,
            intro: `Vous avez rencontré un cas spécifique ? Une méthode a fonctionné pour vous ? Avez-vous des conseils ? Participez à notre boîte à idées pour nous armer: ${getInlineLink(
              "collective@chayn.be",
              "mailto:collective@chayn.be"
            )}`,
            list: [
              `Vous êtes curieuse et/ou passionnée d’outils un peu plus techniques qui peuvent être utilisés pour analyser des éléments de preuve ? Attention, c’est assez technique. C’est ce qu’on appelle les outils d’OSINT (Open source investigation - les investigations sur base des données et informations accessibles librement mais parfois bien cachées, sur le web : ${getInlineLink(
                "https://osintframework.com/",
                "https://osintframework.com/"
              )}`,
              `L’outil développé par les deux victimes de cyberharcèlement par les plateformes: ${getInlineLink(
                "https://siecledigital.fr/2021/04/22/instagram-outils-cyberharcelement-messsages-prives/",
                "https://siecledigital.fr/2021/04/22/instagram-outils-cyberharcelement-messsages-prives/"
              )}`,
              `Outils développés par des soeurs: ${getInlineLink(
                "https://www.ladn.eu/tech-a-suivre/block-party-twitter-troll/",
                "https://www.ladn.eu/tech-a-suivre/block-party-twitter-troll/"
              )}\n${getInlineLink(
                "https://time.com/5916772/kid-of-the-year-2020/",
                "https://time.com/5916772/kid-of-the-year-2020/"
              )}`,
              `Des ressources à destination des enfants, pour les parents, enseignants et autres acteur.ices en contact avec des mineures dans une situation de harcèlements et violences dans l’espace digital: ${getInlineLink(
                "http://www.enseignement.be/index.php?page=27461&navi=4106",
                "http://www.enseignement.be/index.php?page=27461&navi=4106"
              )}`,
              `En France, un numéro vert: ${getInlineLink(
                "https://www.01net.com/actualites/cyberharcelement-le-numero-vert-net-ecoute-devient-le-3018-2041256.html",
                "https://www.01net.com/actualites/cyberharcelement-le-numero-vert-net-ecoute-devient-le-3018-2041256.html"
              )}`,
              getInlineLink(
                "Application cyberhelp",
                "https://www.childfocus.be/fr/nouvelle/lancement-de-cyber-help-lapplication-qui-vole-au-secours-du-jeune-en-cas-de-cyber"
              ),
              getInlineLink(
                "https://fr.wikihow.com/d%C3%A9masquer-un-faux-compte-Facebook",
                "https://fr.wikihow.com/d%C3%A9masquer-un-faux-compte-Facebook"
              ),
            ],
          },
        ],
      },
    ],
  },
}
