FROM node:lts-alpine

# WORKDIR pour changer de dossier de travail
WORKDIR /portfolio

COPY package*.json ./

RUN npm install

COPY . .

# CMD pour définir une commande lors du démarrage du conteneur
CMD ["npm", "run", "dev", "--host"]