const produceDiagonals = (boardArr, convertBoardArrToOrdinarryArr) => {
  const ordinaryArr = convertBoardArrToOrdinarryArr(boardArr);
  const forwardDiagonal = [ordinaryArr[0], ordinaryArr[4], ordinaryArr[8]];
  const antDiagonal = [ordinaryArr[2], ordinaryArr[4], ordinaryArr[6]];
  return [forwardDiagonal, antDiagonal];
};

const produceVerticals = (boardArr, convertBoardArrToOrdinarryArr) => {
  const ordinaryArr = convertBoardArrToOrdinarryArr(boardArr);
  const leftVertical = [ordinaryArr[0], ordinaryArr[3], ordinaryArr[6]];
  const middleVertical = [ordinaryArr[1], ordinaryArr[4], ordinaryArr[7]];
  const rightVertical = [ordinaryArr[2], ordinaryArr[5], ordinaryArr[8]];
  return [leftVertical, middleVertical, rightVertical];
};

const displayWinnerOrDraw = (field, winner, optionsDiv, newRoundBtn) => {
  field.classList.remove('hidden-element');
  newRoundBtn.classList.remove('hidden-element');
  optionsDiv.classList.remove('hidden-element');
  if (winner) { field.innerHTML = `Wow, ${winner.name} has won the game!`; } else { field.innerHTML = 'This is a draw!'; }
};


const displayCurrentPlayer = (field, currentPlayer, otherPlayer) => {
  field.classList.remove('hidden-element');
  field.innerHTML = `${currentPlayer.name} has made a move, ${otherPlayer.name}, it's your turn!`;
};
export { produceDiagonals, produceVerticals, displayWinnerOrDraw, displayCurrentPlayer };