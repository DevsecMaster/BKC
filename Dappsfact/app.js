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
 
async function facto() { 
    const num = document.getElementById("num").value; 
    const accounts = await web3.eth.getAccounts(); 
    console.log(num); 
    contract.methods 
.fact(num) 
.call({ from: accounts[0] }) 
.then((result) => { 
console.log(result); 
document.getElementById("result").innerText = `${result}`; 
}); 
} 