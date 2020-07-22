



//var Array = [2, 3, 5, 7, 5];

//ciclo for, sirve para recorrer una variabe con varios datos pasandole una condicion
/*for(var i=0; i<5; i++ ){

    console.log(Array[i]);

}*/

//ciclo while 

/*var i = 0;

while(i<15){

    console.log(i); //la condicion debe de ponerse dentro en este caso es que i sera igual a i+2
    i = i+2;
}*/

//ciclo do while


// aqui se ejecuta la primera accion que estaria dentro del do y luego se pregunta por la condicion de salida en el while 

/*
var i = 0;

do{
    console.log(i);
    i++

}while(i<0);
*/


// el swich se utiliza para comparar la variable y ponerle  cuantos casos uno disponga funciona como las condiciones.
// aqui vemos por ejemplo que si la variable es 10 te pondra buenos dias y asi sucesivamente. 
/*default toma cualquier numero o dato que no alla declarado dentro del caso por ejemplo 9 no esta dentro de los casos y por lo tanto
se ejecuta el default


var hora = 9;

switch(hora){

    case 10:
        console.log("buenos dias")
        break;
    
    case 11:
        console.log("sigue siendo la mañana")
        break;
    
    case 15:
        console.log("Buenas tardes!!!!!!")
        break;
    default:
        console.log("No tengo saludos para esa hora")  
        break;
}

*/

//Funciones
//las funciones pueden hacerse con parametros o no
/*
function suma(suma1, suma2){

    return console.log(suma1+suma2);

}

suma(50, 40);
*/

// aqui veremos las diferencias entre los tipos de datos var, let y const
/*
// [var]
una diferencia que hay es que var por ejemplo se sobreescribe cada vez que se crea, ejemplo var es igual a 55 y luego a 60
una desventaja es que tienes que volver y utilizar var 

var edad = 55;

var edad = 60;

console.log(edad);

// [let]
let solo se puede inicializar una sola vez y entonces luego le reasignas un valor
aqui la diferencia es que let solo se mantiene en el entorno o scope como se conoce a diferenca de var, ejemplo

let hora = 15; si usan let de nuevo les dara un error

let hora = 20; aqui les dara error de sintasys

hora = 20; asi se reasigna un valor cuando usamos let

aqui veremos otro ejemplo

for(var i = 0; i<10; i++){

    console.log(i)    aqui veremos que el programa se ejecuta sin problemas
}

console.log(i)   

aqui veremos que si llamamos i de nuevo con console.log, i es igual a 6 esto pasa porque en el ciclo se cumple la
condicion y aunque se rompa el ciclo i ya es igual a 6. 

Ahora si a diferencia lo usamos con let veremos que dara error ya que let i 
solo sobrevive dentro del for osea del scope y si le asignamos un let fuera del for veremos que entonces hay no dara error

let i = 100;

for(let i = 0; i<10; i++){

    console.log(i)    aqui veremos que el programa se ejecuta sin problemas
}

console.log(i)  

*/

