import Character from './classes'

export default class Undead extends Character {
    constructor(name) {
        super(name);
        this.type = 'undead'
        this.health = 100;
        this.lavel = 1;
        this.attack = 25;
        this.defence = 25;       
        }
}
