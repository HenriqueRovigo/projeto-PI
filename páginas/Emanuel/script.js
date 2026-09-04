//b1 , d2, b3 , a4 , c5

function validarResposta(elemento, pergunta) {
    console.log(pergunta)
    console.log(elemento)
    pergunta = parseInt(pergunta)
    if (pergunta < 5) {
        document.getElementById("perg" + pergunta).style.display = "none"
        document.getElementById("perg" + (pergunta+1)).style.display = "block"
    }
}
