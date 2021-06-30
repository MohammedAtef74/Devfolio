var typed = new Typed('.element', {
    strings: [ 'Designer  Developer' , 'Freelancer, Photographer'],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backDelay: 400,
    startDelay: 100,
    backSpeed: 50,
    smartBackspace: true,
});


let homeOffset = $("#home").offset().top ;
let aboutOffset = $("#about").offset().top ;
let serviceOffset = $("#service").offset().top ;
let workOffset = $("#work").offset().top ;
let blogOffset = $("#blog").offset().top ;
let contactOffset = $("#contact").offset().top;


$("#homeLink").click(function () 
{

    $("html,body").animate({scrollTop:homeOffset} , 2000);
});


$("#aboutLink").click(function () 
{

    $("html,body").animate({scrollTop:aboutOffset} , 2000);
});


$("#serviceLink").click(function () 
{

    $("html,body").animate({scrollTop:serviceOffset} , 2000);
});


$("#workLink").click(function () 
{

    $("html,body").animate({scrollTop:workOffset} , 2000);
});


$("#blogLink").click(function () 
{

    $("html,body").animate({scrollTop:blogOffset} , 2000);
});


$("#contactLink").click(function () 
{

    $("html,body").animate({scrollTop:contactOffset} , 2000);
});
