
const enigma = require('enigma-code');//llama el modulo  
const valorEncriptacion = 10;//puede ser cualquier numero 
let key = 'millave';//No debe tener espacios 
 
enigma.genHash(valorEncriptacion,key,'contraseña123',function(err,hash){
    if(err) return console.log('error'+err);//Solo se ejecutara si existe un error 
    console.log('hash'+hash)//2dl3lkwkj13kj12k12kj321kj 
//esa funcion retorna por defecto en hash la contraseña encriptada 



});

let hash ='ē285ĺ324ķ321Ĭ310ķ321ĺ324ĳ317Ĵ318Į312Ĵ318ľ328Ŀ329İ314';
 

enigma.Desencriptar(hash,function(err,des){
    if(err) return console.log('error'+err);
    console.log('hash'+des);//return desencriptacion 
});