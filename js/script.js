$(document).ready(function(){

    $(".menu-wrap .menu-box > li").mouseover(function(){
        $(".menu-wrap .menu-box > li > ul").addClass("active");
        $(".menu-wrap > .nav-back-box").addClass("active");
    })

    $(".menu-wrap > .nav-back-box").mouseleave(function(){
        $(".menu-wrap > .nav-back-box").removeClass("active");
        $(".menu-wrap .menu-box > li > ul").removeClass("active");
    })
    
    $(".main-slider-wrap > .main-slider").slick({
        
    })
})