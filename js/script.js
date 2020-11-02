$(document).ready(function(){
    $(window).scroll(function () {
        var top = $('.area_intro').offset().top - 62
        if ($(this).scrollTop() > top) {
            $(".nav").attr("style", "background-color: #031E36")
        }
        else {
            $(".nav").attr("style", "background-color: transparent ")
        }
    });
});