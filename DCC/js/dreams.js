$(document).ready(function(){

    //Efecto del menú de navegación
    $("header .menu a").each(function(index,element){
        $(this).css({
            top:"-200px"
        });
        $(this).animate({
            top:"0"
        },2000 + (index * 500));
    });
    
    //Efecto del header
    if($(window).width() > 800){
        $("header .contenedor .textos").css({
            opacity:"0",
            marginTop:"0"
        });
        $("header .contenedor .textos").animate({
            opacity:"1",
            marginTop:"-52px"
        },1500)
    }

    //Scroll aplicado a los elementos del menú de navegación
    let servicios = $(".main #serivicios-acerca-de").offset().top,
        acercaDe = $(".main #serivicios-acerca-de").offset().top,
        galeria = $(".main #galeria").offset().top,
        ubicacion = $(".main #ubicacion").offset().top;

        $("header .menu #btn-servicios").on("click",function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: servicios
            },500);
        });
        $("header .menu #btn-acerca-de").on("click",function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: acercaDe
            },500);
        });
        $("header .menu #btn-galeria").on("click",function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: galeria
            },500);
        });
        $("header .menu #btn-ubicacion").on("click",function(e){
            e.preventDefault();
            $("html, body").animate({
                scrollTop: ubicacion + 340
            },500);
        });

    //Revelar los elementos del sitio web por medio del scroll
        ScrollReveal().reveal(".servicios-acerca-de",{delay:200});
        ScrollReveal().reveal(".servicios-acerca-de .contenedor .posicionado",{delay:500});
        ScrollReveal().reveal(".servicios-acerca-de .contenedor .contenedor-acerca-de",{delay:500});
        ScrollReveal().reveal(".galeria",{delay:500});
        ScrollReveal().reveal(".galeria .titulo",{delay:300});
        ScrollReveal().reveal(".galeria .imagen",{delay:500});
        ScrollReveal().reveal(".ubicacion",{delay:500});
        ScrollReveal().reveal(".ubicacion .direccion, .horarios",{delay:500});
        ScrollReveal().reveal(".mapa",{delay:500});
        ScrollReveal().reveal(".mapa iframe",{delay:500});
        ScrollReveal().reveal("footer",{delay:500});
        ScrollReveal().reveal("footer .redes-sociales, .copyright",{delay:500});

    //Direccionamiento de las redes sociales
    let instagram = $("footer .redes-sociales .ins"),
        facebook = $("footer .redes-sociales .face");

        instagram.on("click",function(){
            $(this).attr({
                "href":"https://www.instagram.com/dreamscollisioncenter/?hl=es",
                "target":"_BLANK"
            });
        });
        facebook.on("click",function(){
            $(this).attr({
                "href":"https://www.facebook.com/pages/category/Automotive-Repair-Shop/Dreams-Collision-Center-102945058120449/",
                "target":"_BLANK"
            });
        });
});