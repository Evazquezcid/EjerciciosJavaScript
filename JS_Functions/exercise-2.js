//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let masLargo = "";

function findLongestWord(array) {

    for (let i = 0; i < array.length; i++) {
      
        if (array[i].lengt > masLargo.length){
            masLargo = array[i];
           
        }

    }

  
  }

  findLongestWord(avengers);

  console.log(masLargo);