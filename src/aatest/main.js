import jQuery  from "../jquery.js";
window.$ = jQuery
// jQuery(document)
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


