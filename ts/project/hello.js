"use strict";
// let greet:Function ;
// greet=()=>{
// console.log('hello');
// };
// //if the return type is not given In this is case its a number so no need to declare what type of value is the function
// //except for the anonymous function below we specify the type pf function other wise default is void in that anonymous function
// //to pass in a optional parameter into a function for example like this c using bit wise to say that it is a optional parameters
// const addFunc=(a:number,b:number,c?:number|string)=>{
//     return a+b;
// }
// let anonymous:Function;
// // on hovering over the arrow function it says its a void and not number like addFunc.
// anonymous=(a:number,b:number)=>{
//     console.log(a**b);
// }
var user1 = function (user) {
  console.log(user.name + " is " + user.age + "years old");
};
console.log(user1);
