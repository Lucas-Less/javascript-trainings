const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJavascript = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala (notasdaSala){
    const somaNotas = notasdaSala.reduce((acum, atual) => atual + acum,0)
    return somaNotas / notasdaSala.length
}


//console.log(salaJava.reduce((acum, atual) => atual + acum,0))
console.log(`Media da Sala de JS ${mediaSala(salaJavascript)}`)
console.log(`Media da Sala de Java ${mediaSala(salaJava)}`)
console.log(`Media da Sala de Python ${mediaSala(salaPython)}`)

const notas = [10, 6.5, 8, 7]
const media = notas.reduce((acum, atual) => atual + acum, 0 ) / notas.length
console.log(media)


