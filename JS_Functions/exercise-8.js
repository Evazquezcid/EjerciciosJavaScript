//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:


const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  let repetitions = 0;
  const repeat = []


  function repeatCounter(array) {
    for (let i = 0; i < array.length; i++) {
      for(e =0; e > array.length; e++)
    
    if (!repeat.includes(array[i])){
      repeat.push(array[i],repeat)
    }
    repeat = 0;
  }

  repeatCounter(counterWords)

  console.log(repetitions)
