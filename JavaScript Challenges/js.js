/*JavaScript Challenges - #57 Find the number

You have an unsorted array containing all the integers from 0 to 100 inclusively.

However, one number is missing. Write a function to find and return this number.*

Sum of numbers from 1 to 100 = 5050... */

function lost(arr){
    sum = arr.reduce((suma , a) => suma + a);
    return 5050 - sum;
}

let n = 101
arr = [...Array(n).keys()]; //Generate array from 0 to 100
arr.splice(Math.floor(Math.random()*(101)),1); //Random num between 0-100

console.log(arr)
console.log(lost(arr))






/*JavaScript Challenges #58 - Move zeros to the end.
Write a function that takes an array of numbers as an argument. The function should move all zeros to
the end of array, keeping the order of the numbers. Return the modified array.*/

// function moveZeros(arr){
//     arrCopy = Array.from(arr);
//     count = 0;
//     for(let i = 0; i < arr.length ; i++){

//         if(arr[i] === 0){

//         }
//     }
//     return arrCopy;
// }
function moveZeros(arr){
    return arr.sort((a, b) => (b > 0 ? 0 : -1));   
}
// array = [1,4,2,0,0,4,1,0];
// console.log(moveZeros(array));


/*JavaScript Challenges #60 - Is it sorted?
Write a function that takes an array of numbers as an argument. 
The function shourld check if the array is sorted and in which order and return one of the 3 options: 
"yes, ascending" ; "yes, descendiing" ; "no". PLUS: If it's not sorted, sort it ascending*/

function sorted(arr){
    let asc = true;
    let des = true;
    for (let i = 0; i < arr.length - 1 ; i++){
        if(arr[i] <= arr[i+1] && asc ){
            asc = true;
        }else{
            asc = false;
        }
        if(arr[i] >= arr[i+1] && des ){
            des = true;
        }else{
            des = false;
        }
    }
    if(asc){
        return "Sorted, ascending!"
    }else if(des){
        return "Sorted, descending!"
    }else{
        return "Not sorted!"
    }
}

// console.log(sorted([3,1]))




