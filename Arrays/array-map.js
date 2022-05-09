const notas = [10, 9, 8, 7 , 6]

const notasAtt = notas.map(nota => nota == 10 ? nota : ++nota) // ++nota = nota +1 porém é utilizada dessa forma com o mais na frente pois usando o ++ depois,
//ele só adiciona o valor depois de adicicionar ao novo array fazendo com que a adição não funcione

console.log(notasAtt)