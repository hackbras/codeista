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
        
        //change_dom("content__aside",ourData[0].default_text);

        /* Pages of Site */

        change_dom("content__home--subsection-title1",ourData[4].title);
        change_dom("content__home--subsection-text1",ourData[4].description);
        change_dom("content__home--subsection-link1",ourData[4].details);

        change_dom("content__home--subsection-title2",ourData[5].title);
        change_dom("content__home--subsection-text2",ourData[5].description);
        change_dom("content__home--subsection-link2",ourData[5].details);
        
        change_dom("content__home--subsection-title3",ourData[6].title);
        change_dom("content__home--subsection-text3",ourData[6].description);
        change_dom("content__home--subsection-link3",ourData[6].details);

        change_dom("content__home--subsection-title4",ourData[7].title);
        change_dom("content__home--subsection-text4",ourData[7].description);
        change_dom("content__home--subsection-link4",ourData[7].details);

        change_dom("content__about--subsection-title",ourData[3].about_title);
        change_dom("content__about--subsection-sub_title",ourData[3].about_sub_title);
        change_dom("content__about--subsection-text",ourData[3].about_text);

        change_dom("content__services--subsection-title",ourData[3].services_title);
        change_dom("content__services--subsection-sub_title",ourData[3].services_sub_title);
        change_dom("content__services--subsection-text",ourData[3].services_text);

        change_dom("content__courses--subsection-title",ourData[3].courses_title);
        change_dom("content__courses--subsection-sub_title",ourData[3].courses_sub_title);
        change_dom("content__courses--subsection-text",ourData[3].courses_text);

        change_dom("content__blog--subsection-title",ourData[3].blog_title);
        change_dom("content__blog--subsection-sub_title",ourData[3].blog_sub_title);
        change_dom("content__blog--subsection-text",ourData[3].blog_text);

        // change_dom("content__portifolio--subsection-title",ourData[3].portifolio_title);
        // change_dom("content__portifolio--subsection-sub_title",ourData[3].portifolio_sub_title);
        // change_dom("content__portifolio--subsection-text",ourData[3].portifolio_text);

        change_dom("content__faq--subsection-title",ourData[3].faq_title);
        change_dom("content__faq--subsection-sub_title",ourData[3].faq_sub_title);
        change_dom("content__faq--subsection-text",ourData[3].faq_text);

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
    const valueSelected = getValueSelected('header__primary--nav-mode');

    switch(valueSelected.toString()){
    case scheema[0]: 
        change_color_scheema("#ffad6a","#000",false);
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
    const header_phone = document.getElementById('header__primary--nav');
    const footer = document.getElementById('footer');
    const images = document.getElementById('header__primary--nav-item-logo');
    
    const sections = document.getElementById('content__home');
    const aside = document.getElementById('content__aside'); 
    
    change_styles_master(header,header_phone,footer,sections,aside,color_background,color_text,val_bool);
}

function change_styles_master(var_header,var_header_phone,var_footer,var_sections,var_aside,background,font_color,val_bool){
    var_header.style.backgroundColor=background;
    var_header.style.color=font_color;

    var_header_phone.style.backgroundColor=background;
    var_header_phone.style.color=font_color;

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

function toInverterImages(id,percent){
    
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
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "block";
            document.getElementById('content__pages').style.width = "74.97%";
            break;
        case "about":
            changeDomMenu("content__about","content__home","content__services",
            "content__courses","content__blog","content__portifolio",
            "content__faq");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "block";
            document.getElementById('content__pages').style.width = "74.97%";
            break;
        case "services":
            changeDomMenu("content__services","content__home","content__about",
            "content__courses","content__blog","content__portifolio",
            "content__faq");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "none";
            document.getElementById('content__pages').style.width = "100%"
            break;
        case "courses":
            changeDomMenu("content__courses","content__home","content__about","content__services",
            "content__blog","content__portifolio",
            "content__faq");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "block";
            document.getElementById('content__pages').style.width = "74.97%";
            break;
        case "blog":
            changeDomMenu("content__blog","content__home","content__about","content__services",
            "content__courses","content__portifolio",
            "content__faq");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "block";
            document.getElementById('content__pages').style.width = "74.97%";
            break;
        case "portifolio":
            changeDomMenu("content__portifolio","content__home","content__about","content__services",
            "content__courses","content__blog","content__faq");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "none";
            document.getElementById('content__pages').style.width = "100%";
            break;
        case "faq":
            changeDomMenu("content__faq","content__home","content__about","content__services",
            "content__courses","content__blog","content__portifolio");
            toggleMenuMobile();
            document.getElementById('content__aside').style.display = "block";
            document.getElementById('content__pages').style.width = "74.97%";
            break;
        
    }
}

function toggleMenuMobile(){
    let state = document.getElementById('header__secondary--nav').style.display.toString();
    let screen = window.screen.width

    if (state == "none"){
        document.getElementById('header__secondary--nav').style.display = "block"
        document.getElementById("header__primary--nav-item-menu_phone_icon").src = "view/style/images/close_icon.png"
        document.getElementById("header__primary--nav-item-menu_phone_icon").height = "48"
    }else if (screen <= 480){
        document.getElementById('header__secondary--nav').style.display = "none"
        document.getElementById("header__primary--nav-item-menu_phone_icon").src = "view/style/images/menu.png"
        document.getElementById("header__primary--nav-item-menu_phone_icon").width = "48"
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

function resizeImage(id){
    let width = document.getElementById(id).style.width;
    
    if(width == undefined || width =="")
        width = 200;
    else
        width = width.replace("px","");

    if(parseInt(width) < 225)
       document.getElementById(id).style.width= "225px"
    else
       document.getElementById(id).style.width= "200px"
}