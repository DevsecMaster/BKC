const { b, bc, Blockchain, Block } = require('./Blockchain') 
let mb = new Blockchain(); 

console.log("First Transaction"); 
mb.addBlock(new Block(1, '01/08/2024', 23, 5)); 
console.log(JSON.stringify(mb, null, 3)); 