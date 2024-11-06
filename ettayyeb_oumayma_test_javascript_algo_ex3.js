/**
 * Fonction afficherMessage
 * Affiche un message d'erreur dans le div HTML ayant l'id `verificationResults`.
 * Cette fonction est utilisée pour ajouter des messages sans effacer les messages précédents.
 * 
 * @param {string} message - Le message à afficher.
 */
function afficherMessage(message) {
    const verificationResults = document.getElementById("verificationResults");
    verificationResults.style.display = "block"; 
    verificationResults.innerHTML += message + "<br>";}
/**
 * Fonction afficherMessageRegion
 * Affiche un message d'erreur pour une région 3x3 de la grille de Sudoku qui est incorrecte.
 * Le message indique le numéro de la région et les valeurs de cette région, séparées par des espaces.
 * 
 * @param {number} x - Coordonnée de la "ligne" de la région (indice de région).
 * @param {number} y - Coordonnée de la "colonne" de la région (indice de région).
 * @param {Array} region - Tableau contenant les valeurs de la région 3x3 qui est incorrecte.
 */
function afficherMessageRegion(x, y, region) {
    const regionNumber = x * 3 + y + 1;
    afficherMessage(`Région ${regionNumber} incorrecte: ${region.join(" ")}`);
}
/**
 * Fonction F31
 * Vérifie que chaque ligne de la grille `to_verify` respecte les règles du Sudoku.
 * Si une ligne contient des valeurs dupliquées ou des valeurs hors de l'intervalle 1-9,
 * un message d'erreur est affiché.
 * 
 * Cette fonction efface les messages d'erreur précédents avant d'effectuer la vérification.
 */
function F31() {
    document.getElementById("verificationResults").innerHTML = ""; // Efface les messages précédents
    for (let i = 0; i < 9; i++) {
        if (!F21(to_verify[i])) {
            afficherMessage(`Ligne ${i + 1} incorrecte: ${to_verify[i].join(" ")}`);
        }
    }
}
/**
 * Fonction F32
 * Vérifie que chaque colonne de la grille `to_verify` respecte les règles du Sudoku.
 * Pour chaque colonne, un tableau temporaire `column` est créé pour contenir
 * les valeurs de cette colonne, puis vérifié avec F21.
 * 
 * Si une colonne contient des valeurs dupliquées ou des valeurs hors de l'intervalle 1-9,
 * un message d'erreur est affiché.
 */
function F32() {
    for (let j = 0; j < 9; j++) {
        let column = [];
        for (let i = 0; i < 9; i++) {
            column.push(to_verify[i][j]);
        }
        if (!F21(column)) {
            afficherMessage(`Colonne ${j + 1} incorrecte: ${column.join(" ")}`);
        }
    }
}
/**
 * Fonction F33
 * Vérifie chaque région 3x3 de la grille de Sudoku en s'assurant que chaque région
 * contient les nombres uniques de 1 à 9. 
 * Si une région contient des doublons ou des valeurs hors de l'intervalle 1-9,
 * un message d'erreur est affiché.
 */
function F33() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let region = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    region.push(to_verify[x * 3 + i][y * 3 + j]);
                }
            }
            if (!F21(region)) {
                afficherMessageRegion(x, y, region);
            }
        }
    }
}
