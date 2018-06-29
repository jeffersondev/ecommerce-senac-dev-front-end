const numero1 = document.querySelector("#number1");
const numero2 = document.querySelector("#number2");

function executarSoma() {
    const resultado = parseInt(numero1.value) + parseInt(numero2.value);
    document.querySelector("#resultado").innerText = resultado
}

function habilitaSomarBtn() {
    const botao = document.querySelector("#botao-somar");
    botao.disabled = false;
}

function desabilitaSomarBtn() {
    const botao = document.querySelector("#botao-somar");
    botao.disabled = true;
}

function decideEstadoBotao() {
    if (numero1.value !== "" && numero2.value !== "") {
        habilitaSomarBtn();
    } else {
        desabilitaSomarBtn();
    }
}

function zerarResultado() {
    document.querySelector("#resultado").innerText = "";
}

document.querySelector("#botao-somar").onclick = executarSoma;
numero1.onkeyup = decideEstadoBotao;
numero2.onkeyup = decideEstadoBotao;

numero1.onfocus = zerarResultado;
numero2.onfocus = zerarResultado;