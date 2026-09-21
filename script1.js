// console.log("start");
// setTimeout(()=>{console.log("this is async javaScript")},3000);
// console.log("end");

// let arr1=[1,2,3,4,5];
// console.log(arr1);
// console.log(typeof arr1);
// console.log(arr1[0]);
// console.log(arr1.length);
// const arr2=[1,2,3,4,5];
// arr2[0]=34;
// console.log(arr2);
// arr2.push(6);
// console.log(arr2);
// let d=arr2.pop();
// console.log(d);
// console.log(arr2);
// arr2.unshift(23);
// console.log(arr2);
// arr2.shift();
// console.log(arr2);
// arr2.splice(1,1);
// console.log(arr2);

let arr1=["ankit","krishna","Kunhal"];
// splice do changes in original Array
// arr1.splice(index,deletCount,element1,element2);
// 1-delete element from particular index
// 2replace elements from particular index
// arr1.splice(0,3);
// arr1.splice(1,1,"Samrat"); replace element
console.log(arr1);
// slice make a copy of original array
let arr2=["apple","mango","banana"];
// let arr3=arr2.slice(0,2);
// console.log(arr3);
let d=arr2.indexOf("mango");
console.log(d);
let e=arr2.includes("banana");
console.log(e);
