//suscripcion de codigo
process.on('exit',function(codigo){
	console.log('saliendo del proceso con codigo de salida', codigo);
})

process.exit(2);