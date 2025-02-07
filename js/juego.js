var turno = "X";
var celdas = document.querySelectorAll('.celda');
$(".celda").click(function () {
    if($(this).html() == '') {
        $(this).html(turno);
        comprobarGanador();
        turno = (turno == "X") ? "O" : "X";
    }
})


/*
celdas.forEach(function (celda) {
    celda.onclick = function () {
        if(this.innerHTML == '') {
            this.innerHTML =turno;
            comprobarGanador();
            turno = (turno == "X") ? "O" : "X";

        }
       
    }
}
);
*/
function comprobarGanador() {
    celdasArray=[celdas[0].innerHTML,celdas[1].innerHTML,celdas[2].innerHTML,
                celdas[3].innerHTML,celdas[4].innerHTML,celdas[5].innerHTML,
                celdas[6].innerHTML,celdas[7].innerHTML,celdas[8].innerHTML];
          
    var combinaciones = [
        [0,1,2],[3,4,5],[6,7,8],//horizontales
        [0,3,6],[1,4,7],[2,5,8],//verticales 
         [0,4,8],[2,4,6]];//diagonales

    for(var i=0;i<combinaciones.length;i++){
        var combinacion = combinaciones[i];
        var a = combinacion[0];
        var b = combinacion[1];
        var c = combinacion[2];
        if(celdasArray[a] != '' && celdasArray[a] == celdasArray[b] && celdasArray[a] == celdasArray[c]){
            alert('Ganó el '+celdasArray[a]);
          
        }   
    }
}