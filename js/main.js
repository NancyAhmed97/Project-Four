$(function() {
    
    var scroll = $(document).scrollTop();
    var navHeight =$(".navbar").outerHeight();
    
    $(window).scroll(function () {
    
        var scrolled=$(document).scrollTop();
        if(scrolled > navHeight)
        {
            $(".navbar").addClass("animate");
            //$(".navbar").toggleClass("scroll",$(this).scrollTop() >200)
            $(".nav-link").addClass("black");
            $(".navbar-brand img").attr("src","imges/logo-dark.png")

        }else
        {
            $(".navbar").removeClass("animate");
            $(".nav-link").removeClass("black");
            $(".navbar-brand img").attr("src","imges/logo.png")

    
        }
        if(scrolled > scroll)
        {
            $(".navbar").removeClass("stiky");
        }else
        {
            $(".navbar").addClass("stiky");
    
    
        }
        scroll = $(document).scrollTop();
    })
    
    
    });
    
        
    $(".swipUp").click(function () {
    
        $("html , body").animate ({scrollTop :"0"} ,2000)
        
        })
        $(window).scroll(function(){
           var scroTop=$(window).scrollTop();
        });