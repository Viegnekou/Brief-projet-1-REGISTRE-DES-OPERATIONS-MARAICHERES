# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)). 

## Contexte

La responsable d'une exploitation maraîchère pédagogique note aujourd'hui ses opérations  semis, arrosage, désherbage, repiquage, récolte  dans un carnet papier. Sur le terrain, elle observe la parcelle avec la fiche agronomique, identifie la culture et l'opération, relève la date et le coût, vérifie les unités en FCFA, puis restitue un résumé. Ce carnet papier provoque des oublis de suivi et rend les opérations difficiles à consulter. L'outil que nous construisons lui permet de saisir ces opérations depuis un terminal, de les enregistrer dans `donnees/operations.json`, de retrouver une intervention par identifiant, par parcelle ou par culture, de trier par coût ou par date, et de totaliser les dépenses par parcelle. En revanche, il n'enregistre que des dépenses : sans les revenus, il ne mesure pas la rentabilité de l'exploitation. Il ne gère ni plusieurs utilisateurs, ni interface graphique, ni synchronisation réseau.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-1-registre-maraicher.git
cd brief-1-registre-maraicher
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités



- [x] Données lues et enregistrées dans `donnees/operations.json`
- [x] Ajouter une opération, saisies invalides refusées sans arrêter le programme
- [x] Lister les opérations, message si le registre est vide
- [x] Rechercher par identifiant ou par parcelle ; filtrer par culture
- [x] Trier par coût ou par date
- [x] Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- [ ] Bonus : supprimer et modifier une opération (choix 6 et 7)
- [ ] Bonus : tri par coût décroissant, parcelle la plus coûteuse

## Données

Fichier donnees/operations.json, 10 opérations fictives au départ. Champs : id, date, parcelle, culture, operation, coutFCFA (voir docs/dictionnaire-donnees.md). Le coût est en FCFA : c'est une dépense, pas un revenu. Les données sont fictives et servent uniquement à l'exercice ; elles ne décrivent aucune exploitation réelle.

## Limites

-Le registre enregistre des dépenses, pas les revenus : il ne mesure donc pas la rentabilité de l'exploitation.

-Utilisation en terminal uniquement, pas d'interface graphique.

-Pas de gestion multi-utilisateurs ni de droits d'accès : une seule personne à la fois.

-Pas de synchronisation réseau : le fichier JSON est local.

-Pas de gestion de stock ni de traçabilité des intrants (semences, eau, main-d'œuvre).

-Le registre ne contrôle pas la cohérence parcelle/culture : on peut enregistrer une culture gombo sur la parcelle P1 alors que P1 est historiquement en tomate.

## Documents

Dictionnaire des données · Tâches · Relevé des tests · Journal de recherche · Fiche agronomique · Fiche individuelle

## Auteur

Koffi Boagr VIEGNEKOU, compte GitHub : viegnekou. Entraide : à compléter dans docs/fiche-individuelle.md.