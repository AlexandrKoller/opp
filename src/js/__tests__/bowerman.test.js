import Bowerman from '../bowerman'

test('Персонаж Bowerman создается корректно', () => {
    const correct = {
        name: 'Bowman',
        type: 'Bowerman',
        health: 100,
        lavel: 1,
        attack: 25,
        defence: 25
    };
    expect(new Bowerman('Bowman', 'Bowerman')).toEqual(correct)
})