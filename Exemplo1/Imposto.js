function calculoImposto(){

    var valorSalario = document.getElementById("valorSalario").value;
    var Imposto      = 0;

    if(valorSalario < 1000){

        Imposto = valorSalario;

    }else{
        if(valorSalario >=1000 && valorSalario <2500 ){
            Imposto      = (valorSalario*0.125);

        }else{
            if(valorSalario>=2500 && valorSalario<5000){
               Imposto     = (valorSalario*0.25);

            }else{
                if(valorSalario >=5000){

                    Imposto = 1300;

                }
            }
        }
    }
    

    return Imposto
}

function calculoSalario(){
    valorSalario = document.getElementById("valorSalario").value;
    valorImposto = calculoImposto();

    var valorFinal = valorSalario - valorImposto;

    document.getElementById("salario").innerHTML = "Valor do imposto R$: "+valorImposto.toFixed(2)+"<br> Valor do salario R$: "+ valorFinal.toFixed(2);

}

