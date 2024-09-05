//without class:

var student = {
name :"preethi",
id :"11234",
grade :5
}
console.log(student["grade"]);
Object.freeze(student);
student.age = 10;

console.log(student);
var fname = student.name;
console.log(fname);
var {id:id1}=student;
console.log(id1);
//with class:

class Person {
    constructor(name,id,grade)
    {
this.name = name
this.id= id
this.grade=grade
    }
}
 var person1 = new Person ("dimpu","12345",6);
 var person2 = new Person(student.name,student.id,student.grade);
 console.log(person1);
 console.log(person2);

