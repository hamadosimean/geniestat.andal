import createSlug from "../Layout/CreateSlug";
import productImage1 from "../medias/shoes jaune.png"; // Replace with your product image paths
import productImage2 from "../medias/car_repair.png";
import productImage3 from "../medias/mariage.png";
import simpleCV from "../medias/simple_cv.png";
import yellowCv from "../medias/cv_yellow.png";
const ProductData = [
  {
    id: 1,
    title: "Template Jaune pour les chaussures",
    slug: createSlug("Template Jaune pour les chaussures"),
    description: `Ce template vous permettra non seulement de remplacer facilement les éléments pour personnaliser votre publicité, mais aussi\
       d'adapter le design selon vos besoins spécifiques. Que vous souhaitiez promouvoir des produits, des services ou des événements, ce modèle flexible est conçu pour vous offrir une présentation professionnelle et attrayante, tout en vous faisant gagner du temps et de l'efficacité dans la création de vos visuels marketing. Avec des calques bien organisés et des options\
       de personnalisation simples, vous pourrez ajuster chaque détail pour refléter parfaitement l'identité de votre marque`,
    price: 2000, // Price in local currency (e.g., FCFA)
    image: productImage1,
    features: [
      "Possible de remplacer par des chaussures",
      "Remplacer par des téléphones",
      "Rempacer par des motos",
      "Etc ...",
    ],
    // categories: ["Maison", "Cadeaux"],
  },
  {
    id: 2,
    title: "Affiche pour la reparation des vehicules",
    slug: createSlug("Affiche pour la reparation des vehicules"),
    description: `Ce template de réparation automobile est conçu pour les garages, \
      mécaniciens et ateliers qui souhaitent créer des publicités ou des brochures professionnelles.\
      Il vous permet de remplacer les éléments visuels et textuels avec simplicité, en adaptant chaque \
      détail aux services spécifiques que vous offrez. Que vous ayez besoin de promouvoir des offres \
      spéciales, des réparations rapides, ou des entretiens réguliers, ce modèle vous offre une mise en page \
      claire et moderne qui capte l'attention de vos clients potentiels. Les calques sont bien organisés pour\
       faciliter la personnalisation,\
       et le design est entièrement modifiable pour refléter l'identité de votre entreprise.`,
    price: 2500,
    image: productImage2,
    features: [""],
    // categories: ["Vêtements", "Mode"],
  },
  {
    id: 3,
    title: "Affiche pour un evenement de mariage",
    slug: createSlug("Affiche pour un evenement de mariage"),
    description: `Notre modèle d'invitation de mariage est conçu pour vous aider à annoncer
      votre grand jour de manière élégante et personnalisée. Que vous planifiiez une
       cérémonie intime ou une grande réception, ce modèle offre une mise en page 
      raffinée et facile à personnaliser, adaptée à tous les styles de mariage.`,
    price: 2000,
    image: productImage3,
    features: ["Taille ajustable", "Design tendance", "Confortable à porter"],
    // categories: ["Accessoires", "Mode"],
  },
  {
    id: 4,
    title: "CV model simple ",
    slug: createSlug("CV model simple "),
    description: `Ce modèle de CV est conçu pour vous aider à présenter vos compétences
    et votre expérience de manière claire et concise. Que vous soyez étudiant,
    diplômé ou professionnel, ce modèle offre une mise en page simple et facile à
    personnaliser, adaptée à tous les niveaux de carrière.`,
    price: 1500,
    image: simpleCV,
    features: ["Taille ajustable", "Design tendance", "Confortable à porter"],
  },
  {
    id: 5,
    title: "CV model brin et jaune ",
    slug: createSlug("CV model brin et jaune "),
    description: `Ce modèle de CV est conçu pour vous aider à présenter vos compétences
    et votre expérience de manière claire et concise. Que vous soyez étudiant,
    diplômé ou professionnel, ce modèle offre une mise en page simple et facile à
    personnaliser, adaptée à tous les niveaux de carrière.`,
    price: 1500,
    image: yellowCv,
    features: ["Taille ajustable", "Design tendance", "Confortable à porter"],
  },
];

export default ProductData;
