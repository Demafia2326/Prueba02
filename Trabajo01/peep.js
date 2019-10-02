var personas = [];
function anadir() {
    var nombre = document.getElementById('name').value;
    var num = +document.getElementById('num').value;
    var contacto = {
        name: nombre,
        num: num
    };
    personas.push(contacto);
}
function mostrar() {
    for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
        var p = personas_1[_i];
        console.log(p);
    }
}
