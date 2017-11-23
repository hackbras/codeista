var teste = '{"name":"john","age":"31","city":"New York"}';
var myObj = JSON.parse(teste);
document.getElementById("demo").innerHTML = myObj.name;


// var ourRequest = new XMLHttpRequest();

// ourRequest.open('GET', 'pt-br.json');
// ourRequest.onload = function() {
//     var ourData = JSON.parse(ourRequest.responseText);
//     console.log(ourData[0]);
// };
// ourRequest.send();