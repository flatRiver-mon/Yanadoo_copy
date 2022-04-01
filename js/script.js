$(document).ready(function(){



    // a 태그 클릭시 상단으로 이동하는 기능 블록
    $("a[href='#']").click(function(e){
        e.preventDefault();
    });

    // 메뉴 시작 =====================================================================================
    // 메뉴에 마우스 올렸을 시 2차 메뉴 표시함
    $(".menu-wrap .menu-box > li").mouseover(function(){
        $(".menu-wrap .menu-box > li > ul").addClass("active");
        $(".menu-wrap > .nav-back-box").addClass("active");
    })
    // 메뉴에서 마우스가 나갔을 시 2차 메뉴 표시안함
    $(".menu-wrap, .menu-wrap > .nav-back-box").mouseleave(function(){
        $(".menu-wrap > .nav-back-box").removeClass("active");
        $(".menu-wrap .menu-box > li > ul").removeClass("active");
    })
    // 메뉴 끝 =====================================================================================
    
    // 메인 슬라이더 시작 =====================================================================================
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
    // 메인 슬라이더 끝 =====================================================================================

    // 서브 슬라이더 시작 =====================================================================================
    // 서브 슬라이더 속성
    $(".sub-slider").slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [{
            breakpoint: 1080,
            settings: {
                slidesToShow:2,

            }
        }]
    })
    // 서브 슬라이더 끝 =====================================================================================

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

    // 리얼 영어 성장 '스토리' 슬라이더
    $(".story-slider").slick({
        slidesToShow:3,
        arrows:false,
        infinite:false,
        speed:200,
    })
    
    // 연속으로 화살표를 누를 시 생기는 버그 방지
    // 움직이는 동안 1로 만들어서 버튼의 연속 입력을 방지
    let story_slide_move = 0;

    $(".story-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        story_slide_move = 1;
        // 슬라이더를 드래그 했을 시 버튼의 반응 추가
        // 다음 슬라이드를 드래그 했다가 원위치로 돌아와 버리면 nextSlide 값을 조건에 넣지 않을 시
        // 현재 슬라이드의 위치를 참조하지 않은 상태로 버튼의 액티브가 변경됨
        // ㄴ 2번째 슬라이드에서 다음 버튼이 액티브가 되는 버그(해결됨)
        if($(".story-slider-wrap > .btn-box > .left-btn").hasClass("active") && nextSlide == 0){
            $(".story-slider-wrap > .btn-box > .left-btn").removeClass("active")
            $(".story-slider-wrap > .btn-box > .right-btn").addClass("active")
        }else if($(".story-slider-wrap > .btn-box > .right-btn").hasClass("active") && nextSlide == 1){
            $(".story-slider-wrap > .btn-box > .right-btn").removeClass("active")
            $(".story-slider-wrap > .btn-box > .left-btn").addClass("active")
        }
    });

    $(".story-slider").on('afterChange', function(event, slick, currentSlide){
        story_slide_move = 0;
    });


    $(".story-slider-wrap > .btn-box > .left-btn").click(function(){
        if($(this).hasClass("active") && story_slide_move == 0){
            $(".story-slider").slick("slickPrev")
            $(this).removeClass("active")
            $(".story-slider-wrap > .btn-box > .right-btn").addClass("active")
        }
    })
    $(".story-slider-wrap > .btn-box > .right-btn").click(function(){
        if($(this).hasClass("active") && story_slide_move == 0){
            $(".story-slider").slick("slickNext")
            $(this).removeClass("active")
            $(".story-slider-wrap > .btn-box > .left-btn").addClass("active")
        }
    })

    // 이벤트 슬라이더 속성
    $(".event-slider").slick({
        slidesToShow:2,
        arrows:false,
    })

    $(".category-slider").slick({
        vertical:true,
        verticalSwiping:true,
        autoplay:true,
        autoplaySpeed:4000,
        speed:1000,
        arrows:false,
    })

    $(".category-slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(".category-slider-wrap .category-dots > .category-dot").removeClass("active")
        $(".category-slider-wrap .category-dots > .category-dot").eq(nextSlide).addClass("active")
    });

    $(".category-slider-wrap .category-dots > .arrow-btn").click(function(){
        $(".category-slider").slick("slickNext")
    })

    $(".category-slider-wrap .category-dots > .category-dot").click(function(){
        let num = $(this).index()
        if(num > 4){
            $(".category-slider").slick("slickGoTo", num-1)
        }else{
            $(".category-slider").slick("slickGoTo", num)
        }
    })

    $(".mo-menu-box > .mo-menu-btn").click(function(){
        $(".mo-nav-wrap").addClass("active")
    })
    
    $(".mo-nav-wrap > .mo-background-box").click(function(){
        $(".mo-nav-wrap").removeClass("active")
    })
    
    $(".mo-nav-wrap > .mo-nav-box > ul > li").click(function(){
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        $(this).siblings().children("ul").removeClass("active")
        $(this).children("ul").addClass("active")
    })
})