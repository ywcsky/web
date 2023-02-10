$("#pop_1").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_2").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_3").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_4").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_5").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_6").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_7").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});

$("#pop_8").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});
$("#pop_9").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});
$("#pop_10").on("click",function(){
    $(this).parent().parent().append("<div class='video_modal_popup'><div class='video_modal_popup-closer'></div></div>"),
    a($(this));
});


function a(b){
    $(".video_modal_popup").addClass("reveal"),
    $(".video_modal_popup .video-wrapper").remove(),
    $(".video_modal_popup").append("<div class='video-wrapper'><iframe width='560' height='315' src='https://youtube.com/embed/" + b.data("video") + "?rel=0&playsinline=1&autoplay=1' allow='autoplay; encrypted-media' allowfullscreen></iframe></div>");
}

$(document).on("click",".video_modal_popup-closer",function() {
    $(".video_modal_popup").remove();
    $(".video_modal_popup").removeClass("reveal")
});
