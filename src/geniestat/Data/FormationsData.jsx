import simean from "../medias/simean.jpg";
import sebgo from "../medias/sebgo.jpg";
import formation1 from "../medias/formation1.png";
import formation2 from "../medias/formation2.png";
import formation3 from "../medias/formation3.png";
import formation4 from "../medias/formation4.png";
import formation5 from "../medias/formation5.png";
import formation6 from "../medias/formation6.png";
import formation7 from "../medias/formation7.png";
import formation8 from "../medias/formation8.png";

import poko from "../medias/IMG-20231129-WA0038.png";
import bienvenue from "../medias/bienvenue.jpg";
import iba from "../medias/IMG-20231129-WA0038.png";
import aly from "../medias/aly.jpg";
import yacouba from "../medias/IMG-20231129-WA0038.png";
import formation9 from "../medias/IMG-20231129-WA0038.png";
// import dataAnalyticsWithExcel from "../medias/DATA ANALYTICS WITH EXCEL.png";
const FormationsData = [
  // Ben

  {
    id: 1,
    image: formation1,
    title: `Formation Excel Masterclass : Le Parcours Complet pour Devenir Expert`,
    description: `Excel est un logiciel de calcul idéal dans l’automatisation des tâches de gestion. Ses 
    ressources sont immenses et son utilisation infinie. On peut, en effet, s’en servir 
    pour élaborer un budget ou une facture, mais aussi pour analyser un bilan, une 
    activité commerciale, ou encore gérer un portefeuille boursier. 
    Grâce à un ensemble de fonctions prédéfinies dans des domaines comme les 
    mathématiques, la finance, les statistiques, etc. Excel permet de construire des 
    modèles de calcul adaptés à chaque activité professionnelle. Ce logiciel ne possède aucune limite. 
    Cette formation vous permettra de devenir un génie de cet incontournable logiciel dans le domaine professionnel.`,
    price: 5000,
    discount: 0,
    online: true,
    inPerson: false,
    category: "excel",
    startDate: "",
    endDate: "",
    features: [
      `Partie I : Introduction et Fonctions de Base`,

      `Prise en main de l’interface d’Excel`,
      `Création et gestion des fichiers`,
      `Saisie, modification et mise en forme des données`,
      `Formules et opérations de base`,

      `Partie II : Gestion et Analyse des Données`,

      `Tri, filtrage et tableaux structurés`,
      `Fonctions avancées (recherche, conditionnelles)`,
      `Création et personnalisation de graphiques`,
      `Tableaux croisés dynamiques`,

      `Partie III : Automatisation des tâches et Protection des données`,

      `Introduction aux macros et VBA`,
      `Automatisation des tâches`,
      `Protection des feuilles et des classeurs`,

      `Partie IV : Collaboration et Projets Pratiques`,

      `Partage de fichiers et collaboration en temps réel`,
      `Paramètres d’impression et exportation`,
      `Études de cas réels et projets pratiques `,
      `Evaluation et Certifications`,
    ],
    trainer: {
      name: "TIDIGA Ali",
      image: aly,
      speciality:
        "Expert in Excel data protection, mastering macros and VBA to automate repetitive tasks, optimize data management processes, and enhance efficiency within the organization",
      contact: "https://www.linkedin.com/in/aly-tidiga-786872238",
    },
  },
  // SIMEAN

  {
    id: 2,
    image: formation2,
    title: "Formation en Analyse de données avec Excel",
    description: `### Formation en Analyse de Données avec Excel
*Ce cours pratique vous permettra de :*

- **Prendre en main Excel pour l'analyse de données** : Familiarisez-vous avec les fonctionnalités de base d'Excel, un outil incontournable pour la gestion et l'analyse de données.
- **Créer vos premières feuilles de calcul analytiques** : Apprenez à organiser, structurer et formater vos données pour en faciliter l'analyse.
- **Explorer les fonctionnalités avancées d'Excel** : Découvrez les outils d'analyse des données, tels que les tableaux croisés dynamiques, les formules complexes et les graphiques interactifs.
- **Analyser et interpréter les données recueillies** : Maîtrisez les techniques pour extraire des informations pertinentes à partir de vos données et présenter vos résultats de manière claire et impactante.
*Et bien plus de bonus…*
`,
    price: 30000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "excel",
    startDate: "",
    endDate: "",
    features: [
      "Maîtrise des fonctions avancées d'Excel",
      "Utilisation des tableaux croisés dynamiques pour l'analyse",
      "Création de graphiques et de tableaux de bord interactifs",
      "Nettoyage et préparation des données",
      "Automatisation des tâches avec les macros",
      "Techniques de prévision et de modélisation",
      "Optimisation des processus avec Excel",
      "Introduction à Power BI",
      "Application pratique avec des études de cas réels",
    ],
    trainer: {
      name: "SIMEAN Hamado",
      image: simean,
      speciality: `Data analyst`,
      contact: "http://www.linkedin.com/in/hamadosimean",
    },
  },

  // SEBGO

  {
    id: 3,
    image: formation3,
    title:
      "Formation De A à Z en Collecte des données d'enquête avec Kobotoolbox",
    description: ` *Ce cours pratique vous permettra de :* 
      Dans ce cours de base, vous apprendrez à : 
      Prendre en main Kobotoolbox, un outil essentiel pour la collecte de données en ligne et sur le terrain.
      Créer vos premiers formulaires d'enquête adaptés à différents contextes.
      Explorer les fonctionnalités de base pour gérer et analyser les données recueillies.
      Et bien de bonus…`,
    price: 5000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_collection",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à Kobotoolbox et à la collecte de données",
      "1.1 Présentation de Kobotoolbox et ses applications",
      "1.2 Concepts de base de la collecte de données en ligne",
      "1.3 Création de compte et configuration initiale",
      "1.4 Aperçu des fonctionnalités principales",
      "1.5 Bonnes pratiques pour la collecte de données",

      "PARTIE 2 : Création et gestion de formulaires d'enquête",
      "2.1 Introduction à la création de formulaires",
      "2.2 Structuration des questions et types de réponses",
      "2.3 Personnalisation des formulaires pour des besoins spécifiques",
      "2.4 Tests et débogage des formulaires",
      "2.5 Déploiement des formulaires pour la collecte de données",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.\
        Consultant in data collection solutions and business intelligence.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 4,
    image: formation4,
    title:
      "Formation 100% pratique en Collecte des données d'enquête avec XLSForm",
    description: `Dans ce module d’initiation, vous découvrirez comment :\
      Utiliser XLSForm pour créer des formulaires d'enquête adaptés à des besoins spécifiques.\
      Apprendre à organiser les questions de manière logique et efficace pour une collecte optimale.\
      Comprendre les bases de la structuration des données pour faciliter l'analyse.\
      Et bien plus encore…`,
    price: 5000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_collection",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Comprendre XLSForm et son rôle dans la collecte de données",
      "1.1 Introduction à XLSForm et ses avantages",
      "1.2 Structuration des formulaires dans Excel",
      "1.3 Principes de base de la conception de formulaires",
      "1.4 Gestion des données dans un fichier XLSForm",

      "PARTIE 2 : Création de formulaires avec XLSForm",
      "2.1 Les différents types de questions et réponses",
      "2.2 Validation des données et contrôle des erreurs",
      "2.3 Personnalisation des formulaires pour divers scénarios",
      "2.4 Préparation des formulaires pour l'importation dans Kobotoolbox",

      "PARTIE 3 : Déploiement et analyse des données avec XLSForm",
      "  3.1 Téléchargement des formulaires créés",
      "3.2 Collecte et gestion des réponses via les outils en ligne",
      "3.3 Techniques d'exportation et d'analyse des données",
      "3.4 Intégration des données avec d'autres systèmes d'information",
      "3.5 Rapports et présentation des résultats",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.\
        Consultant in data collection solutions and business intelligence.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 5,
    image: formation5,
    title:
      "Formation Complète en Collecte des données d'enquête avec Enketo/Kobotoolbox et XLSForm",
    description: `Ce cours d’initiation vous permettra de :\
      Combiner Kobotoolbox et XLSForm pour concevoir et déployer des formulaires d'enquête de manière efficace.\
      Découvrir comment ces deux outils se complètent pour répondre à divers besoins en collecte de données.\
      Mettre en pratique vos compétences pour créer des formulaires simples et les tester en situation réelle.\
      Et bien plus…`,
    price: 6000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_collection",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à Kobotoolbox et XLSForm",
      "1.1 Présentation et complémentarité des deux outils",
      "1.2 Principes de base de la collecte de données",
      "1.3 Structuration de formulaires complexes avec XLSForm",
      "1.4 Gestion des formulaires dans Kobotoolbox",

      "PARTIE 2 : Création et personnalisation des formulaires d'enquête",
      "2.1 Conception des formulaires avancés avec XLSForm",
      "2.2 Validation et débogage des formulaires",
      "2.3 Importation des formulaires dans Kobotoolbox",
      "2.4 Déploiement et collecte de données sur le terrain",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.\
        Consultant in data collection solutions and business intelligence.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 6,
    image: formation6,
    title:
      "Formation De A à Z en Collecte des données d'enquête avec SurveyCTO et XLSForm",
    description: `Cette formation de base vous guidera pour :
      Vous familiariser avec SurveyCTO et XLSForm, des outils puissants pour la collecte de données.
      Créer des formulaires d'enquête adaptés à divers scénarios de collecte.
      Apprendre les principes de base pour assurer la qualité des données collectées.
      Et etc…`,
    price: 5000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_collection",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à SurveyCTO et XLSForm",
      "1.1 Présentation de SurveyCTO et ses avantages",
      "1.2 Concepts de base de la collecte de données avec XLSForm",
      "1.3 Création de formulaires d'enquête",
      "1.4 Configuration des projets dans SurveyCTO",

      "PARTIE 2 : Création et gestion des formulaires avancés",
      "2.1 Types de questions et validation des données",
      "2.2 Personnalisation des formulaires pour divers besoins",
      "2.3 Débogage et optimisation des formulaires",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.\
        Consultant in data collection solutions and business intelligence.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 7,
    image: formation7,
    title:
      "Maitriser de A à Z la Collecte des données d'enquête avec Kobotoolbox, XLSForm, SurveyCTO et Jotform",
    description: `*Ce cours pratique vous permettra de :* \
      *Maîtriser* l'outil incontournable de création de formulaires en ligne.\
      *Apprendre* à concevoir des formulaires personnalisés pour toutes vos applications.\
      *Découvrer* comment personnaliser vos formulaires, à les partager.\
      *Et bien d’autres…*`,
    price: 8000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_collection",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction aux outils de collecte de données",
      "1.1 Introduction à Kobotoolbox, XLSForm, SurveyCTO et Jotform",
      "1.2 Création de compte Kobotoolbox",
      "1.3 Création de compte SurveyCTO",
      "1.4 Présentation des fonctionnalités clés de chaque plateforme",
      "1.5 Techniques de collecte de données sur le terrain",

      "PARTIE 2 : Création et personnalisation des formulaires",
      "2.1 Introduction aux différentes parties d'un formulaire XLSForm",
      "2.2 Explication et cas pratique du langage XLSForm",
      "2.3 Création et personnalisation des formulaires dans Enketo",
      "2.4 Déploiement des formulaires XLSForm sur le serveur",
      "2.5 Déploiement simplifié des formulaires dans Enketo",

      "PARTIE 3 : Utilisation avancée de Jotform pour la collecte de données",
      "3.1 Les bases de Jotform",
      "3.2 Cas pratique de création de formulaires avec Jotform",
      "3.3 Personnalisation et design des formulaires",
      "3.4 Finalisation et partage des formulaires",
      "3.5 Intégration de Jotform avec d'autres outils de collecte de données",

      "PARTIE 4 : Gestion et analyse des données collectées",
      "4.1 Suivi et gestion des réponses dans Kobotoolbox, SurveyCTO, et Jotform",
      "4.2 Exportation des données pour analyse",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.\
        Consultant in data collection solutions and business intelligence.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 8,
    image: formation8,
    title: "R pour les Débutants : Initiation en Analyse de Données Simplifiée",
    description: `Cette formation est idéale pour les débutants qui souhaitent se familiariser avec R\
    et acquérir les compétences nécessaires pour analyser et interpréter des données.\
    Aucune expérience préalable en programmation n'est requise.`,
    price: 10000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_analysis",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Premiers Pas avec R",
      "1.1 Introduction à l'environnement de RStudio",
      "1.2 Syntaxe de base et premiers scripts R",
      "1.3 Importation de données à partir de fichiers CSV et Excel",

      "PARTIE 2 : Analyse de Données de Base",
      "2.1 Calculs statistiques simples (moyennes, médianes)",
      "2.2 Création de graphiques simples pour la visualisation de données",
      "2.3 Introduction aux fonctions de tri et de filtrage de données",

      "PARTIE 3 : Exercices Pratiques",
      "3.1 Analyse de petits datasets avec R",
      "3.2 Création de rapports simples avec les résultats obtenus",
      "3.3 Astuces pour continuer à progresser avec R après la formation",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses\
       to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 9,
    image: formation9,
    title:
      "Apprenenez les bases du logicielc R: Cas pratique d'analyses statistiques",
    description: ` Plongez dans l'univers de l'analyse de données avec R, l'un des outils les plus puissants et les plus flexibles\
     pour les statisticiens et les data scientists. Cette formation vous permettra de comprendre les concepts fondamentaux \
     de la statistique et de les appliquer à vos propres jeux de données.`,
    price: 10000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_analysis",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à R",
      "1.1 Installation et configuration de R et RStudio",
      "1.2 Notions de base sur la syntaxe de R",
      "1.3 Importation et manipulation des données",

      "PARTIE 2 : les differentes types de données dans R",
      "2.1 Les vecteurs",
      "2.2 Les matrices",
      "2.3 Les Dataframes",

      "PARTIE 3 : Analyse Statistique avec R",
      "3.1 Nettoyage ou préparation des données",
      "3.2 Introduction aux statistiques descriptives",
      "3.3 Réalisation d'analyses statistiques de base",

      "PARTIE 4 : Visualisation des données",
      "Indtallation de ggplot2",
      "Utilisation de ggplot2",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses\
         to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 10,
    image: formation9,
    title:
      "Analyse de Données avec Excel pour Débutants : Maîtrisez l'essentiel de Excel en 2 Semaines",
    description: ` Découvrez comment transformer vos données en insights puissants avec Excel !
    En deux semaines, cette formation vous guidera à travers les outils essentiels d'Excel pour organiser,
     analyser et visualiser vos données, même si vous débutez.`,
    price: 12500,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_analysis",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Plongée dans Excel pour l'Analyse de Données",
      "1.1 Naviguez avec aisance dans Excel : Familiarisez-vous avec l'interface et les fonctionnalités de base",
      "1.2 Gestion des Données : Saisissez et gérez vos données comme un pro",
      "1.3 Formules et Fonctions : Utilisez des formules simples pour des calculs rapides (SOMME, MOYENNE, etc.)",
      "1.4 Visualisation : Créez des graphiques et des tableaux croisés dynamiques pour illustrer vos données",

      "PARTIE 2 : Techniques d'Analyse Avancées avec Excel",
      "2.1 Création de Graphiques Impactants : Concevez des graphiques personnalisés pour une présentation claire",
      "2.2 Organisation des Données : Utilisez filtres et tris pour structurer et explorer vos données",
      "2.3 Analyse des Tendances : Détectez les tendances et variations avec des outils de visualisation",
      "2.4 Fonctions Avancées : Maîtrisez des fonctions comme RECHERCHEV et SI pour des analyses poussées",

      "PARTIE 3 : Mise en Pratique et Applications",
      "3.1 Ateliers Pratiques : Travaillez sur des exercices réels pour appliquer ce que vous avez appris",
      "3.2 Création de Rapports : Élaborer des rapports percutants basés sur vos analyses",
      "3.3 Astuces de Productivité : Découvrez des astuces pour travailler plus efficacement avec Excel",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses\
         to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 11,
    image: formation9,
    title:
      "Maîtrisez les Fondamentaux de Excel: Cas pratiques d'automatisation des Facturations",
    description: `Dites adieu aux erreurs de facturation et au traitement manuel avec notre formation sur l'automatisation des factures simples !
    En deux semaines, apprenez à créer des systèmes automatisés pour générer, envoyer et suivre vos factures efficacement`,
    price: 12500,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "excel",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à l'Automatisation des Factures",
      "1.1 Principes de Base : Comprenez les avantages de l'automatisation pour la gestion des factures",
      "1.2 Outils et Logiciels : Découverte des outils et logiciels pour automatiser vos factures (Excel, Google Sheets, logiciels spécialisés)",
      "1.3 Configuration Initiale : Mise en place des paramètres nécessaires pour démarrer l'automatisation",

      "PARTIE 2 : Création et Personnalisation des Modèles de Factures",
      "2.1 Conception des Modèles : Créez des modèles de factures clairs et professionnels adaptés à vos besoins",
      "2.2 Automatisation des Données : Utilisez des formules et des scripts pour intégrer automatiquement les informations de facturation",
      "2.3 Personnalisation et Formats : Adaptez vos factures pour différents types de services ou produits",

      "PARTIE 3 : Mise en Pratique et Optimisation",
      "3.1 Ateliers Pratiques : Réalisez des exercices pour automatiser la création et l'envoi de factures",
      "3.2 Gestion des Données : Importation et gestion des informations clients pour une automatisation fluide",
      "3.3 Conseils d’Optimisation : Astuces pour améliorer le processus et résoudre les problèmes courants",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses\
         to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 12,
    image: formation9,
    title: "Excel pour l’Analyse Commerciale : 100% pratique en 01 mois",
    description: `Transformez vos compétences Excel et boostez votre analyse de données commerciales !
    En un (01) mois, découvrez comment utiliser Excel pour déchiffrer les chiffres,
    créer des rapports percutants, et faire ressortir des insights clés pour votre business`,
    price: 15000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "excel",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Premiers Pas avec Excel pour l'Analyse",
      "Introduction à Excel : Découvrez les fonctionnalités de base pour gérer et organiser vos données.",
      "Création de Tableaux et Graphiques : Apprenez à visualiser vos données avec des graphiques clairs et dynamiques.",

      "PARTIE 2 : Techniques d’Analyse Avancées",
      "Fonctions Essentielles : Utilisez des formules simples pour analyser vos données rapidement.",
      "Tableaux Croisés Dynamiques : Résumez et explorez vos données avec des tableaux interactifs.",

      "PARTIE 3 : Cas Pratiques et Applications",
      "Analyse Commerciale Réelle : Mettez en pratique vos nouvelles compétences sur des données commerciales concrètes.",
      "Optimisation : Découvrez comment automatiser vos tâches et optimiser vos analyses avec des astuces pratiques",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses\
         to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  {
    id: 13,
    image: formation9,
    title:
      "Maîtrisez les Fondamentaux de Excel: Cas pratiques d'automatisation des Bulletins Scolaires",
    description: `Revolutionnez la gestion des évaluations avec cette formation pratique sur l'automatisation des bulletins scolaires !\
    En deux semaines, découvrez comment automatiser la création des bulletins pour gagner du temps et réduire les erreurs,\
    tout en offrant un service plus efficace à vos élèves et à leurs familles.`,
    price: 12500,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "data_analysis",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à l'Automatisation des Bulletins",
      "1.1 Concepts de Base : Comprenez les avantages et les principes de l'automatisation",
      "1.2 Outils et Logiciels : Introduction aux outils recommandés pour automatiser les bulletins (Excel, Google Sheets, logiciels spécialisés)",
      "1.3 Paramétrage Initial : Mise en place des configurations de base pour l'automatisation",

      "PARTIE 2 : Création et Personnalisation des Modèles de Bulletins",
      "2.1 Conception des Modèles : Créez des modèles de bulletins professionnels adaptés à vos besoins",
      "2.2 Automatisation des Données : Utilisez des formules et des scripts pour intégrer automatiquement les données des élèves",
      "2.3 Personnalisation et Formats : Personnalisez les bulletins pour différents types d'évaluations et de rapports",

      "PARTIE 3 : Mise en Pratique et Intégration",
      "3.1 Ateliers Pratiques : Travaillez sur des cas réels pour créer et automatiser des bulletins scolaires",
      "3.2 Optimisation : Conseils pour affiner les processus d'automatisation et résoudre les problèmes courants.",
    ],
    trainer: {
      name: "SEBGO Souleymane",
      image: sebgo,
      speciality: `Expert in data processing, manipulation, and visualization using R, capable of conducting advanced statistical analyses
         to interpret and present meaningful insights from large datasets.`,
      contact: "http://www.linkedin.com/in/souleymane-sebgo-055906244",
    },
  },

  // Bienvenue

  {
    id: 14,
    image: formation9,
    title:
      "Formation complète en Bureautique pour Débutants: Word, Excel et PowerPoint",
    description: `Apprenez les bases de la bureautique pour devenir plus autonome et efficace.
   Cette formation est idéale pour ceux qui débutent ou qui souhaitent se
   familiariser avec les outils essentiels de Microsoft Office`,
    price: 8000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "bureautique",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Word pour le Traitement de Texte",
      "1.1 Créer et structurer des documents",
      "1.2 Utilisation des styles et des modèles",
      "1.3 Astuces pour un formatage rapide",

      "PARTIE 2 : Excel pour la Gestion de Données",
      "2.1 Introduction aux feuilles de calcul",
      "2.2 Fonctions et formules de base",
      "2.3 Création et gestion de graphiques simples",

      "PARTIE 3 : PowerPoint pour la Présentation",
      "3.1 Conception de diapositives attractives",
      "3.2 Techniques de présentation efficace",
      "3.3 Exportation et partage des présentations",
    ],
    trainer: {
      name: "YOUGBARE Bienvenue",
      image: bienvenue,
      speciality: `Specialist in Advanced Skills for Optimizing the Use of Office Software and IT Tools\
      to Enhance Team Efficiency in a Professional Environment`,
      contact: "",
    },
  },

  // POKSON

  {
    id: 15,
    image: formation9,
    title:
      "Créez des Affiches et Logos de Pro sur Mobile: Formation pratique en Graphisme avec Pixellab",
    description: `Explorez l'univers du design mobile avec notre formation avancée en graphisme sur Pixellab.
    Apprenez à créer des visuels époustouflants, des affiches percutantes et des logos uniques directement depuis votre téléphone.
    Cette formation pratique vous guide à travers des techniques avancées pour transformer vos idées créatives en œuvres d'art numériques, tout en exploitant pleinement les puissantes fonctionnalités de Pixellab.`,
    price: 5000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "design",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à Pixellab",
      "1.1 Introduction aux bases de Pixellab",
      "1.2 Présentation de l'interface et des fonctionnalités essentielles",
      "1.3 Paramétrages de base pour un travail optimal",
      "1.4 Astuces pour une prise en main rapide de l'outil",

      "PARTIE 2 : Création d'affiches et visuels",
      "2.1 Concepts fondamentaux du design d'affiches",
      "2.2 Techniques de composition et d'agencement visuel",
      "2.3 Création d'affiches attrayantes pour différents types d'événements",
      "2.4 Utilisation des calques et des effets pour un rendu professionnel",
      "2.5 Exportation et partage des créations",

      "PARTIE 3 : Création de logos",
      "3.1 Introduction à la création de logos professionnels",
      "3.2 Principes de base du design de logos",
      "3.3 Cas pratiques : Création de logos étape par étape",
      "3.4 Techniques avancées pour un logo qui se démarque",
      "3.5 Finalisation ...",

      "PARTIE 4 : Perfectionnement et cas pratiques",
      "4.1 Exercices pratiques sur la création de visuels complexes",
      "4.2 Approfondissement des techniques de design",
    ],
    trainer: {
      name: "OUEDRAOGO Poko",
      image: poko,
      speciality: `An expert in maintaining and optimizing IT systems, with advanced skills in setting up and configuring computer tools,
        with proficiency in mobile graphic design, capable of creating and managing attractive visual content directly on mobile devices.`,
      contact: "",
    },
  },

  {
    id: 16,
    image: formation9,
    title: "Bureautique pour Débutants : Les Fondamentaux de Word et Excel",
    description: `Cette formation vous initie aux outils de bureautique indispensables. 
    Vous apprendrez à créer des documents, des tableaux et des présentations,
    tout en découvrant les meilleures pratiques pour une utilisation efficace.`,
    price: 8000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "bureautique",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Bases de la Bureautique",
      "1.1 Introduction à Word : Rédaction et mise en page",
      "1.2 Initiation à Excel : Création de tableaux simples",
      "1.3 Présentation avec PowerPoint : Slides et animations",

      "PARTIE 2 : Outils pour le Quotidien",
      "2.1 Gestion des e-mails : Outlook et Gmail",
      "2.2 Utilisation des calendriers et outils de planification",
      "2.3 Introduction aux documents partagés et collaboration en ligne",

      "PARTIE 3 : Exercices Pratiques",
      "3.1 Création de projets simples : Documents, tableaux, présentations",
      "3.2 Astuces pour une meilleure organisation",
    ],
    trainer: {
      name: "OUEDRAOGO Poko",
      image: poko,
      speciality:
        "Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.",
      contact: "",
    },
  },

  // IBA

  {
    id: 17,
    image: formation9,
    title:
      "Initiation Rapide et Pratique à l'Infographie avec Photoshop en 01 Mois seulement",
    description: `Découvrez les fondamentaux de l'infographie avec Photoshop.
    En trois semaines, apprenez à concevoir des visuels accrocheurs,
    et à maîtriser les outils de base pour tous vos projets graphiques.`,
    price: 15000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "design",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à Photoshop",
      "1.1 Bases et interface",
      "1.2 Outils essentiels",
      "1.3 Raccourcis et astuces",

      "PARTIE 2 : Création Graphique",
      "2.1 Design d'affiches",
      "2.2 Composition visuelle",
      "2.3 Utilisation des effets et calques",

      "PARTIE 3 : Application Pratique",
      "3.1 Exercices de création",
      "3.2 Techniques de retouche",
      "3.3 Préparation de vos visuels pour publication",
    ],
    trainer: {
      name: "IBA Harouna",
      image: iba,
      speciality:
        "Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.",
      contact: "",
    },
  },

  {
    id: 18,
    image: formation9,
    title: "Maîtrisez les Outils Essentiels de la bureautique: Word et Excel",
    description: `En seulement un (01) mois, apprenez à maîtriser les deux outils bureautiques les plus\
     indispensables : Word et Excel. Cette formation vous donnera les bases nécessaires pour créer\
     des documents professionnels et gérer efficacement vos données.`,
    price: 8000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "bureautique",
    startDate: "",
    endDate: "",
    features: [
      "PARTIE 1 : Introduction à Word et Excel",
      "1.1 Prise en main de Word : Création et mise en forme de documents",
      "1.2 Introduction aux fonctionnalités avancées de Word",
      "1.3 Découverte d'Excel : Gestion de tableaux et calculs simples",

      "PARTIE 2 : Productivité avec Word et Excel",
      "2.1 Techniques de mise en page et de styles sous Word",
      "2.2 Utilisation des formules de base dans Excel pour automatiser les calculs",
      "2.3 Organisation et analyse de données avec Excel",

      "PARTIE 3 : Pratique et Applications",
      "3.1 Cas pratiques : Création de documents professionnels sous Word",
      "3.2 Exercices sur Excel : Tableaux croisés dynamiques et graphiques",
      "3.3 Conseils pour une meilleure productivité avec Word et Excel",
    ],
    trainer: {
      name: "IBA Harouna",
      image: iba,
      speciality:
        "Expert in the creation, automation, and management of data collection systems, with expertise in integrating various digital tools to enhance the efficiency of data management processes.",
      contact: "",
    },
  },

  {
    id: 19,
    image: formation9,
    title: `Formation pratique sur Microsoft Project`,
    description: `MS Project permet de planifier; suivre et gérer des projets de manière efficace. 
    Cette formation vous guidera dans la création de projets; la gestion des tâches et 
    des ressources; ainsi que dans l'analyse et la collecte des données relatives à 
    l'avancement des projets; afin d’optimiser la performance et de respecter les délais.`,
    price: 8000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "project_management",
    startDate: "",
    endDate: "",
    features: [
      `Programme de la formation :`,

      `Partie 1: Introduction à MS Project`,

      `Vue d'ensemble de l'outil `,
      `Création d'un projet `,
      `Présentation de l'interface et des principales fonctionnalités`,

      `Partie 2:  Planification des tâches`,

      `Création de tâches et sous-tâches`,
      `Dépendances entre les tâches`,
      `Utilisation des durées, échéances et jalons`,

      `Partie 3:  Gestion des ressources`,

      `Ajout et affectation de ressources (humaines, matérielles)`,
      `Gestion des coûts et du temps des ressources`,
      `Optimisation des ressources`,

      `Partie 4: Suivi et collecte des données`,

      `Suivi de l'avancement des tâches`,
      `Mise à jour de l'état du projet`,
      `Suivi des indicateurs clés de performance (KPIs)`,

      `Partie 5: Analyse et gestion des données`,

      `Visualisation et analyse des données à   l’aide de rapports`,
      `Exportation des données (Excel, CSV)`,
      `Tableaux de bord et rapports personnalisés pour le suivi des projets `,

      `Partie 6: Exercices pratiques`,

      `Création d'un projet type`,
      `Simulation de gestion de projet avec collecte de données en temps réel`,
      `Discussion et retour sur les difficultés rencontrées`,
    ],
    trainer: {
      name: "YOUGBARE Bienvenue",
      image: bienvenue,
      speciality: "",
      contact: "",
    },
  },

  {
    id: 20,
    image: formation9,
    title: `Formation Excel Masterclass : Le Parcours Complet pour Devenir Expert`,
    description: `L'objectif de cette formation est d'apprendre les bases de Google Sheets, y compris la navigation, 
    la gestion de données, l'utilisation des fonctions de base, et la création de graphiques simples, 
    afin de manipuler efficacement des feuilles de calcul pour des tâches quotidiennes.`,
    price: 5000,
    discount: 0.2,
    online: true,
    inPerson: false,
    category: "excel",
    startDate: "",
    endDate: "",
    features: [
      `Partie I : Introduction et Fonctions de Base`,

      `Prise en main de l’interface d’Excel`,
      `Création et gestion des fichiers`,
      `Saisie, modification et mise en forme des données`,
      `Formules et opérations de base`,

      `Partie II : Gestion et Analyse des Données`,

      `Tri, filtrage et tableaux structurés`,
      `Fonctions avancées (recherche, conditionnelles)`,
      `Création et personnalisation de graphiques`,
      `Tableaux croisés dynamiques`,

      `Partie III : Automatisation des tâches et Protection des données`,

      `Introduction aux macros et VBA`,
      `Automatisation des tâches`,
      `Protection des feuilles et des classeurs`,

      `Partie IV : Collaboration et Projets Pratiques`,

      `Partage de fichiers et collaboration en temps réel`,
      `Paramètres d’impression et exportation`,
      `Études de cas réels et projets pratiques `,
      `Evaluation et Certifications`,
    ],
    trainer: {
      name: "OUEDRAOGO Yacouba",
      image: yacouba,
      speciality: "",
      contact: "",
    },
  },
];

export default FormationsData;
