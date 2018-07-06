const numero1 = document.querySelector("#number1");
const numero2 = document.querySelector("#number2");
const numero3 = document.querySelector("#number3");
const numero4 = document.querySelector("#number4");

function executarSoma() {
    excutaOperacao(numero1, numero2, "#resultado-soma", "soma");
}

function executarSub() {
    excutaOperacao(numero3, numero4, "#resultado-sub", "sub");
}

function excutaOperacao(num1, num2, idResultado, tipoOperacao) {
    let resultado;
    num1 = parseInt(num1.value);
    num2 = parseInt(num2.value);
    if (tipoOperacao === "soma") {
        resultado = num1 + num2;
    }
    if (tipoOperacao === "sub") {
        resultado = num1 - num2;
    }
    document.querySelector(idResultado).innerText = resultado;
}

function mudaEstadoButao(isDisabled, idBotao) {
    const botao = document.querySelector(idBotao);
    botao.disabled = isDisabled;
}

function decideEstadoBotao(input1, input2, idBotao) {
    if (input1.value !== "" && input2.value !== "") {
        mudaEstadoButao(false, idBotao);
    } else {
        mudaEstadoButao(true, idBotao);
    }
}

function zerarResultadoSoma() {
    document.querySelector("#resultado-soma").innerText = "";
}

function zerarResultadoSub() {
    document.querySelector("#resultado-sub").innerText = "";
}

function decideEstadoSoma() {
    decideEstadoBotao(numero1, numero2, "#botao-somar");
}

function decideEstadoSub() {
    decideEstadoBotao(numero3, numero4, "#botao-sub");
}

document.querySelector("#botao-somar").onclick = executarSoma;
document.querySelector("#botao-sub").onclick = executarSub;

//soma bindings
numero1.onkeyup = decideEstadoSoma;
numero2.onkeyup = decideEstadoSoma;
numero1.onfocus = zerarResultadoSoma;
numero2.onfocus = zerarResultadoSoma;

//sub bindings
numero3.onkeyup = decideEstadoSub;
numero4.onkeyup = decideEstadoSub;
numero3.onfocus = zerarResultadoSub;
numero4.onfocus = zerarResultadoSub;