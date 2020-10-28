import Player from '../src/player';

test('getAllPlayers', () => {
  const markOne = 'X';
  const markTwo = 'O';
  const players = ['Mary', 'Jane'];
  const expectedResult = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }]
  const player = Player(markOne, markTwo);
  expect(player.getAllPlayers(players)).toEqual(expectedResult);
});

test('changeCurrentPlayer when the current player is player one', () => {
  const markOne = 'X';
  const markTwo = 'O';
  const players = ['Mary', 'Jane'];
  const allPlayers = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }]
  const expectedResult = [{ name: players[1], mark: markTwo }, { name: players[0], mark: markOne }]

  const player = Player(markOne, markTwo);
  expect(player.changeCurrentPlayer(allPlayers, allPlayers[0])).toEqual(expectedResult);
});

test('changeCurrentPlayer when the current player is player two', () => {
  const markOne = 'X';
  const markTwo = 'O';
  const players = ['Mary', 'Jane'];
  const allPlayers = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }]
  const expectedResult = [{ name: players[0], mark: markOne }, { name: players[1], mark: markTwo }]

  const player = Player(markOne, markTwo);
  expect(player.changeCurrentPlayer(allPlayers, allPlayers[1])).toEqual(expectedResult);
});