const { b, bc, Blockchain, Block } = require('./fact') 
 
let mb = new Blockchain();  
 
mb.addBlock(new Block(1, '01/08/2024', 5)) 
mb.addBlock(new Block(2, '01/08/2024', 12)) 
console.log(JSON.stringify(mb, null, 3)); 