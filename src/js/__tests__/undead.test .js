import Undead from '../undead'

test('Персонаж Undead создается корректно', () => {
    const correct = {
        name: 'Deadman',
        type: 'Undead',
        health: 100,
        lavel: 1,
        attack: 25,
        defence: 25
    };
    expect(new Undead('Deadman', 'Undead')).toEqual(correct)
})