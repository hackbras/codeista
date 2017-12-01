function onload() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://hackbras.github.io/codeista/model/pt-br.json", true);

    xhttp.onload = function() {
        const ourData = JSON.parse(xhttp.responseText);
        // document.getElementById("header__secondary--nav-services").innerHTML = ourData[0].title;
        // document.getElementById("header__secondary--nav-courses").innerHTML = ourData[0].language;
        // document.getElementById("header__secondary--nav-blog").innerHTML = ourData[0].name_site;
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
        
        //content
        document.getElementById("content__first--section").innerHTML = ourData[2].test_text;
        document.getElementById("content__second--section").innerHTML = ourData[2].test_text;
        document.getElementById("content__third--section").innerHTML = ourData[2].test_text;
        document.getElementById("content__aside").innerHTML = ourData[2].test_text;
        
         //Footer options
        document.getElementById("footer__section--one-lb_contact").innerHTML = ourData[3].title; 
        
        document.getElementById("footer__section--two-lb_dev").innerHTML = ourData[3].lb_dev;
        document.getElementById("footer__section--two-dev").innerHTML = ourData[3].developer;
        
        document.getElementById("footer__section--one-lb_phone").innerHTML = ourData[3].lb_phone;        
        document.getElementById("footer__section--one-phone").innerHTML = ourData[3].phone;

        document.getElementById("footer__section--one-lb_email").innerHTML = ourData[3].lb_email;
        document.getElementById("footer__section--one-email").innerHTML = ourData[3].email;
        
        document.getElementById("footer__section--one-lb_business_hours").innerHTML = ourData[3].lb_business_hours;     
        document.getElementById("footer__section--one-business_hours").innerHTML = ourData[3].business_hours;
        
    };
    xhttp.send();
}
