import Character from '../classes'

test.each([
    ["1 simbol", 'I'],
    ['more 10 simbols', 'name_with_more_ten_simbols'],
  ])('testing create class Character with name %s', (msg, name) => {
    expect(() => {new Character(name, 'Swordsrman')}).toThrow();
  });

test('Персонаж создается корректно', () => {
    const correct = {
        name: 'Bowman',
        type: 'Bowerman',
        health: 100,
        lavel: 1,
        attack: undefined,
        defence: undefined
    };
    expect(new Character('Bowman', 'Bowerman')).toEqual(correct)
})

test('Ошибка в названии класса', () => {
    expect(() => {new Character('Bowman', 'Boweman')}).toThrow(Error)
})

const hero_1 = new Character('Char_1', 'Bowerman')
hero_1.attack = 10
hero_1.defence = 10
hero_1.lavelUp()

test('test lvlup', () => {
    expect(hero_1.lavel).toBeCloseTo(2)
});

test('test lvlup increse attack', () => {
    expect(hero_1.attack).toBeCloseTo(12)
});

test('test lvlup increse defence', () => {
    expect(hero_1.defence).toBeCloseTo(12)
})

test('test damage', () => {
    const d = hero_1.health - 5 * (1 - hero_1.defence / 100)
    hero_1.damage(5)
    expect(hero_1.health).toBeCloseTo(d)
})

test('test lvlup', () => {
    hero_1.health = 0
    expect(() => {hero_1.lavelUp()}).toThrow(Error)
})

test('test damage for dead character', () => {
    expect(() => {hero_1.damage(5)}).toThrow(Error)
})