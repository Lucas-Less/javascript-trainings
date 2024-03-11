const cliente = {
    nome:"Andre",
    idade:33,
    cpf:"4564564565511",
    email:"andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]
//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))