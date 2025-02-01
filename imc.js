
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
            restultado.textContent = valorIMC + ' Voce esta abaixo do peso'
        }
        if (valorIMC > 25) {
           restultado.textContent = valorIMC + ' Voce esta sobre peso'
            if(valorIMC > 29.9){
                restultado.textContent = valorIMC + ' Voce esta obesidade 1'
            }
            if(valorIMC > 34.9){
                restultado.textContent = valorIMC + ' Voce esta obesidade 2'
            }
            if(valorIMC > 39,9){
                 restultado.textContent = valorIMC + ' Voce esta obesidade 3'
            }
            if (valorIMC > 40){
                 restultado.textContent = valorIMC + ' besidade Morbida'
            }
        }


    } else {
        restultado.textContent = 'Preencha todos os campos para calcular !'
    }

}

calcular.addEventListener('click', imc);
