// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonNum = Math.floor(Math.random() * this.vikingArmy.length);
    const result = this.saxonArmy[randomSaxonNum].receiveDamage(
      this.vikingArmy[randomVikingNum].strength
    );
    if (this.saxonArmy[randomSaxonNum].health <= 0) {
      this.saxonArmy.splice(randomSaxonNum, 1);
    }
    return result;
  }
  saxonAttack() {
    const randomVikingNum = Math.floor(Math.random() * this.vikingArmy.length);
    const randomSaxonNum = Math.floor(Math.random() * this.vikingArmy.length);
    const result = this.vikingArmy[randomVikingNum].receiveDamage(
      this.saxonArmy[randomSaxonNum].strength
    );
    if (this.vikingArmy[randomSaxonNum].health <= 0) {
      this.vikingArmy.splice(randomSaxonNum, 1);
    }
    return result;
  }
  soldierAttack(army1, army2) {
    const randomArmy1Num = Math.floor(Math.random() * this.army1.length);
    const randomArmy2Num = Math.floor(Math.random() * this.army2.length);
    const result = this.army1[randomArmy1Num].receiveDamage(
      this.army2[randomArmy2Num].strength
    );
    if (this.army1[randomArmy1Num].health <= 0) {
      this.army1.splice(randomArmy1Num, 1);
    }
    return result;
  }
  showStatus() {
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0) {
      return "Vikings and Saxons are still in the thick of battle.";
    } else if ((this.saxonArmy.length = 0)) {
      return "Vikings have won the war of the century!";
    } else if ((this.vikingArmy.length = 0)) {
      return "Saxons have fought for their lives and survived another day...";
    }
  }
}
