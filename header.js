$(document).ready(function () {
    $("#form-search").submit(function (e) {
        e.preventDefault();
        const search = $("#input-search").val().toLowerCase();
        const cards = $(".card");

        if (search === "") {
            cards.show();
        } else {
            cards.each(function () {
                const elemento = $(this);
                const textoElemento = elemento.text().toLowerCase();

                if (textoElemento.includes(search)) {
                    elemento.show();
                } else {
                    elemento.hide();
                }
            });
        }
    })
})

function carregarHeader() {
    $.ajax({
        url: "/header.html",
        method: "GET",
        success: function (results) {
            $("#header").html(results);
        }
    });
}

carregarHeader();