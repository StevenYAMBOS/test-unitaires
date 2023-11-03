// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const aujourdhui = new Date();
    aujourdhui.setFullYear(aujourdhui.getFullYear() - 10); // Soustraire 10 ans
    return aujourdhui.toISOString().split("T")[0];
}
