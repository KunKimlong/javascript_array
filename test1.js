// int arr[10] = {}

// const arr = new Array(12,23,34,45,56,67,78);

const arr = [12,23,34,45,56,67,78];

console.log("Length of Array = "+arr.length);

// for loop
console.log("====== For Loop ======");
var t1 = '';
for(var i = 0;i<arr.length;i++){
    t1=t1+arr[i]+' ';
}
console.log(t1);

//for in : use for get index of array
console.log("===== For in ======");
var t2 = '';
for(var i in arr){
    t2+=arr[i]+' ';
}
console.log(t2);

//for of : use for get value of array
console.log("===== For of ======");
var t3 = '';
for(var val of arr){
    t3=t3+val+' ';
}
console.log(t3);

// forEach can not return
console.log("==== forEach =====");
var t4 = '';
arr.forEach(function(val,index,array){
    t4+=val+' ';
    // console.log(val);
    // console.log(index);
    // console.log(array[index]);
})
console.log(t4);


// map can return anything
console.log("==== map =====");
var t5 = '';
const a = arr.map(function(val,index,array){
    // console.log(val);
    // console.log(index);
    // console.log(array[index]);
    t5+=array[index]+' ';
    return 123;
})
console.log(t5);
console.log("A = "+a);

// filter can return only value of array
console.log("==== filter =====");
var t6 = '';
const b = arr.filter(function(val,index,array){
    // console.log(val);
    // console.log(index);
    // console.log(array[index]);
    t6+=array[index]+' ';
    return 123;
})
console.log(t6);
console.log("B = "+b);



