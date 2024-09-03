import Character from './classes'

export default class Bowerman extends Character {
    constructor(name) {
        super(name);
        this.type = 'bowerman'
        this.health = 100;
        this.lavel = 1;
        this.attack = 25;
        this.defence = 25;       
        }
}
