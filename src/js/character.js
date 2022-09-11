export default class Character {
  constructor(name, type, health, level, attack, defence) {
    if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
      throw new error('name shall be in string format and not less than 2 or more than 10 characters in length');
    } else {
      this.name = name;
    }

    if (Character.types.includes(type) === false) {
      throw new error('type is not properly defined');
    } else {
      this.type = type;
    }

    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health !== 0) {
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else throw new Error('you cannot increase level of character that is already dead');
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}

Character.types = [
  'Bowman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];
