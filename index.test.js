const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
    test('Test 1', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: 'John Doe' }]);
                done();
            });
    });
});

describe('POST /:param', () => {
    test('Test 1/2', (done) => {
        request(app)
            .post('/1')
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ error: false, num: "1" }]);
                done();
            });
    });
});



// ========== Exercice 1 ==========

describe("POST /s1/exercice1", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: undefined, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: 1, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice1")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Veuillez entrer un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice2")
        .send({ n1: undefined, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });
  
    test("Calcule correctement la somme de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice1").send({ n1: 1, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 3 }]);
    });
  });



// ========== Exercice 2 ==========

describe('Test de la route /s1/exercice2', () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 n'est pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: undefined, n2: 2 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 1, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n2 n'est pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: 1, n2: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 sont null", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: null, n2: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice2")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

    test('Devrait soustraire deux nombres', async () => {
      const requestBody = { n1: 10, n2: 5 };
      const expectedResponse = [{ reponse: 5 }];
      const response = await request(app)
        .post('/s1/exercice2')
        .send(requestBody);
      expect(response.status).toBe(200);
      expect(response.body).toEqual(expectedResponse);
    });
  });



  // ========== Exercice 3 ==========

  describe("POST /s1/exercice3", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: undefined, n2: 1 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: 1, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice3")
        .send({ n1: undefined, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Calcule correctement la somme de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice3").send({ n1: 1, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 2}]);
    });
  });



// ========== Exercice 4 ==========

  describe("POST /s1/exercice4", () => {
    test("Renvoie une erreur si n1 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: undefined, n2: 1 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n2 est null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: 1, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n2 n'est pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: 1, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });
  
    test("Renvoie une erreur si n1 et n2 sont null", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: null, n2: null });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
      const res = await request(app)
        .post("/s1/exercice4")
        .send({ n1: undefined, n2: undefined });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
    });

    test("Calcule correctement la somme de n1 et n2", async () => {
      const res = await request(app).post("/s1/exercice4").send({ n1: 10, n2: 2 });
      expect(res.statusCode).toBe(200);
      expect(res.body).toEqual([{ reponse: 5 }]);
    });
  });



// ========== Exercice 5 ==========

describe("POST /s1/exercice5", () => {
  test("Renvoie une erreur si n1 n'est pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 et n2 ne sont pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: undefined, n2: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Calcule correctement la factorielle d'un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice5")
      .send({ n1: 5 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 120 }]);
  });
});



// ========== Exercice 6 ==========

describe("POST /s1/exercice6", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice6")
      .send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 n'est pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice6")
      .send({ n1: undefined});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Vérification de nombre pair ou impair", async () => {
    const res = await request(app).post("/s1/exercice6").send({ n1: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "pair" }]);
  });
});



// ========== Exercice 7 ==========

describe("POST /s1/exercice7", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 n'est pas défini", async () => {
    const res = await request(app)
      .post("/s1/exercice7")
      .send({});
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Conversion de température de Celsius à Fahrenheit", async () => {
    const res = await request(app).post("/s1/exercice7").send({ n1: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 50 }]);
  });
});



// ========== Exercice 8 ==========

describe("POST /s1/exercice8", () => {
  test("Renvoie une erreur si n1 est null", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: null });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 n'est pas définie", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: undefined });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: "Ajouter un nombre valide" }]);
  });

  test("Renvoie une erreur si n1 n'est pas un nombre", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: "non-un-nombre" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: null }]);
  });

  test("Calcule correctement l'aire d'un cercle", async () => {
    const res = await request(app)
      .post("/s1/exercice8")
      .send({ n1: 10 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 314.1592653589793 }]);
  });
});



// ========== Exercice 9 ==========

describe("POST /s1/exercice9", () => {
  test("Vérification d'une chaîne palindrome", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: "radar" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: true }]);
  });

  test("Vérification d'une chaîne non palindrome", async () => {
    const res = await request(app)
      .post("/s1/exercice9")
      .send({ n1: "steven" });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: false }]);
  });
});



// ========== Exercice 10 ==========

describe("POST /s1/exercice10", () => {
  test("Calcul du PGCD de nombres entiers (exemple 1)", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 24, n2: 18 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 6 }]);
  });

  test("Calcul du PGCD de nombres entiers (exemple 2)", async () => {
    const res = await request(app)
      .post("/s1/exercice10")
      .send({ n1: 35, n2: 49 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ reponse: 7 }]);
  });
});



// ==================== SAISON 2 ==================== //



// ========== Exercice 1 ==========

describe("POST /s2/exercice1", () => {
  test("Obtenir la date d'il y a 10 ans", async () => {
    const res = await request(app)
      .post("/s2/exercice1");
    expect(res.statusCode).toBe(200);

    const today = new Date();
    today.setFullYear(today.getFullYear() - 10);

    expect(res.body[0].reponse).toEqual(today.toISOString().split("T")[0]);
  });

  test("La date renvoyée est correcte (année)", async () => {
    const res = await request(app)
      .post("/s2/exercice1");
    expect(res.statusCode).toBe(200);
  
    const today = new Date();
    today.setFullYear(today.getFullYear() - 10);
  
    expect(res.body[0].reponse).toContain(today.getFullYear().toString());
  });

    /*
  test("La réponse est au format JSON avec une propriété 'reponse'", async () => {
    const res = await request(app)
      .post("/s2/exercice1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty(["response"]);
  });
  */

 /* 
 test("La date renvoyée est correcte (mois et jour)", async () => {
    const res = await request(app)
      .post("/s2/exercice1");
    expect(res.statusCode).toBe(200);
  
    const today = new Date();
    today.setFullYear(today.getFullYear() - 10);
  
    const moisAttendu = (today.getMonth() + 1).toString().padStart(2, '0');
    const jourAttendu = today.getDate().toString().padStart(2, '0');
  
    expect(res.body[0].reponse).toContain(`${moisAttendu}/${jourAttendu}`).toISOString().split("T")[0];
    // expect(res.body[0].reponse).toEqual(today.toISOString().split("T")[0]);
  });
  */
});



// ========== Exercice 2 ==========

describe("POST /s2/exercice2", () => {
  test("Formater une date en 'jj/mm/aaaa'", async () => {
    const res = await request(app)
      .post("/s2/exercice2");
    expect(res.statusCode).toBe(200);

    const date = new Date();
    const jour = date.getDate().toString().padStart(2, '0');
    const mois = (date.getMonth() + 1).toString().padStart(2, '0');
    const annee = date.getFullYear();
    const dateFormateeAttendue = `${jour}/${mois}/${annee}`;

    expect(res.body[0].reponse).toEqual(dateFormateeAttendue);
  });
});
