//RESPOSTAS: b1 , d2, b3 , a4 , c5
//  uma função serve para armazenar e repetir certas linhas de
//comando várias vezes, tal qual uma variável.
//  essa function, serve para passar as perguntas ao usuário,
//no caso as entradas do código.
function validarResposta(elemento, pergunta) {
    console.log(pergunta)
    console.log(elemento)
    pergunta = parseInt(pergunta);
    if (pergunta < 5) {

        document.getElementById("perg" + pergunta).style.display = "none"
        document.getElementById("perg" + (pergunta + 1)).style.display = "block"
        
    }
}
//preciso pesquisar uma função para o processamento.
//meu ideal seria: resposta escolhida --> verifica pelo ID do elemento --\/
//--> esse ID vai ter o valor 1 para certo e 0 para errado, que vai ser incrementando em outra let --\/
//--> o número de acertos será verificado em um ninho de IFs, com diferentes reações em texto --\/
//--> apresenta o percentual de acertos e o texto de reação.


