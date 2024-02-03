/*
CALCULADORA DE PARTIDAS RANKEADAS

O QUE DEVE SER UTILIZADO
- Variaveis, Operadores, Laços de Repetição, Estrutura de Decisão, Funções ....

OBJETIVO
Criar uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso
retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitorias - derrotas)
* Se XP for menor do que 10 = FERRO
* Se XP for entre 11 e 20 = BRONZE
* Se XP for entre 21 e 50 = PRATA
* Se XP for entre 51 e 80 = OURO
* Se XP for entre 81 e 90 = DIAMANTE
* Se XP for entre 91 e 100 = LENDARIO
* Se XP for maior ou igual a 101 = IMORTAL

SAIDA
Ao final exibir uma mensagem: 
"O Herói **{nome}*** tem saldo de **{saldoVitorias}** e está no nível de **{Nivel XP}*** " *
*/

var ranking

//Chamada da função fornecendo a quantidade de vitorias e derrotas
calcularVitoriaRankeada(1000,10)
definirRanking(ranking, "Cristian")

function calcularVitoriaRankeada(vitoria = 0, derrota = 0){
    ranking = (vitoria - derrota);
    console.log("A quantidade de vitórias rankeadas é: "+ ranking)
}

function definirRanking(rankingVitorias = 0, heroi = "Desconhecido" ){
    console.log("O valor de entrada do ranking de vitorias é: "+rankingVitorias +" e o nome do herói é: "+heroi)
    let nivelXP
    if (rankingVitorias <= 10){
        let nivelXP = "FERRO"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >= 11 && ranking <= 20) {
        let nivelXP = "BRONZE"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >= 21 && ranking <= 50) {
        let nivelXP = "PRATA"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >= 51 && ranking <= 80) {
        let nivelXP = "OURO"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >= 81 && ranking <= 90) {
        let nivelXP = "DIAMANTE"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >= 91 && ranking <= 100) {
        let nivelXP = "LENDARIO"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    } else if (rankingVitorias >100) {
        let nivelXP = "IMORTAL"
        console.log("O Herói "+heroi +" tem o saldo de "+rankingVitorias +" e está no nível de "+nivelXP)
    }
}

