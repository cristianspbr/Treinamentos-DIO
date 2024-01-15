/*
DESAFIO CLASSIFICADOR DE NIVEL DE HEROI

O QUE DEVE SER UTILIZADO
- Variaveis, Operadores, Laços de Repetição, Estrutura de Decisão

OBJETIVO
Criar uma variavel para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
* Se XP for menor do que 1000 = FERRO
* Se XP for entre 1001 e 2000 = BRONZE
* Se XP for entre 2001 e 5000 = PRATA
* Se XP for entre 5001 e 7000 = OURO
* Se XP for entre 7001 e 8000 = PLATINA
* Se XP for entre 8001 e 9000 = ASCENDENTE
* Se XP for entre 9001 e 10000 = IMORTAL
* Se XP for maior ou igual a 10001 = RADIANTE

SAIDA
Ao final exibir uma mensagem: "O Herói de nome **{nome}*** está no nível de **{Nivel XP}*** "
*/

let nomeHeroi = "CRISTIAN PEREIRA"
let quantidadeXP = 28000

if (quantidadeXP <= 1000){
    let nivelXP = "FERRO"
    console.log ("Seu XP é "+ quantidadeXP + " Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 1001 && quantidadeXP <= 2000 ){
    let nivelXP = "BRONZE"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 2001 && quantidadeXP <= 5000){
    let nivelXP = "PRATA"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 5001 && quantidadeXP <= 7000){
    let nivelXP = "OURO"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 7001 && quantidadeXP <= 8000){
    let nivelXP = "PLATINA"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 8001 && quantidadeXP <= 9000){
    let nivelXP = "ASCENDENTE"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >= 9001 && quantidadeXP <= 10000){
    let nivelXP = "IMORTAL"
    console.log ("Seu nível de XP é "+ nivelXP)

}else if (quantidadeXP >=10001){
    let nivelXP = "RADIANTE"
    console.log ("Seu nível de XP é "+ nivelXP)
}