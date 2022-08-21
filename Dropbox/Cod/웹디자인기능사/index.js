window.onload  = function(){
    console.log("연결확인");
    $(".subMenu").hide(); /* 서브메뉴 숨기고 시작 */
    
    $(".mainMenu > li").mouseover(function () {
        $(this).find(".subMenu").stop().slideDown(150);
    }).mouseout(function() {
        $(this).find(".subMenu").stop().slideUp(150);
    })
 

    start();

  // **** 탭 메뉴 공지사항, 갤러리 ****
  $(function(){
    $('.tabMenu > li > a').click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
        return false;
    });
    });
  }
    /*
    $(".mainmenu li").mouseover(function () {
        $('.gnb2').stop().slideDown(300);
    }).mouseout(function() {
        $('.gnb2').stop().slideUp(300);
    })

    $(".mainmenu li").mouseover(function () {
        $(this).find('.gnb2').stop().slideDown();
    }).mouseout(function() {
        $(this).find('.gnb2').stop().slideUp();
    })
    */

var imgs = 2;
var now = 0;

function start(){
  $(".slider>a").eq(0).siblings().animate({width:"-1200px"});

  setInterval(function(){
    now = now==imgs ? 0 : now+=1;
    $(".slider>a").eq(now-1).animate({width:"-1200px"});
    $(".slider>a").eq(now).animate({width:"1200px"});
  },3000);
}