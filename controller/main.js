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
        //document.getElementsByClassName("header__primary--nav")[0].children[0].innerHTML = ourData[0].header_primary-menu[0];
        // document.getElementsByClassName("header__primary--nav")[0].children[1].innerHTML = ourData[0].header_primary-menu[1];
        // document.getElementsByClassName("header__primary--nav")[0].children[2].innerHTML = ourData[0].header_primary-menu[2];
        // document.getElementsByClassName("header__primary--nav")[0].children[3].innerHTML = ourData[0].header_primary-menu[3];

        // document.getElementsByClassName("header__secondary--nav")[0].children[0].innerHTML = ourData[0].header_secondary-menu[0];
        // document.getElementsByClassName("header__secondary--nav")[0].children[1].innerHTML = ourData[0].header_secondary-menu[1];
        // document.getElementsByClassName("header__secondary--nav")[0].children[2].innerHTML = ourData[0].header_secondary-menu[2];
        // document.getElementsByClassName("header__secondary--nav")[0].children[3].innerHTML = ourData[0].header_secondary-menu[3];
    };
    xhttp.send();
}