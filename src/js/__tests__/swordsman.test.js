import Swordsman from '../swordsman'

test('Персонаж Swordsman создается корректно', () => {
    const correct = {
        name: 'Swordman',
        type: 'Swordsman',
        health: 100,
        lavel: 1,
        attack: 40,
        defence: 10
    };
    expect(new Swordsman('Swordman', 'Swordsman')).toEqual(correct)
})