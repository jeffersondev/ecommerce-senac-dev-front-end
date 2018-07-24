function carregarDados() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const produtos = JSON.parse(this.responseText);
            preencherHtmlProdutos(produtos);
        }
    };
    xhttp.open("GET", "/dados/produtos.json", true);
    xhttp.send();
}

function preencherHtmlProdutos(produtos) {
    let listaProdutosHtml = "";
    
    for (let i = 0; i < produtos.length; i++) {
        const elemento = produtos[i];
        listaProdutosHtml += `
        <div id="card-${i}" class="card">
            <img class="card-img-top" src="${elemento.imagens[0]}"
                alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${elemento.titulo}</h5>
                <p class="card-text">${elemento.descricao}</p>
                <a href="/produto.html?produto=${i}" class="btn btn-primary">Detalhes</a>
            </div>
        </div>
        `;
    }

    document.querySelector("#lista-produtos").innerHTML = listaProdutosHtml;
}

carregarDados();