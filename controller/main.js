function onload() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://hackbras.github.io/codeista/model/pt-br.json", true);

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
        
        document.getElementById("header__secondary--nav-about").innerHTML = ourData[1].SM_first;
        document.getElementById("header__secondary--nav-services").innerHTML = ourData[1].SM_second;
        document.getElementById("header__secondary--nav-courses").innerHTML = ourData[1].SM_third;
        document.getElementById("header__secondary--nav-blog").innerHTML = ourData[1].SM_fourth;
        document.getElementById("header__secondary--nav-faq").innerHTML = ourData[1].SM_fifth;
        
        //Footer options
        document.getElementById("footer__section--one-lb_contact").innerHTML = ourData[2].title; 
        
        document.getElementById("footer__section--two-lb_dev").innerHTML = ourData[2].lb_dev;
        document.getElementById("footer__section--two-dev").innerHTML = ourData[2].developer;
        
        document.getElementById("footer__section--one-lb_phone").innerHTML = ourData[2].lb_phone;        
        document.getElementById("footer__section--one-phone").innerHTML = ourData[2].phone;

        document.getElementById("footer__section--one-lb_email").innerHTML = ourData[2].lb_email;
        document.getElementById("footer__section--one-email").innerHTML = ourData[2].email;
        
        document.getElementById("footer__section--one-lb_business_hours").innerHTML = ourData[2].lb_business_hours;     
        document.getElementById("footer__section--one-business_hours").innerHTML = ourData[2].business_hours;
 
        //content
        document.getElementById("content__first--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__second--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__third--section").innerHTML = ourData[3].test_text;
        document.getElementById("content__aside").innerHTML = ourData[3].test_text;        
   
    };
    xhttp.send();
}

const scheema = ["daytime","nocturnal","color-blind"];

function change_mode (){
    const mode = document.getElementsByClassName('header__primary--nav-mode');
    const index = mode[0].options.selectedIndex;
    const valueSelected = mode[0][index].value;

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
    
    const sections = document.getElementById('content__section');
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

//function change_others_styles