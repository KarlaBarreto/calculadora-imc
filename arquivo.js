let peso = document.getElementById('ipeso')
let altura = document.getElementById('ialtura')
let resultado = document.getElementById('res')

function calcular() {
    if(peso.value.length == 0 || altura.value.length == 0 || peso.value < 0 || altura.value < 0) {
        alert('Informe peso e altura validos!')
    } else {
        let imc = (peso.value/(altura.value*altura.value))*10000
        imc = imc.toFixed(2)
        resultado.innerHTML = `Seu IMC é: ${imc}`
    }
}