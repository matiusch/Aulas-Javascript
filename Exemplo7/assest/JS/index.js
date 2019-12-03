function BuscaInfo(){
    var buscaInfo = document.getElementById("InputHead").value;

    var URL = "https://jsonplaceholder.typicode.com/users/"+buscaInfo;

    fetch(URL, { method:"GET" })
       .then(response => response.json() )
       .then(json => estruturaHTML(json));
}

function estruturaHTML(json){

    var name     = document.getElementById("info1").value = json.name;
    var username = document.getElementById("info2").value = json.username;
    var email    = document.getElementById("info3").value = json.email;
    var street   = document.getElementById("info4").value = json.address.street;
    var suite    = document.getElementById("info5").value =json.address.suite;
    var city     = document.getElementById("info6").value =json.address.city;
    var zipcode  = document.getElementById("info7").value =json.address.zipcode;
   



    
}

