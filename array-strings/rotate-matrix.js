// Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.
// Can you do this in place?

// Given an image represented by an NxN matrix,
// where each pixel in the image is 4 bytes,
// write a method to rotate the image by 90 degrees.
// Can you do this in place?

// note: matrix lenght/2 => number of layers, layers^2 => total rotations
// for each layers deeper , the limit of rotation decreases =>layers=last-first

function rotate(matrix) {
  if (matrix.length == 0 || matrix.length != matrix[0].length) return false;
  let n = matrix.length;

  // for (let first = 0, last = n - 1; first < last; first++, last--) {//this also works
  for (let layer = 0; layer < n / 2; layer++) {
    let first = layer; //increases index
    let last = n - 1 - layer; //decreases index

    //rotates for each layers=last-first

    console.log('layer', first, 'last', last);

    for (let i = first; i < last; i++) {
      console.log('rotates', first, 'last', last);

      let offset = i - first;

      let top = matrix[first][i]; // save top

      matrix[first][i] = matrix[last - offset][first];

      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right -> bottom
      matrix[last][last - offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top; // right <- saved top
    }
  }
  console.log(matrix);
  return true;
}

//matrix.lenght/2=>layers, layers^2 ==total rotation
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; //2 external rotates 1layer 3/2
let matrix2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]; //3 external rotates 1 internal rotates, 2layers - 4/2,
let matrix3 = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
]; // 7 external,5 inner, 3 further-inner,1 deep-inner 4layers 8/2
console.log(rotate(matrix3));
