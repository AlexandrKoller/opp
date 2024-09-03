import Magician from '../magician'

test('Персонаж Magician создается корректно', () => {
    const correct = {
        name: 'Mage',
        type: 'Magician',
        health: 100,
        lavel: 1,
        attack: 10,
        defence: 40
    };
    expect(new Magician('Mage', 'Magician')).toEqual(correct)
})