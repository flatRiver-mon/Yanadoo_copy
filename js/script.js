$(document).ready(function(){



    // a 태그 클릭시 상단으로 이동하는 기능 블록
    $("a[href='#']").click(function(e){
        e.preventDefault();
    });

    // 1차 메뉴에 마우스 올렸을 시 2차 메뉴 표시함
    $(".menu-wrap .menu-box > li").mouseover(function(){
        $(".menu-wrap .menu-box > li > ul").addClass("active");
        $(".menu-wrap > .nav-back-box").addClass("active");
    })
    // 2차 메뉴에서 마우스가 나갔을 시 2차 메뉴 표시안함
    $(".menu-wrap > .nav-back-box").mouseleave(function(){
        $(".menu-wrap > .nav-back-box").removeClass("active");
        $(".menu-wrap .menu-box > li > ul").removeClass("active");
    })
    
    // 메인 슬라이더 속성
    $(".main-slider-wrap > .main-slider").slick({
        autoplay : true ,
        autoplaySpeed : 5000,
        arrows : false,
    })
    // 메인 슬라이더 비포 이벤트 - 움직이기 전 이벤트
    $(".main-slider-wrap > .main-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".main-slider-wrap > .dots > .dot").removeClass("active")
        $(".main-slider-wrap > .dots > .dot").eq(nextSlide).addClass("active")
    });

    // 메인 슬라이더 이전 버튼
    $(".main-slider-wrap > .btn-box > .btn-prev").click(function(){
        $(".main-slider-wrap > .main-slider").slick("slickPrev")
    })
    // 메인 슬라이더 다음 버튼
    $(".main-slider-wrap > .btn-box > .btn-next").click(function(){
        $(".main-slider-wrap > .main-slider").slick("slickNext")
    })

    // 서브 슬라이더 속성
    $(".sub-slider").slick({
        slidesToShow: 4,
        arrows : false,
    })

    // 어트랙트 슬라이더 속성
    $(".attract-slider").slick({
        arrows : false,
    })

    // 어트랙트 슬라이더 비포 이벤트 - 움직이기 전 이벤트
    $(".attract-slider-wrap .attract-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".attract-slider-wrap .dots > .dot").removeClass("active")
        $(".attract-slider-wrap .dots > .dot").eq(nextSlide).addClass("active")
    });

    // 큰 썸네일 3개 짜리 슬라이더
    $(".big-three-slider").slick({
        slidesToShow:3,
        slidesToScroll:3,
    })

    $(".big-three-slider .content").mouseover(function(){
        let windowWidth = $(window).width();
        $(this).find(".flight-box").addClass("active")
        $(this).addClass("active")
    })
    $(".big-three-slider .content .flight-box").mouseleave(function(){
        $(this).removeClass("active")
        $(this).parents(".content").removeClass("active")
    })

})