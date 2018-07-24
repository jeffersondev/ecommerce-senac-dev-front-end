$(document).ready(function () {
    $("#form-search").submit(function (e) {
        e.preventDefault();
        
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