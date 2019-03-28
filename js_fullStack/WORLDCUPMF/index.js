$(function(){
    setTimeout(()=>{
        // 改变css的值
        $('.load').css('display','none');
        $('.global').css('display','block');
    },1000);

    function getCurrentPage(){
        var current=0;
        var screenClassStr=$('.screen').attr('class');
        if(screenClassStr.indexOf('screen_')<0){
            current=0;
        }else if(screenClassStr.indexOf('screen_x90')>=0){
            current=1;
        }else if(screenClassStr.indexOf('screen_x180')>=0){
            current=2;
        }else if(screenClassStr.indexOf('screen_x270')>=0){
            current=3;
        }
        return current;
    }

    var screen=document.querySelector('.screen');
    var gesture=new AlloyFinger(screen,{
        swipe:function(evt){
            var direction=evt.direction;
            var current=getCurrentPage();
        }
    })
})