let pontos = document.getElementsByClassName("quiz");
let result = 0
let mostrarResult;
do{
    result++
}while(pontos == "V")

if(result <= 1){
    mostrarResult = "Precisa praticar mais!";
}else if(result <= 3){
    mostrarResult = "Muito bem! Quase."
}else{
    mostrarResult = "Será mesmo o próximo gênio?"
}

console.log(mostrarResult)