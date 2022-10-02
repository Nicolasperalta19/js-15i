// REDONDEO Y TRUNCAMIENTO

let numero = 35.75;

//Redondeo -> 36 
console.log('numero redondeado', Math.round(numero));

//Truncamiento -> 35
console.log('numero redondeado', Math.floor(numero));


// ENCONTRAR MAXIMOS Y MINIMOS 

let maximo = Math.max(0,1,2,3,4,54,1253,45,132,56,465);
console.log('Numero mas grande', maximo);

let minimo = Math.min(45, 1545, 24, 312, 4564, 54, 1253, 45, 132, 56, 465);
console.log('Numero mas chico', minimo);


// POTENCIAS Y RAICES 

console.log('3 al cuadrado es:', Math.pow(3,2));
console.log('3 al cubo es:', Math.pow(3,3));

console.log('La raiz cuadrada de 9 es:', Math.sqrt(9));
console.log('La raiz cubica de 27 es:', Math.cbrt(27));


// OBTENER UN NUMERO ALEATORIO ENTRE 0 Y 1

let aleatorio = Math.random();
console.log(aleatorio);


// obtener un numero aleatorio que este entre 0 y 10.

let aleatorio2 = Math.round(Math.random() * 19);
console.log(aleatorio2);


//PARCEAR CADENAS

let string = '15.25';
console.log(string);

console.log(Number(string));
console.log(parseInt(string));
console.log(parseFloat(string));


// LIMITAR LA CANTIDAD DE DECIMALES 

let numero2 = Math.random();
console.log(Number(numero2.toFixed(5)));  // El .toFixed te convierte el numero a un string


// 
