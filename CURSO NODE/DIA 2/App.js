//cargar express
//servicio web
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
//Get http://localhost:8181/consulta
app.get('/consulta',function(req,res,next){
	if(req.query.filter){
		next();
		return;
	}
	res.send('...retorna consulta');
});


//Get http://localhost:8181/consulta/{valor}
app.get('/consulta/:id',function(req,res,next){
	var id = req.params.id;
	res.send('...retorna consulta get ...'+id);
});


//Get http://localhost:8181/consulta?filter=
app.get('/consulta',function(req,res,next){
	var filter = req.query.filter;
	res.send('...retorna consulta filter ...'+filter);
});


//POST http://localhost:8181/consulta
app.post('/consulta',function(req,res){
	var data = req.body;
	res.send('...retorna consulta post ...'+data.nombre);
});

//PUT http://localhost:8181/consulta
app.put('/consulta',function(req,res){
	var id = req.body.id;
	var data = req.body.data;
	res.send('...retorna consulta put ...'+id+'data'+data);
});


//DELETE http://localhost:8181/consulta
app.delete('/consulta/:id',function(req,res){
	var id = req.params.id;
	res.send('...retorna consulta delete ...'+id);
});

var server = app.listen(8181,function(){
	console.log('servicio corriendo');
})