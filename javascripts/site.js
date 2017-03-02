$(document).ready(function () {
  $('select').material_select();
  $('.button-collapse').sideNav();
});
jQuery(document).ready(function ($) {

  $(window).load(function () {
    setTimeout(function () {
      $('#loader-wrapper').fadeOut('slow', function () {
        $(this).remove();
      });
    }, 2000);
  });

});