/**
 * Determine if a [9 x 9] Sudoku board is valid.
 * 
 * Valid board defined by:
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily solvable.
 * @param board 
 */
function isValidSudoku(board: string[][]): boolean {
  const boxBounds = [
    [0,0], [3,0], [6,0],
    [0,3], [3,3], [6,3],
    [0,6], [3,6], [6,6]
  ];

  const checkBox = (board: string[][], box: number): boolean => {
    const numberAvailable = Array(9).fill(true);
    const [row, col] = boxBounds[box];
    for (var i = row; i < (row + 3); i++) {
      for (var j = col; j < (col + 3); j++) {
        // console.log(`board[${i}][${j}] = ${board[i][j]}`);
        if (board[i][j] === ".") 
          continue;
        if (numberAvailable[+board[i][j]-1]) 
          numberAvailable[+board[i][j]-1] = false;
        else 
          return false;
      }
    }
    return true;
  };

  const checkRow = (board: string[][], row: number): boolean => {
    const numberAvailable = Array(9).fill(true);
    for (var i = 0; i < 9; i++) {
      if (board[row][i] === ".") 
        continue;
      if (numberAvailable[+board[row][i]-1]) 
        numberAvailable[+board[row][i]-1] = false;
      else 
        return false;
    }
    return true;
  };

  const checkColumn = (board: string[][], column: number): boolean => {
    const numberAvailable = Array(9).fill(true);
    for (var i = 0; i < 9; i++) {
      if (board[i][column] === ".") 
        continue;
      if (numberAvailable[+board[i][column]-1]) 
        numberAvailable[+board[i][column]-1] = false;
      else 
        return false;
    }
    return true;
  };

  let result = true;
  
  // Check each row, column, and 3x3 box. If any are false, exit the loop
  for (var i = 0; i < 9 && result; i++) {
    // console.log(`[${i} | checkBox = ${checkBox(board, i)}, checkColumn = ${checkColumn(board, i)}, checkRow = ${checkRow(board, i)}]`);
    result = result && checkBox(board, i) && checkColumn(board, i) && checkRow(board, i);
  }

  return result;
};
