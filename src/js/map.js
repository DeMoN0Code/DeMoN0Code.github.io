YaMapsShown = false;
$(document).ready(function (){

    $(window).scroll(function() {
        if (!YaMapsShown){
            if($(window).scrollTop() + $(window).height() > $(document).height() - 400) {      
                showYaMaps();
                YaMapsShown = true;
            }
        }
    });
 
});

function showYaMaps(){
    var script   = document.createElement("script");
     script.type  = "text/javascript";
     script.src   = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8de20769ba2b2a7df2dd6314ce78efa3bc56c3ac3a54ac48febbeaa24e03dca2&amp";
     $(".map").append(script);
}