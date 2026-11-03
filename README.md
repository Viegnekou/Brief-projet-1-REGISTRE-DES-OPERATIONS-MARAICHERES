# Registre des opérations maraîchères

> Projet individuel du SAS DFS, brief 1 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

La responsable d'une exploitation maraîchère pédagogique note aujourd'hui ses opérations — semis, arrosage, désherbage, repiquage, récolte — dans un carnet papier. Sur le terrain, elle observe la parcelle avec la fiche agronomique, identifie la culture et l'opération, relève la date et le coût, vérifie les unités en FCFA, puis restitue un résumé. Ce carnet papier provoque des oublis de suivi et rend les opérations difficiles à consulter. L'outil que nous construisons lui permet de saisir ces opérations depuis un terminal, de les enregistrer dans `donnees/operations.json`, de retrouver une intervention par identifiant, par parcelle ou par culture, de trier par coût ou par date, et de totaliser les dépenses par parcelle. En revanche, il n'enregistre que des dépenses : sans les revenus, il ne mesure pas la rentabilité de l'exploitation. Il ne gère ni plusieurs utilisateurs, ni interface graphique, ni synchronisation réseau.

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

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/operations.json`
- [ ] Ajouter une opération, saisies invalides refusées sans arrêter le programme
- [ ] Lister les opérations, message si le registre est vide
- [ ] Rechercher par identifiant ou par parcelle ; filtrer par culture
- [ ] Trier par coût ou par date
- [ ] Synthèse : total, nombre et total par parcelle, coût minimum et maximum
- [ ] Bonus : supprimer et modifier une opération (choix 6 et 7)
- [ ] Bonus : tri par coût décroissant, parcelle la plus coûteuse

## Données

✏️ *Le fichier, le nombre d'opérations, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'elles sont fictives.*

## Limites

✏️ *Au moins trois. Par exemple : le registre enregistre des dépenses, pas les revenus, il ne mesure donc pas la rentabilité.*

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ *Prénom NOM, compte GitHub. Entraide : avec qui, sur quoi.*
