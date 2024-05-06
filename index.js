class Arma {
  constructor(nom, damage, ability = null) {
    this.nom = nom;
    this.damage = damage;
    this.ability = ability;
  }
}

class Armadura {
  constructor(nom, defense) {
    this.nom = nom;
    this.defense = defense;
  }
}

class Personatge {
  constructor(nom, level, equipment = {}) {
    this.nom = nom;
    this.level = level;
    this.equipment = equipment;
  }

  obtenirEquipament() {
    const arma = this.equipment?.weapon
      ? this.equipment.weapon.nom
      : "Sense arma";
    const habilitatArma =
      this.equipment?.weapon?.ability || "Cap habilitat especial";
    const armadura = this.equipment?.armor
      ? this.equipment.armor.nom
      : "Sense armadura";

    return `- Arma: ${arma}, Habilitat especial de l'arma: ${habilitatArma}, Armadura: ${armadura}`;
  }
}

const personatges = [
  new Personatge("Gandalf", 50, {
    weapon: new Arma("Staff", 30, "Fireball"),
    armor: new Armadura("Robe", 10),
  }),
  new Personatge("Aragorn", 45, { weapon: new Arma("Sword", 40), armor: null }),
  new Personatge("Legolas", 40, {
    weapon: new Arma("Bow", 35, "Precise Shot"),
    armor: new Armadura("Leather Armor", 15),
  }),
  new Personatge("Frodo", 30, {
    weapon: new Arma("Dagger", 15, "Stealth"),
    armor: new Armadura("Cloak", 5),
  }),
  new Personatge("Gimli", 35, { weapon: new Arma("Axe", 45), armor: null }),
];

personatges.forEach((personatge) => {
  console.log(`${personatge.nom} (Nivell ${personatge.level}):`);
  console.log(personatge.obtenirEquipament());
  console.log("------------------------------");
});
