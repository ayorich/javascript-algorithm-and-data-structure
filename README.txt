    This pattern involves dividing a data set into smaller chunks and then repeating a 
    process with a subset of data. this pattern can tremendously decrease time complexity.

    Given a sorted array of integers, write a function called search, 
    that accepts a value and returns the index where the value passed to the function is located. 
    If the value is not found, return -1

    //solution one 
    // TIME COMPLEXITY O(N) -LINEAR SEARCH
    function searchFirst(arr,val){
        for(let i = 0; i < arr.length; i++){
            if(arr[i] === val){
                return i;
            }
        }
        return -1;
    }
    const result = searchFirst([2,3,4,6,7,8,9,11,12,14,16,17,19,30,35,45,47,56,78,87,], 35)
    console.log(result);
    //best solution 
    // TIME COMPLEXITY LOG(N) -BINARY SEARCH
    function search(array, val){
        let min = 0 ;
        let max = array.length-1;
        while(min <= max){
            let middle = Math.floor((min +max) /2);
            let currentElement = array[middle];
            if (array[middle] < val ){
                min = middle + 1;
            }else if (array[middle] > val){
                max = middle -1;
            }else{
                return [middle, currentElement];
            }
        }
        return -1;
    }
                        //     0  1  2  3  4  5  6  7   8                    
    const bestResult = search([2, 3, 4, 6, 7, 8, 9, 11, 12], 9)
    console.log(bestResult);