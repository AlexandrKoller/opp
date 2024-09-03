import Character from './classes'

export default class Swordsman extends Character {
    constructor(name) {
        super(name);
        this.type = 'swordsman'
        this.health = 100;
        this.lavel = 1;
        this.attack = 40;
        this.defence = 10;       
        }
}
