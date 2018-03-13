var eventos = require('events');
var emisor = eventos.EventEmitter;

var ee = new emisor();
ee.on('datos',function(fecha){
	console.log(fecha);
});
setInterval(function(){
	ee.emit('datos',Date.now());
},500);