import Character from './classes'

export default class Daemon extends Character {
    constructor(name) {
        super(name);
        this.type = 'daemon'
        this.health = 100;
        this.lavel = 1;
        this.attack = 10;
        this.defence = 40;       
        }
}
