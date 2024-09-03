import Character from './classes'

export default class Zombie extends Character {
    constructor(name) {
        super(name);
        this.type = 'zombie'
        this.health = 100;
        this.lavel = 1;
        this.attack = 40;
        this.defence = 10;       
        }
}
