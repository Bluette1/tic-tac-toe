import Player from '../src/player';

const markOne = 'X';
const markTwo = 'O';
const players = ['Mary', 'Jane'];
const player = Player(markOne, markTwo);

test('getAllPlayers', () => {
  const expectedResult = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }];
  expect(player.getAllPlayers(players)).toEqual(expectedResult);
});

test('changeCurrentPlayer when the current player is player one', () => {
  const allPlayers = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }];
  const expectedResult = [{ name: players[1], mark: markTwo }, { name: players[0], mark: markOne }];
  expect(player.changeCurrentPlayer(allPlayers, allPlayers[0])).toEqual(expectedResult);
});

test('changeCurrentPlayer when the current player is player two', () => {
  const allPlayers = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }];
  const expectedResult = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }];
  expect(player.changeCurrentPlayer(allPlayers, allPlayers[1])).toEqual(expectedResult);
});