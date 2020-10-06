const GameFlow = () => {
  const convertBoardArrToOrdinarryArr = boardArr => {
    const ordinaryArr = [];
    for (let i = 0; i < boardArr.length; i += 1) {
      for (let j = 0; j < boardArr[i].length; j += 1) {
        ordinaryArr.push(boardArr[i][j]);
      }
    }
    return ordinaryArr;
  };

  // check wins
  const checkWin = (boardArr) => {
    for (let i = 0; i < boardArr.length; i += 1) {
      if (
        boardArr[i][0] === 'X' || boardArr[i][0] === 'O'
        || boardArr[i][1] === 'X' || boardArr[i][1] === 'O'
        || boardArr[i][2] === 'X' || boardArr[i][2] === 'O') {
        if (boardArr[i][0] === boardArr[i][1] && boardArr[i][1] === boardArr[i][2]) {
          return true;
        }
      }
    }
    return false;
  };

  const checkDraw = boardArr => {
    const arrToCheck = convertBoardArrToOrdinarryArr(boardArr);
    let counter = 0;
    for (let i = 0; i < arrToCheck.length; i += 1) {
      if (arrToCheck[i] === 'X' || arrToCheck[i] === 'O') {
        counter += 1;
      }
    }
    if (counter >= 9) {
      return true;
    }
    return false;
  };
  const boardReset = () => [['', '', ''], ['', '', ''], ['', '', '']];
  return {
    boardReset, checkWin, checkDraw, convertBoardArrToOrdinarryArr,
  };
};

export default GameFlow();
