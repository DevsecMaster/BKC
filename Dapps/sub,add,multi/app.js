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
 
async function addNumber() { 
    const num1 = document.getElementById("num1").value; 
    const num2 = document.getElementById("num2").value; 
    const accounts = await web3.eth.getAccounts(); 
    console.log(num1); 
    console.log(num2); 
    contract.methods 
        .add(num1, num2) 
        .call({ from: accounts[0] }) 
        .then((result) => { 
            console.log(result); 
            document.getElementById("resultA").innerText = `${result}`; 
        }); 
} 
 
async function subNumber() { 
    const num1 = document.getElementById("num1").value; 
    const num2 = document.getElementById("num2").value; 
    const accounts = await web3.eth.getAccounts(); 
    console.log(num1); 
    console.log(num2); 
    contract.methods 
        .sub(num1, num2) 
        .call({ from: accounts[0] }) 
        .then((result) => { 
            console.log(result); 
            document.getElementById("resultS").innerText = `${result}`; 
        }); 
} 
 
async function mulNumber() { 
    const num1 = document.getElementById("num1").value; 
    const num2 = document.getElementById("num2").value; 
    const accounts = await web3.eth.getAccounts(); 
    console.log(num1); 
    console.log(num2); 
    contract.methods 
        .mul(num1, num2) 
        .call({ from: accounts[0] }) 
        .then((result) => { 
            console.log(result); 
            document.getElementById("resultM").innerText = `${result}`; 
        }); 
} 
 
async function divNumber() { 
    const num1 = document.getElementById("num1").value; 
    const num2 = document.getElementById("num2").value; 
    const accounts = await web3.eth.getAccounts(); 
    console.log(num1); 
    console.log(num2); 
    contract.methods 
        .div(num1, num2) 
        .call({ from: accounts[0] }) 
        .then((result) => { 
            console.log(result); 
            document.getElementById("resultD").innerText = `${result}`; 
        }); 
} 