/************************************************************************/
// Obtener la referencia del elemento body
var body = document.getElementsByTagName("body")[0];

// Crea un elemento <table> y un elemento <tbody>
var tabla = document.createElement("table");


var tblBody = document.createElement("tbody");

// Crea las celdas
for (var i = 0; i < 5; i++) {
    // Crea las hileras de la tabla
    var row = document.createElement("tr");

    for (var j = 0; j < 5; j++) {
        // Crea un elemento <td> y un nodo de texto, haz que el nodo de
        // texto sea el contenido de <td>, ubica el elemento <td> al final
        // de la hilera de la tabla
        var column = document.createElement("td");
        var textocolumn = document.createTextNode(i + ',' + j);
        column.appendChild(textocolumn);
        row.appendChild(column);
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(row);
}

// posiciona el <tbody> debajo del elemento <table>
tabla.appendChild(tblBody);
//se posiciona la tabla debajo del elemento div
document.querySelector('.box-table-js').appendChild(tabla);

/************************************************************************/

var board = document.querySelector('.board-js');
var button = document.querySelector('.button-js');

button.addEventListener('click', reset);
board.addEventListener('click', addXO);


var centinel = true;
var array = [];

function addXO(event) {
    if (centinel) {
        event.target.textContent = 'X';
        event.target.style.color = '#ffc107';
        centinel = false;
    } else {
        event.target.textContent = 'O';
        centinel = true;
    }
};

function reset() {
    window.location.reload();
};