import Character from '../classes'

test.each([
    ["1 simbol", 'I'],
    ['more 10 simbols', 'name_with_more_ten_simbols'],
  ])('testing create class Character with name %s', (msg, name) => {
    expect(() => {const a = new Character(name)
        console.log(a)
    }).toThrow();
  });

const hero_1 = new Character('Vasya')
hero_1.lavelUp()
test('create character', () => {
    expect(hero_1.name).toBe('Vasya')
});

test('test lvlup', () => {
    expect(hero_1.lavel).toBeCloseTo(2)
});

test('test lvlup increse attack', () => {
    expect(hero_1.attack).toBeCloseTo(12)
});

test('test lvlup increse defence', () => {
    expect(hero_1.defence).toBeCloseTo(12)
})

test('test lvlup', () => {
    hero_1.health = 0
    expect(() => {hero_1.lavelUp()}).toThrow(Error)
})

const hero_2 = new Character('Petya')

test('test damage for dead character', () => {
        expect(() => {hero_1.damage(5)}).toThrow(Error)
})

test('test damage', () => {
    const d = hero_2.health - 5 * (1 - hero_2.defence / 100)
    hero_2.damage(5)
    expect(hero_2.health).toBeCloseTo(d)
})