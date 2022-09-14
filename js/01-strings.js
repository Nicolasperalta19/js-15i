"Es igual a simple comilla"
'Es igual a doble comilla'

'Messi dijo : "La comision 15i es la mejor"';

'Messi dijo : "La comision \'15i\' es la mejor"'; // escapando al comportamiento de la comilla.


//  CONCATENACION DE STRINGS

console.log("Hola, soy" + " Messi"); // pega dos strigs devuelve Hola, soy Messi

console.log("15" + "15"); // devuelve 1515

console.log("15" + 15); // devuelve 1515

// JS LEE DE IZQUIERDA A DERECHA Y DE ARRIBA A ABAJO

console.log("15" + 15 + 15); // devuelve "1515 15" porque lee el primer string primero

console.log(15 + 15 + "15"); // devuelve "3015" porque lee la suma de numeros primero


// TEMPLATE LITERALS 

let edad = 26;
let cerveza = 'roja';
let provincia = 'tucuman';

console.log(`Diego tiene ${edad} y vive en ${provincia} y le gusta la cerveza ${cerveza}`); // comillas invertidas

console.log("Diego tiene " + edad + " y vive en " + provincia + " y le gusta la cerveza " + cerveza);


// MÉTODOS Y PROPIEDADES DE LOS STRINGS

let randomString = 'Pablito clavó un clavito';
let name = 'Diego';
let claveDeInicio = '23082022asdasdasdasdasd4654654654654';
let lastName = '              fernandez            ';
let url = 'http://paginadediego.com/?usuario=martin-fanlo'


//.length --> Te devuelve la cantidad de caracteres que tiene el string
console.log(`la cantidad de caracteres de la variable de es ${randomString.length}`); 

//.toUpperCase() --> Pasaba todo el string a mayuscula
console.log(randomString.toUpperCase()); 

//.toLowerCase() --> Pasaba todo el string a minuscula
console.log(randomString.toLowerCase()); 

//.includes(string) --> Prueba si el string que esta adentro de los parentesis se encuentra en el string analizado. Te devuelve un booleano
console.log(randomString.includes('clavito')); 
console.log(randomString.includes('ito c')); 

//.charAt(position<numero>) --> Te devuelve el caracter que se encuentra en esa posición
console.log(name.charAt(1)); 

//.substring(<inicio>,<final>) --> Te devuelve un nuevo string que es el que comienza en <inicio> y termina en <final>
console.log(randomString.substring(0,7)); 
console.log(claveDeInicio.substring(0,8)); 

//.trim() --> Quita los espacios al comienzo y al final del string
console.log(lastName.trim());

//.replace(<cadena a reemplazar>, <cadena de reemplazo>) --> Reemplazaba un parte de la cedena por otra que se le especifica
console.log(url.substring('34').replace('-', ' '));  //



// ToDo EJERCICIO DEL APELLIDO 

// const respuestaUsuario = prompt('Cual es su apellido?');
// const ultimaLetra = respuestaUsuario.substring(respuestaUsuario.length -1);
// const ultimaLetra2 = respuestaUsuario.charAt(respuestaUsuario.length -1);
// console.log(`La utima letra de tu apellido es la ${ultimaLetra} y ${ultimaLetra2}`);



// ToDo EJERCICIO DE LA PRIMERA LETRA 

const nombreUsuario = prompt("Ingresa por favor tu nombre");
const primeraLetra = nombreUsuario.charAt(0);
const primeraLetraMayuscula = primeraLetra.toUpperCase();
const resto = nombreUsuario.substring(1);
console.log(primeraLetraMayuscula + resto);



