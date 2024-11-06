/**
 * Fonction F21
 * Vérifie si une ligne (ou une colonne ou une région) de la grille de Sudoku respecte les règles.
 * Cette fonction s'assure que chaque nombre est unique et compris entre 1 et 9.
 * 
 * @param {Array} row - Un tableau représentant une ligne, colonne, ou région de la grille.
 * @returns {boolean} - Retourne `true` si la ligne est valide, `false` sinon.
 */
function F21(row) {
    const seen = new Set();

    for (let num of row) {
        if (num < 1 || num > 9 || seen.has(num)) {
            return false; 
        }
        seen.add(num);
    }

    return true;
}
