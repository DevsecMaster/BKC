const Operations = artifacts.require("Operations"); 

module.exports = async function (deployer) { 
    await deployer.deploy(Operations); 
    const instance = await Operations.deployed(); 
    console.log("Operations deployed at:", instance.address); 
}; 

const Operations = artifacts.require("Operations"); 

contract("Operations", () => { 
    let operationsInstance; 

    before(async () => { 
        operationsInstance = await Operations.deployed(); 
    }); 

    it("should add two numbers correctly", async () => { 
        console.log("Contract Address: ", operationsInstance.address); 
        const resultA = await operationsInstance.add(5, 2); 
        assert.equal(resultA.toNumber(), 7, "Addition of 5 and 2 should be 7"); 
    }); 

    it("should subtract two numbers correctly", async () => { 
        console.log("Contract Address: ", operationsInstance.address); 
        const resultS = await operationsInstance.sub(5, 2); 
        assert.equal(resultS.toNumber(), 3, "Subtraction of 5 and 2 should be 3"); 
    }); 

    it("should multiply two numbers correctly", async () => { 
        console.log("Contract Address: ", operationsInstance.address); 
        const resultM = await operationsInstance.mul(5, 2); 
        assert.equal(resultM.toNumber(), 10, "Multiplication of 5 and 2 should be 10"); 
    }); 

    it("should divide two numbers correctly", async () => { 
        console.log("Contract Address: ", operationsInstance.address); 
        const resultD = await operationsInstance.div(5, 5); 
        assert.equal(resultD.toNumber(), 1, "Division of 5 and 5 should be 1"); 
    }); 
});
