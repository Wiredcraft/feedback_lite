$(document).ready(function () {
  $('.feedback-header').toggle(
    function () {
	    $('.feedback-link').show();
    },
    function () {
	    $('.feedback-link').hide();
    }
  );
});