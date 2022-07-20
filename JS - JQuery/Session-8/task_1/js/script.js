$(document).ready(function(){
    $(".nav-link").click(function(){
        $("button.active").removeClass("active")
        $(this).addClass("active")

        $(".tab-pane.show").removeClass("show")
        $($(this).attr("data-bs-target")).addClass("show")

        $(".tab-pane.active").removeClass("active")
        $($(this).attr("data-bs-target")).addClass("active")
    })
});
