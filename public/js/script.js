$(document).ready(function() {
    $.ajax({
        method: 'GET',
        url: '/api/animals'
    }).then(function (response) {
        updateTbody(response);
    });
});

function updateTbody(rows) {
    var tbody = $("#table-body");
    tbody.empty();

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var tr = $("<tr>");

        var name = $("<td>");
        name.text(row.name);

        var noise = $("<td>");
        noise.text(row.noise);

        tr.append(name);
        tr.append(noise);
        tbody.append(tr);
    }
}

$("#animal-form").on('submit', function(e) {
    e.preventDefault();

    var name = $("#name").val();
    var noise = $("#noise").val();

    $("#name").val('');
    $("#noise").val('');

    $.ajax({
        type: 'POST',
        url: '/api/animals',
        data: JSON.stringify({ name: name, noise: noise }),
        contentType: 'application/json',
        dataType: 'json'
    }).then(function(response) {
        updateTbody(response);
    });
});
