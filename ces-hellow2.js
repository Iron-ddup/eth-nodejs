//===================1=======
//var Web3 = require('web3');


//var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
//console.log(web3.version);


	const OPTIONS = {
		defaultBlock :"latest",
		transactionConfirmationBlocks: 1,
		transactionBlockTimeout: 5
	}
	let Web3 = require('web3')
	let web3 = new Web3('http://localhost:8545', null, OPTIONS)


//console.log(json);
var abi =[
	{
		"constant": true,
		"inputs": [],
		"name": "getNumObservations",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "ces7",
		"outputs": [
			{
				"name": "b",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "string"
			},
			{
				"name": "b",
				"type": "string"
			}
		],
		"name": "ces2",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "string"
			}
		],
		"name": "ces5",
		"outputs": [
			{
				"name": "b",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "sender",
				"type": "address"
			}
		],
		"name": "getNumObservationsFromSender",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "geneName",
				"type": "string"
			},
			{
				"name": "variantNumber",
				"type": "string"
			},
			{
				"name": "drug",
				"type": "string"
			}
		],
		"name": "query",
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
					},
					{
						"name": "drugName",
						"type": "string"
					},
					{
						"name": "totalCount",
						"type": "uint256"
					},
					{
						"name": "improvedCount",
						"type": "uint256"
					},
					{
						"name": "improvedPercent",
						"type": "string"
					},
					{
						"name": "unchangedCount",
						"type": "uint256"
					},
					{
						"name": "unchangedPercent",
						"type": "string"
					},
					{
						"name": "deterioratedCount",
						"type": "uint256"
					},
					{
						"name": "deterioratedPercent",
						"type": "string"
					},
					{
						"name": "suspectedRelationCount",
						"type": "uint256"
					},
					{
						"name": "suspectedRelationPercent",
						"type": "string"
					},
					{
						"name": "sideEffectCount",
						"type": "uint256"
					},
					{
						"name": "sideEffectPercent",
						"type": "string"
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
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "string"
			}
		],
		"name": "ces4",
		"outputs": [
			{
				"name": "b",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "ces6",
		"outputs": [
			{
				"name": "b",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getC",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumRelations",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
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
				"name": "geneName",
				"type": "string"
			},
			{
				"name": "variantNumber",
				"type": "uint256"
			},
			{
				"name": "drugName",
				"type": "string"
			},
			{
				"name": "outcome",
				"type": "string"
			},
			{
				"name": "suspectedRelation",
				"type": "bool"
			},
			{
				"name": "seriousSideEffect",
				"type": "bool"
			}
		],
		"name": "insertObservation",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "ces3",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "ces",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "geneName",
				"type": "string"
			},
			{
				"name": "variantNumber",
				"type": "string"
			},
			{
				"name": "drug",
				"type": "string"
			}
		],
		"name": "entryExists",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
//0x746bcaace61ea32339066ee57dd2243b8101d419
//0xeb5df36f33f3f89d5a6f531c408140e8a77eaab4  1.5万
var address='0x9d3c9e284cffcb4a6222fe4d514035e61e6e1165';
var Test = new web3.eth.Contract(abi,address,{
    //Gas limit
    gas: 1761885079,
gasPrice: '50000000000'});


var t1 = Date.now();

//CYP3A5	52	pegloticase//CYP3A2
//"jiyin01","1","*"
Test.methods.query("CYP3A5","*","*").call({
    //非必填，该合约方法的调用者
        from: '0xbae61e211a97e3f4b73e0bfc1909595d65d48c31'
        }, function (error, result) {
            console.log('error:' + error);
			console.log('result:' + result);
			console.log(t1);
			var t2 = new Date().getTime();
			console.log(result.length);
			console.log(t2);
			console.log(t2-t1);

   })
   




