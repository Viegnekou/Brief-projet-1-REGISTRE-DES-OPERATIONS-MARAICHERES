# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | pas d'unité | `O03` |
| `date` | Date de l'opération | texte | date réelle au format `AAAA-MM-JJ` | pas d'unité | `2026-10-21` |
| `parcelle` | Parcelle où l'opération a eu lieu | texte | non vide | pas d'unité | `P1` |
| `culture` | Culture suivie sur la parcelle | texte | non vide | pas d'unité| `tomate` |
| `operation` | Nature du geste technique | texte | présente dans la liste fermée `OPERATIONS` |pas d'unité | `arrosage` |
| `coutFCFA` | Dépense enregistrée pour l'opération | nombre | fini, ≥ 0 ; refus si négatif, vide ou non numérique | FCFA | `2000` |

**Listes de valeurs autorisées** :
- `operation` : `semis`, `arrosage`, `désherbage`, `repiquage`, `récolte` (liste `OPERATIONS` dans `src/registre.js`).
- `coutFCFA` : un nombre positif ou nul, en FCFA. C'est une **dépense**, pas un revenu : sans les revenus, on ne peut pas calculer de rentabilité.
- `id` : format `O` suivi de deux chiffres, unique dans tout le registre.

**Sources** : `SUJET.md` (section « Les données ») · `donnees/operations.json` (10 opérations fictives) · `fiches/3-ajouter-lister.md` (règles de `verifierOperation`) · `src/outils.js` (`versNombre`, `estDateValide`).