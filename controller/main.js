function onload() {
    let languageSelected = change_language();
    const path = "https://hackbras.github.io/codeista/model/"+languageSelected+".json";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", path, true);

    xhttp.onload = function() {
        const ourData = JSON.parse(xhttp.responseText);
        // document.getElementById("header__secondary--nav-services").innerHTML = ourData[0].title;
        // document.getElementById("header__secondary--nav-courses").innerHTML = ourData[0].language;
        // document.getElementById("header__secondary--nav-blog").innerHTML = ourData[0].name_site;
        //Menu options
        //document.getElementById("header__primary--nav-logo").innerHTML = ourData[1].PM_first;
        //document.getElementById("header__primary--nav-search").innerHTML = ourData[1].PM_second;
        //document.getElementById("header__primary--nav-mode").innerHTML = ourData[1].PM_third;
        //document.getElementById("header__primary--nav-language").innerHTML = ourData[1].PM_fourth;
        document.getElementById("header__primary--nav-language-pt").innerHTML = ourData[1].PM_fourth_lang_pt;
        document.getElementById("header__primary--nav-language-en").innerHTML = ourData[1].PM_fifth_lang_en;
        document.getElementById("header__primary--nav-mode_daytime").innerHTML = ourData[1].PM_third_mode_daytime;
        document.getElementById("header__primary--nav-mode_nocturnal").innerHTML = ourData[1].PM_third_mode_nocturnal;        
        document.getElementById("header__secondary--nav-home").innerHTML = ourData[1].SM_first;
        document.getElementById("header__secondary--nav-about").innerHTML = ourData[1].SM_second;
        document.getElementById("header__secondary--nav-services").innerHTML = ourData[1].SM_third;
        document.getElementById("header__secondary--nav-courses").innerHTML = ourData[1].SM_fourth;
        document.getElementById("header__secondary--nav-blog").innerHTML = ourData[1].SM_fifth;
        document.getElementById("header__secondary--nav-portifolio").innerHTML = ourData[1].SM_sixth;
        document.getElementById("header__secondary--nav-faq").innerHTML = ourData[1].SM_seventh;
        document.getElementById("header__secondary--nav-to_share").innerHTML = ourData[1].SM_eighth;
        
        //Footer options
        document.getElementById("footer__section--two-lb_contact").innerHTML = ourData[2].title; 
        
        document.getElementById("footer__section--three-lb_dev").innerHTML = ourData[2].lb_dev;
        document.getElementById("footer__section--three-dev").innerHTML = ourData[2].developer;
        
        document.getElementById("footer__section--two-lb_phone").innerHTML = ourData[2].lb_phone;        
        document.getElementById("footer__section--two-phone").innerHTML = ourData[2].phone;

        document.getElementById("footer__section--two-lb_email").innerHTML = ourData[2].lb_email;
        document.getElementById("footer__section--two-email").innerHTML = ourData[2].email;
        
        document.getElementById("footer__section--two-lb_business_hours").innerHTML = ourData[2].lb_business_hours;     
        document.getElementById("footer__section--two-business_hours").innerHTML = ourData[2].business_hours;
 
        //content
        document.getElementById("content__first--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__second--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__third--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__aside").innerHTML = ourData[3].test_text;        
   
    };
    xhttp.send();
}

function change_language(){
    const languageSelected = getValueSelected("header__primary--nav-language");
    return languageSelected;
}

function change_mode (){  
    const scheema = ["daytime","nocturnal","color-blind"];
    const valueSelected = getValueSelected('header__primary--nav-mode');

    switch(valueSelected.toString()){
    case scheema[0]: 
        change_color_scheema("#4285f4","#000",false);
        break;
    case scheema[1]:
        change_color_scheema("#333","#fff",true); 
        break;
    case scheema[2]:           
        change_color_scheema("#333","#fff",true);  
        break;
    }
}

function change_color_scheema(color_background,color_text,val_bool){
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    
    const sections = document.getElementById('content__home');
    const aside = document.getElementById('content__aside'); 
    
    change_styles_master(header,footer,sections,aside,color_background,color_text,val_bool);
}

function change_styles_master(var_header,var_footer,var_sections,var_aside,background,font_color,val_bool){
    var_header.style.backgroundColor=background;
    var_header.style.color=font_color;

    var_footer.style.backgroundColor=background;
    var_footer.style.color=font_color;

    if(val_bool){
        var_sections.style.backgroundColor="#f3f3f3";
        var_aside.style.backgroundColor="#a0a0a0";
    }
    else {
        var_sections.style.backgroundColor="#fff";
        var_aside.style.backgroundColor="#f3f3f3";
    }    
}

function getValueSelected(className){
    const classChoice = document.getElementsByClassName(className);
    const index = classChoice[0].options.selectedIndex;
    const valueSelected = classChoice[0][index].value;
    return valueSelected;
}

function changeMenu(op){
    switch(op.toString()){
        case "home":
            changeDomMenu("content__home","content__about","content__services",
            "content__courses","content__blog","content__portifolio",
            "content__faq");
            break;
        case "about":
            changeDomMenu("content__about","content__home","content__services",
            "content__courses","content__blog","content__portifolio",
            "content__faq");

            break;
        case "services":
            changeDomMenu("content__services","content__home","content__about",
            "content__courses","content__blog","content__portifolio",
            "content__faq");
            break;
        case "courses":
            changeDomMenu("content__courses","content__home","content__about","content__services",
            "content__blog","content__portifolio",
            "content__faq");
            break;
        case "blog":
            changeDomMenu("content__blog","content__home","content__about","content__services",
            "content__courses","content__portifolio",
            "content__faq");
            break;
        case "portifolio":
            changeDomMenu("content__portifolio","content__home","content__about","content__services",
            "content__courses","content__blog","content__faq");
            break;
        case "faq":
            changeDomMenu("content__faq","content__home","content__about","content__services",
            "content__courses","content__blog","content__portifolio");
            break;
        
    }
}

function changeDomMenu(opActive,op1,op2,op3,op4,op5,op6){
    document.getElementById(opActive).style.display="block";
    document.getElementById(op1).style.display="none";
    document.getElementById(op2).style.display="none";
    document.getElementById(op3).style.display="none";
    document.getElementById(op4).style.display="none";
    document.getElementById(op5).style.display="none";
    document.getElementById(op6).style.display="none";
}
