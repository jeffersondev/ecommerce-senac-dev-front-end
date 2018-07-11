let produtos = {};

function carregarDados() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            produtos = JSON.parse(this.responseText);
            preencheHTML();
        }
    };
    xhttp.open("GET", "/dados/produtos.json", true);
    xhttp.send();
}

function preencheHTML() {
    document.querySelector("#titulo").innerText = produtos.titulo;
    document.querySelector("#descricao").innerText = produtos.descricao;
}

carregarDados();
