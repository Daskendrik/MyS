
//скрипт определения метонахождения
$(function () {  
    $('.menu a').each(function () { 
        var location = window.location.href; 
        var link = this.href;  
        if(location == link) { 
            $(this).addClass('mainmenu_a');
            $(this).addClass('col');
            $(this).removeClass('mainmenu_n');
            $(this).removeClass('col-lg-6');
        }
        });
    });