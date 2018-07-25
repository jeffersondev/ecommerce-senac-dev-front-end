$(document).ready(function () {
    $("#form-search").submit(function (e) {
        e.preventDefault();
        const search = $("#input-search").val();
        const cards = $(".card");
        cards.each(function () {
            const elemento = $(this);
            if (!elemento.text().includes(search)) {
                elemento.fadeOut();
            }
        });
    })
})

window.onload

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