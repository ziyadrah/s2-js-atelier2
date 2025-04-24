class Voiture {
    constructor(model, marque, annee, type, carburant) {
        this.model = model;
        this.marque = marque;
        this.annee = annee;
        this.type = type;
        this.carburant = carburant;
    }
}

class Hyundai extends Voiture {
    constructor(model, annee, type, carburant, serie, hybride) {
        super(model, "Hyundai", annee, type, carburant);
        this.serie = serie;     // attribut spécifique à Hyundai
        this.hybride = hybride; // attribut spécifique à Hyundai
    }

    alarmer() {
        console.log(`Alarme activée sur Hyundai ${this.model} série ${this.serie}`);
    }
}

class Ford extends Voiture {
    constructor(model, annee, type, carburant, options) {
        super(model, "Ford", annee, type, carburant);
        this.options = options; // attribut spécifique à Ford (tableau)
    }
}

const tucson = new Hyundai("Tucson", 2023, "SUV", "Essence", "N-Line", true);
console.log("Détails Hyundai:");
console.log(tucson);
tucson.alarmer();

const mustang = new Ford(
    "Mustang", 
    2023, 
    "Coupé", 
    "Essence", 
    ["Siège chauffant", "Toit ouvrant", "Système audio premium"]
);
console.log("\nDétails Ford:");
console.log(mustang);
console.log("Options disponibles:", mustang.options.join(", "));
