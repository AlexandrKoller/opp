import Zombie from '../zombie'

test('Персонаж Swordsman создается корректно', () => {
    const correct = {
        name: 'Mr.Zombie',
        type: 'Zombie',
        health: 100,
        lavel: 1,
        attack: 40,
        defence: 10
    };
    expect(new Zombie('Mr.Zombie', 'Zombie')).toEqual(correct)
})