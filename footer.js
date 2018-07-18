function carregarLinks() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const links = JSON.parse(this.responseText);
            preencherHtmlFooter(links);
        }
    };
    xhttp.open("GET", "/dados/links.json", true);
    xhttp.send();
}

function preencherHtmlFooter(links) {
    let footerHtml = "";
    for (let i = 0; i < links.length; i++) {
        const elemento = links[i];
        footerHtml += `<a class="link-interno" href="${elemento.href}">${elemento.nomeExibicao}</a>`;
    }
    document.querySelector("#footer").innerHTML = footerHtml;
}

carregarLinks();