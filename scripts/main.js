var teste = '{"name":"john","age":"31","city":"New York"}';
var myObj = JSON.parse(teste);
document.getElementById("demo").innerHTML = myObj.name;

function onload() {
    alert('teste');
    // var xhttp = new XMLHttpRequest();
    // xhttp.open("GET", "pt-br.json", true);

    // xhttp.onload = function() {
    //     var ourData = JSON.parse(xhttp.responseText);
    //     document.getElementById("lang").innerHTML = ourData[0];
    // };

    // xhttp.send();
}

// var ourRequest = new XMLHttpRequest();

// ourRequest.open('GET', 'pt-br.json');
// ourRequest.onload = function() {
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData[0]);
// };
// ourRequest.send();

(function(){
    var app = angular.module('app',[]);
   

    var componentes = [{
        name: 'Cabeçalho',
        description: "Texto descritivo do site"
    },
    {
        name: 'Página inicial',
        description: 'Página inicial'        
    },
    {
        name: 'Rodapé',
        description: 'Rodapé do site',
        phone: '(31)9 9562-6585',
        email: 'hackbras@outlook.com',
        address: 'Rua: Saturno, 346, Los Angeles - ibirité - MG'
    }];

})();