$(function(){
    $("#menubtn").on("click",function(){
        if($("header > nav").hasClass("open") == true){
            $("header > nav").removeClass("open")
        } else{
            $("header > nav").addClass("open")

        }
        
    })
})