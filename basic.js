                                  //================  Basic 1D Array Questions ======================// 





//Input & Display
//Accept 5 numbers from the user and print them using a loop.

/*
let size = 5; 
let arr = [1,2,3,4,5]; 

for (let i = 0; i < size; i++) {
  console.log(arr[i]);
}
*/


//Sum of All Elements
//Calculate and display the sum of all elements in the array.

/*
let arr=[10,20,30,40,50];
let sum =0;

for(let i = 0;i<arr.length;i++){
sum += arr[i];
}
console.log(sum);
*/



//Sum of All Elements
//Calculate and display the sum of all elements in the array.

/*
let a = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i]; 
}

let average = sum / a.length;

console.log("Sum:", sum);
console.log("Average:", average);
*/


//Count Positive Numbers
//Count how many numbers are positive in the array.

/*
let a =[1,2,-3,4,5,-8,3,-9,2,4,7];
let count = 0;

for(let i =0;i<a.length;i++){
    if(a[i]>0){
    count++;
    }
}
console.log(count);
*/

//Find Maximum Element
//Display the largest number in the array.

/*
let arr = [4,1,5,3,2,9,10,222];
let largest = arr[0];

for(let i = 1;i<arr.length;i++){
    if (arr[i]>largest){
        largest=arr[i];   
    }
}
console.log(largest);
*/

//Find Minimum Element
//Display the smallest number in the array.

/*
let arr = [4,1,5,3,2,21,10,7];
let smallest = arr[0];

for(let i = 1;i< arr.length;i++){
    if (arr[i]<smallest){
        smallest=arr[i];   
    }
}
console.log(smallest);
*/


//Count Even and Odd Numbers
//Count how many are even and how many are odd.

// Count Even and Odd Numbers
// Count how many are even and how many are odd.

/*
let a = [1, 2, 3, 4, 5, 6,7,19,21];
let even = 0;
let odd = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        even++;
    } else {
        odd++;
    }
}

console.log("Even numbers: " + even);
console.log("Odd numbers: " + odd);
*/

//Check for an Element (Linear Search)
//Ask the user for a number and check if it's in the array.

/*
let a = [5, 10, 15, 20, 25];
let number = 15;

let found = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] === number) {
        found = true;
        break;
    }
}

if (found) {
    console.log(number + " is in the array.");
} else {
    console.log(number + " is not in the array.");
}
*/

// Display Elements in Reverse Order
// Print the array elements from last to first.

/*
let a=[1,2,3,4,5];
for(let i =0;i<Math.floor(a.length/2);i++){
    let temp =a[i];
    a[i] =a[a.length-1-i];
    a[a.length-1-i]= temp;
}
console.log(a);
*/

// Square of Each Element
// Print the square of each array element.
// Square of Each Element

/*
let a = [1,2,3,4,5];

for (let i = 0; i < a.length; i++) {
    console.log("Square of", a[i], "is", a[i] * a[i]);
}
*/

// Replace Negative Numbers with 0
// Modify the array so all negative numbers become 0.
/*
let a =[1,2,-3,4,-5];
for(let i =0;i<a.length;i++){
    if(a[i]<0){
        a[i]=0;
    }
    console.log(a[i])
}
*/


// Multiply All Elements
// Multiply all elements and print the product.

/*
let a=[1,2,3,4,5];
let product =1;

for(let i = 0;i<a.length;i++){
    product *= a[i]
}
console.log(product);
*/


//Find First and Last Element
//Display only the first and last element of the array.

/*
let a=[1,2,3,4,5];

console.log(a[0]);
console.log(a[a.length-1]);
*/


// Double Each Element
// Create a new array with each element doubled.

/*
let a=[1,2,3,4,5];
let doubledArray = [];

for(let i=0;i<a.length;i++){
    doubledArray[i]=a[i]*2
}
console.log(doubledArray);
*/

//  Print Only Odd Numbers
// Display only the odd numbers from the array.

/*
let a=[1,2,3,4,5];
for(let i =0;i<a.length;i++){
    
    if(a[i]%2 !==0){
        console.log(a[i]);
    }
}
*/

                                 //====================    Intermediate 1D Array Questions   =======================================//


// Frequency Count
// Count how many times each number appears in the array.
 

