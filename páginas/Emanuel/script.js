let respostas = [b1 , d2, b3 , a4 , c5];
let corretas = [b1 , d2, b3 , a4 , c5];
let verifik = 0;
let pontuacao = 0;

for (verifik < 5; verifik++;) {

    if (respostas[verifik] == corretas[verifik]) {
        pontuacao++;
    }

}
