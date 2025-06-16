//Question 1: Manual Array Sorting (No Built-in Methods)

/*
let arr = [5, 2, 9, 1, 6];

for (let i = 0; i < arr.length; i++) {  
  for (let j = 0; j < arr.length - 1; j++) {  
    if (arr[j] > arr[j + 1]) {   
      
      
       
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}

console.log(arr); 
*/


//Question 2: Find Prime Numbers in an Array

/*
let arr = [4, 7, 6, 2, 9, 11, 13, 1];
let primeArray = [];
let index = 0;                              

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  let isPrime = true;

  if (num < 2) {
    isPrime = false;
  } else {
    for (let j = 2; j < num; j++) {
      if (num % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    primeArray[index] = num;         
    index++;                         
  }
}

console.log("Prime Numbers:", primeArray);
*/


