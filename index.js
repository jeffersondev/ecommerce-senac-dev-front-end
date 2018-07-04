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

function decideEstadoBotao() {
    if (numero1.value !== "" && numero2.value !== "") {
        mudaEstadoButao(false, "#botao-somar");
    } else {
        mudaEstadoButao(true, "#botao-somar");
    }
}

function zerarResultado() {
    document.querySelector("#resultado-soma").innerText = "";
}

zerarResultado()

document.querySelector("#botao-somar").onclick = executarSoma;
document.querySelector("#botao-sub").onclick = executarSub;

//soma bindings
numero1.onkeyup = decideEstadoBotao;
numero2.onkeyup = decideEstadoBotao;
numero1.onfocus = zerarResultado;
numero2.onfocus = zerarResultado;

//sub bindings