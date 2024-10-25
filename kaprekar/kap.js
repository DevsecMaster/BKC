const c = require('crypto') 
 
class Block { 
    constructor(i, t, n, ph = '') { 
        this.i = i; 
        this.t = t; 
        this.n = n; 
        this.kaprekar = this.kap(); 
        this.ph = ph; 
        this.h = this.calHash(); 
    } 
 
 
    /* 
    kap() { 
        let n1 = this.n; 
        let sq = n1 * n1; 
        let s = 0; 
        let c = 0; 
 
        while (sq != 0) { 
            // let r = sq % 10; 
            c = c + 1; 
            sq = Math.floor(sq / 10); 
        } 
 
        for (let i = 1; i < c; i++) { 
            let sq1 = n1 * n1; 
            s = 0; 
            while (sq1 != 0) { 
                let r = sq1 % Math.pow(10, i); 
Name: Mihir Nagda 
Seat No: 31031523016 
 
                s = s + r; 
                sq1 = Math.floor(sq1 / Math.pow(10, i)); 
            } 
 
            if (this.n == s) { 
                // return "Kaprekar Number"; 
                this.kaprekar = "Kaprekar Number"; 
                break; 
            } 
            else { 
                // return "Not Kaprekar Number"; 
                this.kaprekar = "Not a Kaprekar Number"; 
            } 
        } 
 
        return this.kaprekar; 
    } 
    */ 
 
 
    kap() { 
        let n = this.n; 
        if (n < 1) { 
            return false; 
        } 
 
        let square = n * n; 
        let squareStr = square.toString(); 
        let len = squareStr.length; 
 
        let left = parseInt(squareStr.substring(0, Math.floor(len / 2))) || 0; 
        let right = parseInt(squareStr.substring(Math.floor(len / 2))) || 0; 
 
        if (left + right === n) { 
            return "Kaprekar Number"; 
        } 

 
        else { 
            return "Not a Kaprekar Number"; 
        } 
    } 
 
    calHash() { 
        return c.createHash('sha256').update(this.i + this.t + this.kaprekar + 
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
 
    validate() { 
        for (let i = 1; i < this.chain.length; i++) { 
            let cb = this.chain[i] 
            let pb = this.chain[i - 1] 
 

 
            if (cb.h != cb.calHash()) { 
                return false; 
            } 
 
            if (pb.h != cb.ph) { 
                return false; 
            } 
        } 
 
        return true; 
    } 
} 
 
module.exports.Block = Block; 
module.exports.Blockchain = Blockchain; 