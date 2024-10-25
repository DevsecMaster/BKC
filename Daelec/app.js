const contractAddress = ""; // Replace with your deployed contract address 
const contractABI = []; // Use ABI from compiled contract 
 
let web3; 
let contract; 

 
window.addEventListener("load", async () => { 
    if (window.ethereum) { 
        web3 = new Web3(window.ethereum); 
        await window.ethereum.enable(); 
    } else { 
        console.log("MetaMask not detected. Please install MetaMask."); 
    } 
 
    contract = new web3.eth.Contract(contractABI, contractAddress); 
}); 
 
async function vote(can) { 
    var canM = can; 
    const accounts = await web3.eth.getAccounts(); 
    const voter = accounts[0]; 
 
    contract.methods.vote(canM).send({ 
        from: voter 
    }) 
}; 
 
async function checkResult() { 
    const accounts = await web3.eth.getAccounts(); 
 
    contract.methods.getWinner() 
        .call({ from: accounts[0] }) 
        .then((winner) => { 
            document.getElementById("result").innerText = `${winner}`; 
        }); 
}