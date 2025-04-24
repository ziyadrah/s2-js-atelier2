// q1

class Etudiant {
  constructor(nom, prenom, age, cne) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.cne = cne;
  }

  // q2
  etudier() {
    console.log(`L'étudiant ${this.prenom} ${this.nom} est en train d'étudier`);
  }
}

class Professeur {
  constructor(nom, age, cin) {
    this.nom = nom;
    this.age = age;
    this.cin = cin;
  }

  // q2
  enseigner() {
    console.log(`Le professeur ${this.nom} est en train d'enseigner`);
  }
}

// q3

let DBEtudiants = [];
let DBProfesseurs = [];

[
  {"prenom":"Risa", "nom":"Clashe", "age":18, "cne":"4JV8VA4XV61"},
  {"prenom":"Garret", "nom":"O'Mohun", "age":24, "cne":"8K33GR7NN81"},
  {"prenom":"Clementina", "nom":"Nice", "age":42, "cne":"5EV5M89MV55"},
  {"prenom":"Marney", "nom":"Carr", "age":57, "cne":"5DR6W49DM02"},
  {"prenom":"Essie", "nom":"Sunners", "age":26, "cne":"1JV5DX1TU12"},
  {"prenom":"Georges", "nom":"Sorsbie", "age":53, "cne":"7M37NM7GC51"},
  {"prenom":"Jenine", "nom":"Harrower", "age":38, "cne":"3P97XN9MX16"},
  {"prenom":"Georgine", "nom":"Drayton", "age":42, "cne":"4GW0GJ4YH38"},
  {"prenom":"York", "nom":"Wooldridge", "age":27, "cne":"7YG1JD8DK97"},
  {"prenom":"Fionna","nom":"Carlisle","age":24,"cne":"5J24E80WG72"}
].forEach(etudiant => {
  DBEtudiants.push(new Etudiant(etudiant.nom, etudiant.prenom, etudiant.age, etudiant.cne));
});

[
  {"nom":"Shawn Bonome","age":63,"cne":"5Q91N07MV87"},
  {"nom":"Kelli Broadway","age":52,"cne":"7ND2Q94YD80"},
  {"nom":"Ella Keese","age":20,"cne":"9G11TJ2EE53"},
  {"nom":"Camilla Punch","age":55,"cne":"3A90P84PH69"},
  {"nom":"Valery Hurdman","age":47,"cne":"1AW5XJ9CQ66"},
  {"nom":"Cassie Asquez","age":62,"cne":"1FG5MV6QM76"},
  {"nom":"Marybelle Oloshkin","age":62,"cne":"1EJ4U65HP54"},
  {"nom":"Beryl Last","age":43,"cne":"5FR4TG1CU67"},
  {"nom":"Joelie Brodley","age":43,"cne":"9R99FQ0PK45"},
  {"nom":"Verne Lembke","age":44,"cne":"3DF7XU3JY33"}
].forEach(professeur => {
  DBProfesseurs.push(new Professeur(professeur.nom, professeur.age, professeur.cne));
})

console.log(DBEtudiants);
console.log(DBProfesseurs);

function trierParNom(array) {
  return array.sort((a, b) => a.nom.localeCompare(b.nom));
}

console.log("-------------------------------");
console.log("Etudiants triés par nom:");
console.log(trierParNom(DBEtudiants));
console.log("Professeurs triés par nom:");
console.log(trierParNom(DBProfesseurs));


