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
    document.querySelector("#preco").innerText = `R$ ${produtos.preco}`;
    document.querySelector("#imagem-ativa").src = produtos.imagens[0];
    document.querySelector("#imagem-1").src = produtos.imagens[0];
    document.querySelector("#imagem-2").src = produtos.imagens[1];
    document.querySelector("#imagem-3").src = produtos.imagens[2];
    document.querySelector("#imagem-4").src = produtos.imagens[3];
}

carregarDados();
