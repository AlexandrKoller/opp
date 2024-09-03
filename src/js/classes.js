export default class Character{
    constructor(name, type){
        const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie']
        if (name.length >= 2 && name.length <= 10) {
            this.name = name
        } else {throw new Error("Имя должно содержать не менее 2 и не более 10 символов")};
        if (types.includes(type)) {
            this.type = type
        } else {throw new Error("Неизвестный класс")};
        this.health = 100;
        this.lavel = 1;
        this.attack = undefined;
        this.defence = undefined;}

    lavelUp(){
        if (this.health > 0) {
            this.lavel ++;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100
        } else {
            throw Error('нельзя повысить левел умершего');
        }
    }
    damage(points){
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100)
        } else {
            throw Error(`${this.name} уже мертв`);
        }
    }    
}
