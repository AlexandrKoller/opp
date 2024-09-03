import Character from './classes'

export default class Magician extends Character {
    constructor(name) {
        super(name);
        this.type = 'magician'
        this.health = 100;
        this.lavel = 1;
        this.attack = 10;
        this.defence = 40;       
        }
}
