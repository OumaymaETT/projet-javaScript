/**
 * Fonction afficherMessage
 * Affiche un message d'erreur dans le div HTML ayant l'id `verificationResults`.
 * Cette fonction est utilisée pour ajouter des messages sans effacer les messages précédents.
 * 
 * @param {string} message - Le message à afficher.
 */
function afficherMessage(message) {
    document.getElementById("verificationResults").innerHTML += message + "<br>";
}

/**
 * Fonction afficherMessageRegion
 * Affiche un message d'erreur spécifiquement pour une région 3x3 incorrecte.
 * Utilise afficherMessage pour afficher le message formaté avec les coordonnées de la région
 * et la liste des valeurs de cette région.
 * 
 * @param {number} x - Coordonnée de ligne de la région (indice de région).
 * @param {number} y - Coordonnée de colonne de la région (indice de région).
 * @param {Array} region - Les valeurs de la région 3x3 en cours de vérification.
 */
function afficherMessageRegion(x, y, region) {
    afficherMessage(`Région (${x + 1}, ${y + 1}) incorrecte: ${region.join(" ")}`);
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
/* j'ai pas encore fini cette fct
function F33() {
    for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
            let region = [];
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {

                    
                }
            }
            if (!F21(region)) {
                afficherMessageRegion(x, y, region);
            }
        }
    }
}
*/
