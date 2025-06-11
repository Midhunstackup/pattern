let a = [10,11,12,13,14,15];
for(let i =0;i<Math.floor(a.lenght/2);i++){
    let temp =a[i];
    a[i]= a[a.length -1 - i];
    a[a.length -1 -i]= temp;
}
console.log(a)