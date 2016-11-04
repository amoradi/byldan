$(function() {
  // scroll page
  $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
  });

  // submit form
  $('form').submit(function(){
      $hiddenField = $(this).find("input[data-form-type=hidden]");

      if ($hiddenField.val().length != 0) {
          return false;
      } 
  });
});
