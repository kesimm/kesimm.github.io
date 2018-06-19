(function($){
    $(function(){
  
      $('.sidenav').sidenav();
      $('.parallax').parallax();
      $('.slider').slider();
  
    }); // end of document ready
  })(jQuery); // end of jQuery name space
  

  ('#send').click(function() {
    $('#form').attr('action',
                   'mailto:kenzie.simmons27@gmail.com?subject=' +
                   $('#name').val() + $('#email').val() + '&body=' + $('#tb2').val());
    $('#form').submit();
});