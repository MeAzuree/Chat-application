
# Projet Nodejs : application de chat
Lilou Tisserand

## Description

Cette application est une application de chat. Lors du lancement du serveur, vous arrivez sur une page d'identification où vous êtes invités à rentrer votre nom et à choisir votre avatar parmi une liste prédéfinie ou en important votre propre photo. Une fois fini, cliquez sur le bouton login, qui vous enverra sur le chat.
Vous pouvez alors envoyer des messages et recevoir ceux des autres utilisateurs. L'application affiche les utilisateurs se connectant et se déconnectant de l'application et les personnes en ligne.

 
## Installation

1. Assurez-vous que npm et [NodeJs](https://nodejs.org/en/) sont installés.

2. Placez vous dans le dossier où vous souhaitez cloner le dépot git
```
cd /chemin/du/dossier
```

3. Clonez le dépot git sur votre machine
```
git clone git@devops.telecomste.fr:quillaud.gaelle/projet-nodejs.git
cd projet-nodejs
```

4. Installez les dépendances
```
npm install
```

5. Lancez l'application
```
node index.js
```

6. L'application fonctionne maintenant sur http://localhost:3000/

7. Pour simuler plusieurs utilisateurs connectés sur le chat conversant entre eux, ouvrez plusieurs fenêtres http://localhost:3000/ .