import Daemon from '../daemon'

test('Персонаж Daemon создается корректно', () => {
    const correct = {
        name: 'Daemon',
        type: 'Daemon',
        health: 100,
        lavel: 1,
        attack: 10,
        defence: 40
    };
    expect(new Daemon('Daemon', 'Daemon')).toEqual(correct)
})