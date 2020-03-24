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

var abi =[{"constant":true,"inputs":[],"name":"getNumObservations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces7","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"},{"name":"b","type":"string"}],"name":"ces2","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"}],"name":"ces5","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"sender","type":"address"}],"name":"getNumObservationsFromSender","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"string"},{"name":"drug","type":"string"}],"name":"query","outputs":[{"components":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"uint256"},{"name":"drugName","type":"string"},{"name":"totalCount","type":"uint256"},{"name":"improvedCount","type":"uint256"},{"name":"improvedPercent","type":"string"},{"name":"unchangedCount","type":"uint256"},{"name":"unchangedPercent","type":"string"},{"name":"deterioratedCount","type":"uint256"},{"name":"deterioratedPercent","type":"string"},{"name":"suspectedRelationCount","type":"uint256"},{"name":"suspectedRelationPercent","type":"string"},{"name":"sideEffectCount","type":"uint256"},{"name":"sideEffectPercent","type":"string"}],"name":"","type":"tuple[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"string"}],"name":"ces4","outputs":[{"name":"b","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces6","outputs":[{"name":"b","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getC","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getNumRelations","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"uint256"},{"name":"drugName","type":"string"},{"name":"outcome","type":"string"},{"name":"suspectedRelation","type":"bool"},{"name":"seriousSideEffect","type":"bool"}],"name":"insertObservation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"a","type":"uint256"}],"name":"ces3","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"ces","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"geneName","type":"string"},{"name":"variantNumber","type":"string"},{"name":"drug","type":"string"}],"name":"entryExists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
var address='0x26c50d0cb9de36731adbc4968c2d797fca890f90';
var Gen = new web3.eth.Contract(abi,address);
Gen.options.from ="0xe3dd1054f19c4e784b13f7041022fbf8280519a3";

//同步使用方法
async function insert() {
	for(var i=1 ; i< 100;i=i+1){
        console.log("运行第"+i+"笔");
        var receipt = await Gen.methods.insertObservation("CYP3A5",i,"pegloticase","UNCHANGED",false,true).send({from: '0x905b17a534c734c0ced990e88faae3692cfee3cb'});
        console.log(receipt);
	
}
}
insert();



