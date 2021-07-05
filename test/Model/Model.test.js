import Model from '../../src/Models/Model.js';

const me = new Model;

test('if setting me.score equal 12 to equal me.playerScore', () => {
  me.score = 12;
  expect(me.playerScore).toEqual(12);
});

test('me.bgMusicPlaying to equal false', () => {
  expect(me.bgMusicPlaying).toEqual(false);
});

test('me.username to equal Alex', () => {
  me.username = 'Alex';
  expect(me.username).toEqual('Alex');
});