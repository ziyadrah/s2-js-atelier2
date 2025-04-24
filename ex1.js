// q1

class Voiture {
    constructor(marque, model, annee, type, carburant) {
        this.marque = marque;
        this.model = model;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

// q2

let DBVoitures = [];

DBVoitures.push(new Voiture("Tesla", "Model 3", 2021, "Berline", "Électrique"));
DBVoitures.push(new Voiture("Volkswagen", "Golf", 2018, "Compacte", "Essence"));

// q3

class Hyundai extends Voiture {
    constructor(model, annee, type, carburant, serie, hybride) {
        super("Hyundai", model, annee, type, carburant);
        this.serie = serie;     // attribut spécifique à Hyundai
        this.hybride = hybride; // attribut spécifique à Hyundai
    }

    alarmer() {
        console.log(`Alarme activée sur Hyundai ${this.model} série ${this.serie}`);
    }
}

class Ford extends Voiture {
    constructor(model, annee, type, carburant, options) {
        super("Ford", model, annee, type, carburant);
        this.options = options; // attribut spécifique à Ford (tableau)
    }
}

const tucson = new Hyundai("Tucson", 2023, "SUV", "Essence", "N-Line", true);
DBVoitures.push(tucson);
console.log("\nDétails Hyundai:");
console.log(tucson);
tucson.alarmer();

const ioniq = new Hyundai("Ioniq", 2020, "Berline", "Électrique", "Premium", true);
DBVoitures.push(ioniq);
console.log("\nDétails Hyundai:");
console.log(ioniq);
ioniq.alarmer();

const mustang = new Ford(
    "Mustang", 
    2023, 
    "Coupé", 
    "Essence", 
    ["Siège chauffant", "Toit ouvrant", "Système audio premium"]
);
DBVoitures.push(mustang);
console.log("\nDétails Ford:");
console.log(mustang);
// console.log("Options disponibles:", mustang.options.join(", "));

const focus = new Ford(
  "Focus",
  2019,
  "Berline",
  "Diesel",
  ["GPS", "Caméra de recul", "Régulateur de vitesse"]
);
DBVoitures.push(focus);
console.log("\nDétails Ford:");
console.log(focus);
// console.log("Options disponibles:", focus.options.join(", "));

// q4

function afficherVoitures(voitures) {
  // voitures.forEach(voiture => console.log(voiture));
  voitures.forEach(voiture => {
    console.log(`
    Année : ${voiture.annee}
    Marque : ${voiture.marque}
    Modèle : ${voiture.model}
    Type : ${voiture.type}
    Carburant : ${voiture.carburant}
    --------------------`
    );
  });
}

function trierVoituresParAnnee(voitures) {
    voitures.sort((a, b) => a.annee - b.annee);
    return voitures;
}

function afficherVoituresParAnnee(voitures) {
  console.log("\nTriage par Année");
  afficherVoitures(trierVoituresParAnnee(voitures));
}

afficherVoituresParAnnee(DBVoitures);
