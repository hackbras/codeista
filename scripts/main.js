function onload() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://hackbras.github.io/codeista/data/pt-br.json", true);

    xhttp.onload = function() {
        var ourData = JSON.parse(xhttp.responseText);
        document.getElementById("dev").innerHTML = ourData[0].developer;
        document.getElementById("celular").innerHTML = ourData[0].phone;
        document.getElementById("email").innerHTML = ourData[0].email;
        document.getElementById("atendimento").innerHTML = ourData[0].business_hours;
        document.getElementById("content__first-section").innerHTML = ourData[0].test_text;
        document.getElementById("content__second-section").innerHTML = ourData[0].test_text;
        document.getElementById("content__third-section").innerHTML = ourData[0].test_text;
        document.getElementById("content__aside").innerHTML = ourData[0].test_text;
    };
    xhttp.send();
}