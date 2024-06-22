<img width="956" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/acf3b00f-d94c-4af9-8f44-a1e5bc6cee73"># Procédure d'installation (BIEN COCHÉ LE INSTALL ALL DEPENDANCE)
1. Premièrement, il est nécessaire d'avoir installé npm et Node.js
Si ce n'est pas fait OU que cela a déjà été fait, mais que le programme ne marche pas. Veuillez suivre ces étapes.
Premièrement rendez vous sur le site de Node.js dans la section "Download" (vous pouvez cliquer sur le lien suivant pour vous rendre : https://nodejs.org/en/download/prebuilt-installer ). Ensuite, allez dans la section "Prebuilt Installer" (vous référé au rectangle rouge sur l'image suivante).
<img width="902" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/f9c29b9f-b581-4463-9224-85bb6d4a8492">
Sélectionner votre système d'exploitation et votre architecture (sur l'image, on peux voir que l'utilisateur a sélectionner "windows" avec une architecture 64 bits).
<img width="457" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/872b6eb6-a925-42ab-b6f9-da8bd0481c0c">
Si vous n'êtres pas certain, vous pouvez vous référer a la section (" system -> about ") dans votre application de réglage. Clique sur "download Node.js" en vert et un fichier va ce télécharger automatiquement. Ouvrez le et sélectionner les paramètres d'installation par défaut. Cependant, il faut bien coché le bouton suivant, sinon cela risque de ne pas fonctionnner (voir l'image suivante).

<img width="424" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/d1daa729-56ba-4d8f-a372-e95121c65da4">

2. Copier le Package manager dans le format de votre choix (ex: fnm marche bien pour mon cas)
Maintenant, aller dans le "package manager", sélectionner votre système d'exploitation et sélectionner le packmanager de votre choix (sur la photo suivante, on voit que la personne a sélectionné Windows et fnm).
<img width="793" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/02c110de-1444-4660-a316-68c7573cc9d5">
Cliquer sur "Copy to clipboard" et ouvrer un terminal (ex: Windows PowerShell). Coller le texte dans votre terminal et faitre enter. Si tous c'est passé comme prévue, vous devriez avoir un numéro de version quand vous rentrer "npm -v"
<img width="952" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/3b8651f5-45a8-45f8-83c6-369097d97798">
Si vous recevez une message du style suivant "The term 'npm' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
spelling of the name, or if a path was included, verify that the path is correct and try again.", essayer de refaire les manipulation précédente en changeant de package manager (prenez Chocolatey par exemple).
# Procédure d'utilisation
1. Dans le repository "Exo_Control", sélectionner la branche "WifiSimulation".
2. Assurez vous que la variable "WIFI_ACTIVE est présente dans la fonction setup.
<img width="689" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/0c80bdc6-642b-4708-b00c-6c4cb9e945f2">
3. Aller dans votre application réglage et rendez vous dans la section "Mobile hotspot" (Network & internet -> Mobile hotspot)
<img width="719" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/91c9f4eb-b0f5-47d8-833f-7d3b6860e211">
5. Si le hotspot BioGenius n'est pas configuré, suivez les 2 prochaines étapes (sinon rendez-vous a l'étape 7)
6. Toujours dans "Mobile hotspot" cliqué sur "Edit" dans la section "Properties", Rentrez les information suivante (voir l'image en dessous)
<img width="724" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/52063ef0-648b-4e64-96a2-b22d46a39f9d">
7. Maintenant configuré, retournez sur Visual Studio Code et uploadez le code dans le ESP32 (dans le repo Exo_Control).
8. Théoriquement, le wifi se connecte automatiquement quand tu lances le code
9. Ouvrez une autre fenêtre sur Visual Studio code afin d'ouvrir le repository Biogenius-Monitoring (la branche main).
10. Ouvrez une console dans ce repository et marquez "npm start" (voir l'image en dessous)
<img width="947" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/22979983-3ba4-4a5e-adda-5357960d2157">
11. Plusieurs élément devrais s'afficher dans votre console, vous devez remonter un peu plus haut et localiser la ligne suivante. Une fois cela fait, fait CTRL + click pour aller sur le lien.
<img width="956" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/d6aa67de-c0bd-4d6c-83c1-e7b1559e5543">
12. Vous devriez voir le Robot, mais ce dernier ne devrais pas bouger lorsque vous bouger l'exo.
13. Retournez dans Network & internet -> Mobile hotspot -> properties et copiez les 3 dernier chiffre de l'adresse IP qui s'affichera (192.168.137.XXX)
14. Retourner dans Visual Studio code sur le repository Biogenius-monitoring et remplacer les 2 ou 3 derniers chiffres de cette ligne par ceux que vous venez tout juste de copier.
<img width="956" alt="image" src="https://github.com/robotique-udes/Biogenius-monitoring/assets/122477838/45663ed4-c9da-4b40-8316-ae3e2658064d">
15. Faitez CTRL + S et retounez sur la page internet avec le robot
16. Déplacez l'exo et regardez si l'animation suit le mouvement.
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
