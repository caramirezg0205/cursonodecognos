var http = require("http");
var server = http.createServer(function(peticion,respuesta){
	respuesta.end("hola mundo web...");

});

server.listen(3000,function(){
	console.log("server ready..."+this.address().port);
})