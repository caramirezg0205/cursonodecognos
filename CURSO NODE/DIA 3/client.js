var PORT =33333;
var HOST = '127.0.0.1'

var dgram = require('dgram');
var message1 = new Buffer('hola soy yo');
var message2 = new Buffer('hola soy yo 2');

/*
var client = dgram.createSocket('udp4');
client.send([message1,message2],PORT,HOST,function(err,bytes){
	if(err) throw err;
	console.log("UDP message send to "+HOST+":"+PORT);
	client.close();
});
*/



setInterval(function(){
	var dgram = require('dgram');
	var message1 = new Buffer('hola soy yo');
	var message2 = new Buffer('hola soy yo 2');
	var client = dgram.createSocket('udp4');
	client.send([message1,message2],PORT,HOST,function(err,bytes){
	if(err) throw err;
	console.log("UDP message send to "+HOST+":"+PORT);
});
},1000)