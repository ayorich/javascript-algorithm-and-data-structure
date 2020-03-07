// Merge function method 1
function merge(arr1, arr2) {
   // TAKES TWO ARRAY  

    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    console.log(results);
    return results;
}


// Recrusive Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    //SPLITS THE ARRAY INTO TWO
    let mid = Math.floor(arr.length / 2);
//RECURSIVELY CALL MERGESORT TILL IT RETURNS A SORTED ARRAY OF VALUES FOR LEFT
    let left = mergeSort(arr.slice(0, mid));
//RECURSIVELY CALL MERGESORT TILL IT RETURNS A SORTED ARRAY OF VALUES FOR RIGHT
    let right = mergeSort(arr.slice(mid));
    //PASSES THE VALUE OF LEFT AND RIGHT OF A MID ARRAY AND RE-RUN MERGESORT FOR THE OTHER MID ARRAY SECTION
    return merge(left, right);
}

mergeSort([34,10,100,2])


