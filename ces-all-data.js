var fs = require("fs");
var readLine = require("readline");
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

//var abi =[{"constant":true,"inputs":[],"name":"getNumObservations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces7","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"ces2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"}],"name":"ces5","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getNumObservationsFromSender","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"string"},{"name":"drug","type":"string"}],"name":"query","outputs":[{"components":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"uint256"},{"name":"drugName","type":"string"},{"name":"totalCount","type":"uint256"},{"name":"improvedCount","type":"uint256"},{"name":"improvedPercent","type":"string"},{"name":"unchangedCount","type":"uint256"},{"name":"unchangedPercent","type":"string"},{"name":"deterioratedCount","type":"uint256"},{"name":"deterioratedPercent","type":"string"},{"name":"suspectedRelationCount","type":"uint256"},{"name":"suspectedRelationPercent","type":"string"},{"name":"sideEffectCount","type":"uint256"},{"name":"sideEffectPercent","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"}],"name":"ces4","outputs":[{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces6","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getC","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumRelations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"uint256"},{"name":"drugName","type":"string"},{"name":"outcome","type":"string"},{"name":"suspectedRelation","type":"bool"},{"name":"seriousSideEffect","type":"bool"}],"name":"insertObservation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces3","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ces","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"string"},{"name":"drug","type":"string"}],"name":"entryExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];

var abi =[
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
	},
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
	}
];
var address='0x9d3c9e284cffcb4a6222fe4d514035e61e6e1165';
var Gen = new web3.eth.Contract(abi,address);
Gen.options.from ="0xbae61e211a97e3f4b73e0bfc1909595d65d48c31";
/**
 * 按行读取文件内容
 *
 * @param fReadName 文件名路径
 * @param cb 回调函数
 *
 * @return 字符串数组
 */
function readFileToArr(fReadName, cb) {

    var arr = [];
    var readObj = readLine.createInterface({
        input: fs.createReadStream(fReadName)
    });

    readObj.on('line', function (line) {
        arr.push(line);
    });
    readObj.on('close', function () {
       // console.log('readLine close....');
        cb(arr);
    });
}

readFileToArr('./Release/Training_Data_1.txt', function (arr) {
   // console.log(arr);
    
var t1 = Date.now();
// 并发连接数的计数器
var concurrencyCount = 0;

// 并发抓取数据的过程
var fetchUrl = function (index, callback) {
    concurrencyCount++;
    console.log("====",index)
    var strAry = index.split("\t");
    console.log('现在的并发数是', concurrencyCount, '，正在抓取的是', index);
    
    console.log("ces",strAry[0]+strAry[1]+strAry[2]+strAry[3]+strAry[4]+strAry[5]);
   
   Gen.methods.insertObservation(strAry[0],strAry[1],strAry[2],strAry[3],strAry[4],strAry[6]).send({from: '0xbae61e211a97e3f4b73e0bfc1909595d65d48c31'}).then(function(receipt){
    concurrencyCount--;
    callback(null,receipt);
    })
   
};

//使用 async.mapLimit 来 5 个并发抓取，并获取结果
async.mapLimit(arr, 70, function (index, callback) {
    
    fetchUrl(index, callback);
}, function (err, result) {
    //所有连接抓取成功，返回回调结果列表
    console.log('final:');
    console.log("总条数",arr.length)
    console.log(result);
    var t2 = new Date().getTime();
    console.log(t1);        
    console.log(t2);
	console.log(t2-t1);
});
});







