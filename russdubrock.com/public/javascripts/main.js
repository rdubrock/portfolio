
$( document ).ready(function() {
   

  $(window).scroll(function() {
    
    // console.log($(this).scrollHeight())
    // var currentHeight = this.scrollHeight - this.scrollTop
    if ($(this).scrollTop() > window.innerHeight/1.5) {
      $('#slider').slideDown();
      // $('#project-row').removeAttr('height');
    }
    if ($(this).scrollTop() < window.innerHeight/1.5) {
      $('#slider').slideUp();
      // $('#project-row').css('height: 40vh;')
    }

    if ($(this).scrollTop() > window.innerHeight) {
      $('.header h1').hide();
    }

    if ($(this).scrollTop() < window.innerHeight) {
      $('.header h1').show();
    }



  }); 
 $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(250); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(250); //.fadeOut(205)
        }
    ); 
})