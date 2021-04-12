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

// //but this can covered by specifying the function return type
// let anonymousTwo:Function;
// anonymousTwo=(a:number,b:number):number=>{
// console.log(a**b);
// return a**b;
// }

// console.log(addFunc(10,20))

type objewith = { age: stringOrNum; name: string };
type stringOrNum = string | number;
const user1 = (user: objewith) => {
  console.log(`${user.name} is ${user.age}years old`);
};
console.log(user1);
