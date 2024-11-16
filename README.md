# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)














# Projet React - Ecoshop

## Table des Matières
- [À propos du projet](#à-propos-du-projet)
- [Construit avec](#construit-avec)
- [Pour commencer](#pour-commencer)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Contribuer](#contribuer)
- [Licence](#licence)
- [Contact](#contact)


## À propos du projet

Ecoshop est une application web de e-commerce construite avec React. Ce projet inclut des fonctionnalités telles que la navigation des produits, l'ajout d'articles au panier, et la finalisation d'une commande. L'objectif est de fournir une expérience d'achat en ligne moderne et réactive.

## Construit avec

- [React](https://reactjs.org/) - Librairie JavaScript pour construire des interfaces utilisateur.
- [React Router](https://reactrouter.com/) - Pour la navigation entre les pages.
- [Context API](https://reactjs.org/docs/context.html) - Pour la gestion de l'état global.
- [Axios](https://axios-http.com/) - Pour effectuer des requêtes HTTP vers une API.
- [Node.js](https://nodejs.org/) - Environnement d'exécution JavaScript.
- [Netlify](https://www.netlify.com/) - Pour le déploiement.

## Pour commencer

Suivez ces étapes simples pour obtenir une copie locale du projet et le faire fonctionner.

### Prérequis

Assurez-vous que **Node.js** et **npm** sont installés sur votre machine.

- npm :
  npm install npm@latest -g
Installation
Clonez le dépôt :


git clone https://github.com/ousmane-diop/ecoshop.git
Accédez au répertoire du projet :


cd ecoshop
Installez les dépendances :


npm install
Lancez le serveur de développement :


npm start
Utilisation
Pour utiliser l'application, ouvrez votre navigateur et allez à l'adresse :

Copier le code
http://localhost:3000
Exécution des tests
Pour exécuter les tests, utilisez la commande suivante :


npm test
Création d'une version pour la production
Pour créer une version prête pour la production, utilisez :


npm run build
Structure du projet

├── public
│   └── index.html
├── src
│   ├── assets          # Images, icônes, etc.
│   ├── components      # Composants réutilisables de l'interface utilisateur
│   ├── context         # Fichiers du Context API pour la gestion de l'état global
│   ├── pages           # Différentes pages de l'application
│   ├── services        # Fonctions pour les appels API
│   ├── styles          # Fichiers CSS ou feuilles de styles
│   ├── App.js          # Composant principal de l'application
│   ├── index.js        # Point d'entrée pour React
│   └── ...
├── .gitignore
├── README.md
├── package.json
└── ...
Fonctionnalités
Liste de Produits : Parcourir et rechercher des produits.
Panier d'Achat : Ajouter, mettre à jour et supprimer des articles.
Passer à la Caisse : Confirmer les commandes et voir le total.
Design Réactif : Mise en page responsive adaptée aux mobiles.
Gestion d'État : Utilisation du Context API pour gérer l'état du panier.
Navigation : Navigation fluide entre les pages sans rechargement.
Captures d'écran
Description de la page d'accueil.

Description du panier.

Contribuer
Les contributions sont ce qui rend la communauté open-source incroyable pour apprendre, inspirer, et créer. Toutes les contributions sont grandement appréciées.

Forkez le projet.
Créez une branche pour votre fonctionnalité :

git checkout -b feature/NouvelleFonctionnalité
Commitez vos modifications :

git commit -m 'Ajout d'une NouvelleFonctionnalité'
Poussez la branche :

git push origin feature/NouvelleFonctionnalité
Ouvrez une Pull Request.


Contact
Ousmane Diop - ousmanediop779@gmail.com

Lien du projet : https://github.com/ouzediop/ecoshop


Documentation React
Documentation React Router
Font Awesome - Pour les icônes.

lien du portefolio : https://ousmandiop.netlify.app