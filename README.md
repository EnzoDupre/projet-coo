# My App

## Description

Ce projet est une application web de base utilisant Node.js, Express, et Prisma pour gérer une base de données SQLite. L'application permet de créer et de lister des utilisateurs.

## Prérequis

- [Node.js](https://nodejs.org/) (v14 ou plus récent)
- [npm](https://www.npmjs.com/) (v6 ou plus récent)
- [Prisma CLI](https://www.prisma.io/docs/getting-started) (installé globalement avec `npm install -g prisma`)

## Installation

1. Installez les dépendances :

    ```bash
    npm install
    ```

2. Initialisez Prisma :

    ```bash
    npx prisma generate
    ```

3. Lancez le projet :

   ```bash
   npm start
   ```

## Configuration de la Base de Données

1. Ouvrez le fichier `.env` et configurez votre URL de base de données. Pour SQLite, utilisez :

    ```plaintext
    DATABASE_URL="file:./dev.db"
    ```

2. Dans le fichier `prisma/schema.prisma`, définissez votre modèle de données.

3. Créez les migrations et générez le client Prisma :

    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
 
## Commandes Prisma

Créer une migration et l'appliquer à la base de données :

  ```bash
  npx prisma migrate dev --name <nom_de_la_migration>
  ```

Pour explorer la base de données dans une interface graphique, ouvrir Prisma Studio :

  ```bash
  npx prisma studio
  ```

Valider le schéma pour s'assurer qu'il n'y a pas d'erreurs :

  ```bash
  npx prisma validate
  ```

Formatter un schéma Prisma pour supprimer les erreurs :

  ```bash
  npx prisma format
  ```

Mettre à jour son schéma de bdd (comme un git pull) :

  ```bash
  npx prisma db pull
  ```

Pousser son schéma de bdd (comme un git push) :

  ```bash
  npx prisma db push
  ```

Exécuté le script de peuplement de la base :

  ```bash
  npx prisma db seed
  ```
