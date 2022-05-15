//Iteración #4: Calcular el promedio**

//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];


let suma = 0;


function average(param) {

    for (let i = 0; i < numbers.length; i++) {
        const elementos = param[i];

        suma += (elementos/param.length)
        
    }
  
}


average(numbers)
console.log(suma);