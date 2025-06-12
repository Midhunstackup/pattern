let a = [1,2,3,4,5];
let k= 4;
let n= a.length;

let rotated=[];

for(let i= k; i<n; i++){
    rotated[rotated.length]=a[i];
}

for(let i=0;i<k;i++){
    rotated[rotated.length]=a[i];
}

console.log(rotated)