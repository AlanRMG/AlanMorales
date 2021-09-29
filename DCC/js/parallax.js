$(document).ready(function(){
    $(window).scroll(function(){
        let ancho = $(window).width();
        if(ancho > 800){
            let scroll = $(window).scrollTop();
            $("header .contenedor .textos").css({
                transform: "translate(0px," + (scroll / 2) + "%)"
            });
            $("#serivicios-acerca-de .contenedor-acerca-de").css({
                transform: "translate(0px, -" + (scroll / 11) + "%)"
            })
        }
    });
    $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 800){
            $("#serivicios-acerca-de .contenedor-acerca-de").css({
                transform: "translate(0px, 0px)"
            });
        }
    });
});
