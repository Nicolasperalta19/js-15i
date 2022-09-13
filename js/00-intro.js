// console.log('hola') // Esto es un comentario en js en una sola linea

/*comentario
multi
lineas*/

//clave que me dio facebook

const claveDeFacebook1 = 'fsadfsdfdsfsafsdfdsfsdf' // lo guardo una vez y no lo modifico mas
let claveDeFacebook2 = 'sadsdasdasdas' // buena practica 
var claveDeFacebook3 = 'asdfasdfasdf' // mala practica



if(true/*condicion*/){
    var test = 'hola'
    let test2 = 'hello'
    //codigo
    console.log(test2);
}
console.log(test);



//! TIPOS DE DATOS

let string = "asdasdasd";
console.log(string, 'esto es un string');

let number = 7;
console.log(number, 'esto es un numero');

let array = ['asd', 17, [] ];
console.log(array, 'esto es un array');

let boolean = true
let boolean2 = false
console.log(boolean, boolean2, 'estos son booleanos');

let objectCar = {
    color: 'blue',
    model: '2007',
    local: false,
    brand:{
        name: 'Renault'
    },
    andar(){

    },
    chocar(){
        
    }
}
console.log(objectCar, 'esto es un objeto');

let vacio = null;

let indefinido;

console.log(vacio, 'null');
console.log(indefinido, 'undefined');



// OPERADORES ARITMETICOS 

console.log(15+15);
console.log(15-15);
console.log(15*15);
console.log(15/15);
console.log(15%15);


//OPERADORES UNITARIOS 

let numero = 5;
numero++;
console.log(numero); // 6
numero--;
console.log(numero); // 5
console.log(!numero); //false


// OPERADORES RELACIONALES

console.log(15 > 20, '15 es mayor que 20?'); // false
console.log(15 > 10, '15 es mayor que 10?'); // true
console.log(15 >= 15, '15 es mayor o igual que 15?'); // true

console.log(15 < 20, '15 es menor que 20?'); // true 
console.log(15 < 10, '15 es menor que 10?'); // false
console.log(15 < 15, '15 es menor que 15?'); // false
console.log(15 <= 15, '15 es menor o igual que 15?'); // true

console.log(15 == 15, '15 es igual a 15?');  // true
console.log(15 === 15, '15 es estrictamente igual a 15?');  // true
console.log(15 == '15', '15 es igual a 15?');  // compara contenido -> true
console.log(15 === '15', '15 es estrictamente igual a 15?');  // compara contenido y tipo de dato -> false

console.log(15!=15, '15 es distinto de 15?'); // -> false 
console.log(15!=="15", '15 es estrictamente distinto de 15?'); // -> true


// OPERADOR TERNARIO (CONDICIONAL)

20==="20"?
console.log('condicion verdadera') 
:
console.log('condicion falsa')


// OPERADORES LOGICOS 

// *AND

console.log(20>10 && 25>10) // --> true
//          true      true

console.log(20>10 && 25<10) // --> false
//          true     false

console.log(20>10 && 25<10 && 30>10 && 20==20 && 10<12) // --> false
//           true   false     true     true     true


// *OR

console.log(20>10 || 25>10) // true
//          true      true

console.log(20>10 || 25<10) // true
//          true      false

console.log(20>10 || 25>10 || 20<12 || 25<1 || 1<2) // true
//          true     false    false   false   false   

console.log(20>22 || 25<20 || 20<12 || 25<1 || 3<2) // false
//          fasle    false    false   false   false            



// ToDo EJERCICIO 1

const number1 = 56;
const number2 = 47;
let number3;

let suma = number1+number2 ;
console.log(number1+number2);

let resta = number1-number2;
console.log(number1-number2);

let producto = number1*number2;
console.log(number1*number2);


number1 %2 ==0?
console.log('es par')          //  condicion verdadera 
:
console.log('es impar')        //  condicion falsa 


number2 %2 ==0?
console.log('es par')          //  condicion verdadera 
:
console.log('es impar')        //  condicion falsa 



// ToDo Ejercicio 2 

number3 = 5;

suma = number3 + suma;

number3 = number3 * producto;

resta = resta - number3;

console.log(suma, number3, resta);


// HERRAMIENTAS DE JS EN EL NAVEGADOR

alert('HOLA SOY UNA ALERTA'); 

let respuesta = prompt('CUANTOS AÑOS TENES?'); // envia un mensaje al usuario
alert(respuesta);

document.write('HOLA ESTOY ESCRIBIENDO EN EL DOCUMENTO'); // escribe un texto al final del documento 


