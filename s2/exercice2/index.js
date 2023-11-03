// Exercice 2: Créer une fonction pour formater une date en "jj/mm/aaaa"
module.exports = function formaterDate(date) {
    if (!(date instanceof Date)) {
        return "Date invalide";
    }

    const jour = date.getDate().toString().padStart(2, '0'); // Jour au format "jj"
    const mois = (date.getMonth() + 1).toString().padStart(2, '0'); // Mois au format "mm"
    const annee = date.getFullYear(); // Année au format "aaaa"

    return `${jour}/${mois}/${annee}`;
}