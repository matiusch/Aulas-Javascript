function Texto(){
    
    var N   = document.getElementById("Texto").value;
    var sep = [];
    var i   = 0;
    var pos = N.indexOf(" ");

    while(pos >= 0){ // enquanto a posição possuir um espaço em branco então função while será executada 

            var nome = N.slice(0, pos); // variavel nome recebe o texto contido em "N", apartir  da posição 0 até o espaço em branco
            console.log(nome);//Imprime nome
            sep[i]   = nome;//Armazena valores de nome 
            i++//conta mais uma posição para ser armazenada
            N        = N.slice(pos+1);//variavel N recebe novo valor onde N inicia após o espaço contando o demais texto, caso existir
            pos      = N.indexOf(" ");// pos recebe espaço em branco

    }   

    
    sep[i] = N;// armazena os valores da variavel Primeira
    console.log(sep[i])
    
}






