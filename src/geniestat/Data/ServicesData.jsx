import excelImage from "../medias/3d-casual-life-smiling-woman-holding-graph.png";
import dataCollectionImage from "../medias/How-to-use-Microsofts-Excel-Data-Analysis-Toolpak.png";
import createSlug from "../Layout/CreateSlug";
const ServicesData = [
  {
    id: 1,
    image: excelImage,
    title: "Analyse de données",
    slug: createSlug("Analyse de données"),
    description: `## Analyse de Données : Notre Service Complet,

### **Nos Services d'Analyse de Données**

1. **Analyse Descriptive**
   - **Résumé Statistique** : Nous fournissons des statistiques descriptives telles que la moyenne, la médiane, les quartiles et l'écart-type pour comprendre les tendances générales de vos données.
   - **Visualisation de Données** : Création de graphiques et de tableaux pour illustrer les principales caractéristiques et tendances de vos données.

2. **Analyse Diagnostique**
   - **Identification des Causes** : Analyse approfondie pour identifier les causes sous-jacentes des problèmes ou des anomalies détectées dans les données.
   - **Études de Cas** : Réalisation d'études de cas pour explorer les impacts de différents facteurs sur vos performances.

3. **Analyse Prédictive**
   - **Modélisation Statistique** : Utilisation de techniques statistiques pour prédire les tendances futures basées sur les données historiques.
   - **Algorithmes de Machine Learning** : Application d'algorithmes de machine learning pour des prévisions plus précises et la classification des données.

4. **Analyse Prescriptive**
   - **Recommandations Stratégiques** : Fourniture de recommandations pour optimiser les processus et améliorer les décisions basées sur les résultats des analyses.
   - **Simulations** : Réalisation de simulations pour évaluer les impacts potentiels de différentes stratégies ou décisions.
`,
    prix: 400000,
    discount: 0,
    features: [
      "Strategy Planning",
      "Technical Audits",
      "Implementation Support",
      "Ongoing Advice and Support",
    ],
  },

  {
    id: 2,
    image: dataCollectionImage, // Remplacez par l'image appropriée pour la collecte de données
    title: "Collecte et Analyse de Données",
    slug: createSlug("Collecte et Analyse de Données"),
    description: `## Collecte et Analyse de Données : Un Service Complet

### **Nos Services de Collecte et d'Analyse de Données**

1. **Programmation de Questionnaires**
  - **Conception sur Mesure** : Création de questionnaires adaptés à vos besoins spécifiques, qu'il s'agisse d'enquêtes en ligne ou sur le terrain.
  - **Outils Avancés** : Utilisation de logiciels spécialisés pour garantir la précision et l'efficacité de la collecte de données.

2. **Collecte de Données**
  - **Enquête en Ligne et sur le Terrain** : Réalisation d'enquêtes en ligne ou sur le terrain, selon les exigences de votre projet.
  - **Gestion des Données** : Stockage sécurisé et gestion des données recueillies pour assurer leur intégrité.

3. **Analyse Statistique**
  - **Méthodes Statistiques Avancées** : Application de techniques statistiques pour analyser les données et en tirer des conclusions significatives.
  - **Visualisation de Données** : Création de graphiques et de rapports pour illustrer les résultats de l'analyse.

4. **Rapports et Recommandations**
  - **Rapports Détaillés** : Fourniture de rapports complets avec des insights clairs pour vous aider à prendre des décisions éclairées.
  - **Recommandations Stratégiques** : Propositions de solutions basées sur les données analysées pour optimiser vos processus.
`,
    prix: 500000,
    discount: 10,
    features: [
      "Programmation de Questionnaires",
      "Collecte de Données",
      "Analyse Statistique",
      "Rapports et Recommandations",
    ],
  },
];

export default ServicesData;
