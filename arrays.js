//Q1: Find the largest number in a 1D array
/*
let arr = [4,1,5,3,2];
let largest = arr[0];

for(let i = 1;i< 6;i++){
    if (arr[i]>largest){
        largest=arr[i];   
    }
}
console.log(largest);
*/

//Q2: Find the smallest element
/*
let arr = [4,1,5,3,2,1,10,0];
let smallest = arr[0];

for(let i = 1;i< 8;i++){
    if (arr[i]<smallest){
        smallest=arr[i];   
    }
}
console.log(smallest);
*/

//Q3: Find the second largest element
/*
let arr = [2,3,5,8,7,6];
let largest = arr[0];
let Slargest = -1;

for(let i=1;i<arr.length ;i++){
   if(arr[i]>largest){
    Slargest = largest;
    largest =arr[i];
   }
   else if(arr[i]>Slargest){
    Slargest = arr[i];
   }
}
console.log(Slargest)
*/

//Q4: Reverse the elements of a given array
/*
let a = [10,11,12,13,14,15];
for(let i =0;i<Math.floor(a.length/2);i++){
    let temp =a[i];
    a[i]= a[a.length -1 - i];
    a[a.length -1 -i]= temp;
}
console.log(a)
*/



//Q5: Find the Frequency of a Given Number

/*
let a =[8,10,8,8,5,10,23,8,3,5,84,3,8];
let search =8;
let count =0;


for(let i = 0; i < a.length; i++){
    if(a[i]==search){
        count++
    }
}

console.log(count)

*/

//Q6: Calculate and display the sum of each row in a 2D array.
/*
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  let rowSum = 0;
  for (let j = 0; j < 3; j++) {
    rowSum += a[i][j];
  }
  console.log(`Sum of row ${i + 1}: ${rowSum}`);
}
*/




//BONUS !! Q7: Calculate and display the sum of all values in a 2D array.[row wise]
/*

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let rowSum = 0;

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    rowSum += a[i][j];
  }
  
}
 console.log(rowSum);
 */


//Q8: Calculate and display the sum of each column in a 2D array.

/*

let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


for (let j = 0; j < 3; j++) {
    let sum = 0;


  for (let i = 0; i < 3; i++) {
    sum += a[i][j];
  }
  console.log(sum);
}
 
*/

// BONUS !! Q9: column wise addition in 2D array         [[ROW WISE ADDITION AND COLUMN WISE ADDITION WILL RESULT IN SAME OUTPUT]]
/* 
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let sum = 0;
for (let j = 0; j < 3; j++) {
    


  for (let i = 0; i < 3; i++) {
    sum += a[i][j];
  }
  
}
 console.log(sum);

 */

 //Q10: Check if a given number is present in a 2D array.
/*
 let a = [
  [1, 21, 3],
  [335, 5, 66],
  [7, 8, 9]
];

 let value = 10;
 let found = false;

 for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        if(a[i][j]===value){
            found = true;
            console.log(`Value ${value} found at position [${i}][${j}]`);
            break;
        }
    } 
    if(found)break;
 } 

 if(!found){
    console.log(`Value ${value} not found in array`);
 }

 */
 
//Q11: Find the transpose of a matrix
/*
let rows = 2;
let cols = 3;

let matrix = [
  [1, 2, 3],
  [4, 5, 6]
];

let transpose = []; // Initialize empty 3x2 transpose matrix

for (let j = 0; j < cols; j++) {
  transpose[j] = []; // create new row
  for (let i = 0; i < rows; i++) {
    transpose[j][i] = matrix[i][j];
  }
}

console.log("Original Matrix:");
console.log(matrix);
console.log("Transposed Matrix:");  // if i use console.table(matrix) it will print in tbale format
console.log(transpose);
*/

 

//Q11: Print the primary diagonal elements
/*
let matrix = [
  [1, 2, 3, 1],
  [4, 5, 6, 2],
  [7, 8, 9, 3],
  [7, 8, 9, 4]
];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i][i]);
}
*/
