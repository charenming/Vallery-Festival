$(function(){

    $(".gnb>li").mouseover(function(){
        $(this).children(".subMenu").slideDown();
    })
        $(".gnb>li").mouseleave(function(){
        $(this).children(".subMenu").slideUp();
    })

    //슬라이드

    let currentIndex = 0;
    setInterval(function(){
        if(currentIndex<2){
            currentIndex++;
        }else{
            currentIndex=0;
        };
        let position=currentIndex*(-1000)+"px";
        $(".slide").animate({left:position},400);
        
    },3000);


    //팝업
    $(".popupBtn").click(function(){
        $(".popup").show();
    });
    $(".close").click(function(){
        $(".popup").hide();
    });
});