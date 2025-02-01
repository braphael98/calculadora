
const calcular = document.getElementById('calcular');
const restultado = document.getElementById('restultado');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const restultado = document.getElementById('resultado');

    if (nome !== "" && altura !== "" && peso !== "") {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        restultado.textContent = valorIMC;

        let classificacao = "";

        if (valorIMC < 18.5) {
            classificacao = "abaixo do peso.";            
        } else if(valorIMC < 25){
            classificacao = "com peso ideal.";
        } else if (valorIMC < 30){
            classificacao = "voce esta levemente acima do peso";
        } else if (valorIMC <35){
            classificacao = "com obesidade grau 1";
        } else if(valorIMC < 40){
            classificacao = "obesidade grau 2";
        }else{
            classificacao = "Obesidade grau 3";
        }

        
        restultado.textContent = `${nome} seu IMC é: ${valorIMC} e você esta ${classificacao}`;

    } else {
        restultado.textContent = 'Preencha todos os campos para calcular !'
    }

}

calcular.addEventListener('click', imc);
