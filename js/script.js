var n1 = document.querySelector("#numero1")
var n2 = document.querySelector("#numero2")
var result = document.querySelector("#result")



function soma(){
    result.innerHTML = Number(n1.value) + Number(n2.value) 
    document.querySelector("#titulo").textContent = "Adição"
    document.querySelector("#parag").textContent = "Adição é uma das operações básicas da aritmética. Na sua forma mais simples, a adição combina dois números em um único número, denominado soma, total ou resultado. Adicionar mais números corresponde a repetir a operação. Por extensão, a adição de zero, um ou uma quantidade infinita de números pode ser definida."
    document.getElementById("img").src="./img/adicao.png"
}

function sub(){
    result.innerHTML = Number(n1.value) - Number(n2.value)
    document.querySelector("#titulo").textContent = "Subtração"
    document.querySelector("#parag").textContent = "Subtração é uma operação matemática que indica quanto é um valor numérico se dele for removido outro valor numérico, em outras palavras, uma quantidade é retirada de outra, e o valor restante é o resultado dessa operação. Uma subtração é representada por: a - b = c"
    document.getElementById("img").src="./img/subtracao.png"
}

function mult(){
    result.innerHTML = Number(n1.value) * Number(n2.value)
    document.querySelector("#titulo").textContent = "Multiplicação"
    document.querySelector("#parag").textContent = "Na matemática, a multiplicação é uma forma simples de se adicionar uma quantidade finita de números iguais. O resultado da multiplicação de dois números é chamado produto. Ao lado da adição, da divisão e da subtração, a multiplicação é uma das quatro operações fundamentais da aritmética."
    document.getElementById("img").src="./img/mult.png"
}

function divi(){
    result.innerHTML = Number(n1.value) / Number(n2.value)
    document.querySelector("#titulo").textContent = "Divisão"
    document.querySelector("#parag").textContent = "Divisão é a operação matemática inversa da multiplicação. O ato de dividir por algum elemento de um conjunto só faz sentido quando a multiplicação por aquele elemento for uma função bijetora. No anel dos números inteiros a hipótese da bijetividade não é satisfeita para o zero, assim, não se define divisão por zero."
    document.getElementById("img").src="./img/divisao.png"
}





