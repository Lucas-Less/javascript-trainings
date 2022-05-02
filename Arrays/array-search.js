const alunos = ['Joao', 'Vitor', 'Gustavo', 'Milena' ]
const medias = [10, 7, 9, 6]

let notasAlunos = [alunos, medias]

const nomeNota = (nomeDoAluno) => {
    if(notasAlunos[0].includes(nomeDoAluno)){
        let indice = notasAlunos[0].indexOf(nomeDoAluno)
        return notasAlunos[0][indice] + ', sua media é ' + notasAlunos[1][indice]
    }
    else{
        return console.error('nome nao encontrado')
    }
}

console.log(nomeNota('Vitor'))