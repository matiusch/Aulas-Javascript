var valor      = prompt("Informe um valor inteiro: ");
var htmlRecebe = "";

if(valor>5 && valor<2000){

    for(i=2;i<=valor;i++){

        if(i % 2 == 0){

            var valorFinal = i * i ; 

            htmlRecebe += "<div class='row'>"
            htmlRecebe += "     <div class='col-md-6'>"+valorFinal+"</div>"
            htmlRecebe += "</div>"

        }
    }

}else{

    console.log("ERRO");

}

document.getElementById("numeroPar").innerHTML = htmlRecebe