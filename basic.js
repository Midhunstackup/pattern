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

//another solution
// let a=[1,-2,3,-4,5];
// let count = 0;

// for(let i =0; i < a.length;i++){
//     if(a[i]>0){
//         count++;
//        console.log(`These are the following positive numbers: ${a[i]}`);

//     }
// }
//  console.log(`total: ${count}`);




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
 
/*
let a =[8,10,8,8,5,10,23,8,3,5,84,3,8];
let search =10;
let count =0;


for(let i = 0; i < a.length; i++){
    if(a[i]==search){
        count++
    }
}

console.log(count);
*/

// Second Largest Element
// Find the second highest number without sorting.

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

// Reverse Array (In-Place)
// Reverse the array without using a second array

/*
let a = [1, 2, 3, 4, 5];

for (let i = 0; i < a.length / 2; i++) {
    let temp = a[i];
    a[i] = a[a.length - 1 - i];
    a[a.length - 1 - i] = temp;
}

console.log(a); 
*/


//Check for Palindrome Array
//Check if the array reads the same forward and backward.

/*
let arr = [1, 2, 3, 2, 2];
let isPalindrome = true;   //palindrome means opp of what u write 123 321

for (let i = 0; i < arr.length / 2; i++) {
  if (arr[i] !== arr[arr.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(isPalindrome ? "Palindrome" : "Not Palindrome");   //using ternary condition
*/


// Sum of Alternate Elements
// Sum only the alternate elements (0th, 2nd, 4th...).

/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i += 2) {  //instead of i++ we use i+=2 or i=i+2
  sum += arr[i];
}

console.log("Sum of alternate elements:", sum);
*/

/*
Merge Two Arrays
Combine two arrays into one.


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = arr1.concat(arr2);     //using concatenation function  eg: hello+world = hello world
console.log(merged);
*/


// Remove Duplicates
// Remove duplicates from the array and print the unique ones.


// let arr = [1, 2, 2, 3, 4, 4, 5];
// let unique = [];

// for (let i = 0; i < arr.length; i++) {
//   if (!unique.includes(arr[i])) {
//     unique.push(arr[i]);
//   }
// }

// console.log("Unique elements:", unique);


// Sort the Array (Manually)
// Sort the array without using built-in sort

/*
let arr = [5, 3, 8, 10, 2];

for (let i = 0; i < arr.length - 1; i++) {  //arr.length - 1 is used because after that, no more comparisons are needed.
  for (let j = 0; j < arr.length - 1 - i; j++) { //Each time the outer loop runs, the largest number is pushed to the end, so we reduce the range by -i.
    if (arr[j] > arr[j + 1]) {                  //checks if the current element is greater than the next element.
      let temp = arr[j];                         // step called swap:bubble the larger numbers to the end.
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log("Sorted array:", arr);
*/

//or sorthing this way
/*
let arr = [5, 3, 8, 1, 4];

for (let i = 0; i < arr.length; i++) {   // Repeats the sorting process.
  for (let j = 0; j < arr.length - 1; j++) {  // Goes through each pair in the array.
    if (arr[j] > arr[j + 1]) {   //if two elements are out of order, swap them
      
      
        // Swap using a temp variable
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); 
*/



// Find All Prime Numbers
// Display only the prime numbers in the array.
// =======================================================
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    console.log(arr[i]);
  }
}
  */
 
// =======================================================

// Rotate Array Left by k Steps
// Rotate the elements to the left k times

/*
let arr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
  let first = arr.shift();
  arr.push(first);
}

console.log("Left rotated:", arr);
*/



// Rotate Array Right by k Steps
// Rotate the elements to the right k times

/*
let arr = [1, 2, 3, 4, 5];
let k = 2;

for (let i = 0; i < k; i++) {
  let last = arr.pop();
  arr.unshift(last);
}

console.log("Right rotated:", arr);
*/

// Check Sorted Order
// Check if the array is sorted in ascending order.

/*
let arr = [1, 2, 3, 4, 5];
let sorted = true;

for (let i = 1; i < arr.length; i++) { //Because you are comparing each element with the one before it:
  if (arr[i] < arr[i - 1]) {
    sorted = false;
    break;
  }
}

console.log(sorted ? "Sorted" : "Not Sorted");
*/

// Sum of Max and Min Element
// Find and print the sum of the largest and smallest elements.

/*
let arr = [4, 2, 9, 1, 7,10];
let max = arr[0];
let min = arr[0];
 
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) max = arr[i];
  if (arr[i] < min) min = arr[i];
}

console.log("Sum of max and min:", max + min);
*/

// Shift All Zeros to End
// Move all zeros to the end without changing order of non-zero elements.

/*
let arr = [0, 1, 0, 3, 12];
let result = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    result.push(arr[i]);
  }
}

while (result.length < arr.length) {
  result.push(0);
}

console.log("Zeros shifted:", result);
*/

// Find Missing Number
// Array contains n−1 numbers from 1 to n. Find the missing number.

/*
let arr = [1, 2, 4, 5]; // missing 3
let n = arr.length + 1; //5 
let total = (n * (n + 1)) / 2;

let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Missing number is:", total - sum);
*/



// Learning palindrome
/*
let n=123221;
let o=n;
let rev=0;

while(n>0){
    let digit=n%10;
    rev=rev*10+digit;
    n= Math.floor(n/10);
}

if(o===rev){
    console.log('palindrome');
}else{
     console.log('not palindrome');
}
*/

//learning merging
/*
let a = [1,2,3];
let b = [4,5,6];

let Merge=[];

for(let i =0; i < a.length; i++) {
    Merge[Merge.length] = a[i];
}

for(let i =0; i < b.length; i++) {
    Merge[Merge.length] = b[i];
}

console.log(Merge);
*/


//learning removing duplicates
/*

let arr = [1,2,2,3,4,4,5];                       // array containing duplicates
let unique = [];                                 // we need to create a variable only containing unique values
let uniqueIndex = 0;                             // This keeps track of the next position to insert a new unique number in the unique arra


for (let i = 0; i < arr.length; i++) {           //looping through each element of original array 
    let isDuplicate = false;                     //A flag used to track whether the current arr[i] already exists in the unique array.

    for (let j = 0; j < uniqueIndex; j++) {      //checks every item in unique so far to see if the current arr[i] has already been added.
        if (arr[i] === unique[j]) {              //If the current element is equal to any element already in the unique array…
            isDuplicate = true;                  // mark it as a duplicate.
            break;                               //Exit the inner loop early since we already found it's a duplicate — no need to check more.
        } 
    }

    if (!isDuplicate) {                          // If the element is not found in the unique array…
        unique[uniqueIndex] = arr[i];            // we add it to the unique array using direct indexing instead of push().
        uniqueIndex = uniqueIndex + 1;                         //Move the pointer (uniqueIndex) forward for the next new unique element.
    }
}

console.log("Unique elements:", unique);

*/

//Learning finding only prime in an array
/*
let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) {
    isPrime = false; // Numbers less than 2 are not prime
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        isPrime = false; // If divisible by any number other than 1 and itself
        break; // No need to check further
      }
    }
  }

  if (isPrime) {
    console.log(num); // Print if number is prime
  }
}
*/

//Learning Rotate Array Left by k Steps

/*
let arr = [1, 2, 3, 4, 5];
let k = 2;                            // no of times you waant to rotate
let n = arr.length;

// Make a new array to store result manually
let rotated = [];

// First copy elements from index k to end
for (let i = k; i < n; i++) {
  rotated[rotated.length] = arr[i]; // similar to push
}

// Then copy first k elements at the end
for (let i = 0; i < k; i++) {
  rotated[rotated.length] = arr[i];
}

console.log("Left rotated:", rotated);
*/



//Learning Rotate Array Right by k Steps
/*
let arr = [1, 2, 3, 4, 5];
let k = 4;
let n = arr.length;

// Handle case when k > n
k = k % n;

let rotated = [];

// Copy the last k elements to the front
for (let i = n - k; i < n; i++) {
  rotated[rotated.length] = arr[i];
}

// Copy the first n - k elements after that
for (let i = 0; i < n - k; i++) {
  rotated[rotated.length] = arr[i];
}

console.log("Right rotated by 4:", rotated);
*/



//Learning  shifting all zeroes to end 
/*

let arr = [0, 1, 0, 3, 12];
let result = [];
let count = 0;  // this keeps track of how many non-zero elements are added

// Add non-zero elements to result
for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    result[count] = arr[i];  // add to result at current position
    count++;                 // move to next position
  }
}

// Fill the rest with zeros
while (count < arr.length) {
  result[count] = 0;
  count++;
}

console.log("Zeros shifted:", result);
*/