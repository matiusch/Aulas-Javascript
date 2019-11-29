var num=0;

function list(){
     num++

     var descricao = document.getElementById("InputTarefa").value;
     var recebe    ="";

     recebe+= " <tr><th scope='col-md-2' ><input type='checkbox' id='checked"+num+"' onclick='verifica("+num+")'></th><th id='tarefa"+num+"'  scope='col-md-8'>"+descricao+"</th><th>"+num+"</th></tr>"

     document.getElementById("lista").innerHTML += recebe;
    
     verificarCheckBox();

}

function verifica(id){
    
    var clicado = document.getElementById("checked"+id).checked;
    var texto   = document.getElementById("tarefa"+id);

    console.log(id+"   "+clicado);
    if (clicado){
        texto.style="text-decoration:line-through;";
    }
    else{
        texto.style="text-decoration:none;";
    }
}

