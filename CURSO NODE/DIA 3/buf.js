var b1 = Buffer.alloc(20);
var b2 = Buffer.from("esto solo es un texto");

console.log("esto es el buffer 1");
console.log(b1);
console.log("esto es el buffer 2");
console.log(b2);

b1[0] = 34;
console.log(b1);