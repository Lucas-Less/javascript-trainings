let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

let nomesFormatados = nomes.map(formatNome)

function formatNome(nome) {
    return nome.toUpperCase()
}

console.log(nomesFormatados)