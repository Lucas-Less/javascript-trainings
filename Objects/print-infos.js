const cliente = {
    nome:"Andre",
    idade:33,
    cpf:"4564564565511",
    email:"andre@email.com"
}

console.log(`Meu nome é ${cliente.nome} tenho ${cliente.idade}, meu email é ${cliente.email} e meu cpf é ${cliente.cpf.substring(0,4)}`)