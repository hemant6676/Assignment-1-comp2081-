// Custom JavaScript

$('.carousel').carousel
({
    interval: 2000
})



    $('#carousel-cars').on('slide.bs.carousel', function(){
        //remove class that zooms caption
        $('.carousel-caption').removeClass('zoomit');
    })
    $('#carousel-cars').on('slid.bs.carousel', function(){
        //add class that zooms caption
        $('.carousel-caption').addClass('zoomit');
    })

    $('#carousel-cars').off('keydown.bs.carousel');