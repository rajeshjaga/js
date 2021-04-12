//read
const fs = require("fs");
const { setTimeout } = require("timers");

// fs.readFile("./app.js", (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data.toString());
//     }
// });
// console.log("hello reached here");

//write
// fs.writeFile("./week2/blog.txt", "helloWorld", () => {
//     console.log("created a file")
// });

//directory
// if (!fs.existsSync('./assets')) {
//     fs.mkdir('assets/', (err) => {
//         if (err) { console.log(err); }
//     });
// }

// if (!fs.existsSync("./assets/hello.txt")) {
//     fs.writeFile("./assets/hello.txt", "hello delete me", () => {
//         console.log("file created");
//     });
// } else {
//     console.log("file exists");
// }

//deleting files
if (fs.existsSync("./hello.me")) {
  fs.readFile("hello.me", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data.toString());
    }
  }),
    setTimeout(() => {
      fs.unlink("hello.me", (err) => {
        console.log(err);
      }, 2000);
    });
} else {
  fs.writeFile("hello.me", "hello, Hi", () => {
    console.log("file created becoz' it dint exists");
  });
}
