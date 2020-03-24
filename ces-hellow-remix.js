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
				"name": "demo1",
				"type": "address"
			},
			{
				"name": "_data",
				"type": "uint256"
			}
		],
		"name": "toSetData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
var address='0x3A3CFAcd00c9799C02F28C3B7432987D15Fb12B7';
var Test = new web3.eth.Contract(abi,address,{
    //Gas limit
    gas: 4712388,
gasPrice: '5000000'});

 //Test.methods.set(1001).send({
 //    from: '0x769a38064a07d1585275219247ad3c615942c6d8'
// }).on('transactionHash', function (hash) {
  //   console.log(hash)
// }).on('receipt', function (receipt) {
  //   console.log(receipt)
// }).on('confirmation', function (confirmationNumber, receipt) {
  //   console.log(confirmationNumber)
// }).on('error', console.error)

// Test.methods.toSetData('0x8b0A39d737d9537bdaa508911F66Ba17027b1522',10).call({
//     //非必填，该合约方法的调用者
//         from: '0x02B95b517Ad9087baB3d63FF0879F046Df731b33'
//         }, function (error, result) {
//             console.log('error:' + error)
//             console.log('result:' + result)
//    })

//同步使用方法
async function insert() {

        var receipt = await Test.methods.toSetData('0x8b0A39d737d9537bdaa508911F66Ba17027b1522',10).send({from: '0x02B95b517Ad9087baB3d63FF0879F046Df731b33'});
        console.log(receipt);
	

}
insert();


