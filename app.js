// Registre des opérations maraîchères — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { OPERATIONS, ajouterOperation, formaterOperation, listerOperations, trouverParId } from './src/registre.js';
import { filtrerParCulture, filtrerParParcelle, trierParCout, trierParDate } from './src/recherche.js';
import { coutMinMax, syntheseParParcelle, totalCouts } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/operations.json';

async function main() {
  ouvrirSaisie();
  let operations = [];
  try {
    operations = await chargerJson(FICHIER_DONNEES);
  } catch (erreur) {
    console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. Le registre démarre vide.`);
  }
  console.log('==================================================');
  console.log('   REGISTRE DES OPÉRATIONS MARAÎCHÈRES');
  console.log('   Exploitation maraîchère pédagogique');
  console.log('==================================================');
  console.log(`${operations.length} opération(s) chargée(s) depuis ${FICHIER_DONNEES}.\n`);
  let continuer = true;
  while (continuer) {
    console.log('--------------------- MENU ---------------------');
    console.log('1. Ajouter une opération');
    console.log('2. Lister les opérations');
    console.log('3. Rechercher (identifiant, parcelle, culture)');
    console.log('4. Trier (coût, date)');
    console.log('5. Synthèse des dépenses');
    console.log('0. Quitter');
    const choix = await demander('Votre choix : ');
    if (choix === null) {
      continuer = false;
      break;
    }
    try {
      if (choix === '0') {
        console.log('Au revoir !');
        continuer = false;
      } else if (choix === '1') {
        console.log('\n--- Ajouter une opération ---');
        const id = await demander('Identifiant (ex. O11) : ');
        const date = await demander('Date (AAAA-MM-JJ) : ');
        const parcelle = await demander('Parcelle (ex. P1) : ');
        const culture = await demander('Culture (ex. tomate) : ');
        const operation = await demander('Opération (semis, arrosage, désherbage, repiquage, récolte) : ');
        const coutFCFA = await demander('Coût en FCFA : ');
        if (id !== null && date !== null && parcelle !== null && culture !== null && operation !== null && coutFCFA !== null) {
          const saisie = {
            id: id.toUpperCase(),
            date: date,
            parcelle: parcelle.toUpperCase(),
            culture: culture.toLowerCase(),
            operation: operation.toLowerCase(),
            coutFCFA: coutFCFA
          };
          const erreurs = ajouterOperation(operations, saisie);       
          if (erreurs.length > 0) {
            console.log('Opération refusée :');
            for (const erreur of erreurs) {
              console.log(`  - ${erreur}`);
            }
            console.log(`Le registre compte toujours ${operations.length} opération(s).\n`);
          } else {
            await enregistrerJson(FICHIER_DONNEES, operations);
            console.log(`Opération ${saisie.id} ajoutée. Le registre compte ${operations.length} opération(s).\n`);
          }
        }
      } else if (choix === '2') {
        console.log(`\n--- Liste des opérations (${operations.length}) ---`);
        console.log(listerOperations(operations));
        console.log();
      } else if (choix === '3') {
        console.log('\n--- Rechercher ---');
        console.log('1. Par identifiant');
        console.log('2. Par parcelle');
        console.log('3. Les opérations d\'une culture');
        
        const sousChoix = await demander('Votre choix : ');
        if (sousChoix !== null) {
          if (sousChoix === '1') {
            const id = await demander('Identifiant : ');
            if (id !== null) {
              const operation = trouverParId(operations, id.toUpperCase());
              if (operation) {
                console.log(formaterOperation(operation));
              } else {
                console.log(`Opération ${id.toUpperCase()} introuvable.`);
              }
            }
          } else if (sousChoix === '2') {
            const parcelle = await demander('Parcelle : ');
            if (parcelle !== null) {
              const resultats = filtrerParParcelle(operations, parcelle.toUpperCase());
              console.log(`${resultats.length} opération(s) sur la parcelle ${parcelle.toUpperCase()} :`);
              if (resultats.length > 0) console.log(listerOperations(resultats));
            }
          } else if (sousChoix === '3') {
            const culture = await demander('Culture : ');
            if (culture !== null) {
              const resultats = filtrerParCulture(operations, culture.toLowerCase());
              console.log(`${resultats.length} opération(s) pour la culture ${culture.toLowerCase()} :`);
              if (resultats.length > 0) console.log(listerOperations(resultats));
            }
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
        }
      } else if (choix === '4') {
        console.log('\n--- Trier ---');
        console.log('1. Par coût croissant');
        console.log('2. Par date, de la plus ancienne à la plus récente');
        const sousChoix = await demander('Votre choix : ');
        if (sousChoix !== null) {
          if (sousChoix === '1') {
            console.log(listerOperations(trierParCout(operations)));
          } else if (sousChoix === '2') {
            console.log(listerOperations(trierParDate(operations)));
          } else {
            console.log('Choix inconnu : retour au menu.');
          }
        }
      } else if (choix === '5') {
        console.log('\n--- Synthèse des dépenses enregistrées ---');
        console.log(`Nombre d'opérations : ${operations.length}`);
        console.log(`Total des coûts : ${totalCouts(operations)} FCFA`);
        if (operations.length > 0) {
          console.log('Par parcelle :');
          const synthese = syntheseParParcelle(operations);
          for (const [parcelle, infos] of Object.entries(synthese)) {
            console.log(`  ${parcelle} : ${infos.nombre} opération(s), ${infos.total} FCFA`);
          }
          const minMax = coutMinMax(operations);
          console.log(`Coût minimum : ${minMax.min} FCFA · Coût maximum : ${minMax.max} FCFA`);
        } else {
          console.log('Coût minimum et maximum : aucune donnée');
        }
        console.log('Rappel : ce sont des dépenses. Sans les revenus, elles ne mesurent pas la rentabilité.\n');
      } else {
        console.log(`\nChoix inconnu : « ${choix} ». Tapez un chiffre du menu.\n`);
      }
    } catch (erreur) {
      if (erreur.message.startsWith('TODO')) {
        console.log(`\nÀ compléter : ${erreur.message}\n`);
      } else {
        console.log(`\nErreur inattendue : ${erreur.message}\n`);
      }
    }
  }

  fermerSaisie();
}

main();