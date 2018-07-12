let produtos = [];
let produtoSelecionado = {};
let parametros = window.location.search;

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
    let parametroProduto = 0;
    if (parametros.includes("produto=")) {
        parametroProduto = parametros.substring(parametros.indexOf("produto=") + 8);
        parametroProduto = parametroProduto >= produtos.length ? 0 : parametroProduto;
    }

    produtoSelecionado = produtos[parametroProduto];
    document.querySelector("#titulo").innerText = produtoSelecionado.titulo;
    document.querySelector("#descricao").innerText = produtoSelecionado.descricao;
    document.querySelector("#preco").innerText = `R$ ${produtoSelecionado.preco}`;
    document.querySelector("#imagem-ativa").src = produtoSelecionado.imagens[0];
    document.querySelector("#imagem-0").classList.add("selecionada");
    document.querySelector("#imagem-0").src = produtoSelecionado.imagens[0];
    document.querySelector("#imagem-1").src = produtoSelecionado.imagens[1];
    document.querySelector("#imagem-2").src = produtoSelecionado.imagens[2];
    document.querySelector("#imagem-3").src = produtoSelecionado.imagens[3];
}

function selecionarImagem(indice) {
    document.querySelector("#imagem-0").classList.remove("selecionada");
    document.querySelector("#imagem-1").classList.remove("selecionada");
    document.querySelector("#imagem-2").classList.remove("selecionada");
    document.querySelector("#imagem-3").classList.remove("selecionada");

    document.querySelector("#imagem-" + indice).classList.add("selecionada");
    document.querySelector("#imagem-ativa").src = produtoSelecionado.imagens[indice];
}

carregarDados();
