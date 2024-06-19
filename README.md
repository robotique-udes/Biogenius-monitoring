# Procédure d'installation
1. Premièrement, il est nécessaire d'avoir installé npm et Node.js
BIEN COCHÉ LE INSTALL ALL DEPENDANCE
2. Copier le Package manager dans le format de votre choix (ex: fnm marche bien pour mon cas)
# Procédure d'utilisation
1. uploader sur le ESP32 le code contenant la variable "WIFI_ACTIVE"
2. Partir le wifi "mobile hotspot"
PROCÉDURE SI LE WIFI N'EST PAS DÉJÀ PAS INSTALLÉ:
aller dans Network & internet -> Mobile hotspot -> properties -> edit 
mettre comme nom: BioGenius
mettre comme mot de passe: biogenius!
bande passante: 2.4 GHz
3. Quand tu lances le code de l'exo avec la version wifi, sa se connect automatiquement 
4. Ouvrir une console dans Biogenius-monitoring et marqué : npm start
5. Cliquer sur le lien : http://localhost:8081/ (les chiffre 8081 peuvent changer a vérifier)
6. En théorie tu es sur un lien internet et tu vois le robot 
7. tu retourne dans Network & internet -> Mobile hotspot -> properties et tu copie les 3 derniers chiffre de ton adresse IP. 
8. Tu met les 3 derniers chiffres a cette endroit la (ou il y a le 166) dans entry.js: let socket = new WebSocket("ws://192.168.137.166/ws");
9. tu fais ctrl + s et tu retourne sur la page web
10. tu bouge l'exo et si rien marche tu appel édouard
# Three Seed

Three.js starter project boilerplate bundled with Webpack.

This project is designed to help you get started on your next three.js project. It sets up a simple scene, camera and renderer to view two imported GLTF assets.

[Online Demo](http://edwinwebb.github.io/three-seed/)

## Install
Before you begin, make sure you are comfortable with terminal commands and have [Node and NPM installed](https://www.npmjs.com/get-npm). Then either install via a download or with Git.

### Install via Download
First download the [zip of the project](https://github.com/edwinwebb/three-seed/archive/master.zip) and extract it. Then in terminal at that folder type `npm install` to set things up. To get going run: `npm start`.

### Install with Git
In terminal clone the project into a directory of your choice then delete the git folder to start fresh.

```bash
git clone --depth=1 https://github.com/edwinwebb/three-seed.git my-project
cd my-project
rm -rf .git
npm install
```

## Running the development server
To see the changes you make to the starter project go to the project folder in terminal and type...

```bash
npm start
```

This command will bundle the project code and start a development server at [http://localhost:8080/](http://localhost:8080/). Visit this in your web browser; you should see a rotating island and flower.

## Editing the code
The first file you should open is `./objects/Scene.js`. In it you will find the three objects comprising the ThreeJS scene represented in your browser. The flower, the island, and the lights illuminating them are each represented as a javascript file in the `./object/` folder. Open these, edit them and see your changes in the browser. If something goes wrong a message will displayed in the debug console of the browser.

## Importing local files
Local files, such as images and 3D models, are imported into the application as URLs then loaded asynchronously with three.js. Most common files that three.js uses are supported. For more information about this system see the [webpack site](https://webpack.js.org/).

## Importing modules from the web
If you want to add additional functionality to your project, you can search and install them from the [NPM repository](https://www.npmjs.com/). Some modules you might want to consider are...
* [three-orbit-controls](https://www.npmjs.com/package/three-orbit-controls)
* [popmotion](https://www.npmjs.com/package/popmotion)
* [Cannon.js Physics](https://www.npmjs.com/package/cannon).

Additions like these are best managed in the projects entry file: `./src/entry.js`. In it are the Scene, Camera, Renderer, the window event listeners and the animation loop.

## Using the Three.js Examples
When using this project you might bump into a few issues around using
the examples from three.js docs. Most of the common issues have been
solved with including NPM packages. However, for more complex examples
with custom script includes you might find yourself having to refactor
them. See [Issue 15](https://github.com/edwinwebb/three-seed/issues/15)
for an example.

## About the models
Both the models are loaded by the GLTFLoader and were sourced from the Google Poly project.

"[Floating Island](https://poly.google.com/view/eEz9hdknXOi)" by [sirkitree](https://poly.google.com/user/3dVB0GT8oMI) is licensed under CC BY 2.0

"[Character](https://poly.google.com/view/9znAp0dJiS8)" by [Poly By Google](https://poly.google.com/user/4aEd8rQgKu2) is licensed under CC BY 2.0

## Building the project for the web
Once you are happy with your project you'll be sure to want to show it off. Running `npm run build` in terminal will bundle your project into the folder `./build/`. You can upload this directory to a web server. For more complex results read [this guide](https://webpack.js.org/guides/production/).

## License
[MIT](https://github.com/edwinwebb/three-seed/blob/master/LICENSE)
