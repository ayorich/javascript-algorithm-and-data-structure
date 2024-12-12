// Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

function setZeros(matrix) {
  let row = new Array(matrix.length).fill(false);
  let column = new Array(matrix[0].length).fill(false);

  // Store the row and column index with value 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }

  // Nullify rows
  for (let i = 0; i < row.length; i++) {
    if (row[i]) nullifyRow(matrix, i);
  }

  // Nullify columns
  for (let j = 0; j < column.length; j++) {
    if (column[j]) nullifyColumn(matrix, j);
  }
  return matrix;
}

function nullifyRow(matrix, row) {
  // Mark the rows as 0

  for (let j = 0; j < matrix[0].length; j++) {
    matrix[row][j] = 0;
  }
}

function nullifyColumn(matrix, column) {
  // Mark the columns as 0
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][column] = 0;
  }
}

let matrix = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9],
];

//-for space O(1)
// function setZeros(matrix) {
//     let rowHasZero = false;
//     let colHasZero = false;

//     // Check if first row has a zero
//     for (let j = 0; j < matrix[0].length; j++) {
//         if (matrix[0][j] == 0) {
//             rowHasZero = true;
//             break;
//         }
//     }

//     // Check if first column has a zero
//     for (let i = 0; i < matrix.length; i++) {
//         if (matrix[i][0] == 0) {
//             colHasZero = true;
//             break;
//         }
//     }

//     // Check for zeros in the rest of the array
//     for (let i = 1; i < matrix.length; i++) {
//         for (let j = 1; j < matrix[0].length; j++) {
//             if (matrix[i][j] == 0) {
//                 matrix[i][0] = 0;
//                 matrix[0][j] = 0;
//             }
//         }
//     }

//     // Nullify rows based on values in first column
//     for (let i = 1; i < matrix.length; i++) {
//         if (matrix[i][0] == 0) {
//             nullifyRow(matrix, i);
//         }
//     }

//     // Nullify columns based on values in first row
//     for (let j = 1; j < matrix[0].length; j++) {
//         if (matrix[0][j] == 0) {
//             nullifyColumn(matrix, j);
//         }
//     }

//     // Nullify first row
//     if (rowHasZero) {
//         nullifyRow(matrix, 0);
//     }

//     // Nullify first column
//     if (colHasZero) {
//         nullifyColumn(matrix, 0);
//     }
// }
