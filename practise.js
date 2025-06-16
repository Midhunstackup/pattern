// multiply 

// let a= [1,2,3,4,5];
// let product =1;

// for(let i =0;i<a.length;i++){
//     product *= a[i]
//     }
//     console.log(product);


// first and lasst 
// let a=[1,2,3,4,5];

// console.log(a[0]);
// console.log(a[a.length-1]);

//double each element 

// let a=[1,2,3,4,5];
// let dou=[];
// for(let i=0;i<a.length;i++){
//     dou[i]=a[i]*2
// }
// console.log(dou)

//print odd numbers only

// let a =[1,2,3,4,5];
// for(let i=0;i<a.length;i++){
//     if(a[i] % 2 !==0){
//         console.log(a[i]);
//     }
    
// }

//frequency count

// let a=[23,412,64,94,96];
// let search = 64;
// let count=0;

// for(let i=0;i<a.length;i++){
//     if(a[i]===search){
//         count++;
//     }
// }
// console.log(search);

//second largest element 

// let arr = [100,1,101];
// let largest = arr[0];
// let Slargest = -1;

// for(let i=1;i<arr.length ;i++){
//    if(arr[i]>largest){
//     Slargest = largest;
//     largest =arr[i];
//    }
//    else if(arr[i]>Slargest){
//     Slargest = arr[i];
//    }
// }
// console.log(Slargest)

//reverse
// let a = [1, 2, 3, 4, 5];

// for (let i = 0; i < a.length / 2; i++) {
//     let temp = a[i];
//     a[i] = a[a.length - 1 - i];
//     a[a.length - 1 - i] = temp;
// }

// console.log(a); 

//palindrome

// let n=12321;
// let o=n;
// let rev=0;

// while(n>0){
//     let digit=n%10;
//     rev=rev*10+digit;
//     n= Math.floor(n/10);
// }

// if(o===rev){
//     console.log('palindrome');
// }else{
//      console.log('not palindrome');
// }

//sum of alternate element

// let a=[1,2,3,4,5];
// let sum=0;
// for(i=0;i<a.length;i+=2){
//    sum+=a[i];
// }
// console.log(sum);

//merge

// let a=[1,2,3];
// let b=[4,5,6];

// let merge=[];

// for(let i=0;i<a.length;i++){
//     merge[merge.length]=a[i];
// }

// for(let i=0;i<b.length;i++){
//     merge[merge.length]=b[i];
// }

// console.log(merge);

// remove duplicates

// let arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7];
// let uniqueArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let isDuplicate = false;

//   for (let j = 0; j < uniqueArr.length; j++) {
//     if (arr[i] === uniqueArr[j]) {
//       isDuplicate = true;
//       break;
//     }
//   }

//   if (!isDuplicate) {
//     uniqueArr[uniqueArr.length] = arr[i];
//   }
// }

// console.log(uniqueArr); 

// sort array 
// let arr = [5, 3, 8, 1, 4];

// for (let i = 0; i < arr.length; i++) {   // Repeats the sorting process.
//   for (let j = 0; j < arr.length - 1; j++) {  // Goes through each pair in the array.
//     if (arr[j] > arr[j + 1]) {   //if two elements are out of order, swap them
      
      
//         // Swap using a temp variable
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }

// console.log(arr); 


// display only prime numbers
// let arr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   let num = arr[i];
//   let prime = true;

//   for (let j = 2; j < num; j++) {
//     if (num % j === 0) {
//       prime = false;
//       break;
//     }
//   }

//   if (prime && num > 1) {
//     console.log(num);
//   }
// }
