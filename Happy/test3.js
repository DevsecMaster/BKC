const { Block, Blockchain } = require('./happy'); 
let mb = new Blockchain();  
mb.addBlock(new Block(1, new Date(), 10)); 
mb.addBlock(new Block(2, new Date(), 15)); 
console.log(JSON.stringify(mb, null, 3)); 