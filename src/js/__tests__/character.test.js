import Character from '../character';

test('testing level up method', () => {
  const testChar = new Character('testChar', 'Swordsman', 20, 1, 20, 20);
  testChar.levelUp();

  expect(testChar).toEqual({
    name: 'testChar',
    type: 'Swordsman',
    health: 100,
    level: 2,
    attack: 24,
    defence: 24,
  });
});


test('testing damage method', () => {
  const testChar = new Character('testChar', 'Swordsman', 100, 1, 20, 20);
  testChar.damage(100);

  expect(testChar).toEqual({
    name: 'testChar',
    type: 'Swordsman',
    health: 20,
    level: 1,
    attack: 20,
    defence: 20,
  });
});
