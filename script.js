$(document).ready(function(){
    //sub-menu slide down
    // $('.header-bottom').mouseenter(function(){
    //     $('.sub-menu').stop().slideDown(300);
    //     $('.nav-bg').stop().slideDown(300);
    // })
    // $('.header-bottom').mouseleave(function(){
    //     $('.sub-menu').stop().slideUp(300);
    //     $('.nav-bg').stop().slideUp(300);
    // })
    $('.header-bottom').mouseenter(function(){
        $(this).find('.sub-menu').stop().slideDown(300);
        $(this).find('.nav-bg').stop().slideDown(300);
    })
    $('.header-bottom').mouseleave(function(){
        $(this).find('.sub-menu').stop().slideUp(300);
        $(this).find('.nav-bg').stop().slideUp(300);
    })

    //header-scroll
    $(window).on('scroll', scrollFunc)
    function scrollFunc(){
        var docScrollTop=$(window).scrollTop();

        if(docScrollTop > 153){
            $('header').css({'display':'none'});
            $('.header-scroll').css({'display':'block'});
            $('.nav-bg').css({'display':'none'})
        }else if(docScrollTop <= 153){
            $('header').css({'display':'block'});
            $('.header-scroll').css({'display':'none'})
        }
    }


     //trigger
    $('.main-menu>li').click(function(){
        $(this).find('.trigger').toggleClass('active');
        $(this).find('.sub-menu').toggleClass('active');
    })

    $('.menu-btn').click(function(){
        $('.mobile-gnb').animate({'left':'0'})
    })
    $('.menu-close-btn').click(function(){
        $('.mobile-gnb').animate({'left':'-100%'})
    })


    //main-slide & slide-title
    var mainSlideIdx = 0;
    var mainSlideLiLen = $('.slide-box a').length;

    setInterval(function(){
        if(mainSlideIdx < 5){
            mainSlideIdx++;
        }else{
            mainSlideIdx = 0;
        }

        var mainSlidePosition = mainSlideIdx * (-100) + '%';
        $('.slide-box').animate({left:mainSlidePosition},1000)

        var mainSlideBox = $('.slide-title ul li').eq(mainSlideIdx).find('.box');
        mainSlideBox.animate({width:'100%'},5000,function(){
            $(this).animate({width:'0'},0);
        })
        
        if (mainSlideIdx >= mainSlideLiLen - 1){
            mainSlideIdx = -1;
            return false
        }

    },5000)


    //season-menu click
    $('.season-drink-title span').eq(0).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.season-product').eq(0).fadeIn(300).siblings().fadeOut(300);
    })

    $('.season-drink-title span').eq(1).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.season-product').eq(1).fadeIn(300).siblings().fadeOut(300);
    })

    $('.season-drink-title span').eq(2).click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.season-product').eq(2).fadeIn(300).siblings().fadeOut(300);
    })


    //best-menu slide
    // var bestMenuSlideIdx = 0;

    // setInterval(function(){
    //     if(bestMenuSlideIdx < 1){
    //         bestMenuSlideIdx++;
    //     }else{
    //         bestMenuSlideIdx = 0;
    //     }

    //     $('.best').eq(bestMenuSlideIdx).fadeIn().siblings().fadeOut();

    // },3000)

    // console.log(bestMenuSlideIdx)



    //ad-banner slide
    $('.discount a').eq(0).siblings().css({'top':'-380px'});

    var adBannerSlideIdx = 0;

    setInterval(function(){
        if(adBannerSlideIdx < 2){
            adBannerSlideIdx++;
        }else{
            adBannerSlideIdx = 0;
        }

        $('.discount a').eq(adBannerSlideIdx).siblings().animate({'top':'-380px'},500);
        $('.discount a').eq(adBannerSlideIdx).animate({'top':'0'},500)
        //배너 호버하면 애니메이션 멈추게하는거 고민

        console.log(adBannerSlideIdx)
    },3000)

    
    //tea-recipe menu click
    $('.tea-menu ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active')
        var teaMenuIdx = $(this).index();
        $('.tea-con').eq(teaMenuIdx).show().siblings().hide();
    })
    

    //Smooth Scrolling
    $('.footer-left a, .go-up-btn a').click(function (e) {
        $.scrollTo(this.hash || 0, 500)
    })


   

})