//eu não tinha colocado o uppercase no prompt, isso impede do programa não funcionar se o usuario digitar minusculo

let comerCoxinha = prompt ("Ola, bem vindo a coxinhas Labenu, voce deseja comer uma coxinha? \ndigite S para sim e N para não").toUpperCase()

let conta = 0

while (comerCoxinha === "S") {
    conta = conta + 2.50
    comerCoxinha =prompt ("deseja mais uma?")
}

console.log (`obrigado por comer na coxinhas Labenu, sua conta ficou no valor de ${conta}, volte sempre`)