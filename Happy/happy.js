const c = require('crypto') 
 
class Block { 
    constructor(i, t, n, ph = '') { 
        this.i = i; 
        this.t = t; 
        this.n = n; 
        this.happy = this.isHappy(); 
        this.ph = ph; 
        this.h = this.calHash(); 
    } 
 
    isHappy() { 
        let temp = this.n; 
        while (temp > 9) { 
            let sum = 0; 
            while (temp > 0) { 
                let remainder = temp % 10; 
                temp = Math.floor(temp / 10); 
                let sqr = remainder * remainder; 
                sum += sqr; 
            } 
            temp = sum; 
        } 
 
        if (temp == 0) { 
            return "0"; 
            // console.log("0") 
        } 
 
 
        else if (temp == 1) { 
            return "Happy number"; 
            // console.log("HappyNumber") 
        } 
 
        else { 
            return "Not a Happy Number" 
            // console.log("Not a HappyNumber") 
        } 
    } 
 
    calHash() { 
        return c.createHash('sha256').update(this.i + this.t + this.happy + 
this.ph).digest('hex'); 
    } 
} 
 
class Blockchain { 
    constructor() { 
        this.chain = [this.createGBlock()]; 
    } 
 
    createGBlock() { 
        return new Block(0, new Date(), 0, '0'); 
    } 
 
    getCBlock() { 
        return this.chain[this.chain.length - 1]; 
    } 
 
    addBlock(nb) { 
        nb.ph = this.getCBlock().h; 
        nb.h = nb.calHash(); 
        this.chain.push(nb); 
    } 
} 
module.exports.Block = Block; 
module.exports.Blockchain = Blockchain; 