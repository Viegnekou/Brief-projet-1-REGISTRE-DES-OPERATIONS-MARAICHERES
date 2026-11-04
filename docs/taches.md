# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | Jour 1 après-midi | Jour 1 après-midi + Jour 2 matin | `npm test` : 3 verts / 36 rouges ; dépôt GitHub créé |
| Fiche 2 : lire et écrire le JSON | La nuit Jour 1 | Après-midi Jour 2 | `npm run test:stockage` : 3 verts |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | La nuit Jour 1 | Après-midi Jour 2 | `npm run test:registre` : 13 verts ; test manuel ajout + relance |
| Fiche 4 : rechercher et trier ; choix 3 et 4 | Matin Jour 2 | La nuit Jour 2 | `npm run test:recherche` : 7 verts ; test manuel O03/O99/P2/aubergine + 2 tris |
| Fiche 5 : synthèse ; choix 5 | Après-midi Jour 2 | Matinée Jour 3 | `npm run test:synthese` : 5 verts ; menu complet (`app.js`) |
| Tests par un camarade ; mes propres tests | La nuit Jour 2 | Matinée Jour 3 | Testé par TIEMOKO Marie Carmelle ; tests manuels notés dans `releve-tests.md` |
| Fiche agronomique ; README ; documents | La nuit Jour 2 | Matinée Jour 3 | Tous les fichiers `docs/` et `README.md` complétés |
| Dépôt cloné et lancé ailleurs ; démonstration répétée | Matin Jour 3 | Apres midi Jour 3 | Démonstration faite devant les camarades qui ont choisis le meme sujet que moi |
| Bonus | Après-midi Jour 3 | Apres midi Jour 3 | `npm run test:bonus` : 8 verts ; choix 6 et 7 ajoutés au menu |

**Blocages** (le message exact, ce que j'ai essayé, la solution) : 
- **Blocage 1 (Syntaxe)** : `SyntaxError: The requested module './src/saisie.js' does not provide an export named 'ouvrinSaisie'`.
  - *Solution* : J'avais fait une faute de frappe dans l'import de `app.js` (j'avais écrit `ouvrinSaisie` au lieu de `ouvrirSaisie`). J'ai corrigé l'orthographe.
- **Blocage 2 (Données introuvables)** : Dans le menu, la recherche de `O04` affichait "Opération O04 introuvable" alors que les 10 opérations étaient censées être là.
  - *Solution* : Mes tests manuels avaient modifié le fichier `donnees/operations.json`. J'ai utilisé la commande `git restore donnees/operations.json` pour remettre les données de départ.
- **Blocage 3 (Comportement inattendu)** : Je ne comprenais pas pourquoi l'ajout d'une opération ne la sauvait pas dans le fichier.
  - *Solution* : En relisant la fiche 2 et les tests, j'ai compris qu'il fallait appeler explicitement `await enregistrerJson(FICHIER_DONNEES, operations)` après un ajout réussi dans `app.js`.