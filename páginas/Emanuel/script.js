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
    if (pergunta == 5) {
        mostrarResultado()
    }
}
//preciso pesquisar uma função para o processamento.
//meu ideal seria: resposta escolhida --> verifica pelo ID do elemento --\/
//--> esse ID vai ter o valor 1 para certo e 0 para errado, que vai ser incrementando em outra let --\/
//--> o número de acertos será verificado em um ninho de IFs, com diferentes reações em texto --\/
//--> apresenta o percentual de acertos e o texto de reação.
function mostrarResultado() {
    let respostas = document.querySelectorAll("main input:checked")
    console.log(respostas)
    let certas = 0;
    let erradas = 0;
    let i = 0;
    do {
        if (respostas[i].value == 1) {
            certas++;
        } else {
            erradas++;
        }
        i++
    } while (i < 5)
    console.log(certas, erradas);

    document.querySelector(".primeiro").style.display = "none"
    let sectionResultado = document.querySelector("#resultadoFinal");
    sectionResultado.style.display = "block"

    if (certas == 5) {
        sectionResultado.querySelector("h1").textContent = "Absolutamente uma mente absoluta!!!"
        sectionResultado.querySelector("p").textContent = "Você acertou 100% das perguntas!!!"
    } else if (certas == 4) {
        sectionResultado.querySelector("h1").textContent = "Parabéns!"
        sectionResultado.querySelector("p").textContent = "Você acertou 80% das perguntas!!"
    } else if (certas == 3) {
        sectionResultado.querySelector("h1").textContent = "Dá para passar no trimestre."
        sectionResultado.querySelector("p").textContent = "Você acertou 60% das perguntas!"
    } else if (certas == 2) {
        sectionResultado.querySelector("h1").textContent = "Vai ter que melhorar um pouco."
        sectionResultado.querySelector("p").textContent = "Você acertou 40% das perguntas."
    } else if (certas == 1) {
        sectionResultado.querySelector("h1").textContent = "Estude mais nos tempos livres."
        sectionResultado.querySelector("p").textContent = "Você acertou 40% das perguntas."
    } else {
        sectionResultado.querySelector("h1").textContent = "Você leu as perguntas?"
        sectionResultado.querySelector("p").textContent = "Você acertou 0% das perguntas. O que aconteceu?"
    }
}