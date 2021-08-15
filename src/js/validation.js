$(document).ready(function(){
    $("#phone").mask("+7(999) 999-99-99");
    
    submitCheck();
});

function submitCheck(){
    let forms = $("form");
    
    forms.submit(function(event){
        let inputs = $(this).find(":input");
        let flag = false;
        
        inputs.each(function(i, el){
            if($(this).val() == "" && !$(this).hasClass("btn")){
                flag = true;
            }
        });
        
        if($(this).hasClass("request") && !flag){
            $.ajax({
                type: "POST",
                url: "php/mailRequest.php",
                data: $(this).serialize(),
            }).done(function(){
                alert("Заявка успешно отправлена!");
                $("form").trigger("reset");
            });
        }
        else if($(this).hasClass("fb") && !flag){
            $.ajax({
                type: "POST",
                url: "php/mailFb.php",
                data: $(this).serialize(),
            }).done(function(){
                alert("Отзыв успешно отправлен!");
                $("form").trigger("reset");
            });
        }
        else{
            event.preventDefault();
            alert("Заполните все поля!");
        }
        
        return false;
    });
}