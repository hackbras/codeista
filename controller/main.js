function onload(lang) {
    //let languageSelected = change_language();
    let languageSelected;

    if(lang == undefined)
        languageSelected = "pt-br";
    else
        languageSelected = lang;

    const path = "https://hackbras.github.io/codeista/model/"+languageSelected+".json";
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", path, true);

    xhttp.onload = function() {
        const ourData = JSON.parse(xhttp.responseText);
        //Menu options
        change_dom("header__primary--nav-title_site",ourData[0].name_site);
        change_dom("header__primary--nav-language-pt",ourData[1].PM_fourth_lang_pt);
        change_dom("header__primary--nav-language-en",ourData[1].PM_fifth_lang_en);
        change_dom("header__primary--nav-mode_daytime",ourData[1].PM_third_mode_daytime);
        change_dom("header__primary--nav-mode_nocturnal",ourData[1].PM_third_mode_nocturnal);
        change_dom("breadcrumb__search--buttom",ourData[1].PM_second_search);
        change_dom("breadcrumb__way",ourData[1].PM_sixth_breadcrumb);
        change_dom("header__secondary--nav-home",ourData[1].SM_first);
        change_dom("header__secondary--nav-about",ourData[1].SM_second);
        change_dom("header__secondary--nav-services",ourData[1].SM_third);
        change_dom("header__secondary--nav-courses",ourData[1].SM_fourth);
        change_dom("header__secondary--nav-blog",ourData[1].SM_fifth);
        change_dom("header__secondary--nav-portifolio",ourData[1].SM_sixth);
        change_dom("header__secondary--nav-faq",ourData[1].SM_seventh);
        change_dom("header__secondary--nav-to_share",ourData[1].SM_eighth);

        //Footer options
  
        change_dom("footer__section--two-lb_contact",ourData[2].title);

        change_dom("footer__section--three-lb_dev",ourData[2].lb_dev);
        change_dom("footer__section--three-dev",ourData[2].developer);

        change_dom("footer__section--two-lb_phone",ourData[2].lb_phone);
        change_dom("footer__section--two-phone",ourData[2].phone);

        change_dom("footer__section--two-lb_email",ourData[2].lb_email);
        change_dom("footer__section--two-email",ourData[2].email);

        change_dom("footer__section--two-lb_business_hours",ourData[2].lb_business_hours);
        change_dom("footer__section--two-business_hours",ourData[2].business_hours);

        //content 
        change_dom("content__home--subsection-title1",ourData[3].title);
        change_dom("content__home--subsection-text1",ourData[3].description);
        change_dom("content__home--subsection-link1",ourData[3].details);

        change_dom("content__home--subsection-title2",ourData[4].title);
        change_dom("content__home--subsection-text2",ourData[4].description);
        change_dom("content__home--subsection-link2",ourData[4].details);
        
        change_dom("content__home--subsection-title3",ourData[5].title);
        change_dom("content__home--subsection-text3",ourData[5].description);
        change_dom("content__home--subsection-link3",ourData[5].details);

        change_dom("content__home--subsection-title4",ourData[6].title);
        change_dom("content__home--subsection-text4",ourData[6].description);
        change_dom("content__home--subsection-link4",ourData[6].details);
        
        change_dom("content__aside",ourData[3].test_text);
    };
    xhttp.send();
}

function change_dom(id,data){
    document.getElementById(id).innerHTML = data;   
}

function change_language(){
    const languageSelected = getValueSelected("header__primary--nav-language");
    onload(languageSelected);
}

function change_mode (){  
    const scheema = ["daytime","nocturnal","color-blind"];
    const valueSelected = getValueSelected('header__primary--nav-mode_options');

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
