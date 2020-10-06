// create  player factory
const Player = (markOne = 'X', markTwo = 'O') => {
  const getAllPlayers = (players) => {
    const playersArr = [];
    playersArr.push({ name: players[0], mark: markOne });
    playersArr.push({ name: players[1], mark: markTwo });
    return playersArr;
  };

  const changeCurrentPlayer = (playersArr, currentPlayer) => {
    if (playersArr.indexOf(currentPlayer) === 0) {
      const otherPlayer = playersArr[1];
      playersArr[0] = otherPlayer;
      playersArr[1] = currentPlayer;
    }
    return playersArr;
  };

  return {
    getAllPlayers,
    changeCurrentPlayer,
  };
};

export default Player;