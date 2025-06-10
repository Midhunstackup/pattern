/*
let N=5  // low left
for(let i = N; i >= 1; i--)
    {
let str ="z";
console.log(str.repeat(i));
}
*/


/*
let N=5 //upper left
for(let i=1;i<=N;i++){
    let str = "x";
    console.log(str.repeat(i));
}
*/

/*
let N  = 5;  //upper right
for(let i = 1 ; i <= N; i++){
    let str ="q";
    let space = ' ';
    console.log(space.repeat((N-i)) + str.repeat(i));
}
*/

/*
let N  = 5;  //lower right
for(let i = 1 ; i <= N; i++){
    let str ="q";
    let space = ' ';
    console.log(space.repeat((N-i)) + str.repeat(i));
}

*/

/*
let rows =10;
let pattern ="";

for(let n = 1; n <= rows; n++){
  for(let num =1; num <= n;num++){
    pattern += num;
}
pattern += "\n"
}
console.log(pattern);

*/






/*
let rows = 5;

// pattern variable carries the final pattern in string format
let pattern = "";

// outer loop runs for `rows` no. of times
for (let n = 1; n <= rows; n++) {
   for (let num = 1; num <= n; num++) {
      pattern += n;
   }

   // Add a new line character after contents of each line
   pattern += "\n";
}
console.log(pattern);

*/


//  triangle pattern 3

/*
let rows = 4;
let variable = 1;  //used to print increasing numbers in the pattern

let pattern = "";  //We will keep adding (concatenating) the numbers and newline characters (`\n`) to this string to form the final pattern.

for(let n = 1;n <= rows;n++){  //exteral loop : how many rows needed
  for(let num=1;num <= n;num++){ //internal loop: how many n numbers to be printed in each row  
    pattern += variable+"";
    variable++;
  }
  pattern += "\n";    // += means add to the existing value of pattern
}
console.log(pattern);

*/



//reverse triangle I
/*
let rows = 10;
let pattern =""; // an empty string will be used to build the final output, line by line.

for(let n =1; n <= rows; n++){   //controls how many **rows** are printed.
  for(let num = 1 ;num <= 11 - n; num++){             //the logic works When n = 1, 6 - 1 = 5 → print numbers from 1 to 5
    pattern += num;
  } 
  pattern += "\n";
}
console.log(pattern)

*/


//number pyramid pattern I


/*
let rows = 7;

for (let i = 1; i <= rows; i++) {
     
    let space = ' '.repeat(rows - i);   //Creates spaces to shift the numbers to the right, making the pyramid shape and (rows - i) ensures fewer spaces as the row number increases.
    let numbers = '';  // Number sequence: from 1 to (2 * i - 1)
    for (let j = 1; j <= 2 * i - 1; j++) {
        numbers += j;
    }

    console.log(space + numbers);
}

*/


//number pyramid pattern II
/*
let rows = 3;
let counter =1;

for(let i = 1; i <= rows; i++){
  let space =' '.repeat(rows-i);
  let numbers = '';
  for(let j=1; j<=2 * i - 1; j++){  //the numbers must keep increasing across all rows, not restart at 1.
    numbers += counter;
    counter++;
  } 
  console.log(space+numbers)
}
*/


// square star pattern I
/*
let rows = 5;
let pattern="";

for(let i = 1;i<=rows;i++){
  for(let j =1;j<=5;j++){
    pattern += "*";
  }
  pattern+="\n";
}
console.log(pattern);
*/

////  square star pattern I same question in while loop
/*
let rows = 5;
let pattern = "";

let i = 1;
while (i <= rows) {
  let j = 1;
  while (j <= 5) {
    pattern += "*";
    j++;
  }
  pattern += "\n";
  i++;
}

console.log(pattern);
*/


// let rows = 5;
// let pattern = "";
// for(let n=1;n<=rows;n++){

// }


/*
let rows = 5;
let pattern = "";// pattern variable carries the final pattern in string format


for (let n = 1; n <= rows; n++) {                                             // outer loop runs for `rows` no. of times
   for (let num = 1; num <= 5; num++) {
      if (n == 1 || n == rows  || num == 1 || num == rows) pattern += "*";    // print star only if it is the boundary location
      else {
        pattern += " ";
      }
     
   }
   pattern += "\n";
}
console.log(pattern);

*/

//left aligned right angle triangle pattern

/*

*
** 
*** 
**** 
*****

*/

/*
let rows = 5;
let pattern="";

for(let i =1;i<=rows;i++){
  for(let j=1;j<=i;j++){
    pattern += "*";
  }
  pattern += "\n";
}
console.log(pattern)
*/

//right aligned right angle triangle pattern
/*
let rows = 5;
let pattern="";

for(let i =1;i<=rows;i++){
  for(let j=1;j>=rows;j++){
    if(j >= 6-i) pattern += "*";
    else{
      pattern += " "
    }
  }
  pattern += "\n";
}
console.log(pattern);
*/


//pyramid pattern
/*

let rows = 5;
let pattern="";

for(let i =1;i<=rows;i++){
  for(let j=1;j<=rows*2 -1;j++){
    if(j >= 6-i && j<=4+i) pattern += "*";
    else{
      pattern += " "
    }
  }
  pattern += "\n";
}
console.log(pattern); 

*/


//reverse pattern
/*

let rows = 5;
let pattern="";
for(let i =1;i<=rows;i++){
  for(let j=1;j<=rows*2 -1;j++){
    if(j >= i && j<=10-i) pattern += "*";
    else{
      pattern += " "
    }
  }
  pattern += "\n";
}
console.log(pattern); 

*/
//            Space in pyramid
// #include <iostream>

// using numspace std;

// // int Main(){
// //   int K;
// //   for(int i =1;i<=5;i++){
// //   for(int j=1;j<=9;j++){
    
// //     if(j>=6-i && j<=4+i && k==1){
// //       cout << "*";
// //       k=0;
// //     }
// //     else{
// //       cout " ";
// //       k=1;
// //     }
// //   }
// //     cout<< "\n";
// // }
// // return 0;


/*
let rows = 5;
let pattern = "";
let k = 1;      //This variable acts as a toggle switch to alternate between printing a * and a space (" ").

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= rows * 2 - 1; j++) {
    if (j >= rows + 1 - i && j <= rows - 1 + i && k == 1) {    //k == 1 → we only print a star if toggle is 1, so we can alternate star-space-star.
      pattern += "*";
      k = 0;            //k == 1 → we only print a star if toggle is 1, so we can alternate star-space-star.
    } else {
      pattern += " ";
      k = 1;      //Reset k to 1 for the next potential star.
    }
  }
  pattern += "\n";
}
console.log(pattern);
*/



// diamond pattern


// calculate all the elements in a 1D array =========================================================================================================================
/*
let marks = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

console.log("Sum of all elements:", sum);
*/
//                                                ========================================================================================================================

// let pattern="";
// let k=0;
// for(let i =0;i<=7;i++){
//   i<=4 ? k++ : k--;
//   for(let j =0;j<=7;j++){
//     if(j>=4-k+1 && j<=4+k-1){
//       pattern+="*";
//     }
//     else{
//         pattern+=" ";
//       }

//   } 
//   pattern+="\n";
// }
// console.log(pattern)


/*
let pattern="";
let k=0;

for(let i = 0; i <= 7; i++) {
  i <= 3 ? k++ : k--; // Diamond has 4 top rows and 4 bottom rows
  
  for(let j = 0; j <= 7; j++) {
    if(j >= 4 - k + 1 && j <= 4 + k - 1) { // Fix this condition
      pattern += "*";
    } else {
      pattern += " ";
    }
  } 
  pattern += "\n";
}

console.log(pattern);
*/

//digit diamond pattern
/*
let rows = 9;
let pattern = "";
let k = 0;
let n = Math.floor((rows + 1) / 2); // Midpoint (4)

for (let i = 0; i < rows; i++) {
  i < n ? k++ : k--; // Increment to mid, then decrement
  let num = 1;

  for (let j = 1; j <= rows; j++) {
    if (j >= n - k + 1 && j <= n + k - 1) {
      pattern += num;
      j < n ? num++ : num--;
    } else {
      pattern += " ";
    }
  }
  pattern += "\n";
}

console.log(pattern);
*/

//hollow square pattern
/*
let rows=9;
let pattern="";

for(let i =1;i<=rows;i++){
  for(let j=1;j<=rows;j++){
    if(i==1 || i==rows || j==1 || j==rows){
      pattern+="*";
    }
    else{
      pattern+=" ";
    }
  }
  pattern+="\n";
}
console.log(pattern)
*/
// this is a change 


//hollow pyramid
/*
let rows=5;
let pattern="";

for(let i =1;i<=rows;i++){
  for(let j=1;j<=(rows*2)-1;j++){
    if(i==5 || j==(rows-i)+1 || j==(rows+i)-1){
      pattern+="*";
    }
    else{
      pattern+=" ";
    }
  }
  pattern+="\n";
}
console.log(pattern)
*/

