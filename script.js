let tm = 20;
let ej ;

function aumentar(){
    tm += 5;
    ej = document.getElementById("tamaño");
    ej.style.fontSize = tm + "px";
}
function disminuir(){
    tm -= 5;
    ej = document.getElementById("tamaño");
    ej.style.fontSize = tm + "px";
}