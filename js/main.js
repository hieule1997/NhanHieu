$(document).ready(function () {





    $(".show__menu").click(function(){
        $(".admin-menu").toggleClass("admin_show_menu");
    })
    
    $(".close__menu").click(function(){
        $(".admin-menu").removeClass("admin_show_menu");
    })
    $(".name-person").click(function () {
        $(".admin-list").toggleClass("show");
    })


    if ($(this).scrollTop() > 100) {
        $(".backTop").addClass("displayBlock");

    }
    if ($(this).scrollTop() > 0) {
        $(".menu_container").addClass("show-scroll");
        $(".main-page").addClass("scrolled");
        $("#_blogs_").addClass("scroll");

    }
    $(document).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".backTop").addClass("displayBlock");

        } else {
            $(".backTop").removeClass("displayBlock");
        }
        if ($(this).scrollTop() > 0) {
            $(".menu_container").addClass("show-scroll");
            $(".banner_container").addClass("scroll_after");
            $(".main-page").addClass("scrolled");

        } else {
            $(".menu_container").removeClass("show-scroll");
            $(".banner_container").removeClass("scroll_after");
            $(".main-page").removeClass("scrolled");
        }
    });
    /*---------- scroll to content when click to menu ---------*/
    $(".backTop").on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    $('#open_sub').click(function () {
        $('._menu_main').toggleClass("active");
        $('._sign_up').toggleClass("show");

    });
    $('#open_sub2').click(function () {
        $('._menu_main').toggleClass("active");
        $('._sign_up').toggleClass("show");
    });
    $('.closing').click(function () {
        $('._menu_main').removeClass("active");
        $('._sign_up').removeClass("show");
    });



    /*---call aos.js---*/
    AOS.init({
        once: true,
        offset: 0,
        easing: 'ease-out-back',
        duration: "1000",


    });

});
