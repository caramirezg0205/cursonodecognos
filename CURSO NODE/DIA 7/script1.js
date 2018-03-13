var x = 1;
console.log('hola mundo debug');
console.log('valor de x->'+x);
debugger;
var y = x + 6;

console.log('valor de y ->'+y);


//node inspect nombre.js
//c para continuar
//repl 
//.exit
// n para siguiente linea


// c -> cont -> continue
// n -> next -> next
// s -> step -> step in
// o -> out -> step out
//pause -> pause running

//setBreakpoint() -> poner un breakpoint 
//setBreakpoint(line)
//setBreakpoint('script',line)
//clearBreakpoint('script',line)


//scripts -> listar todos los scripts cargados
//run -> ejecutar un script
//restart -> restart un script
//kill -> detener ejecucion de un script


//watch('expresion') -> inspector de variables 
//unwatch('expresion') -> inspector de variables 
//exec expresion -> evalua la expresion



//node --inspect script
//node --inspect-brk script