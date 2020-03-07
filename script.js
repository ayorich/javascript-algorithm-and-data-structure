// //SOLUTION 1
// function same(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i =0; i < arr1.length; i++){
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex, 1)
//     }
//     return true;
// }
// const arr1 = [1,2,3,4,5]
// const arr2 = [4,16,25,1,9]
// const result = same(arr1, arr2);
// console.log(result)


//BEST SOLUTION
function same(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCounter1= {}
    let frequencyCounter2= {}
    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0)+1 ;
        console.log(frequencyCounter1)
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    for(let key in frequencyCounter1){
        console.log(frequencyCounter1[key])

        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
} 

const bestarr1 = [1, 2, 8,2, 4, 6]
const bestarr2 = [4, 16, 25,4, 1, 79]
const bestresult = same(bestarr1, bestarr2);
console.log(bestresult)