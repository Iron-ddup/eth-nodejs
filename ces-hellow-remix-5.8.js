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
		"constant": false,
		"inputs": [
			{
				"name": "x",
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
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var address='0xdb691b1f2fc6907863563fedfb4be61cc3b6750f';
var Test = new web3.eth.Contract(abi,address,{
    //Gas limit
    gas: 4712388,
gasPrice: '5000000'});

 Test.methods.set(121).send({
    from: '0x769a38064a07d1585275219247ad3c615942c6d8'
}).on('transactionHash', function (hash) {
    console.log(hash)
}).on('receipt', function (receipt) {
    console.log(receipt)
}).on('confirmation', function (confirmationNumber, receipt) {
    console.log(confirmationNumber)
}).on('error', console.error)

Test.methods.get().call({
    //非必填，该合约方法的调用者
        from: '0x769a38064a07d1585275219247ad3c615942c6d8'
        }, function (error, result) {
            console.log('error:' + error)
            console.log('result:' + result)
   })




