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
    const footerHtml = `
        <a class="link-interno" href="${links[0].href}">${links[0].nomeExibicao}</a>
        <a class="link-interno" href="${links[1].href}">${links[1].nomeExibicao}</a>
        <a class="link-interno" href="${links[2].href}">${links[2].nomeExibicao}</a>
        <a class="link-interno" href="${links[3].href}">${links[3].nomeExibicao}</a>
    `;

    document.querySelector("#footer").innerHTML = footerHtml;
}

carregarLinks();