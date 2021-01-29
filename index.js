
// D.R.Y = Don't Repeat Yourself

function esMayorDeEdad(edad_limite, edad_de_la_persona) {
    if (edad_de_la_persona >= edad_limite) {
        return true;
    }
    return false;
}
const esMenorDeEdad = function (edad_limite, edad_de_la_persona) {
    if (edad_de_la_persona < edad_limite) {
        return true;
    }
    return false;
}
// EcmaScript 2015 - ES6
const noEsNadie = () => {
    console.log("Tu no eres nadie :(")
}


noEsNadie()
// console.log(esMenorDeEdad(18, 25));
// console.log(esMayorDeEdad(18, 17));

// For loop
// for (let i = 0; i <= 20; i++) {
//     if (esMenorDeEdad(18, i)){
//         console.log(`Usted es menor de edad: ${i}`)
//     } else {
//         console.log(`Usted tiene rango ${i}`)
//     }
// }

// While loop
// const limite = 30;
// let actual = 0;
// while(actual < limite){
//     actual++
//     console.log(`Hola amigos, soy ${actual}`)
// }


// Arrays 
// 0            1         2        3
// let estudiantes = ["frederick", "pedrito", "pedro", "manuel"];
// Longitud de un array
// console.log(estudiantes.length);


// const edades = [ 23, 25, 13, 16, 28]

// for (let i = 0; i < edades.length;  i++){
//     console.log(edades[i], esMayorDeEdad(18, edades[i]))
// }


// function laBrujaDelBarrio(pregunta){
//     const respuestas = ["Si", "Definitivamente", "No", "Jamás"];
//     const respuestaEvaluada = Math.round(Math.random() * respuestas.length);
//     console.log(respuestas[respuestaEvaluada])
// }

// laBrujaDelBarrio("Me casaré algún día?")



// Métodos básicos de los array
let comida = ["platano", "queso", "salami", "paloma"];
console.log(comida)
// agregar elemento al FINAL de un array
comida.push("pan")
console.log(comida)

// remover elemento del final de un array

// Pop devuelve el elemento removido si quieren almacenarlo en una variable
comida.pop();
console.log(comida)


comida.unshift("Platano con huevo");
console.log(comida);

comida.shift()

console.log(comida);

// ES6
// ... = spread operator
comida = ["Tuti", ...comida]
console.log(comida);

const bebidas = ["Romo", "Agua", "Red Rock"];

comida = [...comida, ...bebidas]
console.log(comida);

