// objects in javaScript

let studentName="ankit";
let studentAge=21;
let studentBranch="CSE";

let student={
    name:"ankit",
    age:21,
    studentBranch:"cse"
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.studentBranch);
console.log(student["name"]);
console.log(student["age"]);
console.log(student["studentBranch"]);

// two cases where we need to access proprties using objectName["property_name"]
// console.log(student.full name);
console.log(student["full name"]);

let field="studentBranch";
// console.log(student.field);
console.log(student[field]);
// update existing properies
student.age=22;
console.log(student);

student["name"]="Karan";
console.log(student);
// add new properties
student.city="Mathura";
student.specialization="AI/ML";
console.log(student);

// Delete Properties

delete student.specialization;
console.log(student);

//accessing new properties which does not exist
console.log(student.marks);
console.log(student.address?.city);

let student1={
    name:"Vijay",
    address:{
        street:"kushal Nagar",
        city:"Gwalior"
    }
};
console.log(student1.address.city);

let student3={
    name:"Arnav",
    age:21,
    isPass:true,
    address:{
        street:"kushal Nagar",
        city:"Gwalior"
    },
    subjects:["html","css","javaScript"],

    greet(){
        console.log(`Hello world`);
    }
};
console.log(student3);
student3.greet();
console.log(student3.subjects[1]);
student3.greet();

let student4={
    name:"Kunhal",
    greet(){
        console.log("Hello world "+this.name +"  here")
    }
}
student4.greet();


const  counter1={
    count:0,
    increment(){
       this.count++;
    },
    decrement(){
     this.count--;
    }
}

// check if a property exist in an object or not
counter1.increment();
counter1.increment();
console.log(counter1.count);

console.log(Object.hasOwn(counter1,"name"));
console.log("count" in counter1);

// Object.keys(student3)
console.log(Object.keys(student3));
console.log(Object.values(student3));
console.log(Object.entries(student3));


const students=[
    {
        id:1,
        name:"Sanjay",
        marks:96

    },
    {
        id:2,
        name:"Trisha",
        marks:90

    },
    {
        id:3,
        name:"vinay",
        marks:89

    }
];
console.log(students[0]);
console.log(students[0].name);

function greet(name){
    console.log("Hello "+name);
}
// passing a function as an argument

// Higher order function
students.forEach(student=>greet(student.name));


students.forEach(student=>console.log("Hello "+student.name));

// students.forEach(greet);


// object destructuring
const person1={
    name:"Shiva",
    age:23
}

console.log(person1.name);
console.log(person1.age);

const {name:name2,age}=person1;
console.log(name2);
console.log(age);


//array destructuring
const arr1=[23,56,78];
const [first,second]=arr1;
console.log(first);
console.log(second);


// const a=34;
// a=56;
// console.log(a);

const a=[12,34,56,78];

// a=address
a[0]=56;
console.log(a);
