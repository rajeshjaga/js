const message = '110111 001111 000101 001111';

const res = message
    .split(' ')
    .map(b => parseInt(b, 2))
    .map(num => String.fromCharCode(num))
    .join('')
console.log(res)