const Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/0e1e07c8ff35457f9227bc0759436abf"));
const binary = require("../artifacts/contracts/ActionToken.sol/ActionToken.json");
const addres = "0xC9eDf39990E45dFCeEF25786A141eA5838B169a9";
const action = new web3.eth.Contract(binary.abi, addres)

console.log("Result: ")

action.methods.generateAction().call().then(console.log)
