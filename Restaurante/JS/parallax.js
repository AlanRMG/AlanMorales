$(document).ready(function(){
    $(window).scroll(function(){
        let ancho = $(window).width();
        if(ancho > 800){
            let scroll  = $(window).scrollTop();
            $("header .textos").css({
                transform: "translate(0px," + (scroll / 2) + "%)"
            });
            $("#acerca-de article").css({
                transform: "translate(0px, -" + (scroll / 4) + "%)"
            });
        }
    });
    $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 800){
            $("#acerca-de article").css({
                transform: "translate(0px, 0px)"
            });
        }
    });
});