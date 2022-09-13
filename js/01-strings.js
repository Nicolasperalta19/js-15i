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

console.log(`la cantidad de caracteres de la variable de es ${randomString.length}`); // .length devuelve la longitud del string
console.log(randomString.toUpperCase()); //
console.log(randomString.toLowerCase()); //
console.log(randomString.includes('clavito')); //
console.log(name.charAt(1)); //
console.log(randomString.substring(0,7)); //
console.log(claveDeInicio.substring(0,8)); //
console.log(lastName.trim()); //
console.log(randomString.includes('ito c'));  //
console.log(url.substring('34').replace('-', ' '));  //


