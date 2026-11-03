# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

## Calculs à la main (faits le 03/11/2026, avant tout code)

D'après `donnees/operations.json` (10 opérations de départ) :

| Grandeur | Calcul | Résultat attendu |
| --- | --- | --- |
| Total des coûts | 3000+4500+2000+5000+1500+8000+4000+3500+2500+6000 | **40 000 FCFA** |
| P1 (O01, O03, O06, O09) | 4 opérations · 3000+2000+8000+2500 | **4 op., 15 500 FCFA** |
| P2 (O02, O05, O08) | 3 opérations · 4500+1500+3500 | **3 op., 9 500 FCFA** |
| P3 (O04, O07, O10) | 3 opérations · 5000+4000+6000 | **3 op., 15 000 FCFA** |
| Coût minimum | O05 (arrosage P2 gombo) | **1 500 FCFA** |
| Coût maximum | O06 (désherbage P1 tomate) | **8 000 FCFA** |
| Tri par coût croissant | du plus petit au plus grand | commence par **O05**, finit par **O06** |
| Recherche O03 | P1, tomate, arrosage, 2000 FCFA | **trouvée** |
| Recherche O99 | identifiant inconnu | **introuvable** |
| Registre vide — total | `[]` | **0 FCFA** |

## Essais dans le menu

Un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajouter O11 valide (2026-10-27, P1, tomate, récolte, 2500) | « Opération O11 ajoutée. Le registre compte 11 opération(s). » | | |
| Quitter puis relancer `node app.js` | O11 toujours présente (11 opérations chargées) | | |
| Ajouter avec coût `-100` | refusé : « Le coût doit être un nombre positif ou nul (en FCFA). » | | |
| Ajouter avec coût vide `""` | refusé (même message) | | |
| Ajouter avec coût `"abc"` | refusé (même message) | | |
| Ajouter avec id `O01` (doublon) | refusé : « Cet identifiant est déjà utilisé. » | | |
| Ajouter avec date `2026-02-30` | refusé : « La date doit être une date réelle au format AAAA-MM-JJ. » | | |
| Ajouter avec opération `labour` | refusé : « L'opération doit être … » | | |
| Saisie avec 3 erreurs à la fois | les 3 messages s'affichent, rien n'est ajouté | | |
| Rechercher `O03` | « O03 \| 2026-10-21 \| P1 \| tomate \| arrosage \| 2000 FCFA » | | |
| Rechercher `O99` | « Opération O99 introuvable. » | | |
| Rechercher parcelle `P2` | « 3 opération(s) sur la parcelle P2 : » + 3 lignes | | |
| Rechercher culture `aubergine` | « 3 opération(s) pour la culture aubergine : » + 3 lignes | | |
| Trier par coût croissant | commence par O05, finit par O06 | | |
| Trier par date | O01 (2026-10-20) en premier, O10 (2026-10-26) en dernier | | |
| Après un tri, refaire choix 2 (lister) | l'ordre d'origine est revenu | | |
| Synthèse | 10 op., 40 000 FCFA, P1/P2/P3 conformes, min 1500, max 8000 | | |
| Choix menu inconnu (`9`) | « Choix inconnu : « 9 ». Tapez un chiffre du menu. » + retour menu | | |
| Ctrl+C pendant une saisie | le programme quitte proprement | | |

## Sur un autre poste

`git clone`, `node app.js`, `npm test`, en suivant le README : à faire en J4.

- Résultat attendu : `npm test` vert (sauf bonus), `node app.js` affiche le menu et charge 10 opérations.
- Résultat obtenu : à remplir en J4.