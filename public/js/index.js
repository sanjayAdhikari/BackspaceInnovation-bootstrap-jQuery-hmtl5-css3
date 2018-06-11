/*********************************
 *              SERVICES
 *********************************/

$(function () {
    // animate on scroll
    new WOW().init();
});

/*********************************
 *              WORK
 *********************************/

 $(function(){
     $("#work").magnificPopup({
         delegate: 'a', //child from selector by clicking it popup will open
         type: 'image',
         gallery: {
             enabled:true
         }
     });
 });

 $(function(){
    $("#team-members").owlCarousel({
        loop:true,
        autoplay: true,
        items: 3,
        smartSpeed: 700
        });
    });