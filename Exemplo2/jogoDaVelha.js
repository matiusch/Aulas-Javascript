var vezDoJogador = 1;

function jogoDaVelha(idDiv){
    
    var textoInterno = document.getElementById(idDiv).innerHTML;
    if (textoInterno == ""){
        if (vezDoJogador == 1){
            document.getElementById(idDiv).innerHTML="x";
            vezDoJogador = 2;
        }
        else{
            document.getElementById(idDiv).innerHTML="o";
            vezDoJogador = 1;
        }
    }

}
