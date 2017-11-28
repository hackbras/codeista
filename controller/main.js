function onload() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://hackbras.github.io/codeista/model/pt-br.json", true);

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
        //Menu options
        document.getElementById("header__primary--nav-logo").innerHTML = ourData[1].PM_first;
        document.getElementById("header__primary--nav-search").innerHTML = ourData[1].PM_second;
        document.getElementById("header__primary--nav-mode").innerHTML = ourData[1].PM_third;
        document.getElementById("header__primary--nav-language").innerHTML = ourData[1].PM_fourth;
        document.getElementById("header__secondary--nav-about").innerHTML = ourData[1].SM_first;
        document.getElementById("header__secondary--nav-services").innerHTML = ourData[1].SM_second;
        document.getElementById("header__secondary--nav-courses").innerHTML = ourData[1].SM_third;
        document.getElementById("header__secondary--nav-blog").innerHTML = ourData[1].SM_fourth;
        document.getElementById("header__secondary--nav-faq").innerHTML = ourData[1].SM_fifth;
    };
    xhttp.send();
}
