function greet(something){
    console.log(`Hello ${something}`);
}
const name=`Ajit`;

greet(name);
// Higher order function
function executeTask(name,someTask){
    someTask(name);
}
// someTask is a callback function
const greet1=function(name){
    console.log(`I am learning javaScript and ${name} here`);
}

executeTask("saket",greet1);

function calculator(a,b,operation){
    return operation(a,b);
};

const add=function(a,b){
    return a+b;
};
const substraction=function(a,b){
    return a-b;
};
const multiplication=function(a,b){
   return a*b;
}
const division=function(a,b){
    return a/b;
}
let ans1=calculator(5,4,add);
console.log(ans1);
let ans2=calculator(45,6,multiplication);
console.log(ans2);


// setTimeout(multiplication,4000,5,4);
// setTimeout(function(a,b){
//     console.log(a * b);
// },3000,5,6);
// console.log(ans5);

let ans6=calculator(10,5,function(a,b){
    return a-b;
})
console.log(ans6);

console.log(calculator(34,23,(a,b)=>a-b)); 


function repeat(count,task){
    for(let i=0;i<count;i++){
        task(i);
    }
}
const greet3=function(countNumber){
    console.log(`repeating number- ${countNumber}`);
};

repeat(5, function (countNumber) {
  console.log(`repeating number- ${countNumber}`);
});
