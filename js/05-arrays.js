let days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Otrodia'];
console.log(days[0]); // primera vuelta
console.log(days[1]);
console.log(days[2]);
console.log(days[3]);
console.log(days[4]);
console.log(days[5]);
console.log(days[6]); // days.length = 7

// DRY
// DON'T REPEAT YOURSELF

for (i=0; i<days.length; i++){
    console.log(days[i]);
}

days.push('feriado se agrega al ultimo'); // agrega elemento al array al final
console.log(days);

const dayDeleted = days.pop(); // saca el ultimo elemento del array
console.log(dayDeleted);
console.log(days);

let agregarDia = days.unshift('feriado se agrega al principio'); // agrega un elemento al array al principio
console.log(days);

const deleteDay = days.shift(); // Saca el primer elemento del array
console.log(days);

console.log(days.indexOf('Lunes'));

days.reverse();
console.log(days);

console.log(days.includes('feriado')); 

console.log('Los dias de la semana son: \n- ' + days.join('\n- '));


days.sort();
console.log(days);


let equipos = ['San Martin de Tucuman', 'Atletico Tucumán', 'Otro Equipo'];

const dk = equipos.slice(1,2);
console.log(dk);

console.log(equipos);

equipos.splice(1,1, 'Concion');
console.log(equipos);