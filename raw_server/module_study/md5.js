const crypto  = require('crypto');

let obj = crypto.createHash('md5');

obj.update('123');
obj.update('4');
obj.update('65');

console.log(obj);
console.log(obj.digest('hex'));