//var Web3 = require('web3');
//var contract = require("truffle-contract");
//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//=====================2====================
const OPTIONS = {
	defaultBlock :"latest",
	transactionConfirmationBlocks: 1,
	transactionBlockTimeout: 5
}
let Web3 = require('web3');
var async = require('async');
let web3 = new Web3('http://localhost:8545', null, OPTIONS)




console.log(web3.version);

var abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "getGen",
		"outputs": [
			{
				"components": [
					{
						"name": "geneName",
						"type": "string"
					},
					{
						"name": "variantNumber",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "age",
				"type": "uint256"
			}
		],
		"name": "createPeople",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			},
			{
				"name": "_name",
				"type": "string"
			},
			{
				"name": "_age",
				"type": "uint256"
			}
		],
		"name": "setGen",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "i",
				"type": "uint256"
			}
		],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "string[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var address='0x311c1b4e9263898efd04237031fba170e7237592';
var Gen = new web3.eth.Contract(abi,address);
Gen.options.from ="0x905b17a534c734c0ced990e88faae3692cfee3cb";

//同步使用方法
// async function insert() {
// //	for(var i=1 ; i< 100;i=i+1){
//      //   console.log("运行第"+i+"笔");
// 	//	var receipt = await Gen.methods.insertObservation("CYP3A5",52,"pegloticase","UNCHANGED",false,true).send({from: '0x905b17a534c734c0ced990e88faae3692cfee3cb'});
// 		var receipt = await Gen.methods.insertObservation("CYP3A5",52,"pegloticase","UNCHANGED",false,true).send({from: '0x905b17a534c734c0ced990e88faae3692cfee3cb'});
//         console.log(receipt);
	
// //}
// }
// insert();

Gen.methods.get(0).call({
    //非必填，该合约方法的调用者
        from: '0x905b17a534c734c0ced990e88faae3692cfee3cb'
        }, function (error, result) {
            console.log('error:' + error);
			console.log('result:' + result);
			// console.log(t1);
			// var t2 = new Date().getTime();
			// console.log(t2);
			// console.log(t2-t1);

   })



