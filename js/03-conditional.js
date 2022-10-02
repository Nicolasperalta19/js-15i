// ESTRUCTURA CONDICIONAL SIMPLE Y DOBLE (IF = SIMPLE | ELSE = DOBLE)

// let edad = prompt('Cuantos años tenes?');
// if(edad>=18){
//     //codigo a ejecutar
//     console.log('Machate tranquilo');
// }else{
//     //codigo a ejecutar si el if dio false
//     console.log('Vaya a tomar gatorade');
// }



// CEMENTERIO INDIO EMBRUJADO

// const tieneAnteojos = prompt('Trajiste anteojos?');

// if(tieneAnteojos.toLowerCase() === 'si'){
//     alert('corre');
// }else{
//     if(tieneAnteojos.toLowerCase() === 'no'){
//         alert('compra tranquilo')
//     }else{
//         alert('por favor solo respuestas de si y no')
//     }
// }

// Pares e impares

// const numero = prompt('Ingrese un número para ver si es par o impar'); // Prompt siempre devuelve un string

// if(numero %2 == 0){
//     console.log('%cEs par', 'color:blue; font-size: 30px');
// }else{
//     console.log('%cEs impar', 'color:red; font-size: 30px');
// }


// CEMENTERIO INDIO EMBRUJADO CON CONDICIONALES MULTIPLES

// const tieneAnteojos = prompt('Trajiste anteojos?');

// if(tieneAnteojos.toLowerCase() === 'si'){
//     alert('corre');
// }else if(tieneAnteojos.toLowerCase() === 'no'){
//         alert('compra tranquilo')
//     }else{
//         alert('por favor solo respuestas de si y no')
//     }


// PATOVICA DE FIESTA 

// let edad = prompt ('Cuantos años tenes?');

// if(edad >= 18){
//     alert('Disfruta la fiesta')
// }else if(prompt('Trajiste tutor?').toLowerCase() === 'si'){
//     alert('Disfruten la fiesta')
// }else{
//     alert('vaya a la casa')
// }


// PROVINCIAS COPADAS

// const provincia = prompt('Che de donde sos?');

// if(provincia.toLowerCase() === 'tucuman'){
//     console.log('%cEs buen sangunche tucumano', 'color:green; font-size: 30px;');
// }else if (provincia.toLowerCase() === 'cordoba'){
//     console.log('%cEs buen cordobes', 'color:red; font-size: 30px;');
// }else if (provincia.toLowerCase() === 'santiago del estero'){
//     console.log('%cEs buen santiagueño', 'color:blue; font-size: 30px;');
// }else if (provincia.toLowerCase() === 'buenos aires'){
//     console.log('%cEs buen porteño', 'color:yellow; font-size: 30px;');
// }else{
//     alert('Esa calle no la conozco ray');
// }
    

// switch(provincia.toLowerCase()){
//     case 'tucuman':
//         console.log('%cEs buen sangunche tucumano', 'color:green; font-size: 30px;');
//     break;
//     case 'cordoba':
//         console.log('%cEs buen cordobes', 'color:red; font-size: 30px;');    
//     break;
//     case 'santiago del estero':
//         console.log('%cEs buen santiagueño', 'color:blue; font-size: 30px;');
//     break;
//     case 'buenos aires':
//         console.log('%cEs buen porteño', 'color:yellow; font-size: 30px;');
//     break;
//     default:
//         alert('Esa calle no la conozco ray');
// }


// EJERCICIO DE REPASO DE CONDICIONALES

// const numero = Number (prompt('Ingrese un número'));
// const numero1 = Number (prompt('Ingrese otro número'));

// if(numero>numero1){
//     console.log(numero + numero1, 'suma');
// }else if(numero<numero1){
//     console.log(numero - numero1, 'resta');
// }else{
//     console.log(numero * numero1, 'multiplicacion');
// }


// EJERCICIO DE PEDIR LA EDAD Y DEVOLVER UNA CANCION

// const age = prompt('cuantos años tenes?');

// switch(true){
//     case age>0 && age<=10:
//         console.log('cancion infantil');
//     break;
//     case age>10 && age<=20:
//         console.log('cancion mas vieja');
//     break;
//     case age>20 && age<=50:
//         console.log('cancion mas mas mas vieja');
//     break;
//     case age>60 && age<=120:
//         console.log('cancion prehistorica');
//     break;
//     default:
//         alert('No tenes cancion pa');
//         break;
// }



// EJERCICIO DE REPASO DE CONDICIONALES

const day = new Date().getDay();

switch(day){
    case 1:
        console.log('Hoy es lunes');
        break;
    case 2:
        console.log('Hoy es martes');
        break;
    case 3:
        console.log('Hoy es miercoles');
        break;
    case 4:
        console.log('Hoy es jueves');
        break;
    case 5:
        console.log('Hoy es viernes');
        break;
    case 6:
        console.log('Hoy es sabado');
        break;
    case 7:
        console.log('Hoy es domingo');
        break;
}
