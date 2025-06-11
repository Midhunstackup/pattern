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

