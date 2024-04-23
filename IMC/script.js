const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')
const result = document.querySelector('#resultado')

function calculo(){
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
    let classificacao = ''

    if(altura.value != '' && peso.value != ''){
        if(imc < 18.5){
            classificacao = 'Abaixo do peso'
        } else if(imc < 25){
            classificacao = 'Peso normal'
        } else if(imc < 30){
            classificacao = 'Acima do peso'
        } else if(imc < 35){
            classificacao = 'Obesidade Grau I'
        } else if(imc < 41){
            classificacao = 'Obesidade Grau II'
        } else{
            classificacao = 'Obesidade Grau III'
        }

        result.innerHTML = 'IMC: ' + imc + ' ' + classificacao
    }
}

function limpar(){
    result.innerHTML = ''
    peso.value = ''
    altura.value = ''
}