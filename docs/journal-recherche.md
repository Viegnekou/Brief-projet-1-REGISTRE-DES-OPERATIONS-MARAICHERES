# Journal de recherche

> Chaque recherche utile : ce que vous cherchiez, où (cours, [W3Schools](https://www.w3schools.com/), OpenClassrooms, YouTube, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais | Où | Ce que j'ai compris | Utilisé dans |
| --- | --- | --- | --- |
| Comprendre la structure d'une fonction (paramètres, return) | [W3Schools - JS Functions](https://www.w3schools.com/js/js_function_intro.asp) et OpenClassrooms | Une fonction se déclare avec `function`, des paramètres `()` et des accolades `{}`. Le `return` renvoie le résultat. Les variables internes sont locales. | Toutes les fonctions |
| Comprendre l'asynchrone et les promesses | W3Schools (JS Asynchronous) et OpenClassrooms | `async` et `await` permettent d'attendre une promesse (comme `readFile`) sans bloquer le programme. | `chargerJson` et `enregistrerJson` |
| Comprendre le format JSON | [W3Schools - JS JSON](https://www.w3schools.com/js/js_json.asp) | `JSON.parse` transforme un texte en objet. `JSON.stringify(…, null, 2)` fait l'inverse avec une indentation de 2 espaces. | `chargerJson` et `enregistrerJson` |
| Manipuler les tableaux (ajouter, filtrer, chercher) | OpenClassrooms et YouTube | `push` ajoute à la fin (modifie le tableau). `filter` crée un nouveau tableau. `find` renvoie le premier élément trouvé ou `undefined`. `includes` vérifie la présence. | `registre.js` et `recherche.js` |
| Trier des tableaux sans modifier l'original | OpenClassrooms et YouTube | `sort()` modifie l'original, il faut copier avant avec `[...operations]`. Comparateur numérique `(a, b) => a - b`. Dates : `a.localeCompare(b)`. | `trierParCout` et `trierParDate` |
| Additionner et regrouper des données | YouTube et cours | `reduce` additionne (avec valeur initiale `0`). Pour grouper par parcelle, on crée un objet `{}` et on ajoute `+= 1` au nombre et `+= cout` au total. | `totalCouts` et `syntheseParParcelle` |
| Convertir un texte en nombre | Fiche 3 / OpenClassrooms | `Number('2 500')` donne `NaN`. Il faut utiliser `versNombre()` fourni dans `outils.js`. | `verifierOperation` et `creerOperation` |
| Gérer le cas où le tableau est vide | Fiche 5 | Toujours vérifier `if (operations.length === 0)` avant min/max, sinon `Math.min()` renvoie `Infinity`. | `coutMinMax` |
| Débloquer des points flous | IA (DeepSeek) | A éclairé des notions floues (comportement de `sort`, `JSON.parse`) et m'a orienté pour structurer mes algorithmes sur papier. Aucune ligne de code fournie sans explication. | Préparation des algorithmes |