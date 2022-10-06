function hello1(){
    console.log('Hola a todos');
}

const hello2 = function(){
    console.log('Hello word');
}

const hello3 = ()=> {
    console.log('Oi');
}

// hello1();
// hello2();
// hello3();

// const addition =(x,y) =>{
//     const addition = x+y;
//     return addition
// }
const addition =(x,y) => x+y 


// const power =(x) =>{
//     const power = x*x;
//     return power
// }
const power =(x) => x*x


const additionOutput = addition(4, 7);
console.log(additionOutput);


const winner = (team1, team2) => console.log(`El equipo ${team1} le gano a el equipo ${team2}`);


//ToDo EJERCICIO

const database = ['javier', 'martin', 'agos', 'marcos', 'luis'];

const getDatabase = () => alert(database.join(', '));

const deleteUser = () =>{
    const name =prompt('que usuario queres borrar?').toLowerCase();
    if(database.includes(name)){
    const position = database.indexOf(name);
    database.splice(position,1)
    alert('usuario eliminado')
    }else{
        alert('usuario no encontrado')
    }
}

const updateUser = function (){
    const name =prompt('que usuario queres modificar?').toLowerCase();
    const update =prompt('Como es la modificacion?').toLowerCase();
    if(database.includes(name)){
        const position = database.indexOf(name);
        // database[position]=update
        database.splice(position, 1, update);
        alert('Base de datos actualizada')
        }else{
            alert('usuario no encontrado')
        }
    }



    // LAS FUNCIONES CALLBACK SON FUNCIONES QUE SE PASAN COMO ARGUMENTOS DE OTRAS FUNCIONES

    // const hi = nombre => alert('hola ' + nombre);
    // const bye = nombre => alert('Chau ' + nombre)

    // function userRegister (funcion){
    //     const name = prompt('Como es su nombre');
    //     saludo(name)
    // }

    // userRegister(hi);
    // userRegister(bye);


const ageDatabase = [32, 26, 30, 20, 22];

// function mayoreDe25(edad){
//     if(edad>=25){
//         return edad
//     }
// }

// const olderThan25 = ageDatabase.filter(mayoreDe25);


//FILTER AND FIND

const olderThan25 = ageDatabase.filter(age => age >= 25); // Devuelve una lista de todods los elementos que coincidan con la condicion especificada
const olderThan35 = ageDatabase.filter(age => age >= 25); // Si ninguno cincide devuelve un array vacio

const mayorA25 = ageDatabase.find(age => age >= 25); // Devuelve el primer elemento que se encuentre en el array que cumple con la coindicion especificada
const mayorA35 = ageDatabase.find(age => age >= 25); // Si ninguno coincide devuelve un Undefined


// FOREACH AND MAP

const en20años = ageDatabase.forEach(age => age+20); // No devuelve nada ni tampoco modifica el array original, pero te permite ejecutar una accion con cada item del array
// const en20años = ageDatabase.map(age => age+20); // Te permite ejecutar una determinada accion con cada item del array y guardarlo en un array nuevo


// ToDo Calculadora 

// const calculator = () => {
//     const num1 = Number(prompt('Decime el primer numero'));
//     const num2 = Number(prompt('Decime el segundo numero'));
//     const operation = prompt ('Que operacion deseas realizar? (+, -, *, /)');
//     if(isNaN(num1) || isNaN(num2)){
//         alert('Ingrese numeros validos');
//         return // CORTA LA EJECUCION DEL CODIGO (el return)
//     }
//     switch (operation) {
//         case '+':
//             alert(num1+num2);
//             break;
//         case '-':
//             alert(num1-num2);
//             break;
//         case '/':
//             alert(num1/num2);
//             break;
//         case '*':
//             alert(num1*num2);
//             break;

//         default:
//             alert('Ingresa una operacion valida')
//             break;
//     }
// }


// const calculator = (num1, num2, operation) => {
//     if(isNaN(num1) || isNaN(num2)){
//         alert('Ingrese numeros validos');
//         return // CORTA LA EJECUCION DEL CODIGO (el return)
//     }
//     switch (operation) {
//         case '+':
//             return(num1+num2);
//         case '-':
//             return(num1-num2);
//         case '/':
//             return(num1/num2);
//         case '*':
//             return(num1*num2);
//         default:
//             return'Ingresa una operacion valida'
//     }
// }

// const outcome = innerCalculator(8,3,'*')
// console.log(outcome);

// function little (){
//     console.log('hi');
//     return
//     console.log('bye');
// }

// function big (little){
//     little();
//     console.log('sale de la mas chica nada mas');
// }


// ToDo Trolley

let products = ['agua', 'cerveza', 'gin', 'vino', 'fernet', 'cachaza', 'gatorade', 'ron', 'vodka', 'whisky'];
let trolley = [];

const addProduct = () => {
    const productToAdd = prompt('Que producto deseas agregar al carrito?').toLowerCase();
    if(products.includes(productToAdd)){
        trolley.push(productToAdd);
    }else{
        alert('No vendemos ese producto');
    }
}

const getTrolley = () =>{
    alert('Los productos de su carrito son \n- ' + trolley.join('\n- '));
}

function getProductFromTrolley () {
    const productToFind = prompt(' Que producto deseas ver de tu carrito?').toLowerCase();
    if(trolley.includes(productToFind)){
        const product = trolley.find(drink => drink == productToFind);
        alert(product)
    }else{
        alert('No tienes ese producto en tu carrito');
    }
}


const findProducts = function(){
    const search = prompt('Buscar bebidas...').toLowerCase();
    const results = products.filter(product=>product.includes(search));
    alert(results);
}

const removeProductFromTrolley = ()=>{
    const productToRemove = prompt('Que bebida deseas eliminar de tu carrito?').toLowerCase();
    if(trolley.includes(productToRemove)){
        trolley = trolley.filter(product => product != productToRemove);
        alert('Producto eliminado')
    }else{
        alert('No tienes ese producto en tu carrito');
    }
}


// ESTO QUEDO SIN TERMINAR

// function checkIfIsInTrolley (product){
//     trolley.includes(product);
//     if(!trolley.includes(product)){
//         alert('No tienes este producto en tu carrito')
//     }else{
//     }
// }


//ToDo Rock paper scissors

const options = ['piedra', 'papel', 'tijeras'];

function playerMove(){
  let move = prompt('Piedra, papel, o tijeras?').toLowerCase().trim();
  return move;
}
function botMove(){
  let randomNumber=Math.random()
  let move = Math.floor(randomNumber * 2.99);
  console.log(randomNumber * 2.99);
  console.log(move);
  return options[move]
}

function game ( player ){
  const bot = botMove();
  // const player = playerMove();
  switch(true){
    case player === bot:
      alert(`El bot jugó ${bot}. Empate`);
      break;
    case player==='piedra' && bot==='papel':
      alert(`El bot jugó papel. Gana el bot`);
      break;
    case player==='piedra' && bot==='tijeras':
      alert(`El bot jugó tijeras. Ganaste vos`);
      break;
    case player==='papel' && bot==='piedra':
      alert(`El bot jugó piedra. Ganaste vos`);
      break;
    case player==='papel' && bot==='tijeras':
      alert(`El bot jugó tijeras. Gana el bot`);
      break;
    case player==='tijeras' && bot==='piedra':
      alert(`El bot jugó piedra. Gana el bot`);
      break;
    case player==='tijeras' && bot==='papel':
      alert(`El bot jugó papel. Ganaste vos`);
      break;
  }
}