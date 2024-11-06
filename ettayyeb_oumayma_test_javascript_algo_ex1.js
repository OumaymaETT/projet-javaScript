// Initialise une grille 2D vide de 9x9 pour stocker les valeurs du Sudoku
var to_verify = Array(9).fill().map(() => Array(9));
/**
 * Fonction F11 : Remplit la grille `to_verify` avec les valeurs de `array_number`.
 * `array_number` est un tableau de chaînes de caractères où chaque chaîne représente une ligne
 * du Sudoku, les nombres étant séparés par des espaces.
 */
function F11() {
    for (let i = 0; i < 9; i++) {
        to_verify[i] = array_number[i].split(" ").map(Number);
    }
}
/**
 * Fonction F12 : Affiche la grille `to_verify` en créant dynamiquement un tableau HTML.
 * Cette fonction génère le HTML pour un tableau 9x9 et insère ce HTML dans l'élément
 * ayant l'identifiant `sudokuTable` sur la page Web.
 */
function F12() {
    let tableHtml = "<table border='1'>";
    for (let i = 0; i < 9; i++) {
        tableHtml += "<tr>";
        for (let j = 0; j < 9; j++) {
            tableHtml += `<td>${to_verify[i][j]}</td>`;
        }
        tableHtml += "</tr>";
    }
    tableHtml += "</table>";
    document.getElementById("sudokuTable").innerHTML = tableHtml;
}
