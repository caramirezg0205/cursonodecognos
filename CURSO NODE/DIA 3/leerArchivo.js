let fs = require('fs');
fs.readFile('./ejemplo1.txt','utf-8',(err,data)=>{
	if(err){
		console.log('error:',err);
	}else{
		console.log(data);
	}
});

