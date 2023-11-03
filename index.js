const express = require('express');
const app = express();
app.use(express.json());

// Imports Saison 1
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

// Imports Saison 2
const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3000;

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});



// ========== Exercice 1 ==========

app.post('/s1/exercice1', (req, res) => {
    const n1 = req.body.n1;
    const n2 = req.body.n2;
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!n1) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
      if (n1 == undefined || n2 == undefined) {
        return res.json([{ reponse: "Veuillez entrer un nombre valide" }]);
      }
    let a = addition(n1, n2);
    return res.json([{ reponse: a }]);
});



// ========== Exercice 2 ==========

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n1) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (n1 == undefined || n2 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 3 ==========

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n1) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (n1 == undefined || n2 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 4 ==========

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    if (n1 == null || n2 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n1) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (!n2) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
      if (n1 == undefined || n2 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
      }
    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 5 ==========

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1
    if (n1 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
    }
    if (n1 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
    }
    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});


// ========== Exercice 6 ==========

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }])
    }
    if (n1 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }])
    }
    let a = estPairOuImpair(n1)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 7 ==========

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }])
    }
    if (n1 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }])
    }
    let a = celsiusEnFahrenheit(n1)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 8 ==========

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    if (n1 == null) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
    }
    if (n1 == undefined) {
        return res.json([{ reponse: "Ajouter un nombre valide" }]);
    }
    let a = aireCercle(n1)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 9 ==========

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1
    let a = estPalindrome(n1)
    return res.json([{ reponse: a }]);
});



// ========== Exercice 10 ==========

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2
    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});




// ==================== SAISON 2 ==================== //



// ========== Exercice 1 ==========

app.post('/s2/exercice1', (req, res) => {
    const date = dateIlYADixAns();
    return res.json([{ reponse: date }]);
});

app.post('/s2/exercice2', (req, res) => {
    const date = new Date();
    const dateFormatee = formaterDate(date);
    return res.json([{ reponse: dateFormatee }]);
});

app.post('/s2/exercice3', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice4', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice5', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice6', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice7', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice8', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice9', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.post('/s2/exercice10', (req, res) => {
    return res.json([{ reponse: 0 }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


