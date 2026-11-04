# Fiche individuelle

Prénom, nom : Koffi Boagr VIEGNEKOU · Compte GitHub : [viegnekou](https://github.com/viegnekou)

1. **Une fonction que j'ai écrite**, et comment elle marche : 
J'ai écrit `verifierOperation` dans `src/registre.js`. Elle reçoit une saisie (où tous les champs sont du texte) et le registre existant. Elle vérifie 6 règles (id obligatoire et unique, date valide, parcelle et culture non vides, opération dans la liste, coût positif ou nul). Elle accumule les messages d'erreur dans un tableau et le renvoie. Si le tableau est vide, c'est que la saisie est valide. J'ai utilisé `versNombre` pour convertir le coût et `estDateValide` pour la date.

2. **Une difficulté, et sa solution** : 
Ma plus grande difficulté a été de comprendre pourquoi `ajouterOperation` devait modifier le tableau (avec `push`) alors que `trierParCout` devait faire une copie (`[...operations]`). Je pensais qu'il fallait toujours copier pour ne pas modifier les données. En relisant les tests, j'ai vu que `ajouterOperation` doit ajouter l'élément au registre existant, alors que le tri ne doit pas changer l'ordre de départ. J'ai aussi eu du mal avec les fonctions asynchrones (`async`/`await`) dans `stockage.js`, car `readFile` renvoie une promesse.

3. **L'entraide** : 
- **Junior et Abdala** m'ont donné des explications, notamment sur la partie de la fiche agronomique qui me portait à confusion, car nous avions travaillé sur le terrain avec certaines fiches. Cela m'a permis de trouver une solution.
- **Marie Carmelle** a testé mon programme pour m'aider à vérifier son bon fonctionnement.
- J'ai également utilisé des ressources en ligne (OpenClassrooms, W3Schools, YouTube) et posé des questions à une IA (DeepSeek) pour clarifier des notions floues et structurer mes algorithmes sur papier.