$(function(){
    $("#menubtn").on("click",function(){
        if($("header > nav").hasClass("open") == true){
            $("header > nav").removeClass("open")
        } else{
            $("header > nav").addClass("open")

        }
        
    })
})

$(function(){
    $('#img').click(function(){
        $(this).toggleClass('min');
        $(this).toggleClass('max');
    });
});


$(function func() {
    var btn = document.getElementById('btn');
    var obj = document.getElementById('myarticle');
    var total_height = obj.scrollHeight; //文章总高度
    var show_height = 300; //定义原始显示高度
    if (total_height > show_height) {
        btn.style.display = 'block';
        btn.onclick = function () {
            obj.style.height = total_height + 'px';
            btn.style.display = 'none';
        };
    }
});
$(function func() {
    var btn = document.getElementById('btn2');
    var obj = document.getElementById('myarticle2');
    var total_height = obj.scrollHeight; //文章总高度
    var show_height = 300; //定义原始显示高度
    if (total_height > show_height) {
        btn2.style.display = 'block';
        btn2.onclick = function () {
            obj.style.height = total_height + 'px';
            btn.style.display = 'none';
        };
    }
});