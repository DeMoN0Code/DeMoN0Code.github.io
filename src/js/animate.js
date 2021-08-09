$(document).ready(function(){
    $('.image-link').magnificPopup({type:'image'});     
    
    scrollAnim();
    
    navAnim();
});

function scrollAnim(){
    let options = {treshold: [0.5]};
    let observer = new IntersectionObserver(onEntry, options);
    let elems = $(".block-anim, .enum");
    elems.each(function(i, el){
        observer.observe(el);
    });
}

function onEntry(entry){
    entry.forEach(change => {
        if(change.isIntersecting){
            change.target.classList.add("block-anim-show");
            if(change.target.classList.contains("enum")){
                statisticAnim(1500, 40);
                change.target.classList.remove("enum");
            }
        }
    });
}

function navAnim(){
    let time = 0.4;
    for(let i = 1; i < 7; i++){
        $(`.menu ul li:nth-child(${i})`).delay(time * 1000).animate({
            marginTop: 0,
        }, 1000);
        
        time += 0.4;
    }
    $(".menu li").mouseenter(function(){
        $(this).animate({
            marginTop: -3,
            opacity: "1"
        }, 200);
    });
    $(".menu li").mouseleave(function(){
        $(this).animate({
            marginTop: 0,
            opacity: "0.7"
        }, 200);
    });
}

function statisticAnim(msec, iterationCount){
    $(".enum").each(function(){
        let num = $(this).data('num'),
            totalNum = 0,
            that = $(this),
            interv = setInterval(function(){
            if(totalNum <= num){
                that.html(totalNum.toFixed());
                console.log(totalNum);
            }
            else{
                clearInterval(interv);
            }
            totalNum += num / iterationCount;
        }, msec / iterationCount);
    });
}