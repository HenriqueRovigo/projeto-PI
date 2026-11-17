//RESPOSTAS: b , d, b , a , c
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
//dicas

function Dicabtn() {
    document.getElementById("Dica").style.display = "block"

}

//processamento e saída
function mostrarResultado() {
    let respostas = document.querySelectorAll("main input:checked")
    console.log(respostas)
    let certas = 0;
    let erradas = 0;
    for (let i = 0; i < 5; i++) {
        if (respostas[i].value == 1) {
            certas++;
        } else {
            erradas++;
        }
    }
    console.log(certas, erradas);

    document.querySelector(".primeiro").style.display = "none"
    let sectionResultado = document.querySelector("#resultadoFinal");
    sectionResultado.style.display = "block"

    const titulos = [
        "Você leu as perguntas?",
        "Estude mais nos tempos livres.",
        "Vai ter que melhorar um pouco.",
        "Dá para passar no trimestre.",
        "Parabéns!",
        "Absolutamente uma mente absoluta!!!"
    ];

    const porcentagem = (certas / 5) * 100;

    sectionResultado.querySelector("h1").textContent =
        titulos[certas] || titulos[0];
    sectionResultado.querySelector("p").textContent =
        `Você acertou ${porcentagem}% das perguntas!`;

}