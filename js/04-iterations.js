// **WHILE: MIENTRAS LA CONDICION SE CUMPLA SE EJECUTA LA CONDICION DE ADENTRO.

// let numero = 15;

// while(numero==15){
//     console.log('Estoy todavia adentro del while');
//     numero++;
// }

// console.log('Salí del while');



// ToDo EJERCICIO CON CONTADOR Y SIN CONTADOR

// let numero = prompt('Ingresa un número');
// let contador = 0;

// while(contador<numero){
//     console.log(contador);
//     contador++;
// }


// while(numero>=0){//si si ... si si no (sale del while)
//     console.log(numero);//15 14 ... 1 0
//     numero--;//14 13 ... 1 0 -1
// }



// PORQUE LA LUNA ES MAYOR QUE EL SOL


// let response = prompt('Porque la luna es mayor que el sol?');
// let contador = 1;
// let surrender = false;

// while(response.toLowerCase() !== 'porque sale de noche' && surrender === false){
//     response = prompt('intenta otra vez');
//     contador++;
//     if(contador === 3){
//         alert('Porque sale de.....');
//     }
//     if(contador === 5){
//         surrender = true;
//     }
// }

// if(surrender!== true){
//     alert('que graande');
// }else{
//     alert('Amargo')
// }



// *FOR


// for(iniciador, condición, cambio en el contador){  ***SINTAXIS DEL FOR***
//     //codigo a ejecutarse una cantidad de veces
// }

// let numero = prompt('ingresa un número');

// for(let contador = 0; contador > numero; contador++){
//     console.log(contador);
// }


//*ToDo Machete de Tablas

// let number = prompt('Que tabla queres saber?');

// for(let i=0;  i<10; i++){
//     console.log(`${number}X${i}=${number*i}`);
// }




//!EJERCICIO EN GRUPOS :D

// //* - Recibir dos valores y la operacion a realizar (+, -, *, /)

// //* - Verificar que los valores ingresados no sean NaN, si son NaN convertirlos a 0 (PISTA: isNaN(x))

// //* - Con una estructura switch verificar la operacion y devolver un mensaje con el resultado de la misma.

// //* - Si se ingresa una operación que no está contemplada devolver un mensaje de error.



// let numero1 = Number(prompt('ingrese un número'));
// let numero2 = Number(prompt('ingrese un segundo número'));
// let operation = prompt('ingrese un operador');

// if(isNaN(numero1)){
//     numero1=0;
// }
// if(isNaN(numero2)){
//     numero2=0;
// }
// if(numero2==0){
//     numero2 = Number(prompt('INGRESE UN NUMERO DISTINTO DE 0'));
// }


// switch (operation){
//     case '+':
//         console.log(numero1+numero2);
//         break;
//     case '-':
//         console.log(numero1+numero2);
//         break;
//     case '*':
//         console.log(numero1*numero2);
//         break;
//     case '/':
//         console.log(numero1/numero2);
//         break;
//     default:
//         console.log('ERROR 404');
// }


// ToDo El prompt de Excalibur 

let name='';
let isKing = false;

while( name.toLowerCase()!=='arturo' || isKing!==true){
    name=prompt('Como te llamas?');
    if(name.toLowerCase()==='arturo'){
        isKing = confirm('Sos rey?');
        if(isKing===false){
            alert('No sos rey');
        }
    }else{
        alert('No te llamas Arturo');
    }
}
console.log('Salve el rey Arturo');


// while( name.toLowerCase()!=='arturo' || isKing!==true){
//     name=prompt('Como te llamas?');
//     if(name.toLowerCase()==='arturo'){
//       isKing = confirm('Sos rey?');
//       if(isKing===false){
//         alert('No sos rey pa')
//       }
//     }else{
//       alert('No te llamas Arturo, anda pegate un baño')
//     }
//   }
//   console.log('Salve el Rey Arturo');