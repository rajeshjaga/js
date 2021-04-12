console.clear();
var thisisTimeout = setTimeout(() => {
    return "something";
}, 2000);

var newPromise = new Promise((resolve, reject) => {
    resolve(thisisTimeout);
    reject(console.error);
});
newPromise.then(some => {
    console.log(some);
});