
//COUNTDOWN
// Recursive Version
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num) {
    for (var i = num; i > 0; i--) {
        console.log(i);
    }
    console.log("All done!")
}
//SUM OF NUMBER TO 1
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(4)


//FACTORIAL_ITERATIVE
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i
    }
    return total;
}


//FACTORIAL_RECURSIVE
function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}


//HELPER_METHOD
// FUNCTION TO COLLECT OLD NUMBERS FROM AN ARRAY
function collectOddValues(arr) {

    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])

//PURE RECURSIVE
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5])

